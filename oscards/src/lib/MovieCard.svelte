<script lang="ts">
	import { onMount } from 'svelte';
	import type { Movie } from '$lib/tyypit';
	import Poster from './Poster.svelte';
	import { favorite } from '$lib/favorites.svelte';
	import { modalVisible } from '$lib/modalStore';

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

<div
	class="relative mx-auto h-172.5 w-full max-w-sm gap-4 rounded-xl border-2 border-yellow-400 bg-zinc-900 p-4 shadow-[0_0_35px_rgba(0,0,0,0.55)]"
>
	<button
		disabled={favorite.fav.includes(elokuvaTunnus)}
		class="material-symbols-outlined absolute top-3 right-3 cursor-pointer text-zinc-300 hover:text-yellow-400 disabled:text-emerald-500"
		onclick={() => {
			favorite.fav = elokuvaTunnus;
			modalVisible.set(!$modalVisible);
		}}
	>
		favorite
	</button>

	<div class="flex h-auto w-auto items-center justify-between">
		<div class="h-83 w-56 rounded-lg border-2 border-yellow-400 object-cover">
			<Poster {elokuvaTunnus} />
		</div>
		<div class="flex flex-row items-center gap-1 pr-2 font-judson text-2xl text-zinc-300">
			<img src="/img/oscarPalkinto.png" alt="" class="h-6 w-6" />
			x {movie?.oscarWins}
		</div>
	</div>

	<div class="flex flex-col items-center font-judson text-zinc-300">
		<h2 class="text-2xl font-bold">{movie?.title}</h2>
		<p class="text-lg">Year: {movie?.year}</p>
		<p class="text-lg">{runTime(movie?.length ?? 0)}</p>
		<p class="text-lg">IMDb rating: {movie?.imdbRating}</p>
	</div>

	<div class="flex flex-col items-center gap-2">
		<h2 class="font-judson text-2xl font-bold text-zinc-300">Streaming on:</h2>
		<div class="flex gap-3">
			{#each movie?.streaming as streamin (streamin)}
				<img src={streamin} alt="" class="h-6 w-6" />
			{/each}
		</div>
	</div>
</div>
