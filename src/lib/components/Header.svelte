<script lang="ts">
  import BannerVideo from '$lib/assets/tawheed/masjid.mp4';
  import Button from './Button.svelte';
  import Navigation from './navbar/Navigation.svelte';
</script>

<Navigation />
<header class="relative flex h-[450px] w-full flex-col bg-charcoal md:h-[600px]">
  <div class="absolute inset-0">
    <video
      class="h-full w-full object-cover"
      src={BannerVideo}
      autoplay
      muted
      loop
      playsinline
      tabindex="-1"></video>
  </div>

  <div
    class="absolute inset-0 z-10 flex flex-col items-center justify-center space-y-4 bg-black bg-opacity-30">
    <div class="flex flex-col items-center justify-center space-y-4 text-center">
      <h1 class="text-3xl font-bold md:text-6xl text-gray-100">Masjid Al-Tawheed</h1>
      <p class="px-8 text-xl leading-relaxed md:text-2xl text-gray-100">
        Help us in funding the expansion project for Masjid Al-Tawheed in Elk Grove.
      </p>
      <Button
        color="jade"
        href="https://checkout.square.site/merchant/MLJGAABQWSY7N/checkout/LMCROJTOGFCEPQJM5VAPH7VX"
        text="Donate Now" />
    </div>
  </div>
</header>
