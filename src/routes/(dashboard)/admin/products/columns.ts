import { renderComponent, renderSnippet } from '@/components/ui/data-table';
import type { ColumnDef } from '@tanstack/table-core';
import { createRawSnippet } from 'svelte';
import SlugPill from './slug-pill.svelte';
import IdPill from './id-pill.svelte';

export const columns: ColumnDef<Product>[] = [
	{
		accessorKey: 'id',
		header: 'ID',
		cell: ({ row }) => {
			return renderComponent(IdPill, { id: row.getValue('id') });
		}
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
	},
	{
		accessorKey: 'in_stock',
		header: 'In Stock'
	},
	{
		header: 'Actions',
		cell: ({ row }) => {
			const id = row.getValue('id');
			return renderSnippet(
				createRawSnippet(() => ({
					render: () =>
						`<a href="/admin/products/${id}" class="text-primary hover:underline">Edit</a>`
				}))
			);
		}
	}
];
