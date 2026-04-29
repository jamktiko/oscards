<script lang="ts">
	let { otsikko }: { otsikko?: string } = $props();
</script>

<header class="w-full py-4">
	<div class="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6">
		<!-- HOME IKONI -->
		<div class="flex h-14 w-14 items-center justify-center">
			<a href="/"
				><span class="material-symbols-outlined scale-200 text-5xl text-yellow-400"> home </span>
			</a>
		</div>

		<!-- TEKSTI -->
		<div class="flex-1 text-center font-['Lora'] text-3xl font-bold text-yellow-400 md:text-5xl">
			{otsikko}
		</div>

		<!-- FAVORITE IKONI -->
		<div class="flex h-14 w-14 items-center justify-center">
			<a href="/favorites">
				<span class="material-symbols-outlined scale-200 text-5xl text-yellow-400"> favorite </span>
			</a>
		</div>
	</div>
</header>
