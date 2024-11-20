<script lang="ts">
  let { imageUrl, altText, showModal = $bindable() }: { imageUrl: string; altText: string; showModal: boolean } =
    $props();
</script>

<div class="w-full h-full flex items-center justify-center">
  <div class="w-full flex-row items-center justify-end">
    <p class="font-semibold">&#x2715;</p>
  </div>

</div>