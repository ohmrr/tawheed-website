<script lang="ts">
  import Navigation from './Navigation.svelte';
</script>

<Navigation />
<header class="relative flex h-[450px] w-full flex-col bg-charcoal md:h-[600px]">
  <div class="absolute inset-0">
    <video
      class="h-full w-full object-cover"
      src="/media/masjid.mp4"
      autoplay
      muted
      loop
      playsinline
      tabindex="-1"></video>
  </div>

  <div
    class="absolute inset-0 z-10 flex flex-col items-center justify-center space-y-4 bg-black bg-opacity-30 text-white">
    <div class="flex flex-col items-center justify-center space-y-4 text-center">
      <h1 class="text-3xl font-bold md:text-6xl">Masjid Al-Tawheed</h1>
      <p class="text-xl md:text-2xl px-8">
        Help us in funding the expansion project for Masjid Al-Tawheed in Elk Grove.
      </p>
      <a
        class="rounded-lg border-2 border-jade bg-jade px-4 py-2 font-semibold shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-jade-dark"
        href="https://checkout.square.site/merchant/MLJGAABQWSY7N/checkout/LMCROJTOGFCEPQJM5VAPH7VX"
        >Donate Now</a>
    </div>
  </div>
</header>
