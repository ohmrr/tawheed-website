<script lang="ts">
  import Container from './Container.svelte';
</script>

<Container bgColorClass="bg-gradient-to-r from-[#131313] via-[#161616] to-[#252525]">
  <div class="mx-auto px-4 md:px-12 lg:px-16">
    <div class="flex flex-col items-center justify-center text-center">
      <p class="text-lg mb-4 text-gray-100">{new Date().getFullYear()} © Masjid Al-Tawheed EGAAC. All rights reserved.</p>
    </div>
  </div>
</Container>
