<script lang="ts">
	import { WILAYAS, CITIES } from '@/wilayasAndCities';

	let selectedWilaya: string = $state('');
	let selectedCity: string = $state('');

	const availableCities = $derived.by(() => {
		return CITIES.filter((city) => city.wilaya_name === selectedWilaya);
	});
</script>

<section>
	<div class="flex flex-col gap-5">
		<label for="wilaya" class="font-medium">Select Wilaya</label>
		<select id="wilaya" bind:value={selectedWilaya} class="rounded border border-gray-300 p-2">
			<option value="" disabled selected>Select a Wilaya</option>
			{#each WILAYAS as wilaya}
				<option value={wilaya.name}>{wilaya.name}</option>
			{/each}
		</select>
	</div>

	{#if selectedWilaya}
		<div class="mt-5 flex flex-col gap-5">
			<label for="city" class="font-medium">Select City</label>
			<select id="city" bind:value={selectedCity} class="rounded border border-gray-300 p-2">
				<option value="" disabled selected>Select a City</option>
				{#each availableCities as city}
					<option value={city.name}>{city.name}</option>
				{/each}
			</select>
		</div>
	{/if}
</section>
