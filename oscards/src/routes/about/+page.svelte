<script lang="ts">
	import Header from '$lib/Header.svelte';

	// Svelte 5 tapa (jos käytössäsi on uusin versio)
	let avoinOsio = $state('');

	function toggle(nimi: string) {
		avoinOsio = avoinOsio === nimi ? '' : nimi;
	}
</script>

<Header otsikko="Oscards" />
<div class="mt-10 flex justify-center p-4 font-judson">
	<!-- Kiinteä leveys desktopissa (max-w-md), joustava mobiilissa -->
	<div
		class="bg-black-900 w-full max-w-md rounded-lg border-4 border-yellow-400 p-6 text-center text-white shadow-2xl"
	>
		<!-- OSASYSTEEMI: Tekijät -->
		<div class="mb-4">
			<!-- Varmista, että on:click on juuri tässä muodossa -->
			<button
				type="button"
				on:click={() => toggle('tekijat')}
				class="flex w-full flex-row justify-between py-2 text-xl font-bold transition hover:text-yellow-400 focus:outline-none"
			>
				<div>Creators</div>
				<span class="material-symbols-outlined"> keyboard_arrow_down </span>
			</button>

			{#if avoinOsio === 'tekijat'}
				<div class="bg-black-900 mt-2 space-y-1 rounded p-3">
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
				on:click={() => toggle('actors')}
				class="flex w-full flex-row justify-between py-2 font-judson text-xl font-bold transition hover:text-yellow-400 focus:outline-none"
			>
				<div>Actors</div>
				<span class="material-symbols-outlined"> keyboard_arrow_down </span>
			</button>

			{#if avoinOsio === 'actors'}
				<div class="bg-black-900 mt-2 flex flex-col space-y-1 rounded p-3">
					<a
						href="https://commons.wikimedia.org/wiki/File:Matthew_McConaughey_2019_(48648344772).jpg"
						target="_blank"
						class="text-white transition hover:text-yellow-400 hover:underline"
						>Matthew McConaughey</a
					>
					<a
						href="https://commons.wikimedia.org/wiki/File:Emma_Stone_at_the_2024_New_York_Film_Festival_1_(cropped).jpg"
						target="_blank"
						class="text-white transition hover:text-yellow-400 hover:underline">Emma Stone</a
					>
					<a
						href="https://commons.wikimedia.org/wiki/File:Leonardo_DiCaprio_2014.jpg"
						target="_blank"
						class="text-white transition hover:text-yellow-400 hover:underline">Leonardo Dicaprio</a
					>
					<a
						href="https://commons.wikimedia.org/wiki/File:Natalie_Portman_(48470988352)_(cropped).jpg"
						target="_blank"
						class="text-white transition hover:text-yellow-400 hover:underline">Natalie Portman</a
					>
					<a
						href="https://commons.wikimedia.org/wiki/File:CillianMurphy-TIFF2025-01-Cropped_(cropped).png"
						target="_blank"
						class="text-white transition hover:text-yellow-400 hover:underline">Cillian Murphy</a
					>
				</div>
			{/if}
		</div>
		<div class="mb-4">
			<button
				type="button"
				on:click={() => toggle('directors')}
				class="flex w-full flex-row justify-between py-2 font-judson text-xl font-bold transition hover:text-yellow-400 focus:outline-none"
			>
				<div>Directors</div>
				<span class="material-symbols-outlined"> keyboard_arrow_down </span>
			</button>

			{#if avoinOsio === 'directors'}
				<div class="bg-black-900 mt-2 flex flex-col space-y-1 rounded p-3">
					<a
						href="https://commons.wikimedia.org/wiki/File:Martin_Scorsese-68749.jpg"
						target="_blank"
						class="text-white transition hover:text-yellow-400 hover:underline">Martin Scorsese</a
					>
					<a
						href="https://commons.wikimedia.org/wiki/File:Christopher_Nolan,_London,_2013_(crop).jpg"
						target="_blank"
						class="text-white transition hover:text-yellow-400 hover:underline">Christopher Nolan</a
					>
					<a
						href="https://commons.wikimedia.org/wiki/File:Paul_Thomas_Anderson_-_BFI_Southbank.jpg"
						target="_blank"
						class="text-white transition hover:text-yellow-400 hover:underline"
						>Paul Thomas Anderson</a
					>
					<a
						href="https://commons.wikimedia.org/wiki/File:James_Cameron_(28003289954)_Cropped.png"
						target="_blank"
						class="text-white transition hover:text-yellow-400 hover:underline">James Cameron</a
					>
					<a
						href="https://commons.wikimedia.org/wiki/File:Jane_Campion_DNZM_(cropped).jpg"
						target="_blank"
						class="text-white transition hover:text-yellow-400 hover:underline">Jane Campion</a
					>
				</div>
			{/if}
		</div>
		<!-- OSASYSTEEMI: Extra -->
		<div class="mb-4">
			<button
				type="button"
				on:click={() => toggle('extra')}
				class="flex w-full flex-row justify-between py-2 font-judson text-xl font-bold transition hover:text-yellow-400 focus:outline-none"
			>
				<div>Web Pages</div>
				<span class="material-symbols-outlined"> keyboard_arrow_down </span>
			</button>

			{#if avoinOsio === 'extra'}
				<div class="bg-black-900 mt-2 flex flex-col space-y-2 rounded p-3">
					<a
						href="https://imdb-api.com"
						target="_blank"
						class="text-white transition hover:text-yellow-400 hover:underline">API</a
					>
					<a
						href="https://wikimedia.org"
						target="_blank"
						class="text-white transition hover:text-yellow-400 hover:underline">Wikimedia.org</a
					>
				</div>
			{/if}
		</div>
	</div>
</div>
