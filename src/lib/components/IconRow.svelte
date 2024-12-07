<script lang="ts">
  import type { IconDescription } from '$lib/utils/iconDescriptions';
  import Icon from '@iconify/svelte';

  let { iconDescriptions }: { iconDescriptions: IconDescription[] } = $props();
</script>

<div class="flex flex-row flex-wrap justify-center gap-4">
  {#each iconDescriptions as { icon, description }}
    <div class="flex w-48 flex-1 flex-col items-center rounded-md bg-gray-200 p-5 shadow-lg">
      <Icon {icon} class="mb-4 h-16 w-16" />
      <p class="text-center font-bold">
        {description}
      </p>
    </div>
  {/each}
</div>
