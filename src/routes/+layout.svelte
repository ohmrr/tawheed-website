<script lang="ts">
  import '../app.css';
  let { children } = $props();
</script>

<svelte:head>
  <title>Masjid Al-Tawheed</title>
  <meta name="description" content="The expansion project for Masjid Al-Tawheed in Elk Grove." />
  <meta
    name="keywords"
    content="Masjid Al-Tawheed, New Masjid Project, Masjid Expansion, Tawheed Elk Grove" />
</svelte:head>

{@render children()}
