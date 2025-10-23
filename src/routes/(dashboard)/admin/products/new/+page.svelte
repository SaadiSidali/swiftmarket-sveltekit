<script lang="ts">
	import ProductForm from '@/components/ProductForm.svelte';
</script>

<ProductForm onSubmit={(data) => console.log(data)} />
