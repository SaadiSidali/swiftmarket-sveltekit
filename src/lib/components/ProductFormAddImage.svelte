<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';
	import { Root, Content, Item, Previous, Next } from '$lib/components/ui/carousel/index.js';
	import type { CarouselAPI } from '$lib/components/ui/carousel/context.js';
	import UploadImage from './UploadImage.svelte';
	import { Plus, X } from '@lucide/svelte';
	import { cn } from '@/utils';

	const {
		onImageSelect,
		gallery,
		removeImage
	}: {
		onImageSelect: (media: Media) => void;
		gallery: Media[];
		removeImage: (index: number) => void;
	} = $props();

	let showModal = $state(false);
	let mainApi = $state<CarouselAPI>();
	let current = $state(0);

	$effect(() => {
		if (!mainApi) return;

		const onMainSelect = () => {
			if (!mainApi) return;
			current = mainApi.selectedScrollSnap();
		};

		mainApi.on('select', onMainSelect);
		current = mainApi.selectedScrollSnap();

		return () => {
			mainApi?.off('select', onMainSelect);
		};
	});

	function onThumbClick(index: number) {
		mainApi?.scrollTo(index);
	}
</script>

{#if gallery && gallery.length > 0}
	<div class="flex flex-col gap-3">
		<!-- Add Image Link Button -->
		<div class="flex justify-end">
			<button
				type="button"
				onclick={() => (showModal = true)}
				class="flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:underline"
			>
				<Plus class="h-3.5 w-3.5" />
				<span>Add another</span>
			</button>
		</div>

		<!-- Main Carousel - Fixed Height -->
		<div class="h-96 w-full">
			<Root setApi={(api) => (mainApi = api)} class="h-full w-full">
				<Content class="h-96">
					{#each gallery as image, index}
						<Item class="h-96">
							<div
								class="relative flex h-96 w-full items-center justify-center overflow-hidden rounded-md bg-muted"
							>
								<img class="object-contain" src={image.url} alt="Product image {index + 1}" />
								<button
									type="button"
									onclick={() => removeImage(index)}
									class="absolute top-2 right-2 rounded-full bg-destructive p-1.5 text-white transition-opacity hover:bg-destructive/90"
								>
									<X class="h-3 w-3" />
								</button>
							</div>
						</Item>
					{/each}
				</Content>
				{#if gallery.length > 1}
					<Previous
						class="absolute top-1/2 left-2 z-10 size-8 -translate-y-1/2 items-center justify-center bg-white/80 transition-opacity hover:opacity-100"
					/>
					<Next
						class="absolute top-1/2 right-2 z-10 size-8 -translate-y-1/2 items-center justify-center bg-white/80 transition-opacity hover:opacity-100"
					/>
				{/if}
			</Root>
		</div>

		<!-- Thumbnail Grid - Only show if multiple images -->
		{#if gallery.length > 1}
			<div class="flex flex-wrap gap-2">
				{#each gallery as image, index}
					<button
						type="button"
						onclick={() => onThumbClick(index)}
						class={cn(
							'relative size-20 overflow-hidden rounded-md transition-all',
							index === current ? 'ring-2 ring-primary' : 'opacity-50 hover:opacity-75'
						)}
						aria-label="View image {index + 1}"
					>
						<img class="h-full w-full object-cover" src={image.url} alt="Thumbnail {index + 1}" />
					</button>
				{/each}
			</div>
		{/if}
	</div>
{:else}
	<!-- Empty State - Fixed Height -->
	<button
		type="button"
		onclick={() => (showModal = true)}
		class="flex h-64 w-full flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed border-muted-foreground/25 bg-muted/50 transition-colors hover:border-muted-foreground/50 hover:bg-muted"
	>
		<Plus class="h-8 w-8 text-muted-foreground" />
		<span class="text-sm font-medium text-muted-foreground">Add Product Images</span>
	</button>
{/if}

<Dialog.Root bind:open={showModal}>
	<Dialog.Content class="w-full md:max-w-2xl">
		<UploadImage {onImageSelect} />
	</Dialog.Content>
</Dialog.Root>
