import { env } from '$env/dynamic/public';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

const CDN_URL = 'https://cdn.storesdz.com';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const POCKETBASEURL = env.PUBLIC_POCKETBASE_URL;

export const WEBSITE_NAME = 'Sidali Store';

export const WEBSITE_URL = 'https://ss.storesdz.com';

export function formatCurrency(amount: number | undefined | null) {
	if (!amount) {
		return '';
	}

	return amount.toLocaleString('dz-FR', {
		style: 'currency',
		currency: 'DZD',
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
		currencyDisplay: 'symbol',
		numberingSystem: 'latn'
	});
}

export function getImageUrl({
	collectionName,
	recordId,
	imageFileName
}: {
	collectionName: string;
	recordId: string;
	imageFileName: string;
}) {
	return `${POCKETBASEURL}/api/files/${collectionName}/${recordId}/${imageFileName}`;
}

export function getThumbnailUrl({
	collectionName,
	recordId,
	imageFileName,
	width,
	height,
	crop = 'center'
}: {
	collectionName: string;
	recordId: string;
	imageFileName: string;
	width: number;
	height: number;
	crop?: 'center' | 'top' | 'bottom' | 'left' | 'right';
}) {
	return `${POCKETBASEURL}/api/files/${collectionName}/${recordId}/${imageFileName}?thumb=${width}x${height}&thumb_crop=${crop}`;
}

export function getProductImageUrl({
	productId,
	imageFileName,
	thumb = false
}: {
	productId: string;
	imageFileName: string;
	thumb?: boolean;
}) {
	if (thumb) {
		return getThumbnailUrl({
			collectionName: 'products',
			recordId: productId,
			imageFileName,
			width: 300,
			height: 300,
			crop: 'center'
		});
	} else {
		return getImageUrl({
			collectionName: 'products',
			recordId: productId,
			imageFileName
		});
	}
}

/**
 * Normalize an array of PocketBase-style records into a key -> value map.
 *
 * Example input:
 * [
 *   { id: "93047kjldfs", key: "facebook_pixel_id", value: "test", ... },
 *   { id: "sdfkjbsf3487i2", key: "google_analytics_id", value: "test2", ... }
 * ]
 *
 * Result:
 * { facebook_pixel_id: "test", google_analytics_id: "test2" }
 */
export function normalizeRecords<T extends { key: string; value: string }>(
	records: T[]
): StoreSettings & Record<string, string> {
	return records.reduce(
		(acc, record) => {
			acc[record.key] = record.value;
			return acc;
		},
		{} as StoreSettings & Record<string, string>
	);
}

export function getUserIp(request: Request): string | undefined {
	// Cloudflare-specific headers
	const cfConnectingIp = request.headers.get('cf-connecting-ip');
	if (cfConnectingIp) {
		return cfConnectingIp;
	}

	// Fallback to other common headers
	const xForwardedFor = request.headers.get('x-forwarded-for');
	if (xForwardedFor) {
		return xForwardedFor.split(',')[0].trim();
	}

	const xRealIp = request.headers.get('x-real-ip');
	if (xRealIp) {
		return xRealIp;
	}

	return undefined;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChild<T> = T extends { child?: any } ? Omit<T, 'child'> : T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChildren<T> = T extends { children?: any } ? Omit<T, 'children'> : T;
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & { ref?: U | null };
