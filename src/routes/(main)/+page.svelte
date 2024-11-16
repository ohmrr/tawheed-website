<script lang="ts">
  import Container from '$lib/components/Container.svelte';
  import ProgressBar from '$lib/components/ProgressBar.svelte';
</script>

<Container bgColorClass="bg-white">
  <div class="flex flex-col items-center justify-center py-12 md:py-16">
    <div class="flex w-full flex-col items-center justify-center">
      <h2 class="mb-8 text-center text-3xl font-semibold text-gray-900 md:text-4xl lg:text-5xl">
        Fund Masjid Al-Tawheed
      </h2>

      <div class="mb-8 flex w-full justify-center sm:w-2/3 lg:w-3/5">
        <img
          src="/media/tawheed.png"
          alt="Masjid Al-Tawheed logo"
          class="h-full w-full max-w-lg rounded-lg object-cover" />
      </div>

      <div class="flex w-full flex-col items-center justify-center gap-y-8">
        <div class="rounded-lg bg-gray-100 p-6 shadow-md">
          <h3 class="mb-6 text-center font-arabic text-2xl font-semibold text-gray-900 md:text-3xl">
            ‏مَنْ بَنَى مَسْجِدًا لِلَّهِ كَمَفْحَصِ قَطَاةٍ أَوْ أَصْغَرَ بَنَى اللَّهُ لَهُ
            بَيْتًا فِي الْجَنَّةِ
          </h3>

          <p class="text-center text-base font-normal italic text-gray-800 md:text-lg">
            “The one who builds a Masjid for the pleasure of Allah Almighty, Allah Almighty will
            build a house for him in paradise.” <br />
            <span class="font-semibold">- Sahih Muslim</span>
          </p>
        </div>

        <p class="text-center text-gray-900 md:text-left md:text-lg">
          The growth of our community has led to a need for a space that can accommodate all of our
          needs, be it spiritual, educational, communal, or even recreational. By investing in this
          expansion, you're investing in a legacy of faith and kindness. Every prayer, smile, and
          shared meal in this expanded space will be a blessing. No amount is too small, every
          dollar brings us one step closer to creating this sacred place for our community.
        </p>

        <p class="text-center font-semibold text-gray-900 md:text-left md:text-lg">
          Let's unite to make Masjid Al-Tawheed a home for all. Together, we can provide a welcoming
          sanctuary that will support our community's needs and inspire growth, connection, and
          compassion. Your donation today can transform lives and build a stronger future.
        </p>
      </div>

      <ProgressBar />
    </div>
  </div>
</Container>
