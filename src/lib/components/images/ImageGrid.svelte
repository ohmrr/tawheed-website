<script lang="ts">
  let { images = [] }: { images: Image[] } = $props();

  interface Image {
    src: string;
    alt: string;
  }
</script>

<div class="mt-6 grid grid-cols-2 gap-1.5 md:grid-cols-3">
  {#each images as { src, alt }, index}
    <div
      class="group relative cursor-pointer overflow-hidden rounded-md shadow-lg {index ===
        images.length - 1 && images.length % 2 !== 0
        ? 'col-span-2 md:col-span-1'
        : ''}">
      <enhanced:img
        {src}
        {alt}
        loading="lazy"
        class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
    </div>
  {/each}
</div>
