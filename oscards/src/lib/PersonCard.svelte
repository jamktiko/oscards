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

<div
	class="relative mx-auto h-auto w-full max-w-sm overflow-hidden rounded-lg border-2 border-yellow-400 bg-zinc-900 object-cover pt-5 pb-10 shadow-[0_0_35px_rgba(0,0,0,0.55)]"
>
	<button class="h-full w-full text-left" {onclick}>
		<div
			class="mx-auto mt-4 aspect-square w-[85%] overflow-hidden rounded-[10px] outline-yellow-400"
		>
			<img src={kuva} alt="kuva" class="h-auto w-auto object-cover" />
		</div>

		<div
			class="font-judson mt-4 px-6 text-center text-2xl font-bold text-zinc-300 md:text-3xl"
		>
			{person?.name}
		</div>

		<div class="mt-6 flex flex-col gap-6 px-6 md:flex-row md:items-start md:justify-between">
			<div class="font-judson space-y-2 text-lg font-medium text-zinc-300 md:text-xl">
				<div>Born: {person?.born}</div>
				<div>Nationality: {person?.nationality}</div>
				<div>Total movies: {person?.totalMovies}</div>
				<div>Oscar nominations: {person?.oscarNominations}</div>
			</div>

			<div class="font-judson flex items-center gap-3 text-lg font-medium text-zinc-300 md:text-xl">
				<span>Oscars won:</span>
				<img
					src="/img/oscarPalkinto.png"
					alt="oscar"
					class="h-10 w-auto drop-shadow-[0_0_15px_rgba(239,191,4,1)] md:h-12"
				/>
			</div>
		</div>
	</button>
</div>
