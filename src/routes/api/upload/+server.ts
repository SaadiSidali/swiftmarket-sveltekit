import sharp from 'sharp';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { json, type RequestEvent } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { env as penv } from '$env/dynamic/public';
import PocketBase from 'pocketbase';
import { slugify } from '../../(dashboard)/utils';

const s3 = new S3Client({
	region: 'auto',
	endpoint: env.S3_ENDPOINT!,
	credentials: {
		accessKeyId: env.S3_ACCESS_KEY_ID!,
		secretAccessKey: env.S3_SECRET_ACCESS_KEY!
	}
});

const BUCKET_NAME = env.S3_BUCKET!;

// Authentication helpers
async function verifyJWT(jwt: string): Promise<boolean> {
	console.log(env);
	try {
		const response = await fetch(
			`${penv.PUBLIC_POCKETBASE_URL}/api/collections/users/auth-refresh`,
			{
				method: 'POST',
				headers: {
					Authorization: `Bearer ${jwt}`
				}
			}
		);

		return response.ok;
	} catch (error) {
		console.log('JWT verification error:', error);
		return false;
	}
}

function extractJWT(request: Request): string | null {
	return request.headers.get('Authorization')?.replace('Bearer ', '') ?? null;
}

// Image processing helpers
interface ProcessedImages {
	webpBuffer: Buffer;
	thumbBuffer: Buffer;
}

async function processImage(imageBuffer: Buffer): Promise<ProcessedImages> {
	const metadata = await sharp(imageBuffer).metadata();
	const maxWidth = 1080;
	const maxHeight = 1080;

	let resizeOptions = {};
	if (metadata.width && metadata.height) {
		if (metadata.width > maxWidth || metadata.height > maxHeight) {
			resizeOptions = {
				width: maxWidth,
				height: maxHeight,
				fit: 'inside' as const,
				withoutEnlargement: true
			};
		}
	}

	const webpBuffer = await sharp(imageBuffer)
		.resize(resizeOptions)
		.webp({ quality: 75 })
		.toBuffer();
	const thumbBuffer = await sharp(imageBuffer)
		.resize({ width: 300, height: 300, fit: 'contain' })
		.webp({ quality: 75 })
		.toBuffer();
	return { webpBuffer, thumbBuffer };
}

// S3 upload helpers
async function uploadToS3(key: string, buffer: Buffer): Promise<void> {
	await s3.send(
		new PutObjectCommand({
			Bucket: BUCKET_NAME,
			Key: key,
			Body: buffer,
			ContentType: 'image/webp'
		})
	);
}

// PocketBase helpers
async function createMediaRecord({
	webpFilename,
	imageUrl,
	thumbnailUrl,
	size,
	originalFilename,
	name
}: {
	webpFilename: string;
	imageUrl: string;
	thumbnailUrl: string;
	size: number;
	originalFilename: string;
	name: string;
}) {
	const pb = new PocketBase(penv.PUBLIC_POCKETBASE_URL);
	await pb
		.collection('_superusers')
		.authWithPassword(env.POCKETBASE_ADMIN_EMAIL!, env.POCKETBASE_ADMIN_PASSWORD!);

	return await pb.collection('media').create({
		filename: webpFilename,
		url: imageUrl,
		thumbnail_url: thumbnailUrl,
		mime_type: 'image/webp',
		size,
		original_name: originalFilename,
		name
	});
}

// File name helpers
function generateFilenames(originalFilename: string) {
	const fileExtension = originalFilename.split('.').pop();
	const baseFilename = originalFilename.replace(`.${fileExtension}`, '');
	return {
		webpFilename: `${baseFilename}.webp`,
		thumbFilename: `${baseFilename}_thumb.webp`
	};
}

export async function POST({ request }: RequestEvent) {
	// Authentication
	const jwt = extractJWT(request);
	if (!jwt || !(await verifyJWT(jwt))) {
		return json({ error: 'Unauthorized' }, { status: 401 });
	}

	// Validate image file
	const formData = await request.formData();
	const imageFile = formData.get('image') as File | null;
	const name = formData.get('name') as string | null;
	if (!imageFile) {
		return json({ error: 'No image file provided.' }, { status: 400 });
	}

	const { webpFilename, thumbFilename } = generateFilenames(imageFile.name);

	try {
		// Process image
		const imageBuffer = Buffer.from(await imageFile.arrayBuffer());
		const { webpBuffer, thumbBuffer } = await processImage(imageBuffer);

		// Generate random string for unique path
		const randomString = Math.random().toString(36).substring(2, 15);

		// Upload to S3
		await uploadToS3(`products/${randomString}_${slugify(webpFilename)}`, webpBuffer);
		await uploadToS3(`products/${randomString}_${slugify(thumbFilename)}`, thumbBuffer);

		// Generate URLs
		const imageUrl = `${env.R2_CDN_URL}/products/${randomString}_${slugify(webpFilename)}`;
		const thumbnailUrl = `${env.R2_CDN_URL}/products/${randomString}_${slugify(thumbFilename)}`;

		// Create media record
		const mediaRecord = await createMediaRecord({
			webpFilename,
			imageUrl,
			thumbnailUrl,
			size: webpBuffer.length,
			originalFilename: imageFile.name,
			name: name || imageFile.name
		});

		return json(mediaRecord);
	} catch (error) {
		console.error('Image processing error:', error);
		return json({ error: 'Failed to process and upload image.' }, { status: 500 });
	}
}
