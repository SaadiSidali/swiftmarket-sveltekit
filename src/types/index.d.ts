interface Product {
	id: string;
	collectionId: string;
	collectionName: string;
	created: string; // ISO timestamp
	updated: string; // ISO timestamp
	name: string;
	slug: string;
	description: string;
	details: string; // likely HTML string
	gallery: Media[];
	in_stock: boolean;
	is_active: boolean;
	price: number;
	sale_price: number;
	sku: number | string; // depending on how consistent sku is
	categories: string[];
	related_products: string[];
}

interface ProductsResponse {
	items: Product[];
	page: number;
	perPage: number;
	totalItems: number;
	totalPages: number;
}

interface Media {
	id: string;
	created: string; // ISO timestamp
	updated: string; // ISO timestamp
	name: string;
	original_name: string;
	mime_type: string;
	size: number;
	url: string;
}

interface Category {
	id?: string;
	collectionId?: string;
	collectionName?: string;
	created?: string; // ISO timestamp
	updated?: string; // ISO timestamp
	name?: string;
	slug?: string;
	parent?: string; // relation record id
	expand?: {
		parent?: Category;
	};
}

interface ConfigRecord {
	id: string;
	collectionId: string;
	collectionName: string;
	created: string; // ISO timestamp
	updated: string; // ISO timestamp
	key: string;
	value: string;
}

interface StoreSettings {
	use_captcha: boolean;
	captcha_site_key: string;
	captcha_secret_key: string;
	facebook_pixel: string;
	google_analytics: string;
	tiktok_pixel: string;
	facebook_url: string;
	instagram_url: string;
	location: string;
	email: string;
	phone1: string;
	phone2: string;
	address: string;
}

interface RecaptchaResponse {
	success: boolean;
	challenge_ts: string; // timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
	hostname: string; // the hostname of the site where the reCAPTCHA was solved
	'error-codes': string[]; // optional
}
