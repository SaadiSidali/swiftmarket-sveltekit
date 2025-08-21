<script lang="ts">
	import Carousel from 'svelte-carousel';
	import CarouselDot from '$lib/components/CarouselDot.svelte';

	import { browser } from '$app/environment';
	import { env } from '$env/dynamic/public';
	import { POCKETBASEURL } from '$lib/utils';

	interface Props {
		banners: any;
	}

	let { banners }: Props = $props();

	let carousel: any = $state(); // for calling methods of the carousel instance
</script>

<div class="aspect-[1.9/3] w-full md:aspect-[16/7.7]">
	{#if browser}
		<Carousel
			bind:this={carousel}
			autoplay
			autoplayDuration={5000}
			autoplayProgressVisible
			arrows={false}
		>
			{#snippet dots()}
				<div class="flex flex-wrap items-center justify-center gap-1 p-2">
					{#each Array(pagesCount) as _, pageIndex (pageIndex)}
						<CarouselDot
							active={currentPageIndex === pageIndex}
							number={pageIndex + 1}
							on:click={() => showPage(pageIndex)}
						/>
					{/each}
				</div>
			{/snippet}

			{#snippet children({ loaded, currentPageIndex, pagesCount, showPage })}
				{#each banners as banner, imageIndex (banner)}
					<div class="relative">
						{#if loaded.includes(imageIndex)}
							<img
								src="{POCKETBASEURL}/api/files/{banner.collectionName}/{banner.id}/{banner.image}"
								class="aspect-[2/3] w-full object-cover md:aspect-[16/7]"
								width="2000"
								height="1000"
								draggable="false"
								alt={banner.heading}
							/>
						{/if}
						<div
							class="absolute inset-0 mx-0 flex flex-col items-center justify-center gap-5 md:mx-16 md:items-start"
						>
							<h1
								class=" center text-center text-5xl font-extrabold text-white uppercase md:text-left md:text-7xl"
							>
								{banner.heading}
							</h1>
							<a
								class="rounded bg-yellow-300 px-4 py-2 font-bold text-black hover:bg-yellow-500"
								href={banner.link}
							>
								SEE PRODUCT
							</a>
						</div>
					</div>
				{/each}
			{/snippet}
		</Carousel>
	{/if}
</div>
