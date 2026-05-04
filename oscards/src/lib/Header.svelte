<script lang="ts">
	let { otsikko }: { otsikko?: string } = $props();
</script>

<header class="w-full py-8">
	<div class="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6">
		<!-- Left icon -->
		<a href="/" class="flex h-14 w-14 items-center justify-center">
			<span class="material-symbols-outlined scale-200 text-5xl text-yellow-400"> home </span>
		</a>

		<img src={`/img/${otsikko}.png`} alt={otsikko} class="h-auto w-44 md:w-52" />

		<a href="/favorites" class="flex h-14 w-14 items-center justify-center">
			<span class="material-symbols-outlined scale-200 text-5xl text-yellow-400"> favorite </span>
		</a>
	</div>
</header>
