<script lang="ts">
	import ImageGallery from '$lib/components/ImageGallery.svelte';

	import QuantityInput from '$lib/components/QuantityInput.svelte';
	import ProductDetails from '$lib/components/ProductDetails.svelte';
	import ProductItem from '$lib/components/ProductItem.svelte';
	import { formatCurrency, POCKETBASEURL, WEBSITE_NAME } from '$lib/utils';
	import OrderForm from '@/components/OrderForm.svelte';
	import ProductInfo from '@/components/ProductInfo.svelte';

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

<div
	class="flex flex-col justify-center gap-5 py-10 md:container md:mx-auto lg:grid lg:grid-cols-2 lg:gap-8"
>
	<div class="max-w-2xl basis-1/2 px-8">
		<ImageGallery productId={product.id} images={product.gallery} alt_text={product.name} />
	</div>
	<div class="flex basis-1/2 flex-col gap-3 px-8">
		<ProductInfo {product} />

		<div class="flex flex-col gap-2">
			<OrderForm />
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
