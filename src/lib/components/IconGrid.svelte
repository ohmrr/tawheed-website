<script lang="ts">
  import type { IconDescription } from '$lib/utils/iconDescriptions';
  import Icon from '@iconify/svelte';

  let { iconDescriptions }: { iconDescriptions: IconDescription[] } = $props();
</script>

<div class="grid grid-cols-2 gap-4 md:grid-cols-4">
  {#each iconDescriptions as { icon, description }}
    <div class="flex flex-col items-center rounded-md bg-gray-200 p-5 shadow-lg">
      <Icon {icon} class="mb-4 h-16 w-16" />
      <p class="text-center text-sm font-bold md:text-base">
        {description}
      </p>
    </div>
  {/each}
</div>
