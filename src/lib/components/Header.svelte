<script lang="ts">
  import Container from './Container.svelte'; //@ts-ignore
  import FaInstagramLogo from 'svelte-icons/fa/FaInstagram.svelte'; //@ts-ignore
  import FaFacebookLogo from 'svelte-icons/fa/FaFacebookSquare.svelte';
</script>

<Container bgColorClass="bg-[#131313]">
  <div class="flex flex-col items-center justify-center py-5">
    <div class="flex w-full flex-col">
      <div class="flex w-full flex-wrap justify-between">
        <a href="/" aria-label="Website home page">
          <img src="images/tawheed.svg" alt="Tawheed Logo" class="h-[48px] w-[48px]" />
        </a>

        <div class="flex gap-8">
          <a
            href="https://www.instagram.com/masjidtawheedeg/"
            aria-label="Masjid Al-Tawheed Instagram account"
            class="h-[48px] w-[48px] text-white">
            <FaInstagramLogo />
          </a>

          <a
            href="https://www.facebook.com/EG.Tawheed/"
            aria-label="Masjid Al-Tawheed Facebook account"
            class="h-[48px] w-[48px] text-white">
            <FaFacebookLogo />
          </a>
        </div>
      </div>
    </div>

    <div class="mt-10 flex w-full flex-col items-center justify-center">
      <div class="flex w-full flex-col">
        <div class="flex w-full flex-col justify-between md:flex-row lg:flex-row">
          <div class="flex flex-col">
            <h1 class="mb-5 text-4xl font-bold text-gray-100 md:text-5xl lg:text-6xl">
              Masjid<br />Al-Tawheed
            </h1>

            <p class="text-2xl font-normal text-gray-100">
              Help us in funding the expansion project for Masjid Al-Tawheed in Elk Grove.
            </p>
          </div>

          <div class="mt-5 flex w-full justify-center md:mt-0 md:w-1/2 lg:w-1/2">
            <img
              src="/images/masjid1.webp"
              alt="Proposed masjid expansion"
              class="aspect-w-16 aspect-h-9 w-full max-w-full rounded-lg object-cover shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</Container>
