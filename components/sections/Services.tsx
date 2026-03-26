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
          subtitle="Satış, təqdimat və daxili proseslərinizi gücləndirmək üçün nəticəyönümlü veb həllər hazırlayırıq."
          className="mb-12"
        />
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
