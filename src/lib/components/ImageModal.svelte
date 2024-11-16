<script lang="ts">
  import Container from './Container.svelte';

  let { imageUrl, altText, showModal }: { imageUrl: string; altText: string; showModal: boolean } =
    $props();
</script>
