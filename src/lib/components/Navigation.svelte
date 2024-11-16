<script lang="ts">
  import Container from './Container.svelte'; //@ts-ignore
  import FaInstagramLogo from 'svelte-icons/fa/FaInstagram.svelte'; //@ts-ignore
  import FaFacebookLogo from 'svelte-icons/fa/FaFacebookSquare.svelte';
</script>

<Container bgColorClass="bg-charcoal">
  <div class="flex flex-col items-center justify-center py-4 md:py-6">
    <nav class="flex w-full items-center justify-between">
      <a href="/" aria-label="Website home page">
        <img
          src="media/tawheed.svg"
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
  </div>
</Container>
