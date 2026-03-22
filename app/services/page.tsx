import type { Metadata } from 'next';
import * as Icons from 'lucide-react';
import { LucideProps, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Container from '@/components/layout/Container';
import ScrollReveal from '@/components/shared/ScrollReveal';
import { SERVICES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Xidmətlər',
  description: 'Azərbaycanda kiçik bizneslər üçün tam veb inkişaf xidmətləri — fərdi veb tətbiqlər, e-ticarət, responsiv saytlar, UI/UX dizayn, SEO və daha çox.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-brand-blue to-brand-blue-dark pt-32 pb-20">
        <Container>
          <div className="text-center text-white">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4">Xidmətlərimiz</h1>
            <p className="text-lg text-white/70 font-body max-w-xl mx-auto">
              Onlayn mövcudluğunuzu qurmaq, işə salmaq və böyütmək üçün lazım olan hər şey.
            </p>
          </div>
        </Container>
      </section>

      {/* Services List */}
      <section className="py-20 lg:py-24 bg-brand-light">
        <Container>
          <div className="flex flex-col gap-16">
            {SERVICES.map((service, index) => {
              const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ComponentType<LucideProps> | undefined;
              const isEven = index % 2 === 0;
              return (
                <ScrollReveal key={service.id} delay={0.1}>
                  <div className={`bg-white rounded-3xl p-8 lg:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${!isEven ? 'lg:flex lg:flex-row-reverse' : ''}`}>
                    {/* Icon side */}
                    <div className={`flex ${isEven ? 'lg:justify-start' : 'lg:justify-end'}`}>
                      <div className="w-24 h-24 rounded-3xl bg-brand-blue-light flex items-center justify-center">
                        {IconComponent && <IconComponent className="w-12 h-12 text-brand-blue" />}
                      </div>
                    </div>
                    {/* Content */}
                    <div>
                      <h2 className="text-2xl font-heading font-semibold text-brand-dark mb-3">{service.title}</h2>
                      <p className="text-brand-gray font-body mb-6 leading-relaxed">{service.description}</p>
                      <ul className="flex flex-col gap-2">
                        {service.deliverables.map((item) => (
                          <li key={item} className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0" />
                            <span className="text-sm font-body text-brand-dark">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-brand-dark text-center">
        <Container>
          <ScrollReveal>
            <h2 className="text-3xl font-heading font-semibold text-white mb-4">Layihə fikriniz var? Danışaq.</h2>
            <p className="text-white/60 font-body mb-8 max-w-md mx-auto">24 saat ərzində pulsuz qiymət ilə sizinlə əlaqə saxlayacağıq.</p>
            <Link href="/contact">
              <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white font-body font-medium px-10 py-4 h-auto text-base">
                Bizimlə Əlaqə <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
