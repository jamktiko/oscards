<script lang="ts">
	import { movieGroups } from '$lib/data/movieGroups';
	import { personGroups } from '$lib/data/personGroups';
	import Header from '$lib/Header.svelte';
	import MovieCard from '$lib/MovieCard.svelte';
	import PersonCard from '$lib/PersonCard.svelte';
	import { modalVisible } from '$lib/modalStore';
	import AddedToFavorites from '$lib/addedToFavorites.svelte';
	import Carousel from '$lib/Carousel.svelte';

	let otsikko = $state('directors');

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

<Header
	{otsikko}
	ehto={currentDirector !== null}
	onclick={() => {
		currentDirector = null;
		otsikko = 'directors';
	}}
/>

{#if currentDirector === null}
	<Carousel kortit={personGroups.directors} id="directors">
		{#snippet children(director, diff)}
			<PersonCard
				nimi={director.name}
				onclick={diff === 0
					? () => {
							currentDirector = director.name;
							otsikko = 'titles';
						}
					: undefined}
			/>
		{/snippet}
	</Carousel>
{:else}
	<Carousel kortit={movieCards} id={currentDirector}>
		{#snippet children(movie)}
			<MovieCard elokuvaTunnus={movie.imdbId} />
		{/snippet}
	</Carousel>
{/if}
