<script lang="ts">
	import { onMount } from 'svelte';

	let { elokuvaTunnus, class: className = '' } = $props();
	let poster = $state('');

	onMount(async () => {
		const response = await fetch(`https://imdb.iamidiotareyoutoo.com/search?q=${elokuvaTunnus}`);
		const data = await response.json();
		const movie = data.description?.[0];
		poster = movie?.['#IMG_POSTER'] || '';
	});
</script>

<img
	src={poster}
	alt="Poster"
	class={`rounded-[10px] object-cover ${className || 'h-120 w-80 border-2 border-yellow-400 md:h-130 md:w-85'}`}
/>
