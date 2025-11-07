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
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			secret,
			response: token,
			...(remoteip ? { remoteip } : {})
		})
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

	const orderData: any = {
		products: products.map((p) => ({
			product: p.id,
			quantity: p.quantity
		})),
		total_amount: body.total_amount,
		customer_name: body.customer_name,
		customer_email: body.customer_email,
		customer_address: body.customer_address,
		customer_phone: body.customer_phone,
		status: 'pending'
	};
	const orderRecord = await pb.collection('orders').create(orderData);

	return json({ config: config });
}
