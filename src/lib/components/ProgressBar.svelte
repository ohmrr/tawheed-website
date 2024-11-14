<script lang="ts">
  import { onMount } from 'svelte';
  import { cubicInOut } from 'svelte/easing';
  import { tweened } from 'svelte/motion';

  const current = 1_000_000;
  const max = 1_700_000;
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
  <p class="text-lg font-semibold">Donation Progress</p>
  <p class="text-sm">${current.toLocaleString()} / ${max.toLocaleString()}</p>
</div>

<div bind:this={progressBar} class="mt-4 w-full overflow-hidden rounded-md bg-gray-200 shadow-md">
  <div
    class="h-3 bg-[#24418C]"
    role="progressbar"
    style="width: {$animatedProgress}%"
    aria-valuemin="0"
    aria-valuemax={max}
    aria-valuenow={current}>
  </div>
</div>
