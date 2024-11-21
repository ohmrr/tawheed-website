<script lang="ts">
  import { loadImages } from '$lib/utils/loadImage';
  import { onMount } from 'svelte';

  interface Image {
    src: string;
    alt: string;
  }

  let images: Image[] = [];
  // let showModal = false;
  // let currentImage: Image | null = null;

  onMount(() => {
    images = loadImages();
  });

  // function openModal(image: Image) {
  //   currentImage = image;
  //   showModal = true;
  // }

  // function closeModal() {
  //   showModal = false;
  //   currentImage = null;
  // }
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
