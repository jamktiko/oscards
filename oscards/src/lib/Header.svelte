<script lang="ts">
	let { otsikko }: { otsikko?: string } = $props();
</script>

<header class=" w-full py-8">
	<div class="mx-auto mt-10 flex max-w-7xl items-center justify-between gap-6 px-6">
		<div class="flex h-14 w-14 items-center justify-center">
			<a href="/"
				><span class="material-symbols-outlined scale-200 text-5xl text-yellow-400"> home </span>
			</a>
		</div>
		<img src="/img/{otsikko}.png" alt="logo" class="h-auto w-45" />
		<div class="flex h-14 w-14 items-center justify-center">
			<a href="/favorites">
				<span class="material-symbols-outlined scale-200 text-5xl text-yellow-400"> favorite </span>
			</a>
		</div>
	</div>
</header>
