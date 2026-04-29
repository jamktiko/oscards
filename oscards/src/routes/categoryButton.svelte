<script lang="ts">
	interface Props {
		text: string;
		polku: string;
	}

	let { text, polku }: Props = $props();
</script>

<a
	href={polku}
	class="mx-auto mt-11 flex h-28 w-full max-w-sm flex-col justify-center rounded-md border-2 border-yellow-400 bg-zinc-900 shadow-2xl transition-transform hover:scale-105"
>
	<div class="font- px-6 text-center text-2xl font-bold text-white">
		{text}
	</div>
</a>

<style>
	button {
		cursor: pointer;
	}
</style>
