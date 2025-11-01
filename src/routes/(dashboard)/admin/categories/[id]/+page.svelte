<script lang="ts">
	import { getCategoryQuery } from '../../../data/queries.svelte';
	import { page } from '$app/state';
	import CategoryForm from '@/components/CategoryForm.svelte';
	import { updateCategoryMutation } from '../../../data/mutations.svelte';
	import { goto } from '$app/navigation';

	const categoryId = $derived(page.params.id);

	let categoryQuery = $derived(getCategoryQuery(categoryId!));

	const mutation = updateCategoryMutation({
		onSuccess(category) {
			console.log('Category updated:', category);
			// Redirect to categories list after successful update
			goto('/admin/categories');
		}
	});

	function handleSubmit(formData: any) {
		$mutation.mutate({ id: categoryId!, formData });
	}
</script>

<div class="container mx-auto py-6">
	<div class="mb-6">
		<h1 class="text-3xl font-bold text-foreground">Edit Category</h1>
		<p class="text-muted-foreground">Update the category information.</p>
	</div>

	{#if $mutation.isError}
		<div class="mb-4 rounded-md border border-red-200 bg-red-50 p-4">
			<p class="text-sm text-red-600">
				Failed to update category: {$mutation.error?.message || 'Unknown error'}
			</p>
		</div>
	{/if}

	{#if $categoryQuery.isLoading}
		<div class="flex items-center justify-center py-12">
			<p class="text-muted-foreground">Loading category...</p>
		</div>
	{:else if $categoryQuery.isError}
		<div class="rounded-md border border-red-200 bg-red-50 p-4">
			<p class="text-red-600">
				Failed to load category: {$categoryQuery.error?.message || 'Unknown error'}
			</p>
		</div>
	{:else}
		<CategoryForm
			initialData={$categoryQuery.data}
			onSubmit={handleSubmit}
			isLoading={$mutation.isPending}
		/>
	{/if}
</div>
