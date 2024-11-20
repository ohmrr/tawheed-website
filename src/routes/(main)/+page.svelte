<script lang="ts">
  import MasjidExpansion from '$lib/assets/tawheed/masjid1.webp';
  import Button from '$lib/components/Button.svelte';
  import Container from '$lib/components/Container.svelte';
  import ImageGrid from '$lib/components/images/ImageGrid.svelte';
  import ProgressBar from '$lib/components/ProgressBar.svelte';
</script>

<Container bgColorClass="bg-white">
  <div class="mt-16 flex w-full flex-col items-center justify-center md:mt-24 lg:mt-32">
    <h2 class="text-center text-3xl font-semibold text-gray-900 md:text-4xl lg:text-5xl">
      Help Create a Thriving Muslim Community
    </h2>

    <div class="grid grid-cols-1 gap-y-8 pt-8 md:grid-cols-2 md:gap-x-4 md:gap-y-0 lg:gap-x-8">
      <img
        class="rounded-lg object-contain shadow-md"
        src={MasjidExpansion}
        alt="Proposed masjid expansion" />

      <div
        class="flex flex-col justify-start rounded-lg bg-gray-200 pt-4 shadow-md md:justify-center">
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

    <div class="mt-8 flex w-full flex-col items-center gap-y-8 md:mt-16 md:w-3/4">
      <p class="text-center text-base tracking-wide text-gray-900 md:text-xl">
        The growth of our community has led to a need for a space that can accommodate all of our
        needs, be it spiritual, educational, communal, or even recreational. By investing in this
        expansion, you're investing in a legacy of faith and kindness. Every prayer, smile, and
        shared meal in this expanded space will be a blessing. No amount is too small, every dollar
        brings us one step closer to creating this sacred place for our community.
      </p>

      <p class="text-center text-base font-semibold tracking-wide text-gray-900 md:text-xl">
        Let's unite to make Masjid Al-Tawheed a home for all. Together, we can provide a welcoming
        sanctuary that will support our community's needs and inspire growth, connection, and
        compassion. Your donation today can transform lives and build a stronger future.
      </p>
    </div>

    <div class="mt-12 flex w-full flex-col items-center justify-center md:mt-16">
      <div class="mb-12 flex flex-row items-center justify-center gap-x-4 lg:gap-x-8">
        <Button
          color="jade"
          href="https://checkout.square.site/merchant/MLJGAABQWSY7N/checkout/LMCROJTOGFCEPQJM5VAPH7VX"
          text="Donate Now" />
        <Button color="azure" href="https://www.masjidaltawheed.com/newmasjid/" text="Learn More" />
      </div>

      <ProgressBar />
    </div>

    <div class="mt-12 flex flex-col gap-y-4">
      <h2 class="text-center text-3xl font-semibold text-gray-900 md:text-4xl lg:text-5xl">
        Our Community
      </h2>

      <ImageGrid />
    </div>
  </div>
</Container>
