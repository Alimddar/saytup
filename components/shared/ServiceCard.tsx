'use client';

import { m } from 'framer-motion';
import * as Icons from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';
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
        'group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-brand-blue/20 hover:shadow-md',
        className
      )}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue-light">
        {IconComponent && (
          <IconComponent className="h-6 w-6 text-brand-blue" />
        )}
      </div>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="font-heading text-lg font-semibold leading-tight text-brand-dark">
            {service.title}
          </h3>
          <p className="mt-2 text-sm font-body leading-relaxed text-brand-gray">
            {service.description}
          </p>
        </div>

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-50 text-brand-blue transition-colors duration-300 group-hover:bg-brand-blue group-hover:text-white">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>

      <div className="mt-auto pt-5">
        <p className="text-xs font-body font-medium uppercase tracking-[0.16em] text-brand-orange">
          {service.highlight}
        </p>
      </div>
    </m.div>
  );
}
