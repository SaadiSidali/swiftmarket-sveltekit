<script lang="ts">
	interface Props {
		product: Product & { expand: { gallery: Media[] } };
	}

	let { product }: Props = $props();

	let hovered = $state(false);
</script>

<div class="flex flex-col items-center justify-center">
	<a
		class="mb-6 block aspect-square"
		href={product.slug}
		onmouseenter={() => (hovered = true)}
		onmouseleave={() => (hovered = false)}
		ontouchstart={() => (hovered = true)}
		ontouchend={() => (hovered = false)}
	>
		<img
			class="aspect-square object-cover"
			width="700"
			height="700"
			loading="lazy"
			src={hovered && product.expand.gallery.length > 1
				? product.expand.gallery[1].url
				: product.image}
			alt="{product.name} image"
		/>
	</a>
	<div class="flex flex-grow flex-col justify-start gap-1 text-center leading-tight">
		<a href={product.slug}>{product.name}</a>
		<div class="flex justify-center gap-3">
			{#if product.sale_price === 0}
				<span>${product.price}</span>
			{:else}
				<span class="text-red-600">${product.sale_price}</span>
				<span class="text-gray-600 line-through">${product.price}</span>
			{/if}
		</div>
	</div>
</div>
