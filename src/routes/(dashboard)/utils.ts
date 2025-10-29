import { toast } from 'svelte-sonner';

export function copyToClipboard(text: string) {
	navigator.clipboard.writeText(text);
	toast.info('Copied!');
}

const LOCAL_STORAGE_KEY = 'pocketbase_auth';

export function getJwtFromLocalStorage(): string | null {
	const item = localStorage.getItem(LOCAL_STORAGE_KEY);
	return item ? JSON.parse(item).token : null;
}

export function slugify(text: string): string {
	return text
		.toString()
		.toLowerCase()
		.replace(/\s+/g, '-') // Replace spaces with -
		.replace(/[^\w\.\-]+/g, '') // Remove all non-word chars except dot
		.replace(/\-\-+/g, '-') // Replace multiple - with single -
		.replace(/^-+/, '') // Trim - from start of text
		.replace(/-+$/, ''); // Trim - from end of text
}
