<script lang="ts">
	interface Props {
		title: string;
		image: string;
		hoverImage?: string;
		price: number;
		salePrice?: number;
		link: string;
	}

	let { title, image, hoverImage = '', price, salePrice = 0, link }: Props = $props();

	let hovered = $state(false);
</script>

<div class="flex flex-col items-center justify-center">
	<a
		class="mb-6 block aspect-square"
		href={link}
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
			src={hovered && hoverImage.length !== 0 ? hoverImage : image}
			alt="{title} image"
		/>
	</a>
	<div class="flex flex-grow flex-col justify-start gap-1 text-center leading-tight">
		<a href={link}>{title}</a>
		<div class="flex justify-center gap-3">
			{#if salePrice === 0}
				<span>${price}</span>
			{:else}
				<span class="text-red-600">${salePrice}</span>
				<span class="text-gray-600 line-through">${price}</span>
			{/if}
		</div>
	</div>
</div>
