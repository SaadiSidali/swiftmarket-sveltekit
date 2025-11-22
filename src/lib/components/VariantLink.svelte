<script lang="ts">
	/**
	 * A dynamic link component for handling URL query parameters (variants).
	 * It preserves existing query parameters while updating specific ones.
	 *
	 * @example
	 * // 1. Simple Variant (Color)
	 * <VariantLink key="color" value="red" activeClass="border-black">
	 *   Red
	 * </VariantLink>
	 *
	 * @example
	 * // 2. Using the `isActive` snippet prop for custom UI
	 * <VariantLink key="disk" value="64gb">
	 *   {#snippet children({ isActive })}
	 *     <span class={isActive ? 'font-bold' : 'text-gray-500'}>64GB</span>
	 *   {/snippet}
	 * </VariantLink>
	 *
	 * @example
	 * // 3. Multiple Params (Dynamic)
	 * <VariantLink params={{ disk: '128gb', color: 'blue' }}>
	 *   Blue 128GB
	 * </VariantLink>
	 */
	import { page } from '$app/state';
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils';

	interface Props extends Omit<HTMLAnchorAttributes, 'children'> {
		key?: string;
		value?: string;
		params?: Record<string, string>;
		replace?: boolean;
		activeClass?: string;
		children?: Snippet<[{ isActive: boolean }]>;
	}

	let {
		key,
		value,
		params,
		replace = false,
		class: className,
		activeClass = '',
		children,
		...rest
	}: Props = $props();

	let href = $derived.by(() => {
		const url = new URL(page.url);
		if (key) {
			url.searchParams.set(key, value ?? '');
		}
		if (params) {
			for (const [k, v] of Object.entries(params)) {
				url.searchParams.set(k, v);
			}
		}
		return url.toString();
	});

	let isActive = $derived.by(() => {
		let hasCriteria = false;
		let active = true;

		if (key) {
			hasCriteria = true;
			if (page.url.searchParams.get(key) !== (value ?? '')) active = false;
		}

		if (params) {
			const entries = Object.entries(params);
			if (entries.length > 0) {
				hasCriteria = true;
				for (const [k, v] of entries) {
					if (page.url.searchParams.get(k) !== v) {
						active = false;
						break;
					}
				}
			}
		}

		return hasCriteria && active;
	});
</script>

<a
	{href}
	class={cn(className, isActive && activeClass)}
	data-sveltekit-replacestate={replace ? '' : undefined}
	{...rest}
>
	{@render children?.({ isActive })}
</a>
