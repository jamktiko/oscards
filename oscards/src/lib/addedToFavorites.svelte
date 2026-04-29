<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { modalVisible } from './modalStore';

	onMount(() => {
		const timer = setTimeout(() => {
			modalVisible.set(false);
		}, 3000);
		return () => clearTimeout(timer);
	});
</script>

<div
	style="position: fixed; top: 140px; right: 0px; color: yellow; background-color: rgba(0, 0, 0, 1); padding: 35px 50px 35px 30px; border-radius: 5px; z-index: 9999; font-size: 38px; white-space: nowrap;"
	in:fly={{ x: 100 }}
	out:fly={{ x: 100 }}
>
	Added to favorites
</div>
