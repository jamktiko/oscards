<script lang="ts">
	import { personGroups } from '$lib/data/personGroups';
	import PersonCard from '$lib/PersonCard.svelte';
</script>

<div>
	{#each personGroups.directors as directors}
		<PersonCard nimi={directors.name} />
	{/each}
</div>
