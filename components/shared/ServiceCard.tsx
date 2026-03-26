'use client';

import { m } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Check } from 'lucide-react';
import { Service } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { LucideProps } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export default function ServiceCard({ service, className }: ServiceCardProps) {
  const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ComponentType<LucideProps> | undefined;

  return (
    <m.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={cn(
        'group flex h-full flex-col rounded-2xl border border-brand-blue/10 bg-white p-6 shadow-sm transition-all duration-300 hover:border-brand-blue/25 hover:shadow-lg',
        className
      )}
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-blue-light transition-colors duration-300 group-hover:bg-brand-blue">
          {IconComponent && (
            <IconComponent className="h-6 w-6 text-brand-blue transition-colors duration-300 group-hover:text-white" />
          )}
        </div>

        <div className="min-w-0">
          <p className="text-sm font-body font-medium text-brand-orange">{service.highlight}</p>
          <h3 className="mt-1 font-heading text-lg font-semibold leading-tight text-brand-dark">
            {service.title}
          </h3>
        </div>
      </div>

      <p className="mt-4 text-sm font-body leading-relaxed text-brand-gray">
        {service.description}
      </p>

      <div className="mt-5 space-y-2">
        {service.deliverables.slice(0, 2).map((item) => (
          <div
            key={item}
            className="flex items-start gap-2 rounded-2xl bg-brand-light px-3 py-2.5 text-sm font-body text-brand-dark"
          >
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
            <span>{item}</span>
          </div>
        ))}
      </div>

      <p className="mt-5 text-xs font-body leading-relaxed text-brand-gray">
        <span className="font-semibold text-brand-dark">Uyğundur:</span> {service.idealFor}
      </p>
    </m.div>
  );
}
