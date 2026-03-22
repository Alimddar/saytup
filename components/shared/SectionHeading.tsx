import { cn } from '@/lib/utils';
import ScrollReveal from './ScrollReveal';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <ScrollReveal delay={0} className={cn(centered && 'text-center', className)}>
      <div className={cn(centered && 'flex flex-col items-center')}>
        <div className="flex items-center gap-3 mb-4">
          {!centered && <div className="w-8 h-0.5 bg-brand-orange" />}
          <h2
            className={cn(
              'text-3xl sm:text-4xl font-heading font-semibold',
              light ? 'text-white' : 'text-brand-dark'
            )}
          >
            {title}
          </h2>
          {centered && <div className="w-12 h-0.5 bg-brand-orange" />}
        </div>
        {subtitle && (
          <p
            className={cn(
              'text-base sm:text-lg font-body max-w-2xl',
              light ? 'text-white/60' : 'text-brand-gray',
              centered && 'text-center'
            )}
          >
            {subtitle}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
}
