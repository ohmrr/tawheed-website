<script lang="ts">
  import Container from './Container.svelte';
</script>

<Container bgColorClass="bg-charcoal">
  <div class="mx-auto">
    <div class="flex flex-col items-center justify-center">
      <p class="mb-4 text-center text-lg text-gray-100">
        {new Date().getFullYear()} &copy; Masjid Al-Tawheed EGAAC. All rights reserved.
      </p>
    </div>
  </div>
</Container>
