import Container from '@/components/layout/Container';
import SectionHeading from '@/components/shared/SectionHeading';
import ServiceCard from '@/components/shared/ServiceCard';
import ScrollReveal from '@/components/shared/ScrollReveal';
import { SERVICES } from '@/lib/constants';

export default function Services() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <Container>
        <SectionHeading
          title="Xidmətlərimiz"
          subtitle="Saytup satış, təqdimat, rezervasiya və texniki inkişaf ehtiyaclarını əhatə edən 6 əsas istiqamətdə işləyir."
          className="mb-10"
        />
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          <span className="rounded-full bg-brand-blue-light px-4 py-2 text-sm font-body font-medium text-brand-blue">
            Strategiya + Dizayn + İnkişaf
          </span>
          <span className="rounded-full bg-brand-orange-light px-4 py-2 text-sm font-body font-medium text-brand-orange">
            Paket və ya tam custom yanaşma
          </span>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 0.1} className="h-full">
              <ServiceCard service={service} className="h-full" />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
