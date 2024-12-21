import React from 'react';
import { config } from './config';
import { buildUrl } from './utils/buildUrl';

type StaticDelivrImageProps = {
  src: string; // Required: Image source URL
  width?: number; // Optional: Width of the image
  height?: number; // Optional: Height of the image
  quality?: number; // Optional: Quality (0-100)
  format?: 'webp' | 'jpeg' | 'png' | 'avif'; // Optional: Image format
  alt?: string; // Optional: Alt text for the image
  className?: string; // Optional: Additional class names
};

export const StaticDelivrImage: React.FC<StaticDelivrImageProps> = ({
  src,
  width,
  height,
  quality,
  format,
  alt = '',
  className,
}) => {
  const { baseURL } = config.get();

  // Check if src is an absolute URL
  const isAbsoluteUrl = /^https?:\/\//i.test(src);

  // If it's not an absolute URL, we append baseURL
  const normalizedSrc = isAbsoluteUrl
    ? src // Don't modify absolute URLs
    : `${baseURL.replace(/\/+$/, '')}/${src.replace(/^\/+/, '')}`; // Normalize baseURL and src for relative URLs

  const optimizedUrl = buildUrl({ src: normalizedSrc, width, height, quality, format });

  return <img src={optimizedUrl} alt={alt} className={className} />;
};
