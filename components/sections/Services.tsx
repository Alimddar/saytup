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
          title="Nə Edirik"
          subtitle="Kiçik bizneslər üçün hazırlanmış tam veb inkişaf xidmətləri"
          className="mb-14"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 0.1}>
              <ServiceCard service={service} />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
