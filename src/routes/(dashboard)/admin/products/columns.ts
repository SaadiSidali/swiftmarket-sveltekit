import { renderComponent, renderSnippet } from '@/components/ui/data-table';
import type { ColumnDef } from '@tanstack/table-core';
import { createRawSnippet } from 'svelte';
import SlugPill from './slug-pill.svelte';

export const columns: ColumnDef<Product>[] = [
	{
		accessorKey: 'id',
		header: 'ID'
	},
	{
		accessorKey: 'name',
		header: 'Name'
	},
	{
		accessorKey: 'slug',
		header: 'Slug',
		cell: ({ row }) => {
			return renderComponent(SlugPill, { slug: row.getValue('slug') });
		}
	},
	{
		accessorKey: 'price',
		header: 'Price'
	}
];
