import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, locals }) => {
	try {
		const order = await locals.pb.collection('orders').getOne(params.id);
		
		// Parse products JSON if it's a string
		let products = [];
		try {
			products = typeof order.products === 'string' ? JSON.parse(order.products) : order.products;
		} catch (e) {
			console.error('Error parsing products JSON', e);
		}

		// Fetch product details
		const productDetails = await Promise.all(
			products.map(async (p: any) => {
				try {
					const product = await locals.pb.collection('products').getOne(p.id);
					return {
						...p,
						product
					};
				} catch (e) {
					return {
						...p,
						product: null
					};
				}
			})
		);

		return {
			order,
			products: productDetails
		};
	} catch (error) {
		console.error('Error loading order:', error);
		return {
			order: null,
			products: []
		};
	}
};
