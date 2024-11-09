<script lang="ts">
  import type { Snippet } from "svelte";

  let { width = 1200, bgColorClass = null, children }: { width?: number; bgColorClass?: string | null, children: Snippet } =
    $props();
</script>

<div class="h-full {bgColorClass}">
  <div class="mx-auto h-full" style="max-width: {width}px">
    {@render children()}
  </div>
</div>
