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
  description: 'Azərbaycanda kiçik bizneslər üçün nəticəyə fokuslanan veb xidmətləri — korporativ saytlar, landing page-lər, e-ticarət, rezervasiya sistemləri, redesign və texniki dəstək.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-brand-blue to-brand-blue-dark pt-24 sm:pt-32 pb-12 sm:pb-20">
        <Container>
          <div className="text-center text-white">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4">Xidmətlərimiz</h1>
            <p className="text-lg text-white/70 font-body max-w-xl mx-auto">
              Saytup satış, təqdimat və daxili prosesləri gücləndirən nəticəyönümlü veb həlləri qurur.
            </p>
          </div>
        </Container>
      </section>

      {/* Services List */}
      <section className="py-12 sm:py-16 lg:py-24 bg-brand-light">
        <Container>
          <div className="flex flex-col gap-16">
            {SERVICES.map((service, index) => {
              const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ComponentType<LucideProps> | undefined;
              const isReversed = index % 2 === 1;

              return (
                <ScrollReveal key={service.id} delay={index * 0.06}>
                  <div className="rounded-3xl border border-brand-blue/10 bg-white p-5 shadow-sm sm:p-8 lg:p-10">
                    <div
                      className={[
                        'flex flex-col gap-8 lg:items-start lg:gap-10',
                        isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row',
                      ].join(' ')}
                    >
                      <div className="lg:w-[42%]">
                        <div className="flex items-start gap-4">
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-blue-light">
                            {IconComponent && <IconComponent className="h-7 w-7 text-brand-blue" />}
                          </div>

                          <div className="min-w-0">
                            <p className="text-xs font-body font-semibold uppercase tracking-[0.18em] text-brand-orange">
                              Xidmət {String(index + 1).padStart(2, '0')}
                            </p>
                            <h2 className="mt-1 text-2xl font-heading font-semibold text-brand-dark">
                              {service.title}
                            </h2>
                            <p className="mt-2 text-sm font-body font-medium text-brand-blue">
                              {service.highlight}
                            </p>
                          </div>
                        </div>

                        <p className="mt-5 font-body leading-relaxed text-brand-gray">
                          {service.description}
                        </p>

                        <div className="mt-5 rounded-2xl border border-brand-blue/10 bg-brand-light p-4">
                          <p className="text-xs font-body font-semibold uppercase tracking-[0.18em] text-brand-gray">
                            Ən uyğun
                          </p>
                          <p className="mt-2 text-sm font-body leading-relaxed text-brand-dark">
                            {service.idealFor}
                          </p>
                        </div>
                      </div>

                      <div className="flex-1">
                        <p className="text-xs font-body font-semibold uppercase tracking-[0.18em] text-brand-gray">
                          Bu xidmətə daxildir
                        </p>
                        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                          {service.deliverables.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-3 rounded-2xl border border-brand-blue/10 bg-white px-4 py-4"
                            >
                              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
                              <span className="text-sm font-body leading-relaxed text-brand-dark">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
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
