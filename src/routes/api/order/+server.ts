import { error, json, type RequestEvent } from '@sveltejs/kit';
import PocketBase from 'pocketbase';
import { env } from '$env/dynamic/private';
import { env as penv } from '$env/dynamic/public';
import { getUserIp, normalizeRecords } from '@/utils';
import logger from '@/logger';

async function verifyRecaptcha({
	token,
	secret,
	remoteip
}: {
	token: string;
	secret: string;
	remoteip?: string;
}): Promise<RecaptchaResponse> {
	const url = 'https://www.google.com/recaptcha/api/siteverify';
	const params = new URLSearchParams({
		secret,
		response: token
	});
	
	if (remoteip) {
		params.append('remoteip', remoteip);
	}
	
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: params.toString()
	});
	const data = await response.json();
	return data;
}

async function validateRecaptcha({
	token,
	remoteip,
	secret
}: {
	token: string;
	secret: string;
	remoteip?: string;
}) {
	if (!secret) {
		logger.warn({ message: 'Recaptcha secret key is not configured' });
		return;
	}
	const recaptchaResponse = await verifyRecaptcha({ token, secret, remoteip });
	if (!recaptchaResponse.success) {
		logger.warn({
			message: 'Recaptcha verification failed',
			recaptchaResponse
		});
		error(400, {
			message: 'Recaptcha verification failed'
		});
	}
	return recaptchaResponse;
}

export async function POST({ request }: RequestEvent) {
	const body = await request.json();
	const userIp = getUserIp(request);

	const pb = new PocketBase(penv.PUBLIC_POCKETBASE_URL);
	await pb
		.collection('_superusers')
		.authWithPassword(env.POCKETBASE_ADMIN_EMAIL!, env.POCKETBASE_ADMIN_PASSWORD!);

	const configRecords = await pb
		.collection<ConfigRecord>('config')
		.getFullList(1, { sort: '-created' });

	const config = normalizeRecords(configRecords);

	if (config.use_captcha) {
		const { recaptcha_token } = body;
		await validateRecaptcha({
			token: recaptcha_token,
			secret: config.captcha_secret_key,
			remoteip: userIp
		});
	}

	const products = body.products as { id: string; quantity: number }[];

	// Fetch product details to calculate total
	const productDetails = await Promise.all(
		products.map((p) => pb.collection('products').getOne(p.id))
	);

	const totalAmount = products.reduce((sum, p, index) => {
		const productPrice = productDetails[index].price || 0;
		return sum + productPrice * p.quantity;
	}, 0);

	const orderData: any = {
		products: products.map((p) => ({
			product: p.id,
			quantity: p.quantity
		})),
		total_amount: totalAmount,
		customer_name: body.fullName,
		customer_email: body.email || '',
		customer_phone: body.phone,
		customer_address: body.address || '',
		wilaya: body.wilaya,
		city: body.city,
		status: 'pending'
	};
	
	const orderRecord = await pb.collection('orders').create(orderData);

	return json({ success: true, orderId: orderRecord.id });
}
