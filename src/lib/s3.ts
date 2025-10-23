import { S3Client, PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { env } from '$env/dynamic/private';
const PUT_OBJECT_EXPIRATION = 60; // 60 seconds
const GET_OBJECT_EXPIRATION = 60; // 60 seconds

export type SignedURLResponse = Promise<
	{ failure?: undefined; success: { url: string } } | { failure: string; success?: undefined }
>;

const DEFAULT_BUCKET_NAME = env.S3_BUCKET!;

const s3Client = new S3Client({
	region: env.S3_REGION!,
	credentials: {
		accessKeyId: env.S3_ACCESS_KEY_ID!,
		secretAccessKey: env.S3_SECRET_ACCESS_KEY!
	}
});

export async function getPutObjectSignedURL({
	userId,
	key
}: {
	userId: string;
	key: string;
}): SignedURLResponse {
	const putObjectCommand = new PutObjectCommand({
		Bucket: env.AWS_BUCKET_NAME!,
		Key: `uploads/${userId}/${key}`,
		Metadata: {
			userId
		}
	});

	const url = await getSignedUrl(s3Client, putObjectCommand, {
		expiresIn: PUT_OBJECT_EXPIRATION
	});

	return { success: { url } };
}
