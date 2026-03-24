import { Star } from 'lucide-react';
import Container from '@/components/layout/Container';
import SectionHeading from '@/components/shared/SectionHeading';
import ScrollReveal from '@/components/shared/ScrollReveal';
import { TESTIMONIALS } from '@/lib/constants';

export default function Testimonials() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-brand-dark">
      <Container>
        <SectionHeading
          title="Müştərilərimiz Nə Deyir"
          light
          className="mb-14"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} delay={index * 0.1} className="h-full">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 hover:bg-white/10 transition-colors duration-300 flex flex-col h-full">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                  ))}
                </div>
                <p className="text-white/80 font-body text-sm leading-relaxed mb-6 italic flex-1">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-blue to-brand-orange flex items-center justify-center shrink-0">
                    <span className="text-white text-xs font-heading font-bold">{testimonial.initials}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-white font-heading font-semibold text-sm truncate">{testimonial.name}</p>
                    <p className="text-white/50 font-body text-xs truncate">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
