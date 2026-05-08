<script lang="ts">
	import { resolve } from '$app/paths';
	let { otsikko, ehto, onclick }: { otsikko?: string; ehto: boolean; onclick: () => void } =
		$props();
</script>

<header class="w-full py-8">
	<div class="mx-auto flex max-w-7xl items-center justify-between px-6">
		<div class="flex items-center gap-4">
			{#if ehto}
				<button
					class="flex h-12 w-12 origin-center items-center justify-center overflow-hidden rounded-md border-2 border-yellow-400 bg-zinc-900/55 transition-transform hover:scale-115"
					{onclick}
				>
					<span class="material-symbols-outlined scale-180 pl-2 text-6xl text-yellow-400">
						arrow_back_ios
					</span>
				</button>
			{/if}

			<a
				href={resolve('/')}
				class="flex h-12 w-12 origin-center items-center justify-center overflow-hidden rounded-md border-2 border-yellow-400 bg-zinc-900/55 transition-transform hover:scale-115"
			>
				<span class="material-symbols-outlined mb-1 scale-200 text-6xl text-yellow-400">
					home
				</span>
			</a>
		</div>

		<div class="flex flex-1 justify-center">
			<img
				src={`/img/${otsikko}.png`}
				alt={otsikko}
				class="h-10 w-auto drop-shadow-[0_4px_2px_rgba(0,0,0,1)] md:h-15 md:w-auto"
			/>
		</div>

		<div class="flex items-center">
			<a
				href={resolve('/favorites')}
				class="flex h-12 w-12 origin-center items-center justify-center overflow-hidden rounded-md border-2 border-yellow-400 bg-zinc-900/55 transition-transform hover:scale-115"
			>
				<span class="material-symbols-outlined scale-200 text-6xl text-yellow-400"> favorite </span>
			</a>
		</div>
	</div>
</header>
