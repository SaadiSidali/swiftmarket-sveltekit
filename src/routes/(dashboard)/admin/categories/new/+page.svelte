<script lang="ts">
	import CategoryForm from '@/components/CategoryForm.svelte';
	import { createCategoryMutation } from '../../../data/mutations.svelte';
	import { goto } from '$app/navigation';

	const mutation = createCategoryMutation({
		onSuccess(category) {
			console.log('Category created:', category);
			// Redirect to categories list after successful creation
			goto('/admin/categories');
		}
	});

	function handleSubmit(formData: any) {
		$mutation.mutate(formData);
	}
</script>

<div class="container mx-auto py-6">
	<div class="mb-6">
		<h1 class="text-3xl font-bold text-foreground">Create New Category</h1>
		<p class="text-muted-foreground">Add a new category to organize your products.</p>
	</div>

	{#if $mutation.isError}
		<div class="mb-4 rounded-md border border-red-200 bg-red-50 p-4">
			<p class="text-sm text-red-600">
				Failed to create category: {$mutation.error?.message || 'Unknown error'}
			</p>
		</div>
	{/if}

	<CategoryForm onSubmit={handleSubmit} isLoading={$mutation.isPending} />
</div>
