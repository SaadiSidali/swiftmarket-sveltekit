import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ params, locals }) => {
	try {
		const productRecord = await locals.pb
			.collection<Product>('products')
			.getFirstListItem(`slug="${params.slug}"`, {
				expand: 'related_products'
			});
		console.log(`Loading product with slug: ${params.slug}`);

		return structuredClone(productRecord);
	} catch (e) {
		console.log(`Couldnt load page /shop/${params.slug}`);
		error(404, {
			message: 'Couldnt find this page'
		});
	}
}) satisfies PageServerLoad;
