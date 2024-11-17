<script lang="ts">
  import Container from '../Container.svelte';
  import FacebookLogo from './FacebookLogo.svelte';
  import InstagramLogo from './InstagramLogo.svelte';
  import TawheedLogo from './TawheedLogo.svelte';
</script>

<Container bgColorClass="bg-charcoal">
  <div class="flex flex-col items-center justify-center py-4 md:py-6">
    <nav class="flex w-full items-center justify-between">
      <TawheedLogo />

      <div class="flex gap-x-6">
        <InstagramLogo />
        <FacebookLogo />
      </div>
    </nav>
  </div>
</Container>
