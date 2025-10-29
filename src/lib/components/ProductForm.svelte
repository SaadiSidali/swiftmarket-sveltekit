<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { Label } from '$lib/components/ui/label';
	import { RichTextComposer } from 'svelte-lexical';
	import { theme } from 'svelte-lexical/dist/themes/default';
	import Editor from './Editor.svelte';
	import UploadImage from './UploadImage.svelte';
	import { X, Plus } from '@lucide/svelte';
	import { cn } from '$lib/utils';
	import ProductFormAddImage from './ProductFormAddImage.svelte';

	interface Product {
		id?: string;
		name: string;
		description: string;
		slug: string;
		price: number;
		sale_price?: number;
		in_stock: boolean;
		sku: string;
		details: string;
		is_active: boolean;
		related_products?: string[];
		categories?: string[];
		image?: string;
		gallery?: string[];
	}

	interface Props {
		initialData?: Product;
		onSubmit: (data: Product) => void;
		isLoading?: boolean;
	}

	let { initialData, onSubmit, isLoading = false }: Props = $props();

	let formData = $state<Product>({
		name: initialData?.name || '',
		description: initialData?.description || '',
		slug: initialData?.slug || '',
		price: initialData?.price || 0,
		sale_price: initialData?.sale_price || undefined,
		in_stock: initialData?.in_stock ?? true,
		sku: initialData?.sku || '',
		details: initialData?.details || '',
		is_active: initialData?.is_active ?? true,
		related_products: initialData?.related_products || [],
		categories: initialData?.categories || [],
		image: initialData?.image || '',
		gallery: initialData?.gallery || [],
		...(initialData?.id && { id: initialData.id })
	});

	function handleSubmit(e: Event) {
		e.preventDefault();
		onSubmit(formData);
	}

	function generateSlug(name: string) {
		return name
			.toLowerCase()
			.trim()
			.replace(/[^\w\s-]/g, '')
			.replace(/\s+/g, '-')
			.replace(/-+/g, '-');
	}

	function handleNameChange(e: Event) {
		const target = e.target as HTMLInputElement;
		formData.name = target.value;
		if (!initialData?.slug) {
			formData.slug = generateSlug(target.value);
		}
	}

	function onImageSelect(media: Media) {
		if (!formData.gallery) {
			formData.gallery = [];
		}
		formData.gallery = [...formData.gallery, media.url];
	}

	function removeImage(index: number) {
		if (formData.gallery) {
			formData.gallery = formData.gallery.filter((_, i) => i !== index);
		}
	}
</script>

<form onsubmit={handleSubmit} class="container mx-auto w-full pt-3 pb-16">
	<div class="space-y-8">
		<div class="space-y-4">
			<h2 class="text-xl font-semibold text-foreground">Gallery</h2>
			<ProductFormAddImage {onImageSelect} {removeImage} gallery={formData.gallery} />

			<h2 class="text-xl font-semibold text-foreground">Basic Information</h2>
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
				<div class="space-y-2">
					<Label for="name">Product Name *</Label>
					<Input
						id="name"
						type="text"
						placeholder="Enter product name"
						bind:value={formData.name}
						onchange={handleNameChange}
						required
						class="w-full"
					/>
				</div>
				<div class="space-y-2">
					<Label for="slug">Slug *</Label>
					<Input
						id="slug"
						type="text"
						placeholder="product-slug"
						bind:value={formData.slug}
						required
						class="w-full"
					/>
				</div>
			</div>

			<div class="space-y-2">
				<Label for="description">Description</Label>
				<Textarea
					id="description"
					placeholder="Enter product description"
					bind:value={formData.description}
					class="min-h-24 w-full"
				/>
			</div>
		</div>

		<div class="space-y-4">
			<h2 class="text-xl font-semibold text-foreground">Pricing</h2>
			<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
				<div class="space-y-2">
					<Label for="price">Price *</Label>
					<Input
						id="price"
						type="number"
						placeholder="0.00"
						bind:value={formData.price}
						step="0.01"
						min="0"
						required
						class="w-full"
					/>
				</div>
				<div class="space-y-2">
					<Label for="sale_price">Sale Price</Label>
					<Input
						id="sale_price"
						type="number"
						placeholder="0.00"
						bind:value={formData.sale_price}
						step="0.01"
						min="0"
						class="w-full"
					/>
				</div>
				<div class="space-y-2">
					<Label for="sku">SKU *</Label>
					<Input
						id="sku"
						type="text"
						placeholder="SKU-001"
						bind:value={formData.sku}
						required
						class="w-full"
					/>
				</div>
			</div>
		</div>

		<div class="space-y-4">
			<h2 class="text-xl font-semibold text-foreground">Inventory</h2>
			<div class="flex flex-col gap-6 sm:flex-row">
				<div class="flex items-center space-x-2">
					<Checkbox id="in_stock" bind:checked={formData.in_stock} class="h-4 w-4" />
					<Label for="in_stock" class="cursor-pointer font-normal">In Stock</Label>
				</div>
				<div class="flex items-center space-x-2">
					<Checkbox id="is_active" bind:checked={formData.is_active} class="h-4 w-4" />
					<Label for="is_active" class="cursor-pointer font-normal">Active</Label>
				</div>
			</div>

			<div class="space-y-2">
				<Label for="details">Details</Label>
				<Editor />
			</div>
		</div>

		<div class="flex flex-col gap-3 border-t pt-4 sm:flex-row">
			<Button type="submit" disabled={isLoading} class="w-full sm:w-auto">
				{isLoading ? 'Saving...' : initialData?.id ? 'Update Product' : 'Create Product'}
			</Button>
			<Button
				type="button"
				variant="outline"
				class="w-full sm:w-auto"
				onclick={() => {
					formData = {
						name: '',
						description: '',
						slug: '',
						price: 0,
						sale_price: undefined,
						in_stock: true,
						sku: '',
						details: '',
						is_active: true,
						related_products: [],
						categories: [],
						image: '',
						gallery: []
					};
				}}
			>
				Reset
			</Button>
		</div>
	</div>
</form>
