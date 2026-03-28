import type { Metadata } from 'next';
import Container from '@/components/layout/Container';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import PortfolioGrid from './PortfolioGrid';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Portfolio | Hazırlanmış Saytlar — Saytup.digital',
  description: 'Saytup.digital-ın hazırladığı veb sayt nümunələri. Azərbaycanda kiçik bizneslər üçün hazırlanmış korporativ saytlar, landing page-lər, e-ticarət həlləri. Portfolio işlərimizə baxın.',
  keywords: [
    'portfolio', 'hazırlanmış saytlar', 'veb layihələr', 'sayt nümunələri',
    'Azərbaycanda hazırlanmış veb saytlar', 'sayt portfolio nümunələri',
    'Azərbaycan',
  ],
  path: '/portfolio',
});

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="bg-gradient-to-br from-brand-blue to-brand-blue-dark pt-24 sm:pt-32 pb-12 sm:pb-20"
        aria-labelledby="portfolio-hero-heading"
      >
        <Container>
          <div className="text-white">
            <Breadcrumbs items={[{ label: 'Portfolio', href: '/portfolio' }]} />
            <div className="text-center">
              <h1 id="portfolio-hero-heading" className="text-4xl sm:text-5xl font-heading font-bold mb-4">
                Hazırlanmış Saytlar — Portfoliomuz
              </h1>
              <p className="text-lg text-white/70 font-body max-w-xl mx-auto">
                Real layihələr, real nəticələr — Azərbaycan bizneslərinin böyüməsi üçün hazırlanmış veb saytlar.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <PortfolioGrid />
    </>
  );
}
