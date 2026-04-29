<script lang="ts">
	interface Props {
		text: string;
		polku: string;
	}

	let { text, polku }: Props = $props();
</script>

<a
	href={polku}
	class=" flex h-28 w-fit flex-col justify-center gap-4 rounded-md border border-yellow-400/50 bg-zinc-900 shadow-2xl transition-transform hover:scale-105"
>
	<div class=" px-6 text-center font-['Lora'] text-2xl font-bold text-white">
		{text}
	</div>
</a>

<style>
	button {
		cursor: pointer;
	}
</style>
