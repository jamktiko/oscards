<script lang="ts">
	import { onDestroy, type Snippet } from 'svelte';
	import { getCarouselStore } from '$lib/carouselStore';

	type Kortti = { name: string } | { imdbId: string } | string;

	let { kortit, children, id }: { kortit: Kortti[]; children: Snippet<[any, number]>; id: string } =
		$props();

	const cards = $derived(kortit);
	let currentIndex: number = $state(0);

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

		return diff;
	}

	function handleClick(diff: number) {
		if (diff === 1) next();
		else if (diff === -1) prev();
	}
</script>

<div class="flex w-full justify-center py-10">
	<div class="relative flex w-full max-w-[800px] justify-center">
		{#each cards as setti, i (setti)}
			{@const diff = getDiff(i)}

			<button onclick={() => handleClick(diff)}>
				<div
					class="absolute left-1/2 -translate-x-1/2 will-change-transform"
					style={`
                        transform:
                            translateX(${diff * 260}px)
                            scale(${diff === 0 ? 1 : 0.95});
                        filter: blur(${diff === 0 ? 0 : 1.5}px);
                        opacity: ${Math.abs(diff) <= 1 ? 1 : 0};
                        pointer-events: ${Math.abs(diff) <= 1 ? 'auto' : 'none'};
                        z-index: ${100 - Math.abs(diff)};
                        transition: all 0.45s ease;
                        cursor: ${diff !== 0 ? 'pointer' : 'default'};
                    `}
				>
					{@render children(setti, diff)}
				</div>
			</button>
		{/each}
	</div>
</div>
