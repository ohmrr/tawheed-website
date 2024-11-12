<script lang="ts">
  import Container from './Container.svelte'; //@ts-ignore
  import FaInstagramLogo from 'svelte-icons/fa/FaInstagram.svelte'; //@ts-ignore
  import FaFacebookLogo from 'svelte-icons/fa/FaFacebookSquare.svelte';
</script>

<Container bgColorClass="bg-gradient-to-r from-[#131313] via-[#161616] to-[#252525]">
  <div class="flex flex-col items-center justify-center py-6 md:py-10">
    <div class="flex w-full items-center justify-between px-4 md:px-12 lg:px-16">
      <a href="/" aria-label="Website home page">
        <img
          src="images/tawheed.svg"
          alt="Tawheed Logo"
          class="h-[48px] w-[48px] transition duration-300 ease-in-out hover:brightness-125" />
      </a>

      <div class="flex gap-6">
        <a
          href="https://www.instagram.com/masjidtawheedeg/"
          aria-label="Masjid Al-Tawheed Instagram account"
          class="h-[48px] w-[48px] text-gray-100 transition duration-300 ease-in-out hover:text-white">
          <FaInstagramLogo />
        </a>

        <a
          href="https://www.facebook.com/EG.Tawheed/"
          aria-label="Masjid Al-Tawheed Facebook account"
          class="h-[48px] w-[48px] text-gray-100 transition duration-300 ease-in-out hover:text-white">
          <FaFacebookLogo />
        </a>
      </div>
    </div>

    <div class="mt-12 flex w-full flex-col items-center justify-center px-4 md:px-12 lg:px-16">
      <div class="flex w-full flex-col items-center justify-between gap-8 lg:flex-row">
        <div class="flex flex-col text-center lg:text-left">
          <h1 class="mb-6 text-4xl font-bold leading-tight text-gray-100 md:text-5xl lg:text-6xl">
            Masjid<br />Al-Tawheed
          </h1>

          <p class="mb-6 text-xl font-normal text-gray-200 md:text-2xl">
            Help us in funding the expansion project for Masjid Al-Tawheed in Elk Grove.
          </p>

          <div class="flex flex-col gap-6 sm:flex-row sm:gap-8">
            <a
              href="https://checkout.square.site/merchant/MLJGAABQWSY7N/checkout/LMCROJTOGFCEPQJM5VAPH7VX"
              aria-label="Donate now"
              class="rounded-lg border bg-[#24418C] p-3 text-lg font-semibold text-gray-100 shadow-lg transition duration-300 ease-in-out hover:bg-[#1A347A]">
              Donate Now
            </a>

            <a
              href="https://www.masjidaltawheed.com/newmasjid/"
              aria-label="Learn More"
              class="rounded-lg border bg-[#22A34A] p-3 text-lg font-semibold text-gray-100 shadow-lg transition duration-300 ease-in-out hover:bg-[#1A8A3A]">
              Learn More
            </a>
          </div>
        </div>

        <div class="mt-8 flex w-full justify-center sm:w-2/3 lg:mt-0 lg:w-3/5">
          <img
            src="/images/masjid1.webp"
            alt="Proposed masjid expansion"
            class="h-full w-full max-w-lg rounded-lg object-cover shadow-2xl transition-transform duration-300 ease-in-out hover:scale-105" />
        </div>
      </div>
    </div>
  </div>
</Container>
