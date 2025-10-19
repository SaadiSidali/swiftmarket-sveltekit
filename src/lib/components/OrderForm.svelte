<script lang="ts">
	import { WILAYAS, CITIES } from '@/wilayasAndCities';

	let selectedWilaya: string = $state('');
	let selectedCity: string = $state('');
	let name: string = $state('');
	let phoneNumber: string = $state('');
	let errors = $state({ name: '', phoneNumber: '', wilaya: '', city: '' });

	const availableCities = $derived.by(() => {
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

	function handleSubmit() {
		if (validateForm()) {
			console.log({
				name,
				phoneNumber,
				wilaya: selectedWilaya,
				city: selectedCity
			});
		}
	}
</script>

<section class="rounded-md border border-dashed border-gray-600 bg-gray-50/50 p-4" id="order-form">
	<div class="flex flex-col gap-2">
		<label for="name" class="font-medium">Name</label>
		<input
			id="name"
			type="text"
			bind:value={name}
			class="rounded-2xl border border-gray-300 p-2"
			placeholder="Enter your name"
		/>
		{#if errors.name}
			<span class="text-sm text-red-600">{errors.name}</span>
		{/if}
	</div>

	<div class="mt-5 flex flex-col gap-2">
		<label for="phoneNumber" class="font-medium">Phone Number</label>
		<input
			id="phoneNumber"
			type="tel"
			bind:value={phoneNumber}
			class="rounded-2xl border border-gray-300 p-2"
			placeholder="0555123456"
		/>
		{#if errors.phoneNumber}
			<span class="text-sm text-red-600">{errors.phoneNumber}</span>
		{/if}
	</div>

	<div class="mt-5 flex flex-col gap-2">
		<label for="wilaya" class="font-medium">Select Wilaya</label>
		<select id="wilaya" bind:value={selectedWilaya} class="rounded-2xl border border-gray-300 p-2">
			<option value="" disabled selected>Select a Wilaya</option>
			{#each WILAYAS as wilaya}
				<option value={wilaya.name}>{wilaya.name}</option>
			{/each}
		</select>
		{#if errors.wilaya}
			<span class="text-sm text-red-600">{errors.wilaya}</span>
		{/if}
	</div>

	{#if selectedWilaya}
		<div class="mt-5 flex flex-col gap-2">
			<label for="city" class="font-medium">Select City</label>
			<select id="city" bind:value={selectedCity} class="rounded-2xl border border-gray-300 p-2">
				<option value="" disabled selected>Select a City</option>
				{#each availableCities as city}
					<option value={city.name}>{city.name}</option>
				{/each}
			</select>
			{#if errors.city}
				<span class="text-sm text-red-600">{errors.city}</span>
			{/if}
		</div>
	{/if}

	<button
		onclick={handleSubmit}
		class="mt-5 w-full cursor-pointer rounded bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
	>
		Submit Order
	</button>
</section>
