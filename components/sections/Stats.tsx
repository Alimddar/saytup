import Container from '@/components/layout/Container';
import AnimatedCounter from '@/components/shared/AnimatedCounter';
import { STATS } from '@/lib/constants';

export default function Stats() {
  return (
    <section className="bg-brand-blue py-14">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <div key={stat.id} className="flex items-center gap-6">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} label={stat.label} />
              {index < STATS.length - 1 && (
                <div className="hidden lg:block w-px h-12 bg-white/20 shrink-0" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
