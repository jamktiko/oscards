<script lang="ts">
	import { onDestroy, type Snippet } from 'svelte';
	import carouselState from '$lib/carouselStore';

	let { kortit, children }: { kortit: any[]; children: Snippet<[any, number]> } = $props();

	const cards = $derived(kortit);
	let currentIndex: number = $state(0);
	const unsub = carouselState.subscribe((x) => (currentIndex = x));
	function next() {
		currentIndex = (currentIndex + 1) % cards.length;
		carouselState.set(currentIndex);
	}

	function prev() {
		currentIndex = (currentIndex - 1 + cards.length) % cards.length;
		carouselState.set(currentIndex);
	}
	onDestroy(() => {
		if (unsub) {
			unsub();
		}
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

{#each cards as setti, i (setti)}
	{@const diff = getDiff(i)}
	<button onclick={() => handleClick(diff)}>
		<div
			class="absolute left-193 will-change-transform"
			style={` 
		transform:
			translateX(${diff * 260}px)
			scale(${diff === 0 ? 1 : 0.95});
		filter: brightness(${diff === 0 ? 1 : 1});
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
