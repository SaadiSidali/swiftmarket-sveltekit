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

export const createProductMutation = ({ onSuccess }: { onSuccess?: (data: any) => void }) => {
	const m = createMutation({
		mutationFn: (formData: FormData) => pb.collection('products').create(formData),
		onSuccess: (data) => {
			if (onSuccess) onSuccess(data);
		}
	});

	return m;
};

export const updateProductMutation = ({ onSuccess }: { onSuccess?: (data: any) => void }) => {
	const m = createMutation({
		mutationFn: ({ id, formData }: { id: string; formData: FormData }) =>
			pb.collection('products').update(id, formData),
		onSuccess: (data) => {
			if (onSuccess) onSuccess(data);
		}
	});

	return m;
};

export const createCategoryMutation = ({ onSuccess }: { onSuccess?: (data: any) => void }) => {
	const m = createMutation({
		mutationFn: (formData: FormData) => pb.collection('categories').create(formData),
		onSuccess: (data) => {
			if (onSuccess) onSuccess(data);
		}
	});

	return m;
};

export const updateCategoryMutation = ({ onSuccess }: { onSuccess?: (data: any) => void }) => {
	const m = createMutation({
		mutationFn: ({ id, formData }: { id: string; formData: FormData }) =>
			pb.collection('categories').update(id, formData),
		onSuccess: (data) => {
			if (onSuccess) onSuccess(data);
		}
	});

	return m;
};
