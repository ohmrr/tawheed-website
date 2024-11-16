<script lang="ts">
import Navigation from './Navigation.svelte';
</script>

<Navigation />
<div class="bg-charcoal w-full h-[450px] md:h-[600px] flex flex-col relative">
  <div class="absolute inset-0">
    <video class="w-full h-full object-cover" src="/media/construction.mp4" autoplay muted loop playsinline></video>
  </div>

  <div class="flex flex-col justify-center items-center bg-black bg-opacity-10 absolute inset-0 z-10 text-white space-y-4">
  <div class="flex flex-col space-y-4 text-center items-center justify-center">
    <h1 class="text-3xl md:text-6xl font-bold">Masjid Al-Tawheed</h1>
    <p class="text-xl md:text-2xl">Help us in funding the expansion project for Masjid Al-Tawheed in Elk Grove.</p>
    <a class="bg-jade hover:bg-jade-dark font-semibold border-2 border-jade shadow-md rounded-lg px-4 py-2 hover:-translate-y-1 transition-all ease-in-out duration-300" href="https://checkout.square.site/merchant/MLJGAABQWSY7N/checkout/LMCROJTOGFCEPQJM5VAPH7VX">Donate Now</a>
  </div>
</div>
</div>