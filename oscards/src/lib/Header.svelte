<script lang="ts">
	let { otsikko }: { otsikko: string } = $props();
	import CategoryButton from "../routes/categoryButton.svelte"
	const home = "home"
	const favorite ="favorite"
</script>

<div class="w-100% flex flex-row justify-between gap-2 bg-zinc-900 p-7 text-white">
<CategoryButton
  text={home}
  onclick={() => console.log('Menit kotiin')}
  class="material-symbols-outlined border-2 text-3xl"
/>	<h1 class="font-judson">{otsikko}</h1>
	<div
		class="inline-flex h-14 w-14 items-start justify-start gap-2.5 rounded-[10px] bg-zinc-900 p-2.5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] outline outline-yellow-400"
	>
		<CategoryButton
		text={favorite}
		onclick={() => console.log("Menit suosikkeihin")}
		 class="material-symbols-outlined h-8 w-8 items-center bg-yellow-400"/>
	</div>
</div>
