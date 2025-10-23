import sharp from 'sharp';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	const formData = await request.formData();
	const imageFile = formData.get('image');

	if (!imageFile) {
		return json({ error: 'No image file provided.' }, { status: 400 });
	}

	const originalFilename = imageFile.name;
	const fileExtension = originalFilename.split('.').pop();
	const baseFilename = originalFilename.replace(`.${fileExtension}`, '');

	const webpFilename = `${baseFilename}.webp`;
	const thumbFilename = `${baseFilename}_thumb.webp`;

	try {
		const imageBuffer = Buffer.from(await imageFile.arrayBuffer());

		// Process and upload WebP image
		const webpBuffer = await sharp(imageBuffer).webp({ quality: 80 }).toBuffer();
		await s3.send(
			new PutObjectCommand({
				Bucket: BUCKET_NAME,
				Key: `products/${webpFilename}`,
				Body: webpBuffer,
				ContentType: 'image/webp'
			})
		);

		// Process and upload thumbnail
		const thumbBuffer = await sharp(imageBuffer).resize(300, 300).webp({ quality: 80 }).toBuffer();
		await s3.send(
			new PutObjectCommand({
				Bucket: BUCKET_NAME,
				Key: `products/${thumbFilename}`,
				Body: thumbBuffer,
				ContentType: 'image/webp'
			})
		);

		const imageUrl = `https://${BUCKET_NAME}.s3.YOUR_S3_REGION.amazonaws.com/products/${webpFilename}`;
		const thumbnailUrl = `https://${BUCKET_NAME}.s3.YOUR_S3_REGION.amazonaws.com/products/${thumbFilename}`;

		return json({ imageUrl, thumbnailUrl });
	} catch (error) {
		console.error('Image processing error:', error);
		return json({ error: 'Failed to process and upload image.' }, { status: 500 });
	}
}
