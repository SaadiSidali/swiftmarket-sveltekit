<script>
	import { createBubbler } from 'svelte/legacy';

	const bubble = createBubbler();
	/** @type {{active?: boolean, number?: number}} */
	let { active = false, number = 0 } = $props();
</script>

<button
	class="{active ? 'h-2 w-2 opacity-70' : 'h-1.5 w-1.5 opacity-50'}
        bg-[#5d5d5d] rounded-full transition-all"
	aria-label="Carousel Button {number}"
	onclick={bubble('click')}
></button>
