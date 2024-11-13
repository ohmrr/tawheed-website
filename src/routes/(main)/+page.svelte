<script lang="ts">
  import Container from '$lib/components/Container.svelte';
</script>

<Container bgColorClass="bg-white">
  <div class="flex flex-col items-center justify-center py-12 md:py-16">
    <div class="flex w-full flex-col items-center justify-center px-4 md:px-12 lg:px-16">
      <h1 class="mb-8 text-center text-3xl font-semibold text-gray-900 md:text-4xl lg:text-5xl">
        Fund Masjid Al-Tawheed
      </h1>

      <div class="mb-8 flex w-full justify-center sm:w-2/3 lg:w-3/5">
        <img
          src="/images/tawheed.png"
          alt="Masjid Al-Tawheed logo"
          class="h-full w-full max-w-lg rounded-lg object-cover" />
      </div>

      <div class="flex flex-col w-full items-center justify-center px-4 text-center gap-y-8">
        <div class="rounded-lg bg-gray-100 p-6 shadow-md">
          <h3 class="font-arabic mb-6 text-2xl font-semibold text-gray-900 md:text-3xl lg:text-3xl">
            ‏مَنْ بَنَى مَسْجِدًا لِلَّهِ كَمَفْحَصِ قَطَاةٍ أَوْ أَصْغَرَ بَنَى اللَّهُ لَهُ
            بَيْتًا فِي الْجَنَّةِ
          </h3>

          <p class="text-base font-normal italic text-gray-800 md:text-lg lg:text-xl">
            “The one who builds a Masjid for the pleasure of Allah Almighty, Allah Almighty will
            build a house for him in paradise.” <br />
            <span class="font-semibold">- Sahih Muslim</span>
          </p>
        </div>

        <p class="text-lg font-normal">
          Join us in supporting the expansion of Masjid Al-Tawheed in Elk Grove. Your generous contributions will help us create a larger, welcoming space for our community to grow and thrive. Together, we can make this vision a reality.
        </p>
      </div>
    </div>
  </div>
</Container>
