<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { Label } from '$lib/components/ui/label';
	import { Badge } from '$lib/components/ui/badge';
	import { RichTextComposer } from 'svelte-lexical';
	import { theme } from 'svelte-lexical/dist/themes/default';
	import Editor from './Editor.svelte';
	import UploadImage from './UploadImage.svelte';
	import { X, Plus, ChevronDown, Search } from '@lucide/svelte';
	import { cn } from '$lib/utils';
	import ProductFormAddImage from './ProductFormAddImage.svelte';
	import { getAllCategoriesQuery } from '../../routes/(dashboard)/data/queries.svelte';
	import { onMount } from 'svelte';

	interface Props {
		initialData?: Product;
		onSubmit: (data: any) => void;
		isLoading?: boolean;
	}

	let { initialData, onSubmit, isLoading = false }: Props = $props();

	// Fetch all categories for selection
	const allCategoriesQuery = getAllCategoriesQuery();

	// Category selection state
	let categorySearch = $state('');
	let isDropdownOpen = $state(false);
	let dropdownRef = $state<HTMLDivElement | null>(null);

	onMount(() => {
		const handleClick = (event: MouseEvent) => {
			handleClickOutside(event);
		};
		document.addEventListener('click', handleClick);
		return () => {
			document.removeEventListener('click', handleClick);
		};
	});

	let formData = $state<Product>({
		name: initialData?.name || '',
		description: initialData?.description || '',
		slug: initialData?.slug || '',
		price: initialData?.price || 0,
		sale_price: initialData?.sale_price || undefined,
		in_stock: initialData?.in_stock ?? true,
		sku: initialData?.sku || '',
		details: initialData?.details || '',
		is_active: initialData?.is_active ?? true,
		related_products: initialData?.related_products || [],
		categories: initialData?.categories || [],
		image: initialData?.image || '',
		gallery: initialData?.gallery || [],
		...(initialData?.id && { id: initialData.id })
	});

	function handleSubmit(e: Event) {
		onSubmit({ ...formData, gallery: formData.gallery?.map((media) => media.id) });
	}

	function generateSlug(name: string) {
		return name
			.toLowerCase()
			.trim()
			.replace(/[^\w\s-]/g, '')
			.replace(/\s+/g, '-')
			.replace(/-+/g, '-');
	}

	function handleNameChange(e: Event) {
		const target = e.target as HTMLInputElement;
		formData.name = target.value;
		if (!initialData?.slug) {
			formData.slug = generateSlug(target.value);
		}
	}

	function onImageSelect(media: Media) {
		if (!formData.gallery) {
			formData.gallery = [];
		}
		formData.gallery = [...formData.gallery, media];
	}

	function removeImage(index: number) {
		if (formData.gallery) {
			formData.gallery = formData.gallery.filter((_, i) => i !== index);
		}
	}

	function toggleCategory(categoryId: string) {
		if (!formData.categories) {
			formData.categories = [];
		}

		if (formData.categories.includes(categoryId)) {
			formData.categories = formData.categories.filter((id) => id !== categoryId);
		} else {
			formData.categories = [...formData.categories, categoryId];
		}
		// Clear search after selection
		categorySearch = '';
	}

	function removeCategory(categoryId: string) {
		if (!formData.categories) return;
		formData.categories = formData.categories.filter((id) => id !== categoryId);
	}

	function isCategorySelected(categoryId: string): boolean {
		return formData.categories?.includes(categoryId) ?? false;
	}

	// Get selected category objects for display
	let selectedCategoryObjects = $derived(
		$allCategoriesQuery.data?.filter((cat) => formData.categories?.includes(cat.id!)) || []
	);

	// Filter categories based on search
	let filteredCategories = $derived(
		$allCategoriesQuery.data?.filter(
			(cat) =>
				cat.name?.toLowerCase().includes(categorySearch.toLowerCase()) &&
				!formData.categories?.includes(cat.id!)
		) || []
	);

	// Close dropdown when clicking outside
	function handleClickOutside(event: MouseEvent) {
		if (dropdownRef && !dropdownRef.contains(event.target as Node)) {
			isDropdownOpen = false;
		}
	}
</script>

