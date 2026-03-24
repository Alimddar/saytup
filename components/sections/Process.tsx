import * as Icons from 'lucide-react';
import { LucideProps } from 'lucide-react';
import Container from '@/components/layout/Container';
import SectionHeading from '@/components/shared/SectionHeading';
import ScrollReveal from '@/components/shared/ScrollReveal';
import { PROCESS_STEPS } from '@/lib/constants';

export default function Process() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <Container>
        <SectionHeading
          title="Necə İşləyirik"
          subtitle="İdeadan buraxılışa sadə, şəffaf bir proses"
          className="mb-14"
        />
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-brand-blue/20 z-0" style={{ left: '12.5%', right: '12.5%' }} />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {PROCESS_STEPS.map((step, index) => {
              const IconComponent = Icons[step.icon as keyof typeof Icons] as React.ComponentType<LucideProps> | undefined;
              return (
                <ScrollReveal key={step.id} delay={index * 0.15}>
                  <div className="flex flex-col items-center text-center group">
                    {/* Circle Number */}
                    <div className="relative mb-6">
                      <div className="w-20 h-20 rounded-full bg-brand-blue-light border-4 border-white shadow-md flex items-center justify-center group-hover:bg-brand-blue transition-colors duration-300">
                        {IconComponent && (
                          <IconComponent className="w-8 h-8 text-brand-blue group-hover:text-white transition-colors duration-300" />
                        )}
                      </div>
                      <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-brand-orange text-white text-xs font-heading font-bold flex items-center justify-center">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="font-heading font-semibold text-brand-dark text-xl mb-3">{step.title}</h3>
                    <p className="text-sm text-brand-gray font-body leading-relaxed">{step.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
