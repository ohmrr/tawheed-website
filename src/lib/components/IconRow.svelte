<script lang="ts">
  import type { IconDescription } from '$lib/utils/iconDescriptions';
  import Icon from '@iconify/svelte';

  let { iconDescriptions }: { iconDescriptions: IconDescription[] } = $props();
</script>

<div class="flex flex-row flex-wrap justify-center gap-4">
  {#each iconDescriptions as {icon, description} }
    <div class="flex flex-1 flex-col items-center bg-gray-200 rounded-md shadow-lg p-5 w-48">
      <Icon {icon} class="w-16 h-16 mb-4" />
      <p class="font-bold text-center">
        {description}
      </p>
    </div>
  {/each}
</div>