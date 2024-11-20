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
    <div
      class="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg">
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
      <p class="p-4 text-center text-gray-700">{currentImage?.alt}</p>
      <button
        class="absolute right-4 top-4 text-gray-500 hover:text-gray-800"
        on:click={closeModal}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-6 w-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>
{/if}