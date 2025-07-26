<script lang="ts">
	interface Props {
		title: string;
		image: string;
		hoverImage?: string;
		price: number;
		salePrice?: number;
		link: string;
	}

	let {
		title,
		image,
		hoverImage = '',
		price,
		salePrice = 0,
		link
	}: Props = $props();

	let hovered = $state(false);
</script>

<div class="flex flex-col justify-center items-center">
	<a
		class="aspect-square block mb-6"
		href={link}
		onmouseenter={() => (hovered = true)}
		onmouseleave={() => (hovered = false)}
		ontouchstart={() => (hovered = true)}
		ontouchend={() => (hovered = false)}
	>
		<img
			class="object-cover aspect-square"
			width="700"
			height="700"
			loading="lazy"
			src={hovered && hoverImage.length !== 0 ? hoverImage : image}
			alt="{title} image"
		/>
	</a>
	<div class="flex flex-col justify-start flex-grow text-center leading-tight gap-1">
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
