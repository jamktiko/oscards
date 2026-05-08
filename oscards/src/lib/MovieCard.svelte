<script lang="ts">
	import { onMount } from 'svelte';
	import type { Movie } from '$lib/tyypit';
	import Poster from './Poster.svelte';
	import { favorite } from '$lib/favorites.svelte';
	import { modalVisible } from '$lib/modalStore';
	import { favoriteMessage } from '$lib/favoriteMessageStore';
	

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
	class="relative mx-auto h-135 w-80 max-w-sm rounded-xl border-2 border-yellow-400 bg-zinc-900 p-4 shadow-[0_0_35px_rgba(0,0,0,0.55)]"
>
	<button
		class="material-symbols-outlined absolute top-6 right-7 scale-150 cursor-pointer text-yellow-400 hover:text-yellow-400"
		style:font-variation-settings="'FILL' {favorite.fav.includes(elokuvaTunnus) ? 1 : 0}"
		onclick={() => {
			if (favorite.fav.includes(elokuvaTunnus)) {
				favorite.unfav = elokuvaTunnus;
			} else {
				favorite.fav = elokuvaTunnus;
			}
			favoriteMessage.set(
				favorite.fav.includes(elokuvaTunnus) ? 'Added to favorites' : 'Removed from favorites'
			);
			modalVisible.set(!$modalVisible);
		}}
	>
		favorite
	</button>
	<div class="mr-5 flex flex-row justify-between">
		<div class="flex w-full justify-start">
			<Poster
				{elokuvaTunnus}
				class="h-65 w-45 overflow-hidden rounded-[10px] border-2 border-yellow-400"
			/>
		</div>

		<div class="mt-1 flex flex-col items-center justify-center gap-2">
			<img src="/img/oscarPalkinto.png" alt="" class="h-12 w-12" />
			<p class="font-judson text-3xl text-zinc-300">
				x {movie?.oscarWins}
			</p>
		</div>
	</div>
	<div class="mt-4 flex flex-col items-center font-judson text-zinc-300">
		<h2 class="text-2xl font-bold">{movie?.title}</h2>

		<div class="mt-2 flex flex-col gap-1 text-lg">
			<p>Year: {movie?.year}</p>
			<p>{runTime(movie?.length ?? 0)}</p>
			<p>IMDb rating: {movie?.imdbRating}</p>
		</div>
	</div>

	<div class="mt-4 flex flex-col items-center gap-2">
		<h2 class="font-judson text-2xl font-bold text-zinc-300">Streaming on:</h2>
		<div class=" flex flex-wrap gap-3">
			{#if movie?.streaming.length === 0}
				<div class=" flex flex-col gap-1 font-judson text-zinc-300">
					<p class="text-lg">Not available</p>
				</div>
			{/if}
			{#each movie?.streaming as streamin (streamin)}
				<a href={streamin.url}>
					<img src="/img/streamingApps/{streamin.app}.png" alt="" class="h-10 w-auto" />
				</a>
			{/each}
		</div>
	</div>
</div>
