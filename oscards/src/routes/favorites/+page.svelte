<script lang="ts">
	import Carousel from '$lib/Carousel.svelte';
	import { favorite } from '$lib/favorites.svelte';
	import Header from '$lib/Header.svelte';
	import Poster from '$lib/Poster.svelte';
</script>

<Header otsikko="Favorites" />

<Carousel kortit={favorite.fav}>
	{#snippet children(setti)}
		<div class="w-100">
			<Poster elokuvaTunnus={setti} />
		</div>
		<button
			class="m-1 self-center rounded-3xl border-2 border-yellow-400 p-4 text-yellow-400"
			onclick={() => (favorite.unfav = setti)}>Remove</button
		>
	{/snippet}
</Carousel>
