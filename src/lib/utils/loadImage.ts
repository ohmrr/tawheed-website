export function loadImages() {
  const images = import.meta.glob('/src/lib/assets/community/*.{jpg,png,jpeg,svg}', { eager: true, query: 'url' });
  return Object.keys(images).map((path) => {
    const fileName = path.split('/').pop()?.split('.').shift() || 'Image';
    const alt = fileName.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
    return { src: path, alt };
  });
}
