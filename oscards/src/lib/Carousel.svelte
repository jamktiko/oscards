<script lang="ts">
	import { onDestroy, type Snippet } from 'svelte';
	import { getCarouselStore } from '$lib/carouselStore';
	import { fly } from 'svelte/transition';

	type Kortti = { name: string } | { imdbId: string } | string;

	let {
		kortit,
		children,
		id,
		visible
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	}: { kortit: Kortti[]; children: Snippet<[any, number]>; id: string; visible?: boolean } =
		$props();

	const cards = $derived(kortit);
	let currentIndex: number = $state(0);

	// svelte-ignore state_referenced_locally
	const store = getCarouselStore(id);
	const unsub = store.subscribe((x) => (currentIndex = x));

	function next() {
		currentIndex = (currentIndex + 1) % cards.length;
		store.set(currentIndex);
	}

	function prev() {
		currentIndex = (currentIndex - 1 + cards.length) % cards.length;
		store.set(currentIndex);
	}

	onDestroy(() => {
		if (unsub) unsub();
	});

	function getDiff(i: number) {
		const len = cards.length;
		let diff = i - currentIndex;

		if (diff > len / 2) diff -= len;
		if (diff < -len / 2) diff += len;

		return Math.max(-2, Math.min(2, diff));
	}

	function handleClick(diff: number) {
		if (diff === 1) next();
		else if (diff === -1) prev();
	}
</script>

<div
	class:hidden={visible}
	class="snap-x snap-mandatory overflow-x-auto md:hidden"
	in:fly={{ y: -400 }}
>
	<div class="flex">
		{#each cards as setti (setti)}
			<div class="flex min-w-full snap-center justify-center px-4">
				{@render children(setti, 0)}
			</div>
		{/each}
	</div>
</div>

<div class:piilotettu={visible} class="hidden w-full justify-center md:flex" in:fly={{ y: -400 }}>
	<div class="relative flex w-full max-w-200 justify-center">
		{#each cards as setti, i (setti)}
			{@const diff = getDiff(i)}

			<!-- svelte-ignore a11y_click_events_have_key_events -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div onclick={() => handleClick(diff)}>
				<div
					class="absolute left-1/2 -translate-x-1/2 will-change-transform"
					style={`
                        transform:
                            translateX(${diff * 260}px)
                            scale(${diff === 0 ? 1 : 0.95});
                        filter: brightness(${diff === 0 ? 1 : 0.6});
                        opacity: ${Math.abs(diff) <= 1 ? 1 : 0};
                        pointer-events: ${Math.abs(diff) <= 1 ? 'auto' : 'none'};
                        z-index: ${100 - Math.abs(diff)};
                        transition: all 0.45s ease;
                        cursor: ${diff !== 0 ? 'pointer' : 'default'};
                    `}
				>
					{@render children(setti, diff)}
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.piilotettu {
		opacity: 0;
		pointer-events: none;
		transition: opacity 300ms ease;
	}
</style>
