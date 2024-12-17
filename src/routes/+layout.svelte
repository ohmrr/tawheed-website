<script lang="ts">
  import MasjidRender from '$lib/assets/tawheed/masjid2.jpg';
  import Navigation from '$lib/components/navbar/Navigation.svelte';
  import '../app.css';
  import Footer from '$lib/components/Footer.svelte';

  let { children } = $props();
</script>

<svelte:head>
  <meta property="og:image" content={MasjidRender} />
  <meta property="twitter:image" content={MasjidRender} />
</svelte:head>

<Navigation />
{@render children()}
<Footer />