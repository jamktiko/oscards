<script lang="ts">
	import { movieGroups } from '$lib/data/movieGroups';
	import { personGroups } from '$lib/data/personGroups';
	import Header from '$lib/Header.svelte';
	import MovieCard from '$lib/MovieCard.svelte';
	import PersonCard from '$lib/PersonCard.svelte';
	import { modalVisible } from '$lib/modalStore';
	import AddedToFavorites from '$lib/addedToFavorites.svelte';
	import Carousel from '$lib/Carousel.svelte';

	let otsikko = $state('Actors');

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
<Header {otsikko} />

{#if currentActor === null}
	<Carousel kortit={personGroups.actors}>
		{#snippet children(actor, diff)}
			<PersonCard
				nimi={actor.name}
				onclick={diff === 0 ? () => (currentActor = actor.name) : undefined}
			/>
		{/snippet}
	</Carousel>
{:else}
	<button
		class="material-symbols-outlined scale-200 text-5xl text-yellow-400"
		onclick={() => (currentActor = null)}
	>
		arrow_back
	</button>
	<div>
		<Carousel kortit={movieCards}>
			{#snippet children(movie)}
				<MovieCard elokuvaTunnus={movie.imdbId} />
			{/snippet}
		</Carousel>
	</div>
{/if}
