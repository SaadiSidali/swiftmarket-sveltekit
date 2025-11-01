<script lang="ts">
	import { getProductQuery } from '../../../data/queries.svelte';
	import { page } from '$app/state';
	import ProductForm from '@/components/ProductForm.svelte';
	import { updateProductMutation } from '../../../data/mutations.svelte';
	import { toast } from 'svelte-sonner';
	import { QueryClient } from '@tanstack/svelte-query';

	const productId = $derived(page.params.id);
	const productQuery = $derived(getProductQuery(productId!));

	const queryClient = new QueryClient();

	const mutation = updateProductMutation({
		async onSuccess(product) {
			console.log('Product updated:', product);
			toast.success('Product updated successfully');
			await queryClient.refetchQueries({
				queryKey: ['products']
			});
			await queryClient.refetchQueries({
				queryKey: ['product', productId]
			});
		}
	});

	function handleSubmit(formData: any) {
		$mutation.mutate({ id: productId!, formData });
		toast.loading('Updating product...');
	}
</script>

{#if $productQuery.isLoading}
	<p>Loading product...</p>
{:else if $productQuery.isError}
	<p class="text-red-600">Failed to load product.</p>
{:else}
	<ProductForm
		initialData={{ ...$productQuery.data, gallery: $productQuery.data?.expand?.gallery ?? [] }}
		onSubmit={handleSubmit}
	/>
{/if}
