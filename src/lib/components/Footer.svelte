<script lang="ts">
  import Container from './Container.svelte';
</script>

<Container bgColorClass="bg-charcoal">
  <div class="mx-auto mt-12 py-8 md:mt-16">
    <div class="flex flex-col items-center justify-center">
      <p class="text-center text-lg text-gray-100">
        {new Date().getFullYear()} &copy; <a href="https://www.masjidaltawheed.com/" class="underline underline-offset-2 hover:text-gray-300 transition ease-in-out duration-200">Masjid Al-Tawheed EGAAC</a>. All rights reserved.
      </p>
    </div>
  </div>
</Container>
