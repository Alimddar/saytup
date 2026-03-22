import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import Process from '@/components/sections/Process';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Saytup.az — Web Development Studio in Baku',
  description: 'Saytup.az builds beautiful, fast web applications for small businesses in Baku, Azerbaijan. Custom web apps, e-commerce, responsive websites, and more.',
};

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Saytup.az',
    url: 'https://saytup.az',
    logo: 'https://saytup.az/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+994-50-123-45-67',
      contactType: 'customer service',
      email: 'hello@saytup.az',
      areaServed: 'AZ',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Baku',
      addressCountry: 'AZ',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Stats />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <CTA />
    </>
  );
}
