<script lang="ts">
	import './layout.css';
	import '../app.css';
	import Footer from '$lib/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head
	><link
		href="https://fonts.googleapis.com/css2?family=Judson:ital,wght@0,400;0,700;1,400&display=swap"
		rel="stylesheet"
	/></svelte:head
>
<main>
	{@render children()}
</main>
<Footer />

<style>
	:global(html, body) {
		background-color: #1c1b1f;
	}
</style>
