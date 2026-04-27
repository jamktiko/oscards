<script lang="ts">
	import { personGroups } from '$lib/data/personGroups';
	import PersonCard from '$lib/PersonCard.svelte';
</script>

<div>
	{#each personGroups.actors as actor}
		<PersonCard nimi={actor.name} />
	{/each}
</div>
