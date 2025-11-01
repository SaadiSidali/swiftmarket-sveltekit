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
	import { getCategoriesQuery } from '../../data/queries.svelte';
	import Table from '@/components/ui/table/table.svelte';
	import CategoriesTable from './CategoriesTable.svelte';

	let page = $state(1);
	let filter = $state('');
</script>

<div class="container mx-auto space-y-6">
	<!-- Page header -->
	<div class="flex items-center justify-between">
		<div>
			<h1 class="text-3xl font-bold text-foreground">Categories</h1>
			<p class="text-muted-foreground">Manage your product categories and hierarchy.</p>
		</div>
		<a href="/admin/categories/new">
			<Button class="bg-primary text-primary-foreground hover:bg-primary/90">
				<Plus class="mr-2 h-4 w-4" />
				Add Category
			</Button>
		</a>
	</div>

	<!-- Filters and search -->
	<Card class="border-border bg-card">
		<CardContent class="pt-6">
			<div class="flex flex-col gap-4 sm:flex-row">
				<div class="relative flex-1">
					<Search class="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
					<Input type="search" placeholder="Search categories..." class="pl-10" />
				</div>
				<Button variant="outline" class="sm:w-auto">
					<Filter class="mr-2 h-4 w-4" />
					Filter
				</Button>
			</div>
		</CardContent>
	</Card>

	<!-- Categories table -->
	<Card class="border-border bg-card">
		<CardHeader>
			<CardTitle class="text-card-foreground">All Categories</CardTitle>
			<CardDescription>A list of all categories in your store.</CardDescription>
		</CardHeader>
		<CardContent>
			<div class="overflow-x-auto">
				<CategoriesTable {filter} {page} />
			</div>
		</CardContent>
	</Card>
</div>
