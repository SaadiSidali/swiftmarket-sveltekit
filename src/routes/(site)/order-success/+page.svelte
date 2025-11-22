<script lang="ts">
	import { onMount } from 'svelte';

	let countdown = $state(5);

	onMount(() => {
		const interval = setInterval(() => {
			countdown--;
			if (countdown === 0) {
				window.location.href = '/';
			}
		}, 1000);

		return () => clearInterval(interval);
	});
</script>

<div
	class="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 px-4"
>
	<div class="w-full max-w-md space-y-6 rounded-2xl bg-white p-8 text-center shadow-xl">
		<!-- Success Icon -->
		<div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
			<svg class="h-12 w-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"
				></path>
			</svg>
		</div>

		<!-- Success Message -->
		<div class="space-y-2">
			<h1 class="text-3xl font-bold text-gray-900">Order Placed Successfully!</h1>
			<p class="text-lg text-gray-600">Thank you for your order.</p>
		</div>

		<!-- Contact Message -->
		<div class="rounded-lg bg-blue-50 p-4">
			<p class="text-gray-700">We'll contact you soon to confirm your order details.</p>
		</div>

		<!-- Countdown -->
		<p class="text-sm text-gray-500">
			Redirecting to home page in <span class="font-semibold text-gray-700">{countdown}</span> seconds...
		</p>

		<!-- Manual Redirect Button -->
		<a
			href="/"
			class="inline-block w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-blue-700"
		>
			Return to Home
		</a>
	</div>
</div>
