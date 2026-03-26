import type { Metadata } from 'next';
import Container from '@/components/layout/Container';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import JsonLd from '@/components/shared/JsonLd';
import FaqList from './FaqList';
import { FAQ_ITEMS } from '@/lib/constants';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Tez-tez Verilən Suallar | Saytup.digital FAQ',
  description: 'Sayt hazırlamaq barədə suallarınız var? Saytup.digital FAQ-da veb sayt qiyməti, müddəti, texnologiyalar, dəstək və digər suallara cavab tapın.',
  keywords: [
    'sayt sualları', 'veb sayt FAQ', 'tez-tez verilən suallar',
    'sayt hazırlamaq nə qədər vaxt alır', 'hansı texnologiyalar istifadə olunur',
    'sayt qiyməti', 'Bakı', 'Azərbaycan',
  ],
  path: '/faq',
});

export default function FaqPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section
        className="bg-gradient-to-br from-brand-blue via-brand-blue-dark to-[#0f3d7a] pt-24 sm:pt-32 pb-12 sm:pb-20"
        aria-labelledby="faq-hero-heading"
      >
        <Container>
          <div className="max-w-3xl mx-auto">
            <Breadcrumbs items={[{ label: 'FAQ', href: '/faq' }]} />
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-medium px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                Tez-tez Verilən Suallar
              </div>
              <h1 id="faq-hero-heading" className="text-3xl sm:text-4xl md:text-5xl font-heading font-semibold text-white mb-6 leading-tight">
                Sayt Hazırlamaq Barədə
                <span className="text-brand-orange"> Suallar</span>
              </h1>
              <p className="text-lg text-blue-100 leading-relaxed font-body">
                Veb sayt sifarişi, qiymətlər, proseslər və texniki detallar barədə ən çox sorulan suallara cavab.
                Sualınız yoxdursa, bizimlə birbaşa əlaqə saxlayın.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <FaqList />
    </>
  );
}
