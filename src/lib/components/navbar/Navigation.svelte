<script lang="ts">
  import SocialMediaIcons from './SocialMediaIcons.svelte';
  import TawheedLogo from './TawheedLogo.svelte';
  import Container from '../Container.svelte';
</script>

<Container bgColorClass="bg-charcoal">
  <div class="flex flex-col items-center justify-center py-4 md:py-6">
    <nav class="flex w-full items-center justify-between">
      <TawheedLogo />
      <SocialMediaIcons />
    </nav>
  </div>
</Container>
