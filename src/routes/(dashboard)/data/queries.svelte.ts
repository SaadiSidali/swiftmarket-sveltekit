import { pb } from '@/pocketbase';
import { createQuery } from '@tanstack/svelte-query';
import { CONFIG } from '../config';

export const getOrdersQuery = ({ filter, page }: { page: number; filter: string }) => {
	const q = createQuery({
		queryKey: ['orders', page, filter],
		queryFn: () => pb.collection('orders').getList(page, CONFIG.PER_PAGE, { filter })
	});
	return q;
};

export const getProductsQuery = ({ filter, page }: { page: number; filter: string }) => {
	const q = createQuery({
		queryKey: ['products', page, filter],
		queryFn: () => pb.collection<Product>('products').getList(page, CONFIG.PER_PAGE, { filter })
	});
	return q;
};
