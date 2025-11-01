<script lang="ts">
	import ProductForm from '@/components/ProductForm.svelte';
	import { createProductMutation } from '../../../data/mutations.svelte';
	import { toast } from 'svelte-sonner';

	const mutation = createProductMutation({
		onSuccess(product) {
			console.log('Product created:', product);
			toast.success('Product created successfully');
		}
	});

	function handleSubmit(formData: any) {
		$mutation.mutate(formData);
		toast.loading('Creating product...');
	}
</script>

<ProductForm onSubmit={handleSubmit} />
