<script lang="ts">
  let { images = [] }: { images: Image[] } = $props();
  let selectedImage: Image | null = $state(null);

  interface Picture {
    img: {
      src: string;
      w: number;
      h: number;
    };
    sources: {
      avif: string;
      webp: string;
      png: string;
    };
  }

  interface Image {
    src: Picture;
    alt: string;
  }

  function showModal(image: Image) {
    selectedImage = image;
  }

  function closeModal() {
    selectedImage = null;
  }
</script>

<div class="mt-6 grid grid-cols-2 gap-1.5 md:grid-cols-3">
  {#each images as { src, alt }, index}
    {console.log(src)}
    <div
      class="group relative cursor-pointer overflow-hidden rounded-md shadow-lg {index ===
        images.length - 1 && images.length % 2 !== 0
        ? 'col-span-2 md:col-span-1'
        : ''}">
      <button class="block h-full" onclick={() => showModal({ src: src.img.src, alt })}>
        <enhanced:img
          {src}
          {alt}
          loading="lazy"
          class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
      </button>
    </div>
  {/each}
</div>

{#if selectedImage}
  <div class="fixed left-0 top-0 z-50 h-full w-full bg-black bg-opacity-70 flex items-center justify-center" onclick={closeModal}>
    <img class="max-w-[90vw] max-h-[90vh] rounded-md shadow-lg" loading="lazy" src={selectedImage.src} alt={selectedImage.alt} />
  </div>
{/if}
