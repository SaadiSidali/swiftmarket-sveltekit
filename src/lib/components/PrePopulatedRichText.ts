import { $getRoot } from 'svelte-lexical';

export function prepopulatedRichText() {
	const root = $getRoot();
	root.clear();
}
