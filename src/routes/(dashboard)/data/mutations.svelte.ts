import { pb } from '@/pocketbase';
import { createMutation, createQuery } from '@tanstack/svelte-query';
import { CONFIG } from '../config';
import { getJwtFromLocalStorage } from '../utils';

async function uploadFiles(files: FileList): Promise<Media[]> {
	const jwt = getJwtFromLocalStorage();

	const uploadPromises = Array.from(files).map(async (file) => {
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
		return (await res.json()).id;
	});

	return Promise.all(uploadPromises);
}

export const createMediaMutation = ({ onSuccess }: { onSuccess?: (data: Media[]) => void }) => {
	const m = createMutation({
		mutationFn: uploadFiles,
		onSuccess: (data) => {
			if (onSuccess) onSuccess(data);
		}
	});

	return m;
};
