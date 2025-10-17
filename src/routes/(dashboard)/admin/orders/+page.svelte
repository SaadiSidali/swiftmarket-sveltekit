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
	import { Search, Filter, Download, Eye, MoreHorizontal } from '@lucide/svelte';

	// Sample order data
	const orders = [
		{
			id: '#3210',
			customer: 'Olivia Martin',
			email: 'olivia.martin@email.com',
			date: '2024-01-15',
			amount: '$42.25',
			status: 'completed',
			items: 2
		},
		{
			id: '#3209',
			customer: 'Jackson Lee',
			email: 'jackson.lee@email.com',
			date: '2024-01-14',
			amount: '$74.99',
			status: 'processing',
			items: 1
		},
		{
			id: '#3208',
			customer: 'Isabella Nguyen',
			email: 'isabella.nguyen@email.com',
			date: '2024-01-14',
			amount: '$99.99',
			status: 'completed',
			items: 3
		},
		{
			id: '#3207',
			customer: 'William Kim',
			email: 'will@email.com',
			date: '2024-01-13',
			amount: '$39.95',
			status: 'pending',
			items: 1
		},
		{
			id: '#3206',
			customer: 'Sofia Davis',
			email: 'sofia.davis@email.com',
			date: '2024-01-13',
			amount: '$19.99',
			status: 'completed',
			items: 1
		},
		{
			id: '#3205',
			customer: 'Michael Johnson',
			email: 'michael.j@email.com',
			date: '2024-01-12',
			amount: '$156.50',
			status: 'shipped',
			items: 4
		}
	];

	function getStatusColor(status: string) {
		switch (status) {
			case 'completed':
				return 'bg-green-100 text-green-800';
			case 'processing':
				return 'bg-blue-100 text-blue-800';
			case 'pending':
				return 'bg-yellow-100 text-yellow-800';
			case 'shipped':
				return 'bg-purple-100 text-purple-800';
			case 'cancelled':
				return 'bg-red-100 text-red-800';
			default:
				return 'bg-gray-100 text-gray-800';
		}
	}

	function formatDate(dateString: string) {
		return new Date(dateString).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		});
	}
</script>

<div class="container mx-auto space-y-6">
	<!-- Page header -->
	<div class="flex items-center justify-between">
		<div>
			<h1 class="text-3xl font-bold text-foreground">Orders</h1>
			<p class="text-muted-foreground">Track and manage customer orders.</p>
		</div>
		<Button variant="outline">
			<Download class="mr-2 h-4 w-4" />
			Export
		</Button>
	</div>

	<!-- Order stats -->
	<div class="grid gap-6 md:grid-cols-4">
		<Card class="border-border bg-card">
			<CardHeader class="pb-2">
				<CardTitle class="text-sm font-medium text-card-foreground">Total Orders</CardTitle>
			</CardHeader>
			<CardContent>
				<div class="text-2xl font-bold text-card-foreground">2,350</div>
				<p class="text-xs text-muted-foreground">+12% from last month</p>
			</CardContent>
		</Card>
		<Card class="border-border bg-card">
			<CardHeader class="pb-2">
				<CardTitle class="text-sm font-medium text-card-foreground">Pending</CardTitle>
			</CardHeader>
			<CardContent>
				<div class="text-2xl font-bold text-card-foreground">23</div>
				<p class="text-xs text-muted-foreground">Awaiting processing</p>
			</CardContent>
		</Card>
		<Card class="border-border bg-card">
			<CardHeader class="pb-2">
				<CardTitle class="text-sm font-medium text-card-foreground">Processing</CardTitle>
			</CardHeader>
			<CardContent>
				<div class="text-2xl font-bold text-card-foreground">45</div>
				<p class="text-xs text-muted-foreground">Being prepared</p>
			</CardContent>
		</Card>
		<Card class="border-border bg-card">
			<CardHeader class="pb-2">
				<CardTitle class="text-sm font-medium text-card-foreground">Completed</CardTitle>
			</CardHeader>
			<CardContent>
				<div class="text-2xl font-bold text-card-foreground">2,282</div>
				<p class="text-xs text-muted-foreground">Successfully delivered</p>
			</CardContent>
		</Card>
	</div>

	<!-- Filters and search -->
	<Card class="border-border bg-card">
		<CardContent class="pt-6">
			<div class="flex flex-col gap-4 sm:flex-row">
				<div class="relative flex-1">
					<Search class="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
					<Input type="search" placeholder="Search orders..." class="pl-10" />
				</div>
				<Button variant="outline" class="sm:w-auto">
					<Filter class="mr-2 h-4 w-4" />
					Filter
				</Button>
			</div>
		</CardContent>
	</Card>

	<!-- Orders table -->
	<Card class="border-border bg-card">
		<CardHeader>
			<CardTitle class="text-card-foreground">Recent Orders</CardTitle>
			<CardDescription>A list of recent orders from your customers.</CardDescription>
		</CardHeader>
		<CardContent>
			<div class="overflow-x-auto">
				<table class="w-full">
					<thead>
						<tr class="border-b border-border">
							<th class="px-4 py-3 text-left font-medium text-foreground">Order</th>
							<th class="px-4 py-3 text-left font-medium text-foreground">Customer</th>
							<th class="px-4 py-3 text-left font-medium text-foreground">Date</th>
							<th class="px-4 py-3 text-left font-medium text-foreground">Items</th>
							<th class="px-4 py-3 text-left font-medium text-foreground">Amount</th>
							<th class="px-4 py-3 text-left font-medium text-foreground">Status</th>
							<th class="px-4 py-3 text-left font-medium text-foreground">Actions</th>
						</tr>
					</thead>
					<tbody>
						{#each orders as order}
							<tr class="border-b border-border hover:bg-muted/50">
								<td class="px-4 py-4">
									<div>
										<p class="font-medium text-foreground">{order.id}</p>
									</div>
								</td>
								<td class="px-4 py-4">
									<div>
										<p class="font-medium text-foreground">{order.customer}</p>
										<p class="text-sm text-muted-foreground">{order.email}</p>
									</div>
								</td>
								<td class="px-4 py-4 text-foreground">{formatDate(order.date)}</td>
								<td class="px-4 py-4 text-foreground">{order.items}</td>
								<td class="px-4 py-4 font-medium text-foreground">{order.amount}</td>
								<td class="px-4 py-4">
									<Badge class={getStatusColor(order.status)}>
										{order.status}
									</Badge>
								</td>
								<td class="px-4 py-4">
									<div class="flex items-center space-x-2">
										<Button variant="ghost" size="sm">
											<Eye class="h-4 w-4" />
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
