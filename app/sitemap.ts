import { MetadataRoute } from 'next';
import { PROJECTS } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPages = PROJECTS.map((project) => ({
    url: `https://saytup.az/portfolio/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    { url: 'https://saytup.az', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://saytup.az/services', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://saytup.az/portfolio', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://saytup.az/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://saytup.az/plans', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://saytup.az/faq', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://saytup.az/contact', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    ...projectPages,
  ];
}
