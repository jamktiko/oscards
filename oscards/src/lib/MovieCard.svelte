<script lang="ts">
	import { onMount } from 'svelte';
	import type { Movie } from '$lib/tyypit';
	import Poster from './Poster.svelte';
	let { elokuvaTunnus }: { elokuvaTunnus: string } = $props();
	let movies: Movie[] = $state([]);
	onMount(async () => {
		const repsonse = await fetch('/data/movies.json');
		movies = await repsonse.json();
	});
	let movie = $derived(movies.find((p) => p.imdbID === elokuvaTunnus));
	function runTime(minutes: number): string {
		const hours = Math.floor(minutes / 60);
		const mins = minutes % 60;

		return `${hours}h ${mins}min`;
	}
</script>

<div>
	<button>
		<Poster {elokuvaTunnus} />
		<div>tähän pokaalit</div>
		<div>
			<h2>{movie?.title}</h2>
			<p>Year{movie?.year}</p>
			<p>Lenght: {runTime(movie?.length ?? 0)}</p>
			<p>Rating by IMDb: {movie?.imdbRating}</p>
			<h2>Streaming</h2>
			<div>
				{#each movie?.streaming as streamin}
					<img src={streamin} alt="" />
				{/each}
			</div>
		</div>
	</button>
</div>
