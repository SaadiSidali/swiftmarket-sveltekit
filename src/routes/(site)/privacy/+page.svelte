<script>
	import { page } from '$app/stores';

	const siteName = 'Storesdz';
	const contactEmail = 'support@storesdz.com';
	const lastUpdated = 'January 1, 2024';
</script>

<svelte:head>
	<title>Privacy Policy - {siteName}</title>
	<meta name="description" content="Privacy Policy for {siteName}" />
</svelte:head>

<div class="container mx-auto max-w-4xl px-4 py-8">
	<h1 class="mb-8 text-3xl font-bold">Privacy Policy</h1>

	<p class="mb-6 text-gray-600">Last updated: {lastUpdated}</p>

	<div class="prose prose-lg max-w-none">
		<section class="mb-8">
			<h2 class="mb-4 text-2xl font-semibold">1. Information We Collect</h2>
			<p class="mb-4">
				We collect information you provide directly to us, such as when you create an account, make
				a purchase, or contact us.
			</p>
			<ul class="mb-4 list-disc pl-6">
				<li>Personal information (name, email address, phone number)</li>
				<li>Payment information (credit card details, billing address)</li>
				<li>Account information (username, password, preferences)</li>
				<li>Communication data (messages, support requests)</li>
			</ul>
		</section>

		<section class="mb-8">
			<h2 class="mb-4 text-2xl font-semibold">2. How We Use Your Information</h2>
			<p class="mb-4">We use the information we collect to:</p>
			<ul class="mb-4 list-disc pl-6">
				<li>Provide, maintain, and improve our services</li>
				<li>Process transactions and send related information</li>
				<li>Send you technical notices and support messages</li>
				<li>Respond to your comments and questions</li>
				<li>Communicate with you about products, services, and events</li>
			</ul>
		</section>

		<section class="mb-8">
			<h2 class="mb-4 text-2xl font-semibold">3. Information Sharing</h2>
			<p class="mb-4">
				We do not sell, trade, or otherwise transfer your personal information to third parties
				without your consent, except as described in this policy.
			</p>
			<p class="mb-4">We may share your information with:</p>
			<ul class="mb-4 list-disc pl-6">
				<li>Service providers who assist in our operations</li>
				<li>Legal authorities when required by law</li>
				<li>Business partners with your explicit consent</li>
			</ul>
		</section>

		<section class="mb-8">
			<h2 class="mb-4 text-2xl font-semibold">4. Data Security</h2>
			<p class="mb-4">
				We implement appropriate security measures to protect your personal information against
				unauthorized access, alteration, disclosure, or destruction.
			</p>
		</section>

		<section class="mb-8">
			<h2 class="mb-4 text-2xl font-semibold">5. Cookies and Tracking</h2>
			<p class="mb-4">
				We use cookies and similar tracking technologies to enhance your experience, analyze usage,
				and personalize content.
			</p>
		</section>

		<section class="mb-8">
			<h2 class="mb-4 text-2xl font-semibold">6. Your Rights</h2>
			<p class="mb-4">You have the right to:</p>
			<ul class="mb-4 list-disc pl-6">
				<li>Access and update your personal information</li>
				<li>Request deletion of your data</li>
				<li>Opt-out of marketing communications</li>
				<li>Request data portability</li>
			</ul>
		</section>

		<section class="mb-8">
			<h2 class="mb-4 text-2xl font-semibold">7. Changes to This Policy</h2>
			<p class="mb-4">
				We may update this privacy policy from time to time. We will notify you of any changes by
				posting the new policy on this page.
			</p>
		</section>

		<section class="mb-8">
			<h2 class="mb-4 text-2xl font-semibold">8. Contact Us</h2>
			<p class="mb-4">If you have any questions about this privacy policy, please contact us at:</p>
			<p class="mb-4">
				Email: <a href="mailto:{contactEmail}" class="text-blue-600 hover:underline"
					>{contactEmail}</a
				>
			</p>
		</section>
	</div>
</div>

<style>
	.prose h2 {
		@apply border-b border-gray-200 pb-2 text-gray-900;
	}

	.prose p {
		@apply leading-relaxed text-gray-700;
	}

	.prose ul li {
		@apply mb-2 text-gray-700;
	}
</style>
