<script lang="ts">
	// import Carousel from '$lib/components/Carousel.svelte';
	import ProductItem from '$lib/components/ProductItem.svelte';
	import { POCKETBASEURL } from '$lib/utils';

	interface Props {
		data: any;
	}

	let { data }: Props = $props();
	let showcase = data.showcase;
	let banners = data.carousels;
	console.log('Data:', JSON.stringify(data, null, 2));
</script>

<svelte:head>
	<title>SwiftMarket</title>
</svelte:head>

{#if banners.length !== 0}
	<!-- <Carousel {banners} /> -->
{/if}

<div class="mx-3 md:mx-10">
	<section class="text-center text-gray-800 lg:px-32 lg:py-5 lg:text-left">
		<div class="grid justify-center gap-6 lg:grid-cols-2 xl:gap-12">
			<div class="mb-6 lg:mb-0">
				<h1 class="text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">This is your shop</h1>
				<p class="mt-4 text-lg lg:pl-3">Talk about your business, your products, or yourself</p>
			</div>
			<div class="mb-6 flex flex-col justify-center lg:mb-0">
				<p class="text-lg text-gray-500">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eum iste repudiandae nisi modi
					placeat velit repellendus, tempore voluptates facere maiores praesentium harum deleniti
					voluptatibus laudantium quasi quos recusandae soluta ullam maxime quaerat debitis beatae
					accusamus reprehenderit! Eius veniam itaque numquam aliquid officiis nemo, quidem maxime,
					maiores aliquam officia voluptatum.
				</p>
			</div>
		</div>
	</section>

	{#each showcase as showsection}
		<h2 class="pt-20 pb-12 text-center text-6xl font-extrabold uppercase">{showsection.name}</h2>

		<div class="grid grid-cols-2 gap-12 lg:grid-cols-4">
			{#each showsection.expand.products as product (product.id)}
				<ProductItem {product} />
			{/each}
		</div>
	{/each}
</div>
<br /><br />
