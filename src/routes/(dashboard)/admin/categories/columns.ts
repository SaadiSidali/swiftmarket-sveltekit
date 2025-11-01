import { renderComponent, renderSnippet } from '@/components/ui/data-table';
import type { ColumnDef } from '@tanstack/table-core';
import { createRawSnippet } from 'svelte';
import SlugPill from './slug-pill.svelte';
import IdPill from './id-pill.svelte';

export const columns: ColumnDef<Category>[] = [
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
		accessorKey: 'parent',
		header: 'Parent Category',
		cell: ({ row }) => {
			const category = row.original;
			const parentName = category.expand?.parent?.name;
			return parentName || '-';
		}
	},
	{
		header: 'Actions',
		cell: ({ row }) => {
			const id = row.getValue('id');
			return renderSnippet(
				createRawSnippet(() => ({
					render: () =>
						`<a href="/admin/categories/${id}" class="text-primary hover:underline">Edit</a>`
				}))
			);
		}
	}
];
