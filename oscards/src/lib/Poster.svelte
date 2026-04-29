<script lang="ts">
    import { onMount } from 'svelte';

    let { elokuvaTunnus, class: className = "" }: { elokuvaTunnus: string; class?: string } = $props();
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
    alt="Ladataan..."
    class={`object-cover ${className}`}
/>
