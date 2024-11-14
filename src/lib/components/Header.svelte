<script lang="ts">
  import Container from './Container.svelte'; //@ts-ignore
  import FaInstagramLogo from 'svelte-icons/fa/FaInstagram.svelte'; //@ts-ignore
  import FaFacebookLogo from 'svelte-icons/fa/FaFacebookSquare.svelte';
</script>

<Container bgColorClass="bg-charcoal">
  <div class="flex flex-col items-center justify-center py-4 md:py-8 md:pb-16 lg:pb-20">
    <nav class="flex w-full items-center justify-between">
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
    </nav>

    <div class="mt-12 flex w-full flex-col items-center justify-center">
      <div class="flex w-full flex-col items-center justify-between gap-8 lg:flex-row">
        <div class="flex flex-col text-center lg:text-left">
          <h1 class="mb-8 text-4xl font-bold leading-tight text-gray-100 md:text-5xl lg:text-6xl">
            Masjid<br />Al-Tawheed
          </h1>

          <p class="mb-8 text-xl font-normal text-gray-200 md:text-2xl">
            Help us in funding the expansion project for Masjid Al-Tawheed in Elk Grove.
          </p>

          <div class="flex flex-col gap-6 sm:flex-row justify-center lg:justify-start sm:gap-8">
            <a
              href="https://checkout.square.site/merchant/MLJGAABQWSY7N/checkout/LMCROJTOGFCEPQJM5VAPH7VX"
              aria-label="Donate now"
              class="rounded-lg border-2 border-azure bg-azure px-4 py-2 text-lg font-semibold text-gray-100 shadow-lg shadow-azure/20 transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-azure-dark">
              Donate Now
            </a>

            <a
              href="https://www.masjidaltawheed.com/newmasjid/"
              aria-label="Learn More"
              class="rounded-lg border-2 border-jade bg-jade px-4 py-2 text-lg font-semibold text-gray-100 shadow-lg shadow-jade/20 transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-jade-dark">
              Learn More
            </a>
          </div>
        </div>

        <div class="mt-8 flex w-full justify-center sm:w-2/3 lg:mt-0 lg:w-4/5">
          <img
            src="/images/masjid1.webp"
            alt="Proposed masjid expansion"
            class="h-full w-full max-w-lg rounded-lg object-cover shadow-2xl transition-transform duration-300 ease-in-out hover:scale-105" />
        </div>
      </div>
    </div>
  </div>
</Container>
