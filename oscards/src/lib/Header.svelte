<script lang="ts">
	import { resolve } from '$app/paths';

	let { otsikko, ehto, onclick }: { otsikko?: string; ehto: boolean; onclick: () => void } =
		$props();
</script>

<header class="w-full py-8">
	<div class=" mx-auto flex max-w-7xl items-center gap-2 px-6">
		<div class="flex flex-1 items-center justify-start gap-10">
			{#if ehto}
				<button
					class="material-symbols-outlined ml-[4%] scale-200 text-5xl text-yellow-400 drop-shadow-[0_6px_3px_rgba(0,0,0,1)] transition-transform hover:scale-300 hover:cursor-pointer"
					{onclick}
				>
					arrow_back_ios
				</button>
			{/if}
			<!-- Left icon -->
			<a href={resolve('/')} class="flex h-14 w-14 items-center justify-center gap-8">
				<span
					class="material-symbols-outlined scale-250 text-yellow-400 drop-shadow-[0_6px_3px_rgba(0,0,0,1)] transition-transform hover:scale-300"
				>
					home
				</span>
			</a>
		</div>

		<div class=" justify-center">
			<img src={`/img/${otsikko}.png`} alt={otsikko} class="h-auto w-44 md:w-52" />
		</div>
		<div class=" flex flex-1 justify-end">
			<a href={resolve('/favorites')} class="flex h-14 w-14 items-center justify-end">
				<span
					class="material-symbols-outlined scale-250 text-yellow-400 drop-shadow-[0_6px_3px_rgba(0,0,0,1)] transition-transform hover:scale-300"
				>
					favorite
				</span>
			</a>
		</div>
	</div>
</header>
