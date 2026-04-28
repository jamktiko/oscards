<script lang="ts">
	import { onMount } from 'svelte';
	import type { Person } from '$lib/tyypit';
	let { nimi, onclick }: { nimi: string; onclick: () => void } = $props();
	let persons: Person[] = $state([]);

	onMount(async () => {
		const response = await fetch(`/data/people.json`);

		persons = await response.json();
	});

	let person = $derived(persons.find((p) => p.name === nimi));
	let kuva = $derived(person?.image);
</script>

<div>
	<button {onclick}>
		<div class="m-10 h-30 w-20">
			<img src={kuva} alt="" />
		</div>
		<div>
			<h1>
				{person?.name}
			</h1>
		</div>
		<div>
			<p>Born: {person?.born}</p>
			<p>Nationality: {person?.nationality}</p>
			<p>Total movies: {person?.totalMovies}</p>
			<p>Oscar nominations: {person?.oscarNominations}</p>
		</div>
		<div>
			<p>Oscars won:</p>
		</div>
	</button>
</div>
