<script lang="ts">
	import { movieGroups } from '$lib/data/movieGroups';
	import { personGroups } from '$lib/data/personGroups';
	import Header from '$lib/Header.svelte';
	import MovieCard from '$lib/MovieCard.svelte';
	import PersonCard from '$lib/PersonCard.svelte';

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

<Header {otsikko} />
<div>
	<div>
		{#if currentActor === null}
			<div>
				{#each personGroups.actors as actor}
					<PersonCard
						nimi={actor.name}
						onclick={() => {
							currentActor = actor.name;
							otsikko = `${actor.name} elokuvat`;
						}}
					/>
				{/each}
			</div>
		{:else}
			<div>
				{#each movieCards as movie}
					<MovieCard elokuvaTunnus={movie.imdbId} />
				{/each}
			</div>
		{/if}
	</div>
</div>
