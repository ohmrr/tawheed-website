<script lang="ts">
  //@ts-ignore
  import FaInstagramLogo from 'svelte-icons/fa/FaInstagram.svelte';
  //@ts-ignore
  import FaFacebookLogo from 'svelte-icons/fa/FaFacebookSquare.svelte';
</script>

<div class="flex gap-x-6">
  <a
    href="https://www.instagram.com/masjidtawheedeg/"
    aria-label="Masjid Al-Tawheed Instagram account"
    class="h-[48px] w-[48px] text-jade transition-all duration-300 ease-in-out hover:text-jade-dark">
    <FaInstagramLogo />
  </a>

  <a
    href="https://www.facebook.com/EG.Tawheed/"
    aria-label="Masjid Al-Tawheed Facebook account"
    class="h-[48px] w-[48px] text-azure transition-all duration-300 ease-in-out hover:text-azure-dark">
    <FaFacebookLogo />
  </a>
</div>
