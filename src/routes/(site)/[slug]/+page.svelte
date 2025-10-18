<script lang="ts">
	import ImageGallery from '$lib/components/ImageGallery.svelte';

	import QuantityInput from '$lib/components/QuantityInput.svelte';
	import ProductDetails from '$lib/components/ProductDetails.svelte';
	import ProductItem from '$lib/components/ProductItem.svelte';
	import { POCKETBASEURL, WEBSITE_NAME } from '$lib/utils';

	let { data } = $props();
	let product = $state(data);
	let quantity = $state(1);

	$effect(() => {
		product = data;
	});
</script>

<svelte:head>
	<title>{product.name} | {WEBSITE_NAME}</title>
</svelte:head>

<div class="mx-3 flex flex-col gap-5 py-10 lg:mx-10 lg:flex-row lg:gap-8">
	<div class="basis-1/2 px-8">
		<ImageGallery productId={product.id} images={product.gallery} alt_text={product.name} />
	</div>
	<div class="flex basis-1/2 flex-col gap-8 px-8">
		<h1 class="mt-3 text-4xl font-extrabold">{product.name}</h1>
		<div class="flex items-end gap-2">
			{#if product.sale_price === 0}
				<span class="text-3xl">${product.price}</span>
			{:else}
				<span class="text-3xl text-red-600">${product.sale_price}</span>
				<span class="text-xl text-gray-600 line-through">${product.price}</span>
			{/if}
		</div>

		<div class="flex flex-col gap-2">
			<p>Description</p>
			<p class="text-gray-600">
				{product.description}
			</p>
		</div>

		<div class="flex flex-col gap-2">
			<p>Quantity</p>
			<QuantityInput bind:count={quantity} />
		</div>
	</div>
</div>

<div class="flex flex-col-reverse gap-20 px-10 lg:flex-row">
	{#if product.details.length !== 0}
		<ProductDetails source={product.details} markdown={false} />
	{/if}

	{#if product.related_products.length !== 0}
		<div class="basis-1/2">
			<p class="text-lg font-medium uppercase">Related</p>

			<div class="grid grid-cols-2 gap-12 py-5 pr-5">
				{#each product.expand.related_products as relatedProduct (relatedProduct.id)}
					<ProductItem
						title={relatedProduct.name}
						image="{POCKETBASEURL}/api/files/{relatedProduct.collectionName}/{relatedProduct.id}/{relatedProduct
							.gallery[0]}"
						hoverImage={relatedProduct.gallery.length > 1
							? `${POCKETBASEURL}/api/files/${relatedProduct.collectionName}/${relatedProduct.id}/${relatedProduct.gallery[1]}`
							: ''}
						price={relatedProduct.price}
						salePrice={relatedProduct.sale_price}
						link="/{relatedProduct.slug}"
					/>
				{/each}
			</div>
		</div>
	{/if}
</div>
