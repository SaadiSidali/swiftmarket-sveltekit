import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import PocketBase from 'pocketbase';
import type { CartItem } from '$lib/stores';
import { POCKETBASEURL } from '$lib/utils';

export const POST = (async ({ request }) => {
	const products: CartItem[] = await request.json();

	const pb = new PocketBase(POCKETBASEURL);

	const line_items = await Promise.all(
		products.map(async (product: CartItem) => {
			const item = await pb.collection('products').getOne(product.id);

			const finalPrice: number = item.sale_price === 0 ? item.price : item.sale_price;
			const roundedNumber = Number(Math.round(parseFloat(finalPrice * 100 + 'e' + 2)) + 'e-' + 2);

			return {
				price_data: {
					currency: 'usd',
					product_data: {
						name: item.name,
						images: [`${POCKETBASEURL}/api/files/products/${item.id}/${item.images[0]}`]
					},
					unit_amount: roundedNumber
				},
				quantity: product.quantity
			};
		})
	);

	return json({
		success: true,
		line_items
	});
}) satisfies RequestHandler;
