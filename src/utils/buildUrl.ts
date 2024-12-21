export const buildUrl = ({
  src,
  width,
  height,
  quality,
  format,
}: {
  src: string;
  width?: number;
  height?: number;
  quality?: number;
  format?: string;
}) => {
  if (!src) {
    throw new Error('The src parameter is required');
  }

  // Initialize the query parameters object
  const params: string[] = [];

  if (width) params.push(`w=${width}`);
  if (height) params.push(`h=${height}`);
  if (quality) params.push(`q=${quality}`);
  if (format) params.push(`format=${format}`);

  // If there are parameters, append them to the URL
  const paramString = params.length > 0 ? `&${params.join('&')}` : '';

  return `https://cdn.staticdelivr.com/img/images?url=${encodeURIComponent(src)}${paramString}`;
};
