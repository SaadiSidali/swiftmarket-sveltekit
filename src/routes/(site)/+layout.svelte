<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children, data } = $props();
</script>

<Navbar />
{@render children?.()}
<Footer />

{#if data.config.facebook_pixel}
	{@html `
	<script>
	!function(f,b,e,v,n,t,s)
	{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
	n.callMethod.apply(n,arguments):n.queue.push(arguments)};
	if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
	n.queue=[];t=b.createElement(e);t.async=!0;
	t.src=v;s=b.getElementsByTagName(e)[0];
	s.parentNode.insertBefore(t,s)}(window, document,'script',
	'https://connect.facebook.net/en_US/fbevents.js');
	fbq('init', '${data.config.facebook_pixel}');
	fbq('track', 'PageView');
	</script>
	<noscript>
	<img height="1" width="1" style="display:none"
	src="https://www.facebook.com/tr?id=${data.config.facebook_pixel}&ev=PageView&noscript=1" />
	</noscript>
`}
{/if}

{#if data.config.google_analytics}
	{@html `
	<script async src="https://www.googletagmanager.com/gtag/js?id=${data.config.google_analytics}"></script>
	<script>
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());
	gtag('config', '${data.config.google_analytics}');
	</script>
`}
{/if}
