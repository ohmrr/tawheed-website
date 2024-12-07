<script lang="ts">
  import type { Question } from '$lib/utils/questions';
  import { slide } from 'svelte/transition';

  let { questions }: { questions: Question[] } = $props();
  let openIndex: number | null = $state(null);

  function toggle(index: number | null) {
    openIndex = openIndex === index ? null : index;
  }
</script>

<div class="mt-8 space-y-6">
  {#each questions as { question, answer, href }, index}
    <div class="rounded-md border shadow-lg">
      <button
        type="button"
        class="w-full rounded-t-md px-6 py-4 text-left text-base md:text-lg font-bold transition-colors duration-300 ease-in-out {openIndex ===
        index
          ? 'bg-jade text-white hover:bg-jade-dark'
          : 'bg-gray-200 text-gray-900 hover:bg-gray-300'}"
        onclick={() => toggle(index)}
        aria-expanded={openIndex === index}
        aria-controls={`faq-answer-${index}`}>
        {question}
      </button>

      {#if openIndex === index}
        <div
          id={`faq-answer-${index}`}
          class="bg-white px-6 py-4 overflow-hidden"
          transition:slide={{ duration: 250 }}>
          {answer}

          {#if href}
            <a
              class="mt-4 block font-semibold text-blue-600 underline transition-colors duration-300 ease-in-out hover:text-blue-800"
              href={href.url}>{href.name}</a>
          {/if}
        </div>
      {/if}
    </div>
  {/each}
</div>
