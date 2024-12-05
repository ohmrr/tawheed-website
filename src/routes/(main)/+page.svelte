<script lang="ts">
  import MasjidExpansion from '$lib/assets/tawheed/masjid1.webp';
  import Container from '$lib/components/Container.svelte';
  import Faq from '$lib/components/FAQ.svelte';
  import ImageGrid from '$lib/components/images/ImageGrid.svelte';
  import ProgressBar from '$lib/components/ProgressBar.svelte';
  import { questions } from '$lib/utils/questions';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
</script>

<Container bgColorClass="bg-white">
  <section class="mt-12 md:mt-16 lg:mt-28">
    <h2 class="text-3xl font-semibold text-gray-900 md:text-4xl lg:text-5xl">
      Help Create a Thriving Muslim Community
    </h2>
    <h3 class="mt-6 text-2xl font-medium text-gray-900 md:mt-12 md:text-3xl lg:text-4xl">
      Your Contribution Can Make a Lasting Impact
    </h3>

    <div class="grid grid-cols-1 gap-y-8 pt-8 md:grid-cols-2 md:gap-x-4 md:gap-y-0 lg:gap-x-8">
      <img
        class="rounded-lg object-contain shadow-md"
        src={MasjidExpansion}
        width="768"
        height="432"
        alt="Render of the proposed masjid expansion" />

      <div
        class="flex flex-col justify-start rounded-lg bg-gray-200 px-6 py-6 shadow-md md:justify-center">
        <h3 class="text-center font-arabic text-xl font-semibold text-gray-900 md:text-2xl">
          ‏مَنْ بَنَى مَسْجِدًا لِلَّهِ كَمَفْحَصِ قَطَاةٍ أَوْ أَصْغَرَ بَنَى اللَّهُ لَهُ بَيْتًا
          فِي الْجَنَّةِ
        </h3>

        <blockquote class="pt-4 text-center italic text-gray-800 md:text-lg">
          “The one who builds a Masjid for the pleasure of Allah Almighty, Allah Almighty will build
          a house for him in paradise.” <br />
          <span class="font-semibold">- Sahih Muslim</span>
        </blockquote>
      </div>
    </div>

    <div class="w-full space-y-8 text-justify text-base md:text-lg">
      <p class="mt-8 text-gray-900">
        The growth of our community has led to a need for a space that can accommodate all of our
        needs, be it spiritual, educational, communal, or even recreational. By investing in this
        expansion, you're investing in a <span class="font-bold">legacy of faith and kindness</span
        >.
      </p>

      <p class="text-gray-900">
        Every prayer, smile, and shared meal in this expanded space will be a blessing. <span
          class="font-bold">No amount is too small</span
        >, every dollar brings us one step closer to creating this sacred place for our community
        right in the heart of Elk Grove.
      </p>

      <p class="text-gray-900">
        Let's unite to make Masjid Al-Tawheed a home for all. Together, we can provide a welcoming
        sanctuary that will support our community's needs and <span class="font-bold"
          >inspire growth, connection, and compassion</span
        >. Your donation today can transform lives and build a stronger future.
      </p>

      <div class="flex flex-col items-center">
        <ProgressBar />
      </div>

      <div
        class="mt-12 flex flex-col space-x-0 space-y-6 md:flex-row md:items-center md:justify-center md:space-x-4 md:space-y-0 lg:space-x-8">
        <a
          href="https://checkout.square.site/merchant/MLJGAABQWSY7N/checkout/LMCROJTOGFCEPQJM5VAPH7VX"
          class="rounded-lg border-2 border-jade bg-jade p-3 text-center text-base font-bold text-white shadow-md transition duration-150 ease-in-out hover:-translate-y-1 hover:bg-jade-dark md:max-w-[200px] md:flex-1">
          Donate Now
        </a>

        <a
          href="https://www.masjidaltawheed.com/newmasjid/"
          class="rounded-lg border-2 border-azure bg-azure p-3 text-center text-base font-bold text-white shadow-md transition duration-150 ease-in-out hover:-translate-y-1 hover:bg-azure-dark md:max-w-[200px] md:flex-1">
          Construction Updates
        </a>
      </div>
    </div>
  </section>
</Container>

<Container bgColorClass="bg-white">
  <section class="mt-12 md:mt-16 lg:mt-28">
    <h2 class="text-3xl font-semibold text-gray-900 md:text-4xl lg:text-5xl">Our Community</h2>

    <ImageGrid
      images={data.images.map((image, index) => ({ src: image, alt: data.descriptions[index] }))} />
  </section>
</Container>

<Container>
  <section class="mt-12 md:mt-16 lg:mt-28">
    <h2 class="text-3xl font-semibold text-gray-900 md:text-4xl lg:text-5xl">
      Frequently Asked Questions
    </h2>

    <Faq {questions} />
  </section>
</Container>
