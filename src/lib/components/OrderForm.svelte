<script lang="ts">
	import { WILAYAS, CITIES } from '@/wilayasAndCities';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	const { data } = $props();
	let product = $derived(data.product);

	onMount(() => {
		// load captcha script if needed
		if (data.config?.use_captcha) {
			// find if script already exists
			const existingScript = document.querySelector(
				`script[src="https://www.google.com/recaptcha/api.js?render=${data.config.captcha_site_key}"]`
			);
			if (!existingScript) {
				const script = document.createElement('script');
				script.src = `https://www.google.com/recaptcha/api.js?render=${data.config.captcha_site_key}`;
				document.head.appendChild(script);
			}
		}
	});

	let selectedWilaya = $state<string | undefined>();
	let selectedCity = $state<string | undefined>();
	let name = $state('');
	let phoneNumber = $state('');
	let address = $state('');
	let quantity = $state(1);
	let isLoading = $state(false);
	let errors = $state({ name: '', phoneNumber: '', wilaya: '', city: '' });

	const availableCities = $derived.by(() => {
		if (!selectedWilaya) return [];
		return CITIES.filter((city) => city.wilaya_name === selectedWilaya);
	});

	function validateForm(): boolean {
		errors = { name: '', phoneNumber: '', wilaya: '', city: '' };
		let isValid = true;

		if (!name.trim()) {
			errors.name = 'Name is required';
			isValid = false;
		}

		const phoneRegex = /^(0)(5|6|7)[0-9]{8}$/;
		if (!phoneNumber.trim()) {
			errors.phoneNumber = 'Phone number is required';
			isValid = false;
		} else if (!phoneRegex.test(phoneNumber)) {
			errors.phoneNumber = 'Invalid phone number format (e.g., 0555123456)';
			isValid = false;
		}

		if (!selectedWilaya) {
			errors.wilaya = 'Wilaya is required';
			isValid = false;
		}

		if (!selectedCity) {
			errors.city = 'City is required';
			isValid = false;
		}

		return isValid;
	}

	function handleQuantityChange(delta: number) {
		quantity = Math.max(1, quantity + delta);
	}

	async function handleSubmit(e: Event) {
		e.preventDefault();
		if (!validateForm()) return;

		isLoading = true;
		try {
			let recaptchaToken = '';

			// Generate reCAPTCHA token if captcha is enabled
			if (data.config?.use_captcha && data.config.captcha_site_key) {
				try {
					// @ts-ignore - grecaptcha is loaded from external script
					recaptchaToken = await grecaptcha.execute(data.config.captcha_site_key, {
						action: 'submit_order'
					});
				} catch (err) {
					console.error('reCAPTCHA error:', err);
					alert('Failed to verify reCAPTCHA. Please try again.');
					isLoading = false;
					return;
				}
			}

			const response = await fetch('/api/order', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					fullName: name,
					phone: phoneNumber,
					wilaya: selectedWilaya,
					city: selectedCity,
					address,
					products: [{ id: product.id, quantity }],
					...(recaptchaToken && { recaptcha_token: recaptchaToken })
				})
			});

			const result = await response.json();

			if (response.ok && result.success) {
				// Redirect to success page
				goto('/order-success');
			} else {
				alert(result.message || 'Failed to place order. Please try again.');
			}
		} catch (error) {
			console.error(error);
			alert('An error occurred. Please try again.');
		} finally {
			isLoading = false;
		}
	}
</script>

