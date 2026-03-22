import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Container from '@/components/layout/Container';
import ScrollReveal from '@/components/shared/ScrollReveal';

export default function CTA() {
  return (
    <section className="py-20 lg:py-24 bg-brand-light">
      <Container>
        <ScrollReveal>
          <div className="bg-white rounded-3xl p-12 lg:p-16 text-center shadow-sm border border-brand-blue/10 relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue-light rounded-full -translate-y-32 translate-x-32 opacity-50" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-orange-light rounded-full translate-y-24 -translate-x-24 opacity-50" />

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-brand-dark mb-4">
                Böyük Bir Şey Qurmağa Hazırsınız?
              </h2>
              <p className="text-brand-gray font-body text-lg mb-10 max-w-xl mx-auto">
                24 saat ərzində pulsuz məsləhət və layihə qiyməti əldə edin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white font-body font-medium px-10 py-4 h-auto text-base">
                    Layihə Başlat
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button
                    variant="outline"
                    className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-body font-medium px-10 py-4 h-auto text-base transition-colors duration-200"
                  >
                    İşlərimizə Bax
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
