<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { modalVisible } from './modalStore';

	onMount(() => {
		const timer = setTimeout(() => {
			modalVisible.set(false);
		}, 1000);
		return () => clearTimeout(timer);
	});
</script>

<div
	class="fixed top-20 right-0 rounded-2xl border-2 border-yellow-400 bg-zinc-900 p-10 text-yellow-400"
	in:fly={{ x: 100 }}
	out:fly={{ x: 100 }}
>
	Added to favorites
</div>
