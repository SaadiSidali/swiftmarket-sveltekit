<script lang="ts">
	import { formatCurrency } from '@/utils';

	const { product }: { product: Product } = $props();
</script>

<h1 class="mt-2 text-2xl font-extrabold md:text-4xl">{product.name}</h1>
<div class="flex items-end gap-2">
	{#if product.sale_price === 0}
		<span class="text-xl">{formatCurrency(product.price)}</span>
	{:else}
		<span class="text-xl text-red-600">{formatCurrency(product.sale_price)}</span>
		<span class=" text-gray-600 line-through">{formatCurrency(product.price)}</span>
	{/if}
</div>

<div class="flex flex-col gap-1">
	<p class="font-medium">Description</p>
	<p class="text-sm text-gray-600">{product.description}</p>
</div>
