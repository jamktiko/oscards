<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		header?: Snippet;
		footer?: Snippet;
		children: Snippet;
		close: () => void;
	}

	let { header, footer, children }: Props = $props();
</script>

<div class="fixed inset-0 z-900 bg-black/75"></div>

<div
	class="
        fixed top-1/2 left-1/2 z-901 h-135
        w-80 -translate-x-1/2 -translate-y-1/2 rounded-md border-2 border-yellow-400
        bg-zinc-900/90 p-4 shadow-lg
         md:p-6
    "
>
	<header class="mb-4 flex flex-row">
		{@render header?.()}
	</header>

	<div class="mt-10 flex flex-col gap-10">
		{@render children()}
	</div>

	<footer class="mt-4">
		{@render footer?.()}
	</footer>
</div>
