<script lang="ts">
  import { onMount } from 'svelte';
  import { cubicInOut } from 'svelte/easing';
  import { tweened } from 'svelte/motion';

  let { current, max }: { current: number; max: number } = $props();
  const progress = (current / max) * 100;

  const animatedProgress = tweened(0, { duration: 2000, easing: cubicInOut });
  let progressBar: Element | null = null;

  onMount(() => {
    if (progressBar) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animatedProgress.set(progress);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );
      observer.observe(progressBar);
    } else {
      animatedProgress.set(progress);
    }
  });
</script>

<div class="mt-6 text-center">
  <p class="text-lg font-semibold" id="donation-progress">Phase 2 Donation Progress</p>
  <p class="pt-1 text-sm">${current.toLocaleString()} / ${max.toLocaleString()}</p>
</div>

<div
  bind:this={progressBar}
  class="my-4 w-full overflow-hidden rounded-md bg-gray-200 shadow-md md:w-4/5">
  <div
    class="h-3 bg-azure"
    role="progressbar"
    aria-labelledby="donation-progress"
    style="width: {$animatedProgress}%"
    aria-valuemin="0"
    aria-valuenow={current}
    aria-valuemax={max}>
  </div>
</div>
