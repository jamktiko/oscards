<script lang="ts">
	import Header from '$lib/Header.svelte';

	// Svelte 5 tapa (jos käytössäsi on uusin versio)
	let avoinOsio = $state('');

	function toggle(nimi: string) {
		avoinOsio = avoinOsio === nimi ? '' : nimi;
	}
</script>

<Header otsikko="Oscards" />
<div class="flex justify-center p-4">
	<!-- Kiinteä leveys desktopissa (max-w-md), joustava mobiilissa -->
	<div
		class="w-full max-w-md rounded-lg border-4 border-yellow-400 bg-black p-6 text-center text-white shadow-2xl"
	>
		<!-- OSASYSTEEMI: Tekijät -->
		<div class="mb-4">
			<!-- Varmista, että on:click on juuri tässä muodossa -->
			<button
				type="button"
				on:click={() => toggle('tekijat')}
				class="w-full py-2 text-xl font-bold transition hover:text-yellow-400 focus:outline-none"
			>
				Tekijät {avoinOsio === 'tekijat' ? '▲' : '▼'}
			</button>

			{#if avoinOsio === 'tekijat'}
				<div class="mt-2 space-y-1 rounded bg-gray-900 p-3">
					<p>Tuomas Huhtala</p>
					<p>Joel Hänninen</p>
					<p>Nathalie Penttinen</p>
					<p>Patrick Uimonen</p>
				</div>
			{/if}
		</div>

		<!-- OSASYSTEEMI: Näyttelijät -->
		<div class="mb-4">
			<button
				type="button"
				on:click={() => toggle('nayttelijat')}
				class="w-full py-2 text-xl font-bold transition hover:text-yellow-400 focus:outline-none"
			>
				Näyttelijät {avoinOsio === 'nayttelijat' ? '▲' : '▼'}
			</button>

			{#if avoinOsio === 'nayttelijat'}
				<div class="mt-2 flex flex-col space-y-1 rounded bg-gray-900 p-3">
					<p>Matthew McConaughey</p>
					<p>Emma Stone</p>
					<p>Leonardo DiCaprio</p>
				</div>
			{/if}
		</div>

		<!-- OSASYSTEEMI: Extra -->
		<div class="mb-4">
			<button
				type="button"
				on:click={() => toggle('extra')}
				class="w-full py-2 text-xl font-bold transition hover:text-yellow-400 focus:outline-none"
			>
				Extra {avoinOsio === 'extra' ? '▲' : '▼'}
			</button>

			{#if avoinOsio === 'extra'}
				<div class="mt-2 flex flex-col space-y-2 rounded bg-gray-900 p-3 text-blue-400">
					<a href="https://imdb-api.com" target="_blank" class="hover:underline">API Key</a>
					<a href="https://wikimedia.org" target="_blank" class="hover:underline">Wikimedia.org</a>
				</div>
			{/if}
		</div>
	</div>
</div>
