import { $getRoot, getEditor, generateNodesFromDOM } from 'svelte-lexical';

export function prepopulatedRichText(html?: string) {
	const root = $getRoot();
	if (html) {
		const parser = new DOMParser();
		const dom = parser.parseFromString(html, 'text/html');
		const nodes = generateNodesFromDOM(getEditor(), dom);
		root.append(...nodes);
		return;
	}
}
