import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ params, locals }) => {
	try {
		const productRecord = await locals.pb
			.collection('products')
			.getFirstListItem(`slug="${params.slug}"`, {
				expand: 'related_products'
			});
		console.log(`Loading product with slug: ${params.slug}`);

		return structuredClone(productRecord);
	} catch (e) {
		console.log(`Couldnt load page /shop/${params.slug}`);
		error(500, {
			message: 'Couldnt load this page'
		});
	}
}) satisfies PageServerLoad;
