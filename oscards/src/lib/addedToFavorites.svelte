<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { modalVisible } from './modalStore';
	import { favoriteMessage } from './favoriteMessageStore';

	let favorites = $favoriteMessage;

	onMount(() => {
		const timer = setTimeout(() => {
			modalVisible.set(false);
		}, 1000);
		return () => clearTimeout(timer);
	});
</script>

<div
	class="fixed top-20 right-0 mt-5 mr-5 rounded-2xl border-2 border-yellow-400 bg-zinc-900 p-10 py-2 text-xl font-bold text-yellow-400"
	in:fly={{ x: 100 }}
	out:fly={{ x: 100 }}
>
	{favorites}
</div>
