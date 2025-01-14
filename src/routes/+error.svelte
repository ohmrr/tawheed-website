<script lang="ts">
  import { page } from '$app/stores';
  import Container from '$lib/components/Container.svelte';
</script>

<Container bgColorClass="bg-white">
  <div class="mx-auto flex min-h-screen items-center justify-center">
    <div class="p-4"><p class="text-4xl font-bold">{$page.status} {$page.error?.message}</p></div>
  </div>
</Container>
