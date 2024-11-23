<script lang="ts">
  import BannerVideo from '$lib/assets/tawheed/masjid.mp4';
  import Navigation from './navbar/Navigation.svelte';
</script>

<Navigation />
<header class="relative flex h-[450px] w-full flex-col bg-charcoal md:h-[600px]">
  <div class="absolute inset-0">
    <video
      class="h-full w-full object-cover"
      src={BannerVideo}
      width="1280"
      height="720"
      autoplay
      muted
      loop
      playsinline
      tabindex="-1"></video>
  </div>

  <div
    class="absolute inset-0 z-10 flex flex-col items-center justify-center space-y-4 bg-black bg-opacity-30">
    <div class="flex flex-col items-center justify-center space-y-4 text-center">
      <h1 class="text-3xl font-extrabold text-gray-100 md:text-6xl">Fund Masjid Al-Tawheed</h1>
      <p class="px-8 text-xl leading-relaxed text-gray-100 md:text-2xl">
        Help us in funding the expansion project for Masjid Al-Tawheed in Elk Grove.
      </p>

      <a
        href="https://checkout.square.site/merchant/MLJGAABQWSY7N/checkout/LMCROJTOGFCEPQJM5VAPH7VX"
        class="rounded-lg border-2 border-jade bg-jade p-2 text-center text-base font-bold text-gray-100 shadow-md transition duration-150 ease-in-out hover:-translate-y-1 hover:bg-jade-dark">
        Donate Now
      </a>
    </div>
  </div>
</header>
