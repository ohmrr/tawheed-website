<script lang="ts">
import Navigation from './Navigation.svelte';
</script>

<Navigation />
<div class="bg-charcoal w-full h-[600px] flex flex-col relative">
  <div class="absolute inset-0">
    <video src="/media/construction.mp4" autoplay muted loop playsinline class="w-full h-full object-cover"></video>
  </div>

  <div class="flex justify-center items-center absolute inset-0 z-10 text-white">
    <div class="text-center px-4">
      <h1 class="text-3xl md:text-6xl font-bold">Masjid Al-Tawheed</h1>
      <p class="mt-2 text-xl md:text-2xl">Help us in funding the expansion project for Masjid Al-Tawheed in Elk Grove.</p>
    </div>
  </div>
</div>