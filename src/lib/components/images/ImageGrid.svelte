<script lang="ts">
  import { importImages } from '$lib/utils/loadImage';
  import { onMount } from 'svelte';

  interface Image {
    src: string;
    alt: string;
  }

  let images: Image[] = [];
  let showModal = false;
  let currentImage: Image | null = null;

  onMount(() => {
    images = importImages();
  });

  function openModal(image: Image) {
    currentImage = image;
    showModal = true;
  }

  function closeModal() {
    showModal = false;
    currentImage = null;
  }
</script>

<div class="grid grid-cols-2 gap-2 md:grid-cols-3">
  {#each images as image}
    <div class="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg">
      <img
        src={image.src}
        alt={image.alt}
        class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        on:click={() => openModal(image)} />
    </div>
  {/each}
</div>

{#if showModal}
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
    on:click={closeModal}>
    <div
      class="relative w-11/12 max-w-4xl overflow-hidden rounded-lg bg-white shadow-lg"
      on:click|stopPropagation>
      <img
        src={currentImage?.src}
        alt={currentImage?.alt}
        class="h-auto max-h-[80vh] w-full object-contain" />
      <button
        class="absolute right-4 bg-gray-50 py-0.5 px-1 shadow-md rounded-lg top-4 text-gray-800 hover:text-gray-900 font-bold text-xl"
        on:click={closeModal}>
        &#10005;
      </button>
    </div>
  </div>
{/if}
