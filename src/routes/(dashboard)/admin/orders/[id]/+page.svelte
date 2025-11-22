<script lang="ts">
	import { formatCurrency } from '$lib/utils';
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Separator } from '$lib/components/ui/separator';
	import { Button } from '$lib/components/ui/button';
	import { ArrowLeft } from '@lucide/svelte';

	let { data } = $props();
	let order = $derived(data.order);
	let products = $derived(data.products);

	function getStatusColor(status: string) {
		switch (status.toLowerCase()) {
			case 'pending':
				return 'bg-yellow-500 hover:bg-yellow-600';
			case 'confirmed':
				return 'bg-blue-500 hover:bg-blue-600';
			case 'shipped':
				return 'bg-purple-500 hover:bg-purple-600';
			case 'delivered':
				return 'bg-green-500 hover:bg-green-600';
			case 'cancelled':
				return 'bg-red-500 hover:bg-red-600';
			default:
				return 'bg-gray-500 hover:bg-gray-600';
		}
	}
</script>

<div class="container mx-auto py-10">
	<div class="mb-6 flex items-center gap-4">
		<Button variant="outline" size="icon" href="/admin/orders">
			<ArrowLeft class="h-4 w-4" />
		</Button>
		<h1 class="text-3xl font-bold tracking-tight">Order Details</h1>
	</div>

	{#if order}
		<div class="grid gap-6 md:grid-cols-2">
			<!-- Order Info -->
			<Card.Root>
				<Card.Header>
					<Card.Title>Order Information</Card.Title>
				</Card.Header>
				<Card.Content class="space-y-4">
					<div class="flex justify-between">
						<span class="font-medium text-muted-foreground">Order ID</span>
						<span class="font-mono">{order.id}</span>
					</div>
					<Separator />
					<div class="flex justify-between">
						<span class="font-medium text-muted-foreground">Date</span>
						<span>{new Date(order.created).toLocaleString()}</span>
					</div>
					<Separator />
					<div class="flex items-center justify-between">
						<span class="font-medium text-muted-foreground">Status</span>
						<Badge class={getStatusColor(order.status)}>{order.status}</Badge>
					</div>
				</Card.Content>
			</Card.Root>

			<!-- Customer Info -->
			<Card.Root>
				<Card.Header>
					<Card.Title>Customer Information</Card.Title>
				</Card.Header>
				<Card.Content class="space-y-4">
					<div class="flex justify-between">
						<span class="font-medium text-muted-foreground">Name</span>
						<span>{order.fullName}</span>
					</div>
					<Separator />
					<div class="flex justify-between">
						<span class="font-medium text-muted-foreground">Phone</span>
						<span>{order.phone}</span>
					</div>
					<Separator />
					<div class="flex justify-between">
						<span class="font-medium text-muted-foreground">Location</span>
						<span>{order.city}, {order.wilaya}</span>
					</div>
					{#if order.address}
						<Separator />
						<div class="flex justify-between">
							<span class="font-medium text-muted-foreground">Address</span>
							<span>{order.address}</span>
						</div>
					{/if}
				</Card.Content>
			</Card.Root>

			<!-- Order Items -->
			<Card.Root class="md:col-span-2">
				<Card.Header>
					<Card.Title>Order Items</Card.Title>
				</Card.Header>
				<Card.Content>
					<div class="relative w-full overflow-auto">
						<table class="w-full caption-bottom text-sm">
							<thead class="[&_tr]:border-b">
								<tr
									class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
								>
									<th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground"
										>Product</th
									>
									<th class="h-12 px-4 text-right align-middle font-medium text-muted-foreground"
										>Price</th
									>
									<th class="h-12 px-4 text-right align-middle font-medium text-muted-foreground"
										>Quantity</th
									>
									<th class="h-12 px-4 text-right align-middle font-medium text-muted-foreground"
										>Total</th
									>
								</tr>
							</thead>
							<tbody class="[&_tr:last-child]:border-0">
								{#each products as item}
									<tr
										class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
									>
										<td class="p-4 align-middle">
											<div class="flex flex-col">
												<span class="font-medium">{item.product?.name || 'Unknown Product'}</span>
												<span class="text-xs text-muted-foreground">{item.id}</span>
											</div>
										</td>
										<td class="p-4 text-right align-middle">
											{formatCurrency(item.product?.price || 0)}
										</td>
										<td class="p-4 text-right align-middle">{item.quantity}</td>
										<td class="p-4 text-right align-middle">
											{formatCurrency((item.product?.price || 0) * item.quantity)}
										</td>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
				</Card.Content>
			</Card.Root>
		</div>
	{:else}
		<div class="flex h-[400px] items-center justify-center rounded-lg border border-dashed">
			<p class="text-muted-foreground">Order not found</p>
		</div>
	{/if}
</div>
