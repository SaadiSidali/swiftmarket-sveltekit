<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { getAllCategoriesQuery } from '../../routes/(dashboard)/data/queries.svelte';

	interface Props {
		initialData?: Category;
		onSubmit: (data: any) => void;
		isLoading?: boolean;
	}

	let { initialData, onSubmit, isLoading = false }: Props = $props();

	// Fetch all categories for parent selection
	const allCategoriesQuery = getAllCategoriesQuery();

	let formData = $state<{
		name: string;
		slug: string;
		parent: string;
	}>({
		name: initialData?.name || '',
		slug: initialData?.slug || '',
		parent: initialData?.parent || ''
	});

	function handleSubmit(e: Event) {
		e.preventDefault();
		onSubmit(formData);
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

	// Filter out current category from parent options to prevent circular reference
	let availableParentCategories = $derived(
		$allCategoriesQuery.data?.filter((cat) => cat.id !== initialData?.id) || []
	);
</script>

<form onsubmit={handleSubmit} class="container mx-auto w-full pt-3 pb-16">
	<div class="space-y-8">
		<div class="space-y-4">
			<h2 class="text-xl font-semibold text-foreground">Category Information</h2>

			<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
				<div class="space-y-2">
					<Label for="name">Category Name *</Label>
					<Input
						id="name"
						type="text"
						placeholder="Enter category name"
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
						placeholder="category-slug"
						bind:value={formData.slug}
						required
						class="w-full"
					/>
				</div>
			</div>

			<div class="space-y-2">
				<Label for="parent">Parent Category</Label>
				{#if $allCategoriesQuery.isLoading}
					<p class="text-sm text-muted-foreground">Loading categories...</p>
				{:else if $allCategoriesQuery.isError}
					<p class="text-sm text-red-600">Failed to load categories.</p>
				{:else}
					<select
						id="parent"
						bind:value={formData.parent}
						class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
					>
						<option value="">None (Top Level)</option>
						{#each availableParentCategories as category (category.id)}
							<option value={category.id}>
								{category.name || 'Unnamed Category'}
							</option>
						{/each}
					</select>
					<p class="text-sm text-muted-foreground">
						Leave empty to create a top-level category. Select a parent to create a subcategory.
					</p>
				{/if}
			</div>
		</div>

		<div class="flex flex-col gap-3 border-t pt-4 sm:flex-row">
			<Button type="submit" disabled={isLoading} class="w-full sm:w-auto">
				{isLoading ? 'Saving...' : initialData?.id ? 'Update Category' : 'Create Category'}
			</Button>
			<Button
				type="button"
				variant="outline"
				class="w-full sm:w-auto"
				onclick={() => {
					formData = {
						name: '',
						slug: '',
						parent: ''
					};
				}}
			>
				Reset
			</Button>
		</div>
	</div>
</form>
```
