import type { PageLoad } from './$types';

const imageModules: Record<string, string> = import.meta.glob(
  '$lib/assets/community/**/*.{jpg,jpeg,png,webp}',
  {
    query: '?url',
    import: 'default',
    eager: true
  }
);

const images = Object.values(imageModules);

const alts = Object.keys(imageModules).map((path) => {
  const fileName = path.split('/').pop() || 'Image';
  return fileName.slice(0, fileName.lastIndexOf('.')).replace(/[-_]/g, ' ');
});

export const load = (() => {
  return { images, descriptions: alts };
}) satisfies PageLoad;
