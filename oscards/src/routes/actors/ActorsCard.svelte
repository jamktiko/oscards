<script lang="ts">
  import {onMount} from "svelte";
  import type {Person} from "$lib/tyypit"
  let { nimi }: { nimi: string } =$props();
  let persons: Person[] = $state([])
 
  onMount(async () => {
    const response = await fetch (`/data/people.json`);
 
     persons = await response.json();

  })
  
  let person = $derived(persons.find((p) => p.name === nimi));
  let kuva = $derived(person?.image)
</script>

<div> 
  <p> </p>
</div>