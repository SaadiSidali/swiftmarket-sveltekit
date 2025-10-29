<script lang="ts">
	import { onMount, tick } from 'svelte';
	import {
		getActiveEditor,
		getEditor,
		InsertImage,
		FocusEditor,
		type ImagePayload
	} from 'svelte-lexical';
	import * as Dialog from '$lib/components/ui/dialog';
	import UploadImage from './UploadImage.svelte';

	interface Props {
		showModal?: boolean;
		onfoo?: () => void;
	}

	let { showModal = $bindable(false), onfoo = () => {} }: Props = $props();

	export function open() {
		showModal = true;
	}

	const editor = getEditor();
	const activeEditor = getActiveEditor();

	function insertAndClose(payload: ImagePayload) {
		InsertImage($activeEditor, payload);
		closeDialog();
	}

	async function closeDialog() {
		showModal = false;
		await tick();
		FocusEditor(editor);
		onfoo();
	}

	function onSelect(payload: ImagePayload) {
		insertAndClose(payload);
	}
</script>

<Dialog.Root bind:open={showModal}>
	<Dialog.Content class="w-full md:max-w-2xl">
		<UploadImage
			onImageSelect={(media) =>
				onSelect({
					altText: media.name,
					src: media.url,
					// @ts-ignore
					maxWidth: '100%'
				})}
		/>
	</Dialog.Content>
</Dialog.Root>
