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
	image: string;
	gallery: string[];
	in_stock: boolean;
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
