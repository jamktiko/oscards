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
	{/snippet}
</Carousel>
