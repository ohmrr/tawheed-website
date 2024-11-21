<script lang="ts">
  let { images = [] }: { images: Image[] } = $props();

  interface Image {
    src: string;
    alt: string;
  }
</script>

<div class="grid grid-cols-2 gap-2 md:grid-cols-3">
  {#each images as image}
    <div class="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg">
      <img
        src={image.src}
        alt={image.alt}
        class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
    </div>
  {/each}
</div>
