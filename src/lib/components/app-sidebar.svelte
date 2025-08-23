<script lang="ts">
	import CalendarIcon from '@lucide/svelte/icons/calendar';
	import { HouseIcon, InboxIcon, SearchIcon, SettingsIcon, PackageIcon } from '@lucide/svelte';

	import * as Sidebar from '$lib/components/ui/sidebar/index.js';

	// Menu items.
	const items = [
		{
			title: 'Home',
			url: '/admin',
			icon: HouseIcon
		},
		{
			title: 'Orders',
			url: '/admin/orders',
			icon: InboxIcon
		},
		{
			title: 'Products',
			url: '/admin/products',
			icon: PackageIcon
		},

		{
			title: 'Settings',
			url: '/admin/settings',
			icon: SettingsIcon
		}
	];
</script>

<Sidebar.Root>
	<Sidebar.Content>
		<Sidebar.Group>
			<Sidebar.GroupLabel>Application</Sidebar.GroupLabel>
			<Sidebar.GroupContent>
				<Sidebar.Menu>
					{#each items as item (item.title)}
						<Sidebar.MenuItem>
							<Sidebar.MenuButton>
								{#snippet child({ props })}
									<a href={item.url} {...props}>
										<item.icon />
										<span>{item.title}</span>
									</a>
								{/snippet}
							</Sidebar.MenuButton>
						</Sidebar.MenuItem>
					{/each}
				</Sidebar.Menu>
			</Sidebar.GroupContent>
		</Sidebar.Group>
	</Sidebar.Content>
</Sidebar.Root>
