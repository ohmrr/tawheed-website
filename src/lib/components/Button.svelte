<script lang="ts">
  let {
    color = 'jade',
    href,
    text
  }: { color: 'jade' | 'azure'; href: string; text: string } = $props();
</script>

<a
  class="text-center {color === 'jade'
    ? 'border-jade bg-jade hover:bg-jade-dark'
    : 'border-azure bg-azure hover:bg-azure-dark'} rounded-lg border-2 px-4 py-2 font-semibold tracking-wide text-gray-100 shadow-md transition hover:-translate-y-1"
  {href}>{text}</a>
