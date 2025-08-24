<script lang="ts">
	import { Toaster } from '@/components/ui/sonner';

	const { children } = $props();
</script>

<Toaster />
{@render children?.()}
