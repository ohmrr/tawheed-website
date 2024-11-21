import type { PageLoad } from './$types';

const imageModules = import.meta.glob('$lib/assets/community/**/*.{jpg,jpeg,png,webp}', { eager: true, query: 'url' });
const images = Object.keys(imageModules);

const alts = images.map(path => {
  const fileName = path.split('/').pop() || 'Image';

  return fileName.slice(0, fileName.lastIndexOf('.')).replace(/[-_]/g, ' ');
});

export const load = (() => {
  return { images, descriptions: alts };
}) satisfies PageLoad;

