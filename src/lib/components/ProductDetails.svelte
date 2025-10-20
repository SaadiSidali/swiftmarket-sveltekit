<script>
	import Markdown from 'svelte-exmarkdown';

	let { source = '', markdown = true } = $props();
</script>

<article
	class="prose flex w-full max-w-full basis-2/3 flex-col space-y-4 pb-10"
	id="markdown-container"
>
	{#if markdown}
		<Markdown md={source} />
	{:else}
		{@html source}
	{/if}
</article>
