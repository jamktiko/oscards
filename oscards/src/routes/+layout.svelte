<script lang="ts">
	import '../app.css';
	import Footer from '$lib/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head></svelte:head>

<main>
	<div class="h-195">
		{@render children()}
	</div>
</main>

<Footer />

<style>
	:global(html, body) {
		background-color: black;
		background-image: url('/img/backgroundStage.png');
		background-size: cover;
		background-position: center;
		background-attachment: fixed;
	}
</style>
