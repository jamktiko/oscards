<script lang="ts">
	import { movieGroups } from '$lib/data/movieGroups';
	import { personGroups } from '$lib/data/personGroups';
	import Header from '$lib/Header.svelte';
	import MovieCard from '$lib/MovieCard.svelte';
	import PersonCard from '$lib/PersonCard.svelte';
	import { modalVisible } from '$lib/modalStore';
	import AddedToFavorites from '$lib/addedToFavorites.svelte';
	import Carousel from '$lib/Carousel.svelte';

	let otsikko = $state('actors');

	let currentActor = $state<string | null>(null);
	const actorToMovieGroupKey: Record<string, keyof typeof movieGroups> = {
		'Matthew McConaughey': 'matthewMcConaughey',
		'Emma Stone': 'emmaStone',
		'Leonardo DiCaprio': 'leonardoDiCaprio',
		'Natalie Portman': 'nataliePortman',
		'Cillian Murphy': 'cillianMurphy'
	};
	let movieCards = $derived.by(() => {
		if (currentActor && currentActor in actorToMovieGroupKey) {
			const key = actorToMovieGroupKey[currentActor];
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
	ehto={currentActor !== null}
	onclick={() => {
		currentActor = null;
		otsikko = 'actors';
	}}
/>

{#if currentActor === null}
	<Carousel kortit={personGroups.actors} id="actors">
		{#snippet children(actor, diff)}
			<PersonCard
				nimi={actor.name}
				onclick={diff === 0
					? () => {
							currentActor = actor.name;
							otsikko = 'titles';
						}
					: undefined}
			/>
		{/snippet}
	</Carousel>
{:else}
	<div>
		<Carousel kortit={movieCards} id={currentActor}>
			{#snippet children(movie)}
				<MovieCard elokuvaTunnus={movie.imdbId} />
			{/snippet}
		</Carousel>
	</div>
{/if}
