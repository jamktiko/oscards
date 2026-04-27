<script lang="ts">
	import { onMount } from 'svelte';

	let { elokuvaTunnus }: { elokuvaTunnus: string } = $props();
	let poster = $state('');
	onMount(async () => {
		const response = await fetch(`https://imdb.iamidiotareyoutoo.com/search?q=${elokuvaTunnus}`);

		const data = await response.json();

		const movie = data.description?.[0];

		poster = movie?.['#IMG_POSTER'] || '';
	});
</script>

<div class=" m-10 h-200 w-100">
	<img src={poster} alt="Ladataan..." />
</div>
