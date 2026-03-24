'use client';

import { m } from 'framer-motion';
import * as Icons from 'lucide-react';
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
        'bg-white rounded-2xl p-6 border border-transparent hover:border-brand-blue/20 shadow-sm hover:shadow-lg transition-all duration-300 group',
        className
      )}
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-brand-blue-light flex items-center justify-center mb-4 group-hover:bg-brand-blue transition-colors duration-300">
        {IconComponent && (
          <IconComponent className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors duration-300" />
        )}
      </div>

      <h3 className="font-heading font-semibold text-brand-dark text-lg mb-2">{service.title}</h3>
      <p className="text-sm text-brand-gray font-body leading-relaxed">{service.description}</p>
    </m.div>
  );
}
