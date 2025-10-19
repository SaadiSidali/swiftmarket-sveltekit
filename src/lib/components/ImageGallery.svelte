<script lang="ts">
	import { cn, POCKETBASEURL } from '$lib/utils';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import type { CarouselAPI } from '$lib/components/ui/carousel/context.js';

	interface Props {
		productId: string;
		images: any;
		alt_text: string;
	}

	let { productId, images = $bindable(), alt_text }: Props = $props();

	let mainApi = $state<CarouselAPI>();
	let thumbApi = $state<CarouselAPI>();
	let current = $state(0);

	$effect(() => {
		if (!mainApi || !thumbApi) return;

		// Sync thumbnail carousel with main carousel
		current = mainApi.selectedScrollSnap();

		mainApi.on('select', () => {
			if (!mainApi || !thumbApi) return;
			const selected = mainApi.selectedScrollSnap();
			current = selected;
			thumbApi.scrollTo(selected);
		});

		thumbApi.on('select', () => {
			if (!mainApi || !thumbApi) return;
			const selected = thumbApi.selectedScrollSnap();
			mainApi.scrollTo(selected);
		});
	});

	function onThumbClick(index: number) {
		if (!mainApi || !thumbApi) return;
		mainApi.scrollTo(index);
	}
</script>

<!-- Desktop: Thumbnails on left, Mobile: Full width with dots -->
<div class="flex flex-col gap-3 lg:flex-row lg:gap-4">
	<!-- Thumbnail carousel - vertical on desktop, hidden on mobile -->
	<div class="hidden lg:block lg:w-24 lg:flex-shrink-0">
		<Carousel.Root
			opts={{
				containScroll: 'keepSnaps',
				dragFree: true,
				axis: 'y'
			}}
			setApi={(eapi) => (thumbApi = eapi)}
			class="h-full"
		>
			<Carousel.Content class="-mt-2 flex h-full flex-col">
				{#each images as image, index}
					<Carousel.Item class="pt-2">
						<button
							onclick={() => onThumbClick(index)}
							class={cn(
								'relative size-full overflow-hidden rounded-lg transition-all',
								index === current ? 'ring-2 ring-primary' : 'opacity-60 hover:opacity-100'
							)}
						>
							<div class="aspect-square">
								<img
									class="h-full w-full object-cover"
									src="{POCKETBASEURL}/api/files/products/{productId}/{image}"
									alt="{alt_text} thumbnail {index + 1}"
								/>
							</div>
						</button>
					</Carousel.Item>
				{/each}
			</Carousel.Content>
		</Carousel.Root>
	</div>

	<!-- Main carousel -->
	<div class="flex-1">
		<Carousel.Root setApi={(eapi) => (mainApi = eapi)} class="relative w-full">
			<Carousel.Content>
				{#each images as image}
					<Carousel.Item>
						<div class="aspect-square">
							<img
								class="h-full w-full rounded-lg object-contain"
								src="{POCKETBASEURL}/api/files/products/{productId}/{image}"
								alt={alt_text}
							/>
						</div>
					</Carousel.Item>
				{/each}
			</Carousel.Content>
			<Carousel.Previous
				class="absolute left-0 z-10 hidden size-8 items-center justify-center bg-white/80 transition-opacity hover:opacity-100 lg:flex"
			/>
			<Carousel.Next
				class="absolute right-0 z-10 hidden size-8 items-center justify-center bg-white/80 transition-opacity hover:opacity-100 lg:flex"
			/>
		</Carousel.Root>

		<!-- Dot indicators - mobile only -->
		<div class="mt-4 flex justify-center gap-2 lg:hidden">
			{#each images as _, index}
				<button
					onclick={() => onThumbClick(index)}
					class={cn(
						'h-2 w-2 rounded-full transition-all',
						index === current ? 'w-6 bg-primary' : 'bg-gray-300 hover:bg-gray-400'
					)}
					aria-label="Go to image {index + 1}"
				/>
			{/each}
		</div>
	</div>
</div>
