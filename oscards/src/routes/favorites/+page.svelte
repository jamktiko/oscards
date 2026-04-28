<script lang="ts">
	import { favorite } from '$lib/favorites.svelte';
	import Header from '$lib/Header.svelte';
	import Poster from '$lib/Poster.svelte';
</script>

<Header otsikko="Favorites" />
<div>
	{#each favorite.fav as fav (fav)}
		<Poster elokuvaTunnus={fav} />
		<button onclick={() => (favorite.unfav = fav)}>poista</button>
	{/each}
</div>
