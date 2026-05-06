<script lang="ts">
	import Carousel from '$lib/Carousel.svelte';
	import { favorite } from '$lib/favorites.svelte';
	import Header from '$lib/Header.svelte';
	import Poster from '$lib/Poster.svelte';
	import Modal from '$lib/Modal.svelte';
	import { onMount } from 'svelte';
	import type { Movie } from '$lib/tyypit';

	let showCard = $state(false);
	let selectedMovie = $state<string | null>(null);
	let movies: Movie[] = $state([]);

	onMount(async () => {
		const response = await fetch('/data/movies.json');
		movies = await response.json();
	});

	let movie = $derived(movies.find((m) => m.imdbID === selectedMovie));

	function runTime(minutes: number): string {
		const hours = Math.floor(minutes / 60);
		const mins = minutes % 60;
		return `${hours}h ${mins}min`;
	}
</script>

<Header otsikko="favorites" />

<Carousel kortit={favorite.fav} id="favorites">
	{#snippet children(setti, diff)}
		<div class="w-100">
			<button
				onclick={diff === 0
					? () => {
							showCard = true;
							selectedMovie = setti;
						}
					: undefined}
			>
				<Poster elokuvaTunnus={setti} />
			</button>
		</div>

		<button
			class="m-1 mt-4 self-center rounded-2xl border-2 border-yellow-400 bg-zinc-900/55 px-4 py-2 font-judson text-xl font-bold text-yellow-400 shadow-2xl transition-transform hover:scale-105"
			onclick={() => (favorite.unfav = setti)}>Remove</button
		>
	{/snippet}
</Carousel>

{#if showCard}
	<Modal>
		{#snippet header()}
			<button
				class="material-symbols-outlined ml-[4%] scale-200 text-5xl text-yellow-400 hover:cursor-pointer"
				onclick={() => (showCard = false)}
			>
				arrow_back_ios</button
			>
		{/snippet}

		<div class="flex flex-row items-center gap-1 pr-2 font-judson text-2xl text-zinc-300">
			<img src="/img/oscarPalkinto.png" alt="" class="h-6 w-6" />
			x {movie?.oscarWins}
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
					<img src="/img/streamingApps/{streamin}.png" alt="" class="h-6 w-6" />
				{/each}
			</div>
		</div>
	</Modal>
{/if}
