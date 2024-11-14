<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    width = 1200,
    bgColorClass,
    padding = 20,
    children
  }: { width?: number; bgColorClass?: string; padding?: number, children?: Snippet } = $props();
</script>

<div class="h-full {bgColorClass}" style:padding="0 {padding}px">
  <div class="mx-auto h-full" style="max-width: {width}px">
    {#if children}
      {@render children()}
    {/if}
  </div>
</div>
