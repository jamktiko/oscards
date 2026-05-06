<script lang="ts">
	import type { Snippet } from 'svelte';
	interface Props {
		header?: Snippet;
		footer?: Snippet;
		children: Snippet;
	}

	let { header, footer, children }: Props = $props();

	import { fly } from 'svelte/transition';
</script>

<div class="fixed inset-0 z-10 bg-black/75"></div>

<div
	class="fixed top-[10vh] left-[10vw] z-100 max-h-[80vh] w-[80%] rounded-md border-2 border-yellow-400 bg-zinc-900 p-4 shadow-lg"
	transition:fly={{ y: -300, delay: 50, duration: 500 }}
>
	<header class="flex flex-row">
		{@render header?.()}
	</header>

	<div>
		{@render children()}
	</div>
	<footer class="">
		{@render footer?.()}
	</footer>
</div>
