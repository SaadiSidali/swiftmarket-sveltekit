import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import logger from '@/logger';

export const load = (async ({ locals }) => {
	try {
		const [showcaseRecords, carouselsRecords] = await Promise.all([
			locals.pb.collection('showcase').getFullList({
				expand: 'products',
				sort: 'created'
			}),
			locals.pb.collection('carousels').getFullList({
				sort: 'created'
			})
		]);

		return {
			showcase: structuredClone(showcaseRecords),
			carousels: structuredClone(carouselsRecords)
		};
	} catch (e) {
		logger.error(e);

		logger.info(`Couldnt load page /`);
		error(500, {
			message: 'Couldnt load this page'
		});
	}
}) satisfies PageServerLoad;
