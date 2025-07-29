<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	/** @type {{children?: import('svelte').Snippet}} */
	let { children } = $props();
</script>

<svelte:head>
	<title>SwiftMarket</title>

	<meta
		name="description"
		content="E-commerce solution built with SvelteKit, a headless CMS integration, uses Stripe for payments, providing better performance and faster development time"
	/>
</svelte:head>

<Navbar />
{@render children?.()}
<Footer />
