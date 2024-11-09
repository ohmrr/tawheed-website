<script lang="ts">
  import FaFacebookLogo from 'svelte-icons/fa/FaFacebookSquare.svelte';
  import FaInstagramLogo from 'svelte-icons/fa/FaInstagram.svelte';
  import Container from './Container.svelte';
</script>

<Container bgColorClass="bg-[#131313]">
  <div class="flex flex-col items-center justify-center px-8 py-6">
    <div class="flex w-full flex-col">
      <div class="flex w-full flex-wrap justify-between gap-5">
        <a href="/" aria-label="Home Page">
          <img
            src="/images/tawheed.svg"
            alt="Masjid Al-Tawheed logo"
            class="aspect-square w-[48px] object-contain" />
        </a>

        <div class="flex gap-8">
          <a
            href="https://www.instagram.com/masjidtawheedeg/"
            aria-label="Tawheed Instagram Account"
            class="h-[48px] w-[48px] text-white">
            <FaInstagramLogo />
          </a>
          <a
            href="https://www.facebook.com/EG.Tawheed/"
            aria-label="Tawheed Facebook Account"
            class="h-[48px] w-[48px] text-white">
            <FaFacebookLogo />
          </a>
        </div>
      </div>
    </div>
  </div>
</Container>
