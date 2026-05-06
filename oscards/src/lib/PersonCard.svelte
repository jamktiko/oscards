<script lang="ts">
	import { onMount } from 'svelte';
	import type { Person } from '$lib/tyypit';
	import { fly } from 'svelte/transition';

	let { nimi, onclick }: { nimi: string; onclick?: () => void } = $props();
	let persons: Person[] = $state([]);

	onMount(async () => {
		const response = await fetch(`/data/people.json`);
		persons = await response.json();
	});

	let person = $derived(persons.find((p) => p.name === nimi));
	let kuva = $derived(person?.image);
</script>

{#if person}
	<div
		class="relative mx-auto h-auto w-full max-w-sm overflow-hidden rounded-lg border-2 border-yellow-400 bg-zinc-900 object-cover pt-5 pb-10 shadow-[0_0_35px_rgba(0,0,0,0.55)]"
		in:fly={{ y: -400 }}
	>
		<button class="h-160 w-90 text-left" {onclick}>
			<div
				class="mx-auto mt-4 aspect-square w-[85%] overflow-hidden rounded-[10px] outline-yellow-400"
			>
				<img src={kuva} alt="kuva" class="h-auto w-auto object-cover" />
			</div>

			<div class="mt-4 px-6 text-center font-judson text-2xl font-bold text-zinc-300 md:text-3xl">
				{person?.name}
			</div>

			<div class="mt-6 ml-4 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
				<div
					class="font-sm md:text-md flex flex-col items-center space-y-2 font-judson text-lg text-zinc-300"
				>
					<div>B. {person?.born}</div>
					<div>{person?.nationality}</div>
					<div>Total movies: {person?.totalMovies}</div>
					<div>Oscar nominations: {person?.oscarNominations}</div>
				</div>

				<div
					class="flex items-center pt-10 pr-10 font-judson text-lg font-medium text-zinc-300 md:text-xl"
				>
					<img
						src="/img/oscarPalkinto.png"
						alt="oscar"
						class="h-15 w-auto drop-shadow-[0_0_15px_rgba(239,191,4,1)] md:h-20"
					/>
				</div>
			</div>
		</button>
	</div>
{/if}
