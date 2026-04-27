<script lang="ts">
	import './layout.css';
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';

	let { children } = $props();
</script>

<svelte:head
	><link
		href="https://fonts.googleapis.com/css2?family=Judson:ital,wght@0,400;0,700;1,400&display=swap"
		rel="stylesheet"
	/></svelte:head
>
<Header otsikko="Koti" />
<main>
	{@render children()}
</main>
<Footer />
