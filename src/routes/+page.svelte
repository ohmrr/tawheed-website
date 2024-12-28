<script lang="ts">
  import MerchHoodie from '$lib/assets/fundraiser/fundtawheed-merch.webp';
  import Phase2Banner from '$lib/assets/fundraiser/fundtawheed-phase-2.jpeg';
  import SponsorParkingBanner from '$lib/assets/fundraiser/fundtawheed-sponsor-parking.jpg';
  import MasjidRender from '$lib/assets/tawheed/masjid1.webp';
  import Container from '$lib/components/Container.svelte';
  import Faq from '$lib/components/FAQ.svelte';
  import HadithQuote from '$lib/components/HadithQuote.svelte';
  import Header from '$lib/components/Header.svelte';
  import IconRow from '$lib/components/IconGrid.svelte';
  import ImageGrid from '$lib/components/images/ImageGrid.svelte';
  import ProgressBar from '$lib/components/ProgressBar.svelte';
  import { iconDescriptions } from '$lib/utils/iconDescriptions';
  import { questions } from '$lib/utils/questions';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();

  const currentProgress: number = 1_000_000;
  const maxProgress: number = 1_700_000;
</script>

<Header />

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
        src={MasjidRender}
        width="768"
        height="432"
        alt="Render of the proposed masjid expansion" />

      <HadithQuote />
    </div>

    <div class="mt-12 text-justify text-base md:text-lg">
      <div class="mt-8 flex flex-col items-center">
        <ProgressBar current={currentProgress} max={maxProgress} />
      </div>

      <div class="mt-8 space-y-8">
        <p class="text-gray-900">
          As-salamu alaykum everyone, and welcome to the next chapter of Masjid Al-Tawheed through
          the <span class="font-bold">New Masjid Project</span>. We are currently on Phase 2 out of
          4, with a goal to raise ${maxProgress.toLocaleString()}. With your help, inshAllah, we
          will be able to
          <span class="font-bold">overcome this challenge</span> and continue on to the next phase.
        </p>

        <p class="text-gray-900">
          The growth of our community has led to a need for a space that can accommodate all of our
          needs, be it spiritual, educational, communal, or even recreational. By investing in this
          expansion, you're investing in a <span class="font-bold"
            >legacy of faith and kindness</span
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
      </div>

      <div class="mt-8">
        <img
          src={Phase2Banner}
          alt="FundTawheed Phase 2 Construction Progress"
          class="rounded-lg shadow-md"
          width="1200"
          height="675"
          loading="lazy" />
      </div>
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
  </section>
</Container>

<Container bgColorClass="bg-white">
  <section class="mt-12 md:mt-16 lg:mt-28">
    <div class="text-gray-900">
      <h2 class="text-3xl font-semibold md:text-4xl lg:text-5xl">A Vision for Growth</h2>

      <h3 class="mt-6 text-2xl font-medium md:mt-12 md:text-3xl lg:text-4xl">
        Addressing Our Growing Needs
      </h3>

      <p class="mt-8 text-justify text-base md:text-lg">
        The New Masjid Project represents our commitment to creating a space that serves all the
        needs of our growing community. As we continue to experience growth, our current facilities
        can no longer keep up. Unfortunately, the existing masjid is overcrowded, and parking
        hazards have become a persistent challenge. This project is essential for fostering a <span
          class="font-bold">safe, welcoming environment</span> for all.
      </p>
    </div>

    <div class="mt-12">
      <IconRow {iconDescriptions} />
    </div>

    <div class="flex flex-col gap-y-8 md:flex-row md:gap-x-8 md:gap-y-0">
      <div class="flex flex-1 flex-col gap-y-6 md:items-center">
        <h3 class="mt-8 text-2xl font-medium text-gray-900 md:mt-12 md:text-3xl lg:text-4xl">
          Help Build Our Future
        </h3>

        <p class="-mt-4 text-gray-700">
          Sponsor a parking space, get the reward every time it's used.
        </p>

        <img
          src={SponsorParkingBanner}
          alt="Sponsor a parking space for $2,000, get the reward when someone uses it"
          class="rounded-lg shadow-md"
          width="1500"
          height="1500"
          loading="lazy" />

        <div class="flex w-full justify-center">
          <a
            href="https://checkout.square.site/merchant/MLJGAABQWSY7N/checkout/LMCROJTOGFCEPQJM5VAPH7VX"
            class="flex-1 rounded-lg border-2 border-jade bg-jade p-3 text-center text-base font-bold text-white shadow-md transition duration-150 ease-in-out hover:-translate-y-1 hover:bg-jade-dark md:max-w-[200px]">
            Donate Now
          </a>
        </div>
      </div>

      <div class="flex flex-1 flex-col gap-y-6 md:items-center">
        <h3 class="mt-8 text-2xl font-medium text-gray-900 md:mt-12 md:text-3xl lg:text-4xl">
          Wear Your Support
        </h3>

        <p class="-mt-4 text-gray-700">100% of the profit goes toward the construction.</p>

        <img
          src={MerchHoodie}
          alt="Get Masjid Al-Tawheed merch, 100% of the profit goes towards the construction"
          class="rounded-lg shadow-md"
          width="825"
          height="825"
          loading="lazy" />

        <div class="flex w-full justify-center">
          <a
            href="https://masjidaltawheed.printful.me/"
            class="flex-1 rounded-lg border-2 border-azure bg-azure p-3 text-center text-base font-bold text-white shadow-md transition duration-150 ease-in-out hover:-translate-y-1 hover:bg-azure-dark md:max-w-[200px]">
            Merch Store
          </a>
        </div>
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

<Container bgColorClass="bg-white">
  <section class="mt-12 md:mt-16 lg:mt-28">
    <h2 class="text-3xl font-semibold text-gray-900 md:text-4xl lg:text-5xl">
      Frequently Asked Questions
    </h2>

    <Faq {questions} />
  </section>
</Container>
