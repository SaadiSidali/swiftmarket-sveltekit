import { redirect } from '@sveltejs/kit';

export const load = async ({ locals, route, url }) => {
	const search = url.searchParams.get('q');
	if (!search) {
		return redirect(307, `/`);
	}
	const pb = locals.pb;
	const productRecords = await pb.collection<Product>('products').getList(1, 10, {
		filter: `name~"${search}" || description~"${search}"`,
		sort: '-created'
	});

	return {
		products: productRecords,
		searchQuery: search
	};
};
