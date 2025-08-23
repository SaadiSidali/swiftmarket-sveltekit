<script lang="ts">
	import {
		Card,
		CardContent,
		CardDescription,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Switch } from '$lib/components/ui/switch';
	import { Save, Upload, Bell, Shield, CreditCard, Globe } from '@lucide/svelte';

	let storeName = $state('My Awesome Store');
	let storeDescription = $state('The best online store for all your needs.');
	let storeEmail = $state('admin@store.com');
	let storePhone = $state('+1 (555) 123-4567');
	let emailNotifications = $state(true);
	let smsNotifications = $state(false);
	let orderNotifications = $state(true);
	let marketingEmails = $state(true);

	function onclick(id: string) {
		window.scrollTo({
			top: document.getElementById(id)?.offsetTop,
			behavior: 'smooth'
		});
	}
</script>

<div class="space-y-6">
	<!-- Page header -->
	<div class="flex items-center justify-between">
		<div>
			<h1 class="text-3xl font-bold text-foreground">Settings</h1>
			<p class="text-muted-foreground">Manage your store settings and preferences.</p>
		</div>
	</div>

	<div class="grid gap-6 lg:grid-cols-3">
		<!-- Settings navigation -->
		<div class="lg:col-span-1">
			<Card class="border-border bg-card">
				<CardContent class="pt-6">
					<nav class="space-y-2">
						<button
							onclick={() => onclick('general')}
							class="flex w-full items-center gap-3 rounded-lg bg-primary px-3 py-2 text-left text-sm font-medium text-primary-foreground"
						>
							<Globe class="h-4 w-4" />
							General
						</button>
						<button
							onclick={() => onclick('notifications')}
							class="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm font-medium text-foreground hover:bg-muted"
						>
							<Bell class="h-4 w-4" />
							Notifications
						</button>
						<button
							onclick={() => onclick('security')}
							class="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm font-medium text-foreground hover:bg-muted"
						>
							<Shield class="h-4 w-4" />
							Security
						</button>
						<button
							onclick={() => onclick('billing')}
							class="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm font-medium text-foreground hover:bg-muted"
						>
							<CreditCard class="h-4 w-4" />
							Billing
						</button>
					</nav>
				</CardContent>
			</Card>
		</div>

		<!-- Settings content -->
		<div class="space-y-6 lg:col-span-2">
			<!-- General settings -->
			<Card class="border-border bg-card" id="general">
				<CardHeader>
					<CardTitle class="text-card-foreground">General Settings</CardTitle>
					<CardDescription>Update your store information and branding.</CardDescription>
				</CardHeader>
				<CardContent class="space-y-4">
					<div class="grid gap-4 md:grid-cols-2">
						<div class="space-y-2">
							<Label for="store-name">Store Name</Label>
							<Input id="store-name" bind:value={storeName} />
						</div>
						<div class="space-y-2">
							<Label for="store-email">Store Email</Label>
							<Input id="store-email" type="email" bind:value={storeEmail} />
						</div>
					</div>
					<div class="space-y-2">
						<Label for="store-description">Store Description</Label>
						<Textarea id="store-description" bind:value={storeDescription} rows={3} />
					</div>
					<div class="space-y-2">
						<Label for="store-phone">Phone Number</Label>
						<Input id="store-phone" bind:value={storePhone} />
					</div>
					<div class="space-y-2">
						<Label>Store Logo</Label>
						<div class="flex items-center gap-4">
							<div class="flex h-16 w-16 items-center justify-center rounded-lg bg-muted">
								<span class="text-sm font-medium text-muted-foreground">Logo</span>
							</div>
							<Button variant="outline">
								<Upload class="mr-2 h-4 w-4" />
								Upload Logo
							</Button>
						</div>
					</div>
					<div class="flex justify-end">
						<Button class="bg-primary text-primary-foreground hover:bg-primary/90">
							<Save class="mr-2 h-4 w-4" />
							Save Changes
						</Button>
					</div>
				</CardContent>
			</Card>

			<!-- Notification settings -->
			<Card class="border-border bg-card" id="notifications">
				<CardHeader>
					<CardTitle class="text-card-foreground">Notification Settings</CardTitle>
					<CardDescription>Configure how you receive notifications.</CardDescription>
				</CardHeader>
				<CardContent class="space-y-6">
					<div class="flex items-center justify-between">
						<div class="space-y-0.5">
							<Label>Email Notifications</Label>
							<p class="text-sm text-muted-foreground">Receive notifications via email</p>
						</div>
						<Switch bind:checked={emailNotifications} />
					</div>
					<div class="flex items-center justify-between">
						<div class="space-y-0.5">
							<Label>SMS Notifications</Label>
							<p class="text-sm text-muted-foreground">Receive notifications via SMS</p>
						</div>
						<Switch bind:checked={smsNotifications} />
					</div>
					<div class="flex items-center justify-between">
						<div class="space-y-0.5">
							<Label>Order Notifications</Label>
							<p class="text-sm text-muted-foreground">Get notified about new orders</p>
						</div>
						<Switch bind:checked={orderNotifications} />
					</div>
					<div class="flex items-center justify-between">
						<div class="space-y-0.5">
							<Label>Marketing Emails</Label>
							<p class="text-sm text-muted-foreground">Receive marketing and promotional emails</p>
						</div>
						<Switch bind:checked={marketingEmails} />
					</div>
					<div class="flex justify-end">
						<Button class="bg-primary text-primary-foreground hover:bg-primary/90">
							<Save class="mr-2 h-4 w-4" />
							Save Preferences
						</Button>
					</div>
				</CardContent>
			</Card>

			<!-- Security settings -->
			<Card class="border-border bg-card" id="security">
				<CardHeader>
					<CardTitle class="text-card-foreground">Security Settings</CardTitle>
					<CardDescription>Manage your account security and access.</CardDescription>
				</CardHeader>
				<CardContent class="space-y-4">
					<div class="space-y-2">
						<Label for="current-password">Current Password</Label>
						<Input id="current-password" type="password" />
					</div>
					<div class="grid gap-4 md:grid-cols-2">
						<div class="space-y-2">
							<Label for="new-password">New Password</Label>
							<Input id="new-password" type="password" />
						</div>
						<div class="space-y-2">
							<Label for="confirm-password">Confirm Password</Label>
							<Input id="confirm-password" type="password" />
						</div>
					</div>
					<div class="flex items-center justify-between rounded-lg border border-border p-4">
						<div>
							<p class="font-medium text-foreground">Two-Factor Authentication</p>
							<p class="text-sm text-muted-foreground">
								Add an extra layer of security to your account
							</p>
						</div>
						<Button variant="outline">Enable</Button>
					</div>
					<div class="flex justify-end">
						<Button class="bg-primary text-primary-foreground hover:bg-primary/90">
							<Save class="mr-2 h-4 w-4" />
							Update Password
						</Button>
					</div>
				</CardContent>
			</Card>
		</div>
	</div>
</div>
