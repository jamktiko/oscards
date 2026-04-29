<script lang="ts">
	import './layout.css';
	import '../app.css';
	import Footer from '$lib/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head></svelte:head>

<main>
	{@render children()}
</main>

<Footer />

<style>
	:global(html, body) {
		background-color: #1c1b1f;
	}
</style>
