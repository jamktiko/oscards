<script lang="ts">
	import CategoryButton from '../routes/categoryButton.svelte';
</script>

<footer class="w-full py-6">
	<div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
		<div class="font-judson text-xl font-bold text-zinc-300 md:text-2xl">
			Copyright 2026 © OsCards co.
		</div>

		<CategoryButton
			text="Credits"
			onclick={() => console.log('clicked')}
			class="font-judson justify-start text-2xl font-bold text-zinc-300"
		/>
	</div>
</footer>
