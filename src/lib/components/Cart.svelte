<script lang="ts">
	import { onDestroy } from 'svelte';
	import { cartItemsStore, removeFromCart, type CartItem } from '$lib/stores';
	import QuantityInput from '$lib/components/QuantityInput.svelte';
	import { PUBLIC_POCKETBASE_URL } from '$env/static/public';

	interface Props {
		cartOpened?: boolean;
	}

	let { cartOpened = $bindable(false) }: Props = $props();
	let backgroundNode: HTMLElement | undefined = $state();

	let cartItemsValue: CartItem[] = $state([]);
	let checkoutPrice: number = $state(0);

	// Calculate checkout price whenever cart items change
	$effect(() => {
		let value = 0;
		for (const item of cartItemsValue) {
			if (item.salePrice === 0) {
				value += item.price * item.quantity;
			} else {
				value += item.salePrice * item.quantity;
			}
		}
		checkoutPrice = Math.round(value * 100) / 100;
	});

	const unsubscribe = cartItemsStore.subscribe((value) => {
		cartItemsValue = value;
	});

	async function handlePayment() {
		const res = await fetch('/order', {
			method: 'POST',
			body: JSON.stringify($cartItemsStore),
			headers: {
				'content-type': 'application/json'
			}
		});

		if (res !== null) {
			const response = await res.json();
			// Redirect to checkout page or handle in another way
			window.location.href = response.url || '/checkout';
		}
	}

	function closeCart() {
		cartOpened = false;
	}

	onDestroy(unsubscribe);
</script>

<div class="fixed inset-y-0 right-0 z-20 flex w-full max-w-lg flex-col bg-white">
	<div class="mx-5 flex items-center justify-between py-4">
		<h1 class="text-xl font-bold uppercase">
			{cartItemsValue.length}
			{cartItemsValue.length === 1 ? 'item' : 'items'}
		</h1>

		<button onclick={() => (cartOpened = !cartOpened)}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="h-6 w-6"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</button>
	</div>

	<hr class="mb-5" />

	{#if cartItemsValue.length !== 0}
		<div class="flex-col overflow-y-auto">
			{#each $cartItemsStore as cartItem}
				<div class="mx-5 mb-5 flex gap-5">
					<img
						src="{PUBLIC_POCKETBASE_URL}/api/files/products/{cartItem.id}/{cartItem.thumbnail}"
						width="92"
						height="92"
						alt="{cartItem.name} thumbnail"
					/>

					<div>
						<a href="/products/{cartItem.slug}" target="_self">{cartItem.name}</a>
						<div class="my-2 flex gap-3">
							<QuantityInput bind:count={cartItem.quantity} mini={true} />
							<button
								onclick={() => removeFromCart(cartItem.slug)}
								class="font-light hover:underline"
							>
								Remove
							</button>
						</div>
					</div>

					<div class="flex grow flex-col">
						{#if cartItem.salePrice === 0}
							<p class="text-right">${Number(cartItem.price * cartItem.quantity).toFixed(2)}</p>
						{:else}
							<p class="text-right text-red-600">
								${Number(cartItem.salePrice * cartItem.quantity).toFixed(2)}
							</p>
							<p class="text-right text-gray-600 line-through">
								${Number(cartItem.price * cartItem.quantity).toFixed(2)}
							</p>
						{/if}
					</div>
				</div>
			{/each}
		</div>

		<div class="flex grow items-end px-10 py-10">
			<button
				class="h-12 w-full bg-yellow-300 font-bold text-black transition-colors duration-150 hover:bg-yellow-500 focus:shadow"
				onclick={handlePayment}
			>
				Checkout ${checkoutPrice}
			</button>
		</div>
	{:else}
		<div class="flex h-full flex-col justify-center">
			<p class="text-center">Your cart is empty</p>
			<div class="px-10 py-10">
				<a href="/shop/all" target="_self">
					<button
						class="h-12 w-full bg-yellow-300 font-bold text-black transition-colors duration-150 hover:bg-yellow-500 focus:shadow"
					>
						Start shopping
					</button>
				</a>
			</div>
		</div>
	{/if}
</div>

<div
	bind:this={backgroundNode}
	class="fixed inset-0 z-[15] bg-black opacity-40"
	onclick={closeCart}
></div>
