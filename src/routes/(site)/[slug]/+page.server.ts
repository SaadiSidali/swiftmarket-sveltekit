import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import logger from '@/logger';

export const load = (async ({ params, locals }) => {
	try {
		const productRecord = await locals.pb
			.collection<
				Product & {
					expand: {
						related_products: (Product & { expand: { gallery: Media[] } })[];
						gallery: Media[];
						image: Media;
					};
				}
			>('products')
			.getFirstListItem(`slug="${params.slug}"`, {
				expand: 'related_products,gallery,image,related_products.gallery'
			});

		logger.info(`Loading product with slug: ${params.slug}`);

		return productRecord;
	} catch (e) {
		logger.info(`Couldnt load page /shop/${params.slug}`);
		error(404, {
			message: 'Couldnt find this page'
		});
	}
}) satisfies PageServerLoad;
