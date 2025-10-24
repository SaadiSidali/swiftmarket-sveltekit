import { pb } from '@/pocketbase';
import { createMutation, createQuery } from '@tanstack/svelte-query';
import { CONFIG } from '../config';

export const createMediaMutation = () => {
	const m = createMutation({
		mutationFn: async (file: File) => {
			const formData = new FormData();
			formData.append('file', file);
			const record = await pb.collection('media').create(formData);
			return record;
		}
	});

	return m;
};
