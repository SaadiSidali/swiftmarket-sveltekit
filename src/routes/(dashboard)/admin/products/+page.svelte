<script lang="ts">
	import {
		Card,
		CardContent,
		CardDescription,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import { Input } from '$lib/components/ui/input';
	import { Plus, Search, Filter, MoreHorizontal, Edit, Trash2 } from '@lucide/svelte';

	// Sample product data
	const products = [
		{
			id: 1,
			name: 'Wireless Headphones',
			category: 'Electronics',
			price: '$99.99',
			stock: 45,
			status: 'active',
			image: '/placeholder.svg?height=60&width=60'
		},
		{
			id: 2,
			name: 'Cotton T-Shirt',
			category: 'Clothing',
			price: '$24.99',
			stock: 120,
			status: 'active',
			image: '/placeholder.svg?height=60&width=60'
		},
		{
			id: 3,
			name: 'Coffee Mug',
			category: 'Home & Garden',
			price: '$12.99',
			stock: 0,
			status: 'out-of-stock',
			image: '/placeholder.svg?height=60&width=60'
		},
		{
			id: 4,
			name: 'Smartphone Case',
			category: 'Electronics',
			price: '$19.99',
			stock: 78,
			status: 'active',
			image: '/placeholder.svg?height=60&width=60'
		},
		{
			id: 5,
			name: 'Running Shoes',
			category: 'Sports',
			price: '$89.99',
			stock: 23,
			status: 'low-stock',
			image: '/placeholder.svg?height=60&width=60'
		}
	];

	function getStatusColor(status: string) {
		switch (status) {
			case 'active':
				return 'bg-green-100 text-green-800';
			case 'low-stock':
				return 'bg-yellow-100 text-yellow-800';
			case 'out-of-stock':
				return 'bg-red-100 text-red-800';
			default:
				return 'bg-gray-100 text-gray-800';
		}
	}

	function getStatusText(status: string) {
		switch (status) {
			case 'active':
				return 'Active';
			case 'low-stock':
				return 'Low Stock';
			case 'out-of-stock':
				return 'Out of Stock';
			default:
				return status;
		}
	}
</script>

<div class="space-y-6">
	<!-- Page header -->
	<div class="flex items-center justify-between">
		<div>
			<h1 class="text-3xl font-bold text-foreground">Products</h1>
			<p class="text-muted-foreground">Manage your product inventory and listings.</p>
		</div>
		<Button class="bg-primary text-primary-foreground hover:bg-primary/90">
			<Plus class="mr-2 h-4 w-4" />
			Add Product
		</Button>
	</div>

	<!-- Filters and search -->
	<Card class="border-border bg-card">
		<CardContent class="pt-6">
			<div class="flex flex-col gap-4 sm:flex-row">
				<div class="relative flex-1">
					<Search class="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
					<Input type="search" placeholder="Search products..." class="pl-10" />
				</div>
				<Button variant="outline" class="sm:w-auto">
					<Filter class="mr-2 h-4 w-4" />
					Filter
				</Button>
			</div>
		</CardContent>
	</Card>

	<!-- Products table -->
	<Card class="border-border bg-card">
		<CardHeader>
			<CardTitle class="text-card-foreground">All Products</CardTitle>
			<CardDescription>A list of all products in your store.</CardDescription>
		</CardHeader>
		<CardContent>
			<div class="overflow-x-auto">
				<table class="w-full">
					<thead>
						<tr class="border-b border-border">
							<th class="px-4 py-3 text-left font-medium text-foreground">Product</th>
							<th class="px-4 py-3 text-left font-medium text-foreground">Category</th>
							<th class="px-4 py-3 text-left font-medium text-foreground">Price</th>
							<th class="px-4 py-3 text-left font-medium text-foreground">Stock</th>
							<th class="px-4 py-3 text-left font-medium text-foreground">Status</th>
							<th class="px-4 py-3 text-left font-medium text-foreground">Actions</th>
						</tr>
					</thead>
					<tbody>
						{#each products as product}
							<tr class="border-b border-border hover:bg-muted/50">
								<td class="px-4 py-4">
									<div class="flex items-center space-x-3">
										<img
											src={product.image || '/placeholder.svg'}
											alt={product.name}
											class="h-12 w-12 rounded-lg object-cover"
										/>
										<div>
											<p class="font-medium text-foreground">{product.name}</p>
											<p class="text-sm text-muted-foreground">ID: {product.id}</p>
										</div>
									</div>
								</td>
								<td class="px-4 py-4 text-foreground">{product.category}</td>
								<td class="px-4 py-4 font-medium text-foreground">{product.price}</td>
								<td class="px-4 py-4 text-foreground">{product.stock}</td>
								<td class="px-4 py-4">
									<Badge class={getStatusColor(product.status)}>
										{getStatusText(product.status)}
									</Badge>
								</td>
								<td class="px-4 py-4">
									<div class="flex items-center space-x-2">
										<Button variant="ghost" size="sm">
											<Edit class="h-4 w-4" />
										</Button>
										<Button variant="ghost" size="sm">
											<Trash2 class="h-4 w-4" />
										</Button>
										<Button variant="ghost" size="sm">
											<MoreHorizontal class="h-4 w-4" />
										</Button>
									</div>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</CardContent>
	</Card>
</div>
