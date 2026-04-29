<script lang="ts">
	import { movieGroups } from '$lib/data/movieGroups';
	import { personGroups } from '$lib/data/personGroups';
	import Header from '$lib/Header.svelte';
	import MovieCard from '$lib/MovieCard.svelte';
	import PersonCard from '$lib/PersonCard.svelte';
	import { modalVisible } from '$lib/modalStore';
	import AddedToFavorites from '$lib/addedToFavorites.svelte';
	import Carousel from '$lib/Carousel.svelte';

	let otsikko = $state('Directors');

	let currentDirector = $state<string | null>(null);
	const directorToMovieGroupKey: Record<string, keyof typeof movieGroups> = {
		'Martin Scorsese': 'martinScorsese',
		'Christopher Nolan': 'christopherNolan',
		'Paul Thomas Anderson': 'paulThomasAnderson',
		'James Cameron': 'jamesCameron',
		'Jane Campion': 'janeCampion'
	};
	let movieCards = $derived.by(() => {
		if (currentDirector && currentDirector in directorToMovieGroupKey) {
			const key = directorToMovieGroupKey[currentDirector];
			return movieGroups[key];
		}
		return [];
	});
</script>

{#if $modalVisible}
	<AddedToFavorites />
{/if}

<Header {otsikko} />

{#if currentDirector === null}
	<Carousel kortit={personGroups.directors}>
		{#snippet children(director, diff)}
			<PersonCard
				nimi={director.name}
				onclick={diff === 0 ? () => (currentDirector = director.name) : undefined}
			/>
		{/snippet}
	</Carousel>
{:else}
	<button
		class="material-symbols-outlined scale-200 text-5xl text-yellow-400"
		onclick={() => (currentDirector = null)}
	>
		arrow_back
	</button>
	<Carousel kortit={movieCards}>
		{#snippet children(movie)}
			<MovieCard elokuvaTunnus={movie.imdbId} />
		{/snippet}
	</Carousel>
{/if}
