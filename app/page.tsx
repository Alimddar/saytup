import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import Process from '@/components/sections/Process';
import CTA from '@/components/sections/CTA';
import JsonLd from '@/components/shared/JsonLd';
import Container from '@/components/layout/Container';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Sayt Hazırlanması | Saytup.digital — Azərbaycanda Peşəkar Veb Sayt Sifarişi',
  description: 'Sayt hazırlamaq istəyirsiniz? Saytup.digital Azərbaycanda bizneslər üçün peşəkar veb sayt hazırlayır. Korporativ saytlar, e-ticarət, landing page. Pulsuz konsultasiya.',
  keywords: [
    'sayt', 'sayt hazırlamaq', 'veb sayt', 'sayt sifarişi', 'sayt yaratmaq',
    'Azərbaycanda sayt hazırlayan şirkət', 'sayt sifariş etmək Azərbaycan',
    'peşəkar veb sayt hazırlanması', 'biznes üçün sayt', 'saytup',
  ],
  path: '/',
});

const schemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://saytup.digital/#organization',
    name: 'Saytup.digital',
    alternateName: 'Saytup',
    url: 'https://saytup.digital',
    logo: {
      '@type': 'ImageObject',
      url: 'https://saytup.digital/logo.png',
      width: 512,
      height: 512,
    },
    description: 'Azərbaycanda bizneslər üçün peşəkar veb sayt hazırlayan studiya.',
    foundingDate: '2023',
    founders: [{ '@type': 'Person', name: 'Saytup Team' }],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Azərbaycan',
      addressRegion: 'Azərbaycan',
      addressCountry: 'AZ',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+994-51-665-81-43',
      contactType: 'customer service',
      email: 'contact@saytup.digital',
      areaServed: 'AZ',
      availableLanguage: ['Azerbaijani', 'English', 'Russian'],
    },
    sameAs: [],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://saytup.digital/#website',
    name: 'Saytup.digital',
    url: 'https://saytup.digital',
    description: 'Azərbaycanda veb sayt hazırlayan peşəkar studiya',
    publisher: { '@id': 'https://saytup.digital/#organization' },
    inLanguage: 'az',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://saytup.digital/portfolio?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://saytup.digital/#localbusiness',
    name: 'Saytup.digital — Veb İnkişaf Studiyası',
    image: 'https://saytup.digital/og-image.jpg',
    url: 'https://saytup.digital',
    telephone: '+994-51-665-81-43',
    email: 'contact@saytup.digital',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Azərbaycan',
      addressRegion: 'Azərbaycan',
      addressCountry: 'AZ',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.4093,
      longitude: 49.8671,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '10:00',
      closes: '19:00',
    },
    priceRange: '₼₼',
    areaServed: {
      '@type': 'Country',
      name: 'Azerbaijan',
    },
    serviceType: ['Web Development', 'Web Design', 'E-Commerce Development', 'SEO'],
    description:
      'Azərbaycanda bizneslər üçün peşəkar veb sayt hazırlayan studiya. Korporativ saytlar, e-ticarət, landing page, SEO və texniki dəstək.',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '15',
      bestRating: '5',
    },
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={schemas} />
      <Hero />
      <Stats />

      {/* SEO text block: keyword-rich crawlable content */}
      <section
        className="py-16 bg-white"
        aria-labelledby="about-saytup-heading"
      >
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2
              id="about-saytup-heading"
              className="text-3xl font-heading font-semibold text-brand-dark mb-6"
            >
              Azərbaycanda Peşəkar Sayt Hazırlanması
            </h2>
            <p className="text-brand-gray font-body leading-relaxed mb-4">
              Saytup.digital Azərbaycanda bizneslər üçün <strong>peşəkar veb sayt hazırlayan</strong> studiyasıdır.
              Sayt sifarişi vermək prosesini sadə, şəffaf və sürətli edir — ilk görüşdən buraxılışa qədər hər mərhələdə yanınızdayıq.
            </p>
            <p className="text-brand-gray font-body leading-relaxed mb-4">
              Azərbaycanda fəaliyyət göstərən bizneslər üçün korporativ saytlar, landing page-lər, e-ticarət həlləri və
              rezervasiya sistemləri hazırlayırıq. Hər layihə <strong>sayt hazırlamaq</strong> prosesinin yalnız başlanğıcıdır —
              buraxılışdan sonra da texniki dəstək ilə yanınızdayıq.
            </p>
            <p className="text-brand-gray font-body leading-relaxed">
              Next.js, React və müasir texnologiyalar əsasında hazırladığımız saytlar sürətli yüklənir,
              Google-da yaxşı sıralanır və hər cihazda düzgün görünür.
              <strong> Biznesiniz üçün sayt</strong> yaratmaq üçün bu gün bizimlə əlaqə saxlayın.
            </p>
          </div>
        </Container>
      </section>

      <Services />
      <Portfolio />
      <Process />
      <CTA />
    </>
  );
}
