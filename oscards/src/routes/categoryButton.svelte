<script lang="ts">
	interface Props {
		text: string;
		polku: string;
	}

	let { text, polku }: Props = $props();
</script>

<a
	href={polku}
	class=" mx-auto mt-11 flex h-25 w-60 max-w-sm flex-col justify-center rounded-md border-2 border-yellow-400 bg-zinc-900/75 font-judson shadow-2xl transition-transform hover:scale-105 md:h-28 md:w-full"
>
	<div class=" px-6 text-center text-3xl font-bold text-white">
		{text}
	</div>
</a>

<style>
	button {
		cursor: pointer;
	}
</style>
