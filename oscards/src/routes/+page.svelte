<script lang="ts">
	import CategoryButton from '../routes/categoryButton.svelte';
	import Header from '$lib/Header.svelte';
</script>

<Header otsikko="Oscards" />

<div class="mt-10 pt-10">
	<CategoryButton text="Actors/Actresses" polku="/actors" />
	<CategoryButton text="Directors" polku="/directors" />
</div>
