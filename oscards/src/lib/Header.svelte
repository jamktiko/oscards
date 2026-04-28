<script lang="ts">
	let { otsikko }: { otsikko: string } = $props();
</script>

<header class="w-full py-4">
	<div class="mx-auto mt-5 mb-7 flex max-w-7xl items-center justify-between gap-6 px-6">
		<a href="/"
			><span class="material-symbols-outlined text-7xl text-yellow-400" style="font-size: 3rem"
				>home</span
			></a
		>

		<div class="flex-1 text-center font-['Lora'] text-3xl font-bold text-yellow-400 md:text-5xl">
			{otsikko}
		</div>

		<a href="/favorites"
			><span class="material-symbols-outlined text-7xl text-yellow-400" style="font-size: 3rem">
				favorite
			</span></a
		>
	</div>
</header>