<form onsubmit={handleSubmit} class="container mx-auto w-full pt-3 pb-16">
	<div class="space-y-8">
		<div class="space-y-4">
			<h2 class="text-xl font-semibold text-foreground">Gallery</h2>
			<ProductFormAddImage {onImageSelect} {removeImage} gallery={formData.gallery ?? []} />

			<h2 class="text-xl font-semibold text-foreground">Basic Information</h2>
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
				<div class="space-y-2">
					<Label for="name">Product Name *</Label>
					<Input
						id="name"
						type="text"
						placeholder="Enter product name"
						bind:value={formData.name}
						onchange={handleNameChange}
						required
						class="w-full"
					/>
				</div>
				<div class="space-y-2">
					<Label for="slug">Slug *</Label>
					<Input
						id="slug"
						type="text"
						placeholder="product-slug"
						bind:value={formData.slug}
						required
						class="w-full"
					/>
				</div>
			</div>

			<div class="space-y-2">
				<Label for="description">Description</Label>
				<Textarea
					id="description"
					placeholder="Enter product description"
					bind:value={formData.description}
					class="min-h-24 w-full"
				/>
			</div>

			<div class="space-y-2">
				<Label>Categories</Label>
				{#if $allCategoriesQuery.isLoading}
					<p class="text-sm text-muted-foreground">Loading categories...</p>
				{:else if $allCategoriesQuery.isError}
					<p class="text-sm text-red-600">Failed to load categories.</p>
				{:else if $allCategoriesQuery.data && $allCategoriesQuery.data.length > 0}
					<!-- Selected categories display -->
					{#if selectedCategoryObjects.length > 0}
						<div class="mb-2 flex flex-wrap gap-2">
							{#each selectedCategoryObjects as category (category.id)}
								<Badge variant="secondary" class="flex items-center gap-1 px-2 py-1">
									{category.name || 'Unnamed'}
									<button
										type="button"
										onclick={() => removeCategory(category.id!)}
										class="ml-1 rounded-full hover:bg-muted"
									>
										<X class="h-3 w-3" />
									</button>
								</Badge>
							{/each}
						</div>
					{/if}

					<!-- Combobox dropdown -->
					<div class="relative" bind:this={dropdownRef}>
						<button
							type="button"
							onclick={() => (isDropdownOpen = !isDropdownOpen)}
							class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
						>
							<span class="text-muted-foreground">
								{selectedCategoryObjects.length > 0
									? `${selectedCategoryObjects.length} selected`
									: 'Select categories...'}
							</span>
							<ChevronDown class="h-4 w-4 opacity-50" />
						</button>

						{#if isDropdownOpen}
							<div
								class="absolute z-50 mt-1 max-h-60 w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md"
							>
								<!-- Search input -->
								<div class="flex items-center border-b px-3">
									<Search class="mr-2 h-4 w-4 shrink-0 opacity-50" />
									<input
										type="text"
										bind:value={categorySearch}
										placeholder="Search categories..."
										class="flex h-10 w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
										onclick={(e) => e.stopPropagation()}
									/>
								</div>

								<!-- Categories list -->
								<div class="max-h-48 overflow-y-auto p-1">
									{#if filteredCategories.length === 0}
										<div class="py-6 text-center text-sm text-muted-foreground">
											{categorySearch ? 'No categories found.' : 'All categories selected.'}
										</div>
									{:else}
										{#each filteredCategories as category (category.id)}
											<button
												type="button"
												onclick={() => toggleCategory(category.id!)}
												class="relative flex w-full cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none hover:bg-accent hover:text-accent-foreground"
											>
												{category.name || 'Unnamed Category'}
											</button>
										{/each}
									{/if}
								</div>
							</div>
						{/if}
					</div>
					<p class="text-sm text-muted-foreground">
						Select one or more categories for this product.
					</p>
				{:else}
					<p class="text-sm text-muted-foreground">
						No categories available. <a href="/admin/categories/new" class="text-primary underline"
							>Create one</a
						>.
					</p>
				{/if}
			</div>
		</div>

		<div class="space-y-4">
			<h2 class="text-xl font-semibold text-foreground">Pricing</h2>
			<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
				<div class="space-y-2">
					<Label for="price">Price *</Label>
					<Input
						id="price"
						type="number"
						placeholder="0.00"
						bind:value={formData.price}
						step="0.01"
						min="0"
						required
						class="w-full"
					/>
				</div>
				<div class="space-y-2">
					<Label for="sale_price">Sale Price</Label>
					<Input
						id="sale_price"
						type="number"
						placeholder="0.00"
						bind:value={formData.sale_price}
						step="0.01"
						min="0"
						class="w-full"
					/>
				</div>
				<div class="space-y-2">
					<Label for="sku">SKU</Label>
					<Input
						id="sku"
						type="text"
						placeholder="SKU-001"
						bind:value={formData.sku}
						class="w-full"
					/>
				</div>
			</div>
		</div>

		<div class="space-y-4">
			<h2 class="text-xl font-semibold text-foreground">Inventory</h2>
			<div class="flex flex-col gap-6 sm:flex-row">
				<div class="flex items-center space-x-2">
					<Checkbox id="in_stock" bind:checked={formData.in_stock} class="h-4 w-4" />
					<Label for="in_stock" class="cursor-pointer font-normal">In Stock</Label>
				</div>
				<div class="flex items-center space-x-2">
					<Checkbox id="is_active" bind:checked={formData.is_active} class="h-4 w-4" />
					<Label for="is_active" class="cursor-pointer font-normal">Active</Label>
				</div>
			</div>

			<div class="space-y-2">
				<Label for="details">Details</Label>
				<Editor bind:value={formData.details} />
			</div>
		</div>

		<div class="flex flex-col gap-3 border-t pt-4 sm:flex-row">
			<Button type="submit" disabled={isLoading} class="w-full sm:w-auto">
				{isLoading ? 'Saving...' : initialData?.id ? 'Update Product' : 'Create Product'}
			</Button>
			<Button
				type="button"
				variant="outline"
				class="w-full sm:w-auto"
				onclick={() => {
					formData = {
						name: '',
						description: '',
						slug: '',
						price: 0,
						sale_price: undefined,
						in_stock: true,
						sku: '',
						details: '',
						is_active: true,
						related_products: [],
						categories: [],
						image: '',
						gallery: []
					};
				}}
			>
				Reset
			</Button>
		</div>
	</div>
</form>
