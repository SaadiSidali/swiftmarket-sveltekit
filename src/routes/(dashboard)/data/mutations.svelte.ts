import { pb } from '@/pocketbase';
import { createMutation, createQuery } from '@tanstack/svelte-query';
import { CONFIG } from '../config';
import { getJwtFromLocalStorage } from '../utils';

async function uploadFile(file: File): Promise<Media> {
	const jwt = getJwtFromLocalStorage();

	const formData = new FormData();
	formData.append('image', file);
	const res = await fetch('/api/upload', {
		method: 'POST',
		body: formData,
		headers: {
			Authorization: `Bearer ${jwt}`
		}
	});
	if (!res.ok) throw new Error('Failed to upload file');
	return await res.json();
}

export const createMediaMutation = ({ onSuccess }: { onSuccess?: (data: Media) => void }) => {
	const m = createMutation({
		mutationFn: uploadFile,
		onSuccess: (data) => {
			if (onSuccess) onSuccess(data);
		}
	});

	return m;
};
