<script lang="ts">
  import BannerVideoMP4 from '$lib/assets/tawheed/construction.mp4';
  import BannerVideoWEBM from '$lib/assets/tawheed/construction.webm';
  import BannerPoster from '$lib/assets/tawheed/construction-poster.jpg';

  import Navigation from './navbar/Navigation.svelte';
</script>

<Navigation />
<header class="relative flex h-[450px] w-full flex-col bg-charcoal md:h-[600px]">
  <div class="absolute inset-0">
    <video
      class="h-full w-full object-cover"
      poster={BannerPoster}
      preload="metadata"
      width="1280"
      height="720"
      autoplay
      muted
      loop
      playsinline
      tabindex="-1">
      <source src={BannerVideoWEBM} type="video/webm" />
      <source src={BannerVideoMP4} type="video/mp4" />

      Your browser does not not support the video tag.
    </video>
  </div>

  <div
    class="absolute inset-0 z-10 flex flex-col items-center justify-center space-y-4 bg-black bg-opacity-30">
    <div class="flex flex-col items-center justify-center space-y-4 text-center">
      <h1 class="text-3xl font-extrabold text-white md:text-6xl">Fund Masjid Al-Tawheed</h1>
      <p class="px-8 text-xl leading-relaxed text-white md:text-2xl">
        Help us in funding the expansion project for Masjid Al-Tawheed in Elk Grove.
      </p>

      <a
        href="https://checkout.square.site/merchant/MLJGAABQWSY7N/checkout/LMCROJTOGFCEPQJM5VAPH7VX"
        class="rounded-lg border-2 border-jade bg-jade px-5 py-2 text-center text-base font-bold text-white shadow-md transition duration-150 ease-in-out hover:-translate-y-1 hover:bg-jade-dark md:px-8">
        Donate Now
      </a>
    </div>
  </div>
</header>
