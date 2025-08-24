import { toast } from 'svelte-sonner';

export function copyToClipboard(text: string) {
	navigator.clipboard.writeText(text);
	toast.info('Copied!');
}
