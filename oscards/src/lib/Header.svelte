<script lang="ts">
	let { otsikko }: { otsikko: string } = $props();
</script>

<div class="w-100% flex flex-row justify-between gap-2 bg-gray-800 p-7 text-white">
	<span class="material-symbols-outlined border-2 text-3xl">home</span>
	<h1 class="font-judson">{otsikko}</h1>
	<span class="material-symbols-outlined border-2 text-3xl">favorite</span>
</div>
