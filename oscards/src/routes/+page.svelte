<script lang="ts">
	import CategoryButton from '../routes/categoryButton.svelte';
	import Header from '$lib/Header.svelte';
</script>

<Header otsikko="oscards-logo" />

<div class="mt-10 mb-10 pt-10 pb-10">
	<CategoryButton text="Actors" polku="/actors" />
	<CategoryButton text="Directors" polku="/directors" />
</div>