<div class="w-full rounded-lg border border-gray-200 bg-white shadow-lg">
	<!-- Header -->
	<div class="border-b border-gray-200 p-6">
		<h2 class="text-2xl font-bold text-gray-900">Order Now</h2>
		<p class="mt-1 text-sm text-gray-600">Fill in your details to complete the purchase.</p>
	</div>

	<!-- Form Content -->
	<form onsubmit={handleSubmit} class="space-y-6 p-6">
		<!-- Quantity -->
		<div class="space-y-2">
			<label for="quantity" class="block text-sm font-medium text-gray-700">Quantity</label>
			<div class="flex h-12 w-44 overflow-hidden rounded-md border-2 border-gray-300">
				<button
					type="button"
					onclick={() => handleQuantityChange(-1)}
					class="w-20 cursor-pointer text-2xl font-semibold transition-colors hover:bg-gray-100"
				>
					-
				</button>
				<input
					type="number"
					id="quantity"
					min="1"
					bind:value={quantity}
					class="w-full appearance-none text-center text-xl outline-none"
				/>
				<button
					type="button"
					onclick={() => handleQuantityChange(1)}
					class="w-20 cursor-pointer text-2xl font-semibold transition-colors hover:bg-gray-100"
				>
					+
				</button>
			</div>
		</div>

		<!-- Full Name -->
		<div class="space-y-2">
			<label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
			<input
				id="name"
				type="text"
				bind:value={name}
				placeholder="Enter your full name"
				class="w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none {errors.name
					? 'border-red-500'
					: 'border-gray-300'}"
			/>
			{#if errors.name}
				<p class="text-sm text-red-500">{errors.name}</p>
			{/if}
		</div>

		<!-- Phone Number -->
		<div class="space-y-2">
			<label for="phoneNumber" class="block text-sm font-medium text-gray-700">Phone Number</label>
			<input
				id="phoneNumber"
				type="tel"
				bind:value={phoneNumber}
				placeholder="0555123456"
				class="w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none {errors.phoneNumber
					? 'border-red-500'
					: 'border-gray-300'}"
			/>
			{#if errors.phoneNumber}
				<p class="text-sm text-red-500">{errors.phoneNumber}</p>
			{/if}
		</div>

		<!-- Wilaya and City -->
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
			<div class="space-y-2">
				<label for="wilaya" class="block text-sm font-medium text-gray-700">Wilaya</label>
				<select
					id="wilaya"
					bind:value={selectedWilaya}
					class="w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none {errors.wilaya
						? 'border-red-500'
						: 'border-gray-300'}"
				>
					<option value="">Select Wilaya</option>
					{#each WILAYAS as wilaya (wilaya.name)}
						<option value={wilaya.name}>{wilaya.name}</option>
					{/each}
				</select>
				{#if errors.wilaya}
					<p class="text-sm text-red-500">{errors.wilaya}</p>
				{/if}
			</div>

			<div class="space-y-2">
				<label for="city" class="block text-sm font-medium text-gray-700">City</label>
				<select
					id="city"
					bind:value={selectedCity}
					disabled={!selectedWilaya}
					class="w-full rounded-md border px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-100 {errors.city
						? 'border-red-500'
						: 'border-gray-300'}"
				>
					<option value="">Select City</option>
					{#if selectedWilaya}
						{#each availableCities as city (city.name)}
							<option value={city.name}>{city.name}</option>
						{/each}
					{/if}
				</select>
				{#if errors.city}
					<p class="text-sm text-red-500">{errors.city}</p>
				{/if}
			</div>
		</div>

		<!-- Address -->
		<div class="space-y-2">
			<label for="address" class="block text-sm font-medium text-gray-700">Address (Optional)</label
			>
			<input
				id="address"
				type="text"
				bind:value={address}
				placeholder="Enter your address"
				class="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
			/>
		</div>

		<!-- Submit Button -->
		<button
			type="submit"
			disabled={isLoading}
			class="flex w-full items-center justify-center rounded-md bg-blue-600 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
		>
			{#if isLoading}
				<svg class="mr-3 -ml-1 h-5 w-5 animate-spin text-white" fill="none" viewBox="0 0 24 24">
					<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"
					></circle>
					<path
						class="opacity-75"
						fill="currentColor"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
					></path>
				</svg>
				Placing Order...
			{:else}
				Confirm Order
			{/if}
		</button>
	</form>
</div>

<style>
	/* Hide number input spinners */
	input[type='number']::-webkit-outer-spin-button,
	input[type='number']::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	input[type='number'] {
		-moz-appearance: textfield;
		appearance: textfield;
	}
</style>
