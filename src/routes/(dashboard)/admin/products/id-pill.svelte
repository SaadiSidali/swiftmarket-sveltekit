<script lang="ts">
	import { copyToClipboard } from '../../utils';

	let { id } = $props();
</script>

<span
	class="block max-w-18 cursor-pointer truncate rounded-full border px-2 py-0.5 text-xs hover:bg-gray-200"
	onclick={() => copyToClipboard(id)}>{id}</span
>
