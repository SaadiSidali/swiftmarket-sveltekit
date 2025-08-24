<script lang="ts">
	import { copyToClipboard } from '../../utils';

	let { slug } = $props();
</script>

<span
	class="cursor-pointer rounded-full border px-2 py-0.5 text-xs hover:bg-gray-200"
	onclick={() => copyToClipboard(slug)}>{slug}</span
>
