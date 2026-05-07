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

{#if favorite.fav.length === 0}
	<div class="flex h-[50%] items-center justify-center">
		<p class="font-judson text-3xl font-bold text-yellow-400">No favorites yet</p>
	</div>
{:else}
	<Carousel kortit={favorite.fav} id="favorites">
		{#snippet children(setti, diff)}
			<div class="flex flex-col items-center">
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
			</div>
		{/snippet}
	</Carousel>
{/if}
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
		<div class="mt-10 flex flex-col items-center gap-5">
			<div class="flex flex-col items-center font-judson text-zinc-300">
				<h2 class="text-2xl font-bold">{movie?.title}</h2>
				<div class="mt-5 flex flex-col items-center">
					<p class="text-lg">Year: {movie?.year}</p>
					<p class="text-lg">{runTime(movie?.length ?? 0)}</p>
					<p class="text-lg">IMDb rating: {movie?.imdbRating}</p>
				</div>
			</div>
			<div class="flex flex-row items-center gap-1 pr-2 font-judson text-3xl text-zinc-300">
				<img src="/img/oscarPalkinto.png" alt="" class="h-12 w-12" />
				x {movie?.oscarWins}
			</div>

			<div class="flex flex-col items-center gap-2">
				<h2 class="font-judson text-2xl font-bold text-zinc-300">Streaming on:</h2>
				<div class="flex gap-3">
						{#if movie?.streaming.length ===0}
		<div class="mt-5 flex flex-col gap-1">
			<p class="text-lg">Not available</p>
		</div>
		{/if}
					{#each movie?.streaming as streamin (streamin)}
						<a href={streamin.url}>
							<img src="/img/streamingApps/{streamin.app}.png" alt="" class="h-12 w-auto" />
						</a>
					{/each}
				</div>
			</div>
		</div>
	</Modal>
{/if}
