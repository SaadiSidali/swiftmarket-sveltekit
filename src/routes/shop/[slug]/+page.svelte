<script lang="ts">
	import ProductItem from '$lib/components/ProductItem.svelte';

	import AccordionItem from '$lib/components/AccordionItem.svelte';
	import { POCKETBASEURL } from '$lib/utils';

	interface Props {
		data: any;
	}

	let { data }: Props = $props();
	let products = $derived(data.items);
</script>

<svelte:head>
	<title>SwiftMarket Shop</title>
</svelte:head>

<div class="m-auto flex flex-wrap items-center justify-center gap-6 p-5">
	<a class="underline-offset-4 hover:underline" href="/shop/all">All</a>
	<a class="underline-offset-4 hover:underline" href="/shop/iphone-cases">iPhone Cases</a>
	<a class="underline-offset-4 hover:underline" href="/shop/airpods-cases">AirPods Cases</a>
	<a class="underline-offset-4 hover:underline" href="/shop/sleeves">Sleeves</a>
	<a class="underline-offset-4 hover:underline" href="/shop/cables">Cables</a>
	<a class="underline-offset-4 hover:underline" href="/shop/chargers">Chargers</a>
	<a class="underline-offset-4 hover:underline" href="/shop/accessories">Accessories</a>
</div>

<hr />

<div class="flex flex-col px-3 py-8 md:px-20 lg:flex-row">
	<div class="mg-0 flex basis-1/6 flex-col pb-5 lg:mx-10">
		<h1 class="pb-4 text-xl font-bold uppercase">FILTERS</h1>
		<hr />
		<AccordionItem name="Price">
			<p>TODO</p>
		</AccordionItem>
		<hr />
		<AccordionItem name="Product type">
			<p>TODO</p>
		</AccordionItem>
		<hr />
		<AccordionItem name="Availability">
			<p>TODO</p>
		</AccordionItem>
		<hr />
	</div>
	<div class="flex basis-5/6 flex-col">
		<div class="flex justify-between pb-4">
			<p>{products.length} products</p>
			<div>
				<span class="text-gray-700">Sort by</span>
				<button>New</button>
			</div>
		</div>

		<div class="grid grid-cols-2 gap-5 md:grid-cols-3">
			{#each products as product}
				<ProductItem
					title={product.name}
					image="{POCKETBASEURL}/api/files/{product.collectionName}/{product.id}/{product
						.gallery[0]}"
					hoverImage={product.gallery.length > 1
						? `${POCKETBASEURL}/api/files/${product.collectionName}/${product.id}/${product.gallery[1]}`
						: ''}
					price={product.price}
					salePrice={product.sale_price}
					link="/products/{product.slug}"
				/>
			{/each}
		</div>
	</div>
</div>
