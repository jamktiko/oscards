<script lang="ts">
	import MovieCard from '$lib/MovieCard.svelte';
	import Poster from '$lib/Poster.svelte';
	import { movieGroups } from '$lib/data/movieGroups';
  import CategoryButton from '../routes/categoryButton.svelte';
 	import Header from '$lib/Header.svelte';
 </script>
<Header otsikko=" Oscards"/>
{#each movieGroups.cillianMurphy as cillu}
	<MovieCard elokuvaTunnus={cillu.imdbId} />
{/each}
