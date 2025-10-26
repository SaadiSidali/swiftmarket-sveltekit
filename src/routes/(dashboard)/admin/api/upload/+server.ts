import sharp from 'sharp';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { json, type RequestEvent } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import PocketBase from 'pocketbase';

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
	const pb = new PocketBase(env.POCKETBASE_URL);
	try {
		pb.authStore.save(jwt, null);
		await pb.collection('users').authRefresh();
		return true;
	} catch {
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
	const webpBuffer = await sharp(imageBuffer).webp({ quality: 80 }).toBuffer();
	const thumbBuffer = await sharp(imageBuffer).resize(300, 300).webp({ quality: 80 }).toBuffer();
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
async function createMediaRecord(webpFilename: string, imageUrl: string, thumbnailUrl: string) {
	const pb = new PocketBase(env.POCKETBASE_URL);
	await pb
		.collection('_superusers')
		.authWithPassword(env.POCKETBASE_ADMIN_EMAIL!, env.POCKETBASE_ADMIN_PASSWORD!);

	return await pb.collection('media').create({
		filename: webpFilename,
		url: imageUrl,
		thumbnail_url: thumbnailUrl,
		type: 'image',
		mime_type: 'image/webp'
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
	if (!imageFile) {
		return json({ error: 'No image file provided.' }, { status: 400 });
	}

	const { webpFilename, thumbFilename } = generateFilenames(imageFile.name);

	try {
		// Process image
		const imageBuffer = Buffer.from(await imageFile.arrayBuffer());
		const { webpBuffer, thumbBuffer } = await processImage(imageBuffer);

		// Upload to S3
		await uploadToS3(`products/${webpFilename}`, webpBuffer);
		await uploadToS3(`products/${thumbFilename}`, thumbBuffer);

		// Generate URLs
		const imageUrl = `${env.R2_PUBLIC_URL}/products/${webpFilename}`;
		const thumbnailUrl = `${env.R2_PUBLIC_URL}/products/${thumbFilename}`;

		// Create media record
		const mediaRecord = await createMediaRecord(webpFilename, imageUrl, thumbnailUrl);

		return json({ imageUrl, thumbnailUrl, mediaId: mediaRecord.id });
	} catch (error) {
		console.error('Image processing error:', error);
		return json({ error: 'Failed to process and upload image.' }, { status: 500 });
	}
}
