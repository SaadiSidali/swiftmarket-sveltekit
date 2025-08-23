<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';

	onMount(() => {
		page.params.id;
	});
</script>
