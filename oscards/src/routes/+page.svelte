<script lang="ts">
	import CategoryButton from '../routes/categoryButton.svelte';
	import Header from '$lib/Header.svelte';
</script>

<Header otsikko=" Oscards" />

<CategoryButton text="Actors/Actresses" polku="/actors" />
<CategoryButton text="Directors" polku="/directors" />
