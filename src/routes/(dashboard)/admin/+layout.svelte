<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import AppSidebar from '$lib/components/app-sidebar.svelte';
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';

	let { children } = $props();
	const queryClient = new QueryClient();
</script>

<QueryClientProvider client={queryClient}>
	<Sidebar.Provider>
		<AppSidebar />
		<Sidebar.Trigger />
		<main class="container mx-auto p-4">
			{@render children?.()}
		</main>
	</Sidebar.Provider>
</QueryClientProvider>
