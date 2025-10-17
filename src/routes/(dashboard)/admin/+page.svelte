<!-- src/routes/admin/+page.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { pb } from '$lib/pocketbase.js';
	import type { RecordModel } from 'pocketbase';

	let stats = $state({
		totalUsers: 0,
		totalRecords: 0,
		recentUsers: [] as RecordModel[]
	});
	let loading = $state(true);

	const { children } = $props();

	onMount(async () => {
		try {
			// Fetch basic stats
			const usersResult = await pb.collection('users').getList(1, 1);
			stats.totalUsers = usersResult.totalItems;

			// Get recent users (last 5)
			const recentUsersResult = await pb.collection('users').getList(1, 5, {
				sort: '-created'
			});
			stats.recentUsers = recentUsersResult.items;

			loading = false;
		} catch (error) {
			console.error('Error loading dashboard data:', error);
			loading = false;
		}
	});
</script>

<div class="space-y-6">
	<!-- Welcome message -->
	<div class="overflow-hidden rounded-lg bg-white shadow">
		<div class="px-4 py-5 sm:p-6">
			<div class="sm:flex sm:items-center sm:justify-between">
				<div>
					<h3 class="text-lg font-medium text-gray-900">Welcome to the Admin Dashboard</h3>
					<p class="mt-1 text-sm text-gray-600">Manage your application from this central hub</p>
				</div>
				<div class="mt-5 sm:mt-0 sm:ml-6 sm:flex sm:flex-shrink-0 sm:items-center">
					<button
						type="button"
						class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
					>
						<svg class="mr-2 -ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 6v6m0 0v6m0-6h6m-6 0H6"
							></path>
						</svg>
						Quick Action
					</button>
				</div>
			</div>
		</div>
	</div>

	<!-- Stats cards -->
	<div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
		<div class="overflow-hidden rounded-lg bg-white shadow">
			<div class="p-5">
				<div class="flex items-center">
					<div class="flex-shrink-0">
						<div class="flex h-8 w-8 items-center justify-center rounded-md bg-indigo-500">
							<svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
								></path>
							</svg>
						</div>
					</div>
					<div class="ml-5 w-0 flex-1">
						<dl>
							<dt class="truncate text-sm font-medium text-gray-500">Total Users</dt>
							<dd class="text-lg font-medium text-gray-900">
								{loading ? '...' : stats.totalUsers}
							</dd>
						</dl>
					</div>
				</div>
			</div>
		</div>

		<div class="overflow-hidden rounded-lg bg-white shadow">
			<div class="p-5">
				<div class="flex items-center">
					<div class="flex-shrink-0">
						<div class="flex h-8 w-8 items-center justify-center rounded-md bg-green-500">
							<svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
								></path>
							</svg>
						</div>
					</div>
					<div class="ml-5 w-0 flex-1">
						<dl>
							<dt class="truncate text-sm font-medium text-gray-500">Total Records</dt>
							<dd class="text-lg font-medium text-gray-900">
								{loading ? '...' : stats.totalRecords}
							</dd>
						</dl>
					</div>
				</div>
			</div>
		</div>

		<div class="overflow-hidden rounded-lg bg-white shadow">
			<div class="p-5">
				<div class="flex items-center">
					<div class="flex-shrink-0">
						<div class="flex h-8 w-8 items-center justify-center rounded-md bg-yellow-500">
							<svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M13 10V3L4 14h7v7l9-11h-7z"
								></path>
							</svg>
						</div>
					</div>
					<div class="ml-5 w-0 flex-1">
						<dl>
							<dt class="truncate text-sm font-medium text-gray-500">System Status</dt>
							<dd class="text-lg font-medium text-green-600">Active</dd>
						</dl>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Recent users table -->
	<div class="overflow-hidden bg-white shadow sm:rounded-lg">
		<div class="px-4 py-5 sm:px-6">
			<h3 class="text-lg leading-6 font-medium text-gray-900">Recent Users</h3>
			<p class="mt-1 max-w-2xl text-sm text-gray-500">Latest registered users in the system</p>
		</div>

		{#if loading}
			<div class="px-4 py-5 sm:p-6">
				<div class="animate-pulse">
					<div class="space-y-3">
						{#each Array(3) as _}
							<div class="h-4 rounded bg-gray-200"></div>
						{/each}
					</div>
				</div>
			</div>
		{:else if stats.recentUsers.length > 0}
			<div class="border-t border-gray-200">
				<dl>
					{#each stats.recentUsers as user, index}
						<div
							class={`px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
						>
							<dt class="text-sm font-medium text-gray-500">
								{user.email}
							</dt>
							<dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
								Joined {new Date(user.created).toLocaleDateString()}
							</dd>
						</div>
					{/each}
				</dl>
			</div>
		{:else}
			<div class="px-4 py-5 sm:p-6">
				<p class="text-sm text-gray-500">No users found</p>
			</div>
		{/if}
	</div>

	<!-- Quick actions grid -->
	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
		<div
			class="group relative rounded-lg bg-white p-6 shadow transition-shadow focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-inset hover:shadow-lg"
		>
			<div>
				<span class="inline-flex rounded-lg bg-indigo-50 p-3 text-indigo-700 ring-4 ring-white">
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
						></path>
					</svg>
				</span>
			</div>
			<div class="mt-8">
				<h3 class="text-lg font-medium">
					<a href="/admin/users" class="focus:outline-none">
						<span class="absolute inset-0" aria-hidden="true"></span>
						Manage Users
					</a>
				</h3>
				<p class="mt-2 text-sm text-gray-500">
					View, edit, and manage user accounts and permissions.
				</p>
			</div>
		</div>

		<div
			class="group relative rounded-lg bg-white p-6 shadow transition-shadow focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-inset hover:shadow-lg"
		>
			<div>
				<span class="inline-flex rounded-lg bg-green-50 p-3 text-green-700 ring-4 ring-white">
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
						></path>
					</svg>
				</span>
			</div>
			<div class="mt-8">
				<h3 class="text-lg font-medium">
					<a href="/admin/analytics" class="focus:outline-none">
						<span class="absolute inset-0" aria-hidden="true"></span>
						View Analytics
					</a>
				</h3>
				<p class="mt-2 text-sm text-gray-500">
					Analyze usage patterns and system performance metrics.
				</p>
			</div>
		</div>

		<div
			class="group relative rounded-lg bg-white p-6 shadow transition-shadow focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-inset hover:shadow-lg"
		>
			<div>
				<span class="inline-flex rounded-lg bg-yellow-50 p-3 text-yellow-700 ring-4 ring-white">
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
						></path>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
						></path>
					</svg>
				</span>
			</div>
			<div class="mt-8">
				<h3 class="text-lg font-medium">
					<a href="/admin/settings" class="focus:outline-none">
						<span class="absolute inset-0" aria-hidden="true"></span>
						System Settings
					</a>
				</h3>
				<p class="mt-2 text-sm text-gray-500">Configure application settings and preferences.</p>
			</div>
		</div>
	</div>
</div>
