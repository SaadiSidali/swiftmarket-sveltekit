<script lang="ts">
	import ProductForm from '@/components/ProductForm.svelte';
	import { createProductMutation } from '../../../data/mutations.svelte';
	import { toast } from 'svelte-sonner';
	import { QueryClient } from '@tanstack/svelte-query';

	const queryClient = new QueryClient();

	const mutation = createProductMutation({
		onSuccess(product) {
			console.log('Product created:', product);
			toast.success('Product created successfully');
			queryClient.refetchQueries({
				queryKey: ['products']
			});
		}
	});

	function handleSubmit(formData: any) {
		$mutation.mutate(formData);
		toast.loading('Creating product...');
	}
</script>

<ProductForm onSubmit={handleSubmit} />
