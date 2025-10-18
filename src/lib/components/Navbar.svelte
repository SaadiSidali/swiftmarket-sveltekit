<script lang="ts">
	import { goto } from '$app/navigation';
	import { Menu, Search, X } from '@lucide/svelte';

	let sidebarOpened = $state(false);
	let searchMode = $state(false);
	let searchInput = $state<HTMLInputElement | null>(null);

	async function toggleSearch() {
		searchMode = !searchMode;
		if (searchMode) {
			setTimeout(() => searchInput?.focus(), 0);
		}
	}

	function handleSearchKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			searchMode = false;
		}
		if (e.key !== 'Enter') return;
		searchMode = false;
		goto(`/s?q=${encodeURIComponent(searchInput?.value || '')}`);
	}
</script>

<nav class="sticky top-0 z-20 bg-[#282828] text-white">
	<div class="mx-auto max-w-7xl">
		<div class="flex items-center justify-between py-4">
			{#if !searchMode}
				<div class="flex items-center gap-4">
					<button
						class="mx-5 transition-opacity hover:opacity-80"
						aria-label="Menu"
						onclick={() => (sidebarOpened = !sidebarOpened)}
					>
						<Menu class="h-6 w-6" />
					</button>
					<a class="text-xl font-extrabold" href="/">SwiftMarket</a>
				</div>
				<!-- <div class="flex items-center gap-6">
					<a class="underline-offset-4 hover:underline" href="/shop/all">Shop</a>
					<a class="underline-offset-4 hover:underline" href="#!">Blog</a>
				</div> -->
				<div class="mx-5">
					<button
						class="transition-opacity hover:opacity-80"
						aria-label="Search"
						onclick={toggleSearch}
					>
						<Search class="h-6 w-6" />
					</button>
				</div>
			{:else}
				<div class="mx-5 flex w-full items-center gap-4">
					<input
						bind:this={searchInput}
						type="text"
						placeholder="Search..."
						class="flex-1 rounded-lg bg-[#3a3a3a] px-4 py-2 text-white focus:ring-2 focus:ring-white/30 focus:outline-none"
						onkeydown={handleSearchKeydown}
					/>
					<button
						class="transition-opacity hover:opacity-80"
						aria-label="Close search"
						onclick={() => (searchMode = false)}
					>
						<X class="h-6 w-6" />
					</button>
				</div>
			{/if}
		</div>
	</div>
</nav>

{#if sidebarOpened}
	<div class="fixed inset-0 z-20 bg-black/50" onclick={() => (sidebarOpened = false)}></div>
	<aside class="fixed top-0 left-0 z-30 h-full w-64 bg-[#282828] text-white shadow-xl">
		<div class="flex items-center justify-between border-b border-white/10 p-5">
			<span class="text-xl font-extrabold">Menu</span>
			<button
				class="transition-opacity hover:opacity-80"
				aria-label="Close menu"
				onclick={() => (sidebarOpened = false)}
			>
				<X class="h-6 w-6" />
			</button>
		</div>
		<nav class="flex flex-col gap-4 p-5">
			<a class="text-lg underline-offset-4 hover:underline" href="/">Home</a>
			<a class="text-lg underline-offset-4 hover:underline" href="/shop/all">Shop</a>
			<a class="text-lg underline-offset-4 hover:underline" href="#!">Blog</a>
		</nav>
	</aside>
{/if}
