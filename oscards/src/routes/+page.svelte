<script>
	import MovieCard from '$lib/MovieCard.svelte';
	import Poster from '$lib/Poster.svelte';
	import { movieGroups } from '$lib/data/movieGroups';
</script>

{#each movieGroups.cillianMurphy as cillu}
	<MovieCard elokuvaTunnus={cillu.imdbId} />
{/each}
