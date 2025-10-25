<script lang="ts">
	import { cn, getProductImageUrl, POCKETBASEURL } from '$lib/utils';
	import { Root, Content, Item, Previous, Next } from '$lib/components/ui/carousel/index.js';
	import type { CarouselAPI } from '$lib/components/ui/carousel/context.js';

	interface Props {
		productId: string;
		images: Media[];
		alt_text: string;
	}

	let { productId, images = [], alt_text }: Props = $props();

	let mainApi = $state<CarouselAPI>();
	let thumbApi = $state<CarouselAPI>();
	let current = $state(0);

	$effect(() => {
		if (!mainApi || !thumbApi) return;

		const onMainSelect = () => {
			if (!mainApi || !thumbApi) return;
			const selected = mainApi.selectedScrollSnap();
			current = selected;
			thumbApi.scrollTo(selected);
		};

		const onThumbSelect = () => {
			if (!mainApi || !thumbApi) return;
			const selected = thumbApi.selectedScrollSnap();
			mainApi.scrollTo(selected);
		};

		mainApi.on('select', onMainSelect);
		thumbApi.on('select', onThumbSelect);

		// Set initial current index
		current = mainApi.selectedScrollSnap();

		return () => {
			mainApi?.off('select', onMainSelect);
			thumbApi?.off('select', onThumbSelect);
		};
	});

	function onThumbClick(index: number) {
		if (!mainApi) return;
		mainApi.scrollTo(index);
		if (!thumbApi) return;
		thumbApi.scrollTo(index);
	}
</script>

<!-- Desktop: Thumbnails on left, Mobile: Full width with dots -->
<div class="flex h-full flex-col gap-3 lg:flex-row lg:gap-4">
	<!-- Thumbnail carousel - vertical on desktop, hidden on mobile -->
	<div class="hidden lg:block lg:w-24 lg:flex-shrink-0">
		<Root
			opts={{
				containScroll: 'keepSnaps',
				axis: 'y',
				dragFree: true,
				align: 'start'
			}}
			orientation="vertical"
			setApi={(api) => (thumbApi = api)}
			class="h-full"
		>
			<Content class="-mt-2 flex h-[600px] flex-col">
				{#each images as image, index}
					<Item class="basis-1/6 px-1 pt-2">
						<button
							onclick={() => onThumbClick(index)}
							class={cn(
								'relative aspect-square w-full overflow-hidden rounded-lg transition-all',
								index === current ? 'ring ring-primary' : 'opacity-60 hover:opacity-100'
							)}
							aria-label="View image {index + 1}"
						>
							<div class="aspect-square">
								<img
									class="h-full w-full object-cover"
									src={image.url}
									alt="{alt_text} thumbnail {index + 1}"
								/>
							</div>
						</button>
					</Item>
				{/each}
			</Content>
		</Root>
	</div>

	<div class="flex-1">
		<Root setApi={(api) => (mainApi = api)} class="relative w-full">
			<Content>
				{#each images as image}
					<Item>
						<div class="aspect-square rounded-md bg-gray-100">
							<img class="h-full w-full rounded-lg object-contain" src={image.url} alt={alt_text} />
						</div>
					</Item>
				{/each}
			</Content>
			<Previous
				class="absolute left-0 z-10 hidden size-8 items-center justify-center bg-white/80 transition-opacity hover:opacity-100 lg:flex"
			/>
			<Next
				class="absolute right-0 z-10 hidden size-8 items-center justify-center bg-white/80 transition-opacity hover:opacity-100 lg:flex"
			/>
		</Root>

		<div class="mt-4 flex justify-center gap-2 lg:hidden">
			{#each images as _, index}
				<button
					onclick={() => onThumbClick(index)}
					class={cn(
						'h-2 w-2 rounded-full transition-all',
						index === current ? 'w-6 bg-primary' : 'bg-gray-300 hover:bg-gray-400'
					)}
					aria-label="Go to image {index + 1}"
				></button>
			{/each}
		</div>
	</div>
</div>
