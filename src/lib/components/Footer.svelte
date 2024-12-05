<script lang="ts">
  import Container from './Container.svelte';
</script>

<Container bgColorClass="bg-charcoal">
  <div class="mx-auto mt-12 py-8 md:mt-16">
    <div class="flex flex-col items-center justify-center">
      <p class="text-center text-lg text-white">
        {new Date().getFullYear()} &copy;
        <a
          href="https://www.masjidaltawheed.com/"
          class="underline underline-offset-2 transition duration-200 ease-in-out hover:text-gray-300"
          >Masjid Al-Tawheed EGAAC</a
        >. All rights reserved.
      </p>
    </div>
  </div>
</Container>
