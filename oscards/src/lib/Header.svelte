<script lang="ts">
	let { otsikko }: { otsikko: string } = $props();
</script>

<header class="w-full bg-zinc-900 py-4">
	<div class="mx-auto flex max-w-screen-xl items-center justify-between gap-6 px-6">
		<!-- VASEN IKONI: HOME -->
		<div class="flex h-14 w-14 items-center justify-center rounded-[5px] bg-zinc-900">
			<span class="material-symbols-outlined text-4xl text-yellow-400"> home </span>
		</div>

		<!-- TEKSTI -->
		<div class="flex-1 text-center font-['Lora'] text-3xl font-bold text-yellow-400 md:text-5xl">
			{otsikko}
		</div>

		<span class="material-symbols-outlined text-6xl text-yellow-400"> favorite </span>
	</div>
</header>
