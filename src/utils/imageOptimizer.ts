// Image optimization utilities for fast loading

/**
 * Generates optimized image URLs with compression parameters
 * Works with Unsplash and other image services
 */
export function optimizeImageUrl(
  url: string,
  options: {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'webp' | 'jpg' | 'png';
  } = {}
): string {
  const { width = 400, height = 300, quality = 80 } = options;

  // For Unsplash images, apply size parameters
  if (url.includes('unsplash.com')) {
    return `${url.split('?')[0]}?w=${width}&h=${height}&fit=crop&q=${quality}`;
  }

  // For other URLs, return as-is or apply transformations if supported
  return url;
}

/**
 * Generates a placeholder data URL for lazy loading
 */
export function generatePlaceholder(
  width: number = 400,
  height: number = 300,
  color: string = '#e5e7eb'
): string {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${color}"/>
      <text x="50%" y="50%" font-family="Arial" font-size="16" fill="#9ca3af" text-anchor="middle" dominant-baseline="middle">
        Loading...
      </text>
    </svg>
  `;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
}

/**
 * Preloads critical images
 */
export function preloadImages(urls: string[]): void {
  urls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
}

/**
 * Creates an optimized image component with lazy loading
 */
export interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export function createOptimizedImageUrl(
  baseUrl: string,
  size: 'thumbnail' | 'small' | 'medium' | 'large' | 'original' = 'medium'
): string {
  const sizes = {
    thumbnail: { width: 150, height: 150 },
    small: { width: 300, height: 200 },
    medium: { width: 600, height: 400 },
    large: { width: 1200, height: 800 },
    original: { width: 1920, height: 1080 },
  };

  const { width, height } = sizes[size];
  return optimizeImageUrl(baseUrl, { width, height });
}
