<script lang="ts">
	import { onMount, tick } from 'svelte';
	import { X, Image as ImageIcon } from '@lucide/svelte';
	import { createQuery, createMutation, useQueryClient } from '@tanstack/svelte-query';
	import { Cloud, Upload, File as LucideFile } from '@lucide/svelte';
	import {
		getActiveEditor,
		getEditor,
		InsertImage,
		FocusEditor,
		type ImagePayload
	} from 'svelte-lexical';
	import * as Dialog from '$lib/components/ui/dialog';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';

	interface Props {
		showModal?: boolean;
		onfoo?: () => void;
	}

	let { showModal = $bindable(false), onfoo = () => {} }: Props = $props();

	export function open() {
		showModal = true;
	}
	interface UploadedFile {
		id: string;
		name: string;
		size: number;
		uploadedAt: string;
	}

	let dragActive = $state(false);
	let fileInput = $state<HTMLInputElement>();
	const queryClient = useQueryClient();

	const filesQuery = createQuery({
		queryKey: ['uploadedFiles'],
		queryFn: async () => {
			// Simulate API delay
			await new Promise((resolve) => setTimeout(resolve, 500));
			return [
				{ id: '1', name: 'document.pdf', size: 2048000, uploadedAt: '2025-10-20' },
				{ id: '2', name: 'presentation.pptx', size: 5120000, uploadedAt: '2025-10-19' },
				{ id: '3', name: 'spreadsheet.xlsx', size: 1024000, uploadedAt: '2025-10-18' }
			] as UploadedFile[];
		}
	});
	const uploadMutation = createMutation({
		mutationFn: async (file: File) => {
			// Simulate API delay
			await new Promise((resolve) => setTimeout(resolve, 1000));
			return {
				id: Math.random().toString(36).substr(2, 9),
				name: file.name,
				size: file.size,
				uploadedAt: new Date().toISOString().split('T')[0]
			} as UploadedFile;
		},
		onSuccess: (newFile) => {
			// Invalidate and refetch the files query
			queryClient.setQueryData(['uploadedFiles'], (old: UploadedFile[]) => [newFile, ...old]);
		}
	});

	function handleDrag(e: DragEvent) {
		e.preventDefault();
		e.stopPropagation();
		if (e.type === 'dragenter' || e.type === 'dragover') {
			dragActive = true;
		} else if (e.type === 'dragleave') {
			dragActive = false;
		}
	}
	function handleDrop(e: DragEvent) {
		e.preventDefault();
		e.stopPropagation();
		dragActive = false;
		const files = e.dataTransfer?.files;
		if (files && files.length > 0) {
			handleFiles(files);
		}
	}
	function handleFiles(files: FileList) {
		Array.from(files).forEach((file) => {
			$uploadMutation.mutate(file);
		});
	}

	function handleInputChange(e: Event) {
		const input = e.target as HTMLInputElement;
		if (input.files) {
			handleFiles(input.files);
		}
	}
	function formatFileSize(bytes: number): string {
		if (bytes === 0) return '0 Bytes';
		const k = 1024;
		const sizes = ['Bytes', 'KB', 'MB', 'GB'];
		const i = Math.floor(Math.log(bytes) / Math.log(k));
		return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
	}

	let hasModifier = $state(false);

	const editor = getEditor();
	const activeEditor = getActiveEditor();

	onMount(() => {
		hasModifier = false;
		const handler = (e: KeyboardEvent) => {
			hasModifier = e.altKey;
		};
		document.addEventListener('keydown', handler);
		return () => {
			document.removeEventListener('keydown', handler);
		};
	});

	function insertAndClose(payload: ImagePayload) {
		InsertImage($activeEditor, payload);
		closeDialog();
	}

	async function closeDialog() {
		showModal = false;
		await tick();
		FocusEditor(editor);
		onfoo();
	}

	function onSelect(payload: ImagePayload) {
		insertAndClose(payload);
	}
</script>

<Dialog.Root bind:open={showModal}>
	<Dialog.Content class="w-full md:max-w-2xl">
		<Card.Root>
			<Card.Header>
				<Card.Title>File Upload</Card.Title>
				<Card.Description>Upload files or select from previously uploaded files</Card.Description>
			</Card.Header>
			<Card.Content class="space-y-6">
				<!-- Drop Zone -->
				<div
					class="relative rounded-lg border-2 border-dashed transition-colors {dragActive
						? 'border-primary bg-primary/5'
						: 'border-muted-foreground/25 hover:border-muted-foreground/50'}"
					role="button"
					ondragenter={handleDrag}
					ondragover={handleDrag}
					ondragleave={handleDrag}
					ondrop={handleDrop}
					tabindex="0"
				>
					<input
						bind:this={fileInput}
						type="file"
						multiple
						class="hidden"
						onchange={handleInputChange}
					/>

					<button
						onclick={() => fileInput?.click()}
						class="flex w-full cursor-pointer flex-col items-center justify-center gap-3 p-12"
					>
						<div class="rounded-full bg-muted p-3">
							<Cloud class="h-8 w-8 text-muted-foreground" />
						</div>
						<div class="text-center">
							<p class="font-semibold text-foreground">Drag and drop your files here</p>
							<p class="text-sm text-muted-foreground">or click to browse</p>
						</div>
					</button>
				</div>

				<!-- Upload Status -->
				{#if $uploadMutation.isPending}
					<div class="flex items-center gap-2 rounded-lg bg-blue-50 p-3 dark:bg-blue-950">
						<div class="animate-spin">
							<Upload class="h-4 w-4 text-blue-600 dark:text-blue-400" />
						</div>
						<p class="text-sm text-blue-600 dark:text-blue-400">Uploading file...</p>
					</div>
				{/if}

				{#if $uploadMutation.isError}
					<div class="flex items-center gap-2 rounded-lg bg-red-50 p-3 dark:bg-red-950">
						<X class="h-4 w-4 text-red-600 dark:text-red-400" />
						<p class="text-sm text-red-600 dark:text-red-400">Upload failed. Please try again.</p>
					</div>
				{/if}

				<!-- Previously Uploaded Files -->
				<div>
					<h3 class="mb-3 font-semibold text-foreground">Previously Uploaded Files</h3>
					{#if $filesQuery.isPending}
						<p class="text-sm text-muted-foreground">Loading files...</p>
					{:else if $filesQuery.isError}
						<p class="text-sm text-destructive">Failed to load files</p>
					{:else if $filesQuery.data && $filesQuery.data.length > 0}
						<div class="space-y-2">
							{#each $filesQuery.data as file (file.id)}
								<div
									class="flex items-center justify-between rounded-lg border border-border p-3 transition-colors hover:bg-muted/50"
								>
									<div class="flex min-w-0 flex-1 items-center gap-3">
										<LucideFile class="h-5 w-5 shrink-0 text-muted-foreground" />
										<div class="min-w-0">
											<p class="truncate text-sm font-medium text-foreground">{file.name}</p>
											<p class="text-xs text-muted-foreground">
												{formatFileSize(file.size)} • {file.uploadedAt}
											</p>
										</div>
									</div>
									<Button
										variant="ghost"
										size="sm"
										class="shrink-0"
										onclick={() =>
											onSelect({
												src: `/uploads/${file.name}`,
												altText: file.name,
												width: 600,
												height: 400
											})}>Select</Button
									>
								</div>
							{/each}
						</div>
					{:else}
						<p class="text-sm text-muted-foreground">No files uploaded yet</p>
					{/if}
				</div>
			</Card.Content>
		</Card.Root>
	</Dialog.Content>
</Dialog.Root>
