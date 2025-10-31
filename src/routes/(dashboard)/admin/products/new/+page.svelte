<script lang="ts">
	import ProductForm from '@/components/ProductForm.svelte';
	import { createProductMutation } from '../../../data/mutations.svelte';

	const mutation = createProductMutation({
		onSuccess(product) {
			console.log('Product created:', product);
		}
	});

	function handleSubmit(formData: any) {
		$mutation.mutate(formData);
	}
</script>

<ProductForm onSubmit={handleSubmit} />
