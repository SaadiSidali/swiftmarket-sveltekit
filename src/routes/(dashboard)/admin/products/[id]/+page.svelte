<script lang="ts">
	import { getProductQuery } from '../../../data/queries.svelte';
	import { page } from '$app/state';
	import ProductForm from '@/components/ProductForm.svelte';
	import { updateProductMutation } from '../../../data/mutations.svelte';

	const productId = $derived(page.params.id);
	const productQuery = getProductQuery(productId!);

	const mutation = updateProductMutation({
		onSuccess(product) {
			console.log('Product updated:', product);
		}
	});

	function handleSubmit(formData: any) {
		$mutation.mutate({ id: productId!, formData });
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
