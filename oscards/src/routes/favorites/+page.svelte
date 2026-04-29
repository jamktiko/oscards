<script lang="ts">
	import { favorite } from '$lib/favorites.svelte';
	import Header from '$lib/Header.svelte';
	import Poster from '$lib/Poster.svelte';
</script>

<Header otsikko="Favorites" />
<div>
	{#each favorite.fav as fav (fav)}
		<div class=" flex h-auto w-full max-w-sm flex-col justify-between p-4  md:w-96">
		<Poster elokuvaTunnus={fav} />
		</div>
		<button onclick={() => (favorite.unfav = fav)}>poista</button>
	{/each}
		
</div>
