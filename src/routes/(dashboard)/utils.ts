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
