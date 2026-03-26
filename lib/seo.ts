import type { Metadata } from 'next';

export const SITE_URL = 'https://saytup.az';

export function generatePageMetadata({
  title,
  description,
  keywords,
  path,
  ogImage,
}: {
  title: string;
  description: string;
  keywords: string[];
  path: string;
  ogImage?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const image = ogImage ?? `${SITE_URL}/og-image.jpg`;
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Saytup.az',
      locale: 'az_AZ',
      type: 'website',
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}
