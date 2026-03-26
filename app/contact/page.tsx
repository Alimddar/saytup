import type { Metadata } from 'next';
import Container from '@/components/layout/Container';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import ContactForm from './ContactForm';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Əlaqə | Sayt Sifarişi — Saytup.digital',
  description: 'Bakıda sayt sifariş etmək üçün bizimlə əlaqə saxlayın. Saytup.digital-dan pulsuz konsultasiya alın. 24 saat ərzində cavab veririk.',
  keywords: [
    'əlaqə', 'sayt sifarişi', 'bizimlə əlaqə', 'müraciət forması',
    'sayt sifariş etmək üçün müraciət', 'pulsuz konsultasiya',
    'Bakı', 'Azərbaycan',
  ],
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="bg-gradient-to-br from-brand-blue to-brand-blue-dark pt-24 sm:pt-32 pb-12 sm:pb-20"
        aria-labelledby="contact-hero-heading"
      >
        <Container>
          <div className="text-white">
            <Breadcrumbs items={[{ label: 'Əlaqə', href: '/contact' }]} />
            <div className="text-center">
              <h1 id="contact-hero-heading" className="text-4xl sm:text-5xl font-heading font-bold mb-4">
                Sayt Sifarişi — Bizimlə Əlaqə
              </h1>
              <p className="text-lg text-white/70 font-body max-w-xl mx-auto">
                Layihəniz haqqında bizə məlumat verin — 24 saat ərzində pulsuz konsultasiya ilə cavab verəcəyik.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <ContactForm />
    </>
  );
}
