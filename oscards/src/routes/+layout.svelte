<script lang="ts">
	import '../app.css';
	import Footer from '$lib/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head></svelte:head>

<main>
	<div class="h-screen">
		{@render children()}
	</div>
</main>

<Footer />

<style>
	:global(html, body) {
		background-color: #1c1b1f;
	}
</style>
