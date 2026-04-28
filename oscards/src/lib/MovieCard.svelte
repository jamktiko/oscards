<script lang="ts">
	import { onMount } from 'svelte';
	import type { Movie } from '$lib/tyypit';
	import Poster from './Poster.svelte';
	import { favorite } from '$lib/favorites.svelte';
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
	<button
		class="material-symbols-outlined cursor-pointer"
		onclick={() => (favorite.fav = elokuvaTunnus)}>favorite</button
	>
	<button>
		<Poster {elokuvaTunnus} />
		<div>
			{#each Array(movie?.oscarWins) as oscars}
				<img src="/img/oscarPalkinto.png" alt="" class="h-5 w-5" />
			{/each}
		</div>
		<div>
			<h2>{movie?.title}</h2>
			<p>{movie?.year}</p>
			<p>{runTime(movie?.length ?? 0)}</p>
			<p>IMDb rating: {movie?.imdbRating}</p>
			<h2>Streaming</h2>
			<div>
				{#each movie?.streaming as streamin}
					<img src={streamin} alt="" class="h-5 w-5" />
				{/each}
			</div>
		</div>
	</button>
</div>
