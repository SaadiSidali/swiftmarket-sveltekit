<script>
	import Markdown from 'svelte-exmarkdown';

	let { source = '' } = $props();
</script>

<div class="flex basis-2/3 flex-col space-y-4 pb-10" id="markdown-container">
	<Markdown md={source} />
</div>

<style>
	:global(#markdown-container h1) {
		font-size: 2.25rem;
		line-height: 2.5rem;
		font-weight: 700;
	}

	:global(#markdown-container h2) {
		font-size: 1.875rem;
		line-height: 2.25rem;
		font-weight: 700;
	}

	:global(#markdown-container h3) {
		font-size: 1.5rem;
		line-height: 2rem;
		font-weight: 700;
	}

	:global(#markdown-container ul) {
		list-style-type: disc;
		list-style-position: inside;
	}
</style>
