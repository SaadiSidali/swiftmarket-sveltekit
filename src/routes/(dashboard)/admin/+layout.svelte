<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import AppSidebar from '$lib/components/app-sidebar.svelte';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';
	import { Button } from '@/components/ui/button';
	import { SearchIcon } from '@lucide/svelte';

	let { children } = $props();
	const queryClient = new QueryClient();
</script>

<svelte:window
	on:keydown={(e) => {
		if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
			e.preventDefault();
			// TODO: Open search modal
		}
	}}
/>
<svelte:head>
	<title>Admin Dashboard</title>
</svelte:head>

<QueryClientProvider client={queryClient}>
	<Sidebar.Provider>
		<AppSidebar />
		<main class="flex w-full flex-col items-center">
			<header
				class="sticky top-0 z-10 mb-2 flex w-full items-center justify-between border-b bg-background/50 p-4 backdrop-blur-sm"
			>
				<Sidebar.Trigger />
				<div class="relative">
					<div class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
						<SearchIcon class="text-gray-500 dark:text-gray-400" />
					</div>
					<input
						type="text"
						id="simple-search"
						class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
						placeholder="Search ..."
						required
					/>
					<div class="pointer-events-none absolute inset-y-0 end-0 flex items-center pe-3">
						<code class="text-gray-500 dark:text-gray-400">⌘K</code>
					</div>
				</div>
				<div></div>
			</header>
			<div class="container px-3">
				{@render children?.()}
			</div>
		</main>
	</Sidebar.Provider>
</QueryClientProvider>
