<script lang="ts">
  interface Props {
    text: string;
    onclick: () => void;
    class: string;
  }
  
  let {text, class: className, onclick,}: Props =$props();
</script>
<button class={className} {onclick}>
  {text}
</button>

<style>
  button {
    cursor: pointer;
  }
</style>