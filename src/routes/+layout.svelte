<script lang="ts">
  import MasjidRender from '$lib/assets/tawheed/masjid2.jpg';
  import '../app.css';

  let { children } = $props();
</script>

<svelte:head>
  <meta property="og:image" content={MasjidRender} />
  <meta property="twitter:image" content={MasjidRender} />
</svelte:head>

{@render children()}
