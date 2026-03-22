'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Project } from '@/lib/constants';
import { PROJECT_IMAGES } from '@/lib/projectImages';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export default function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={cn('group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col h-full', className)}
    >
      {/* Image Area */}
      <div className="relative h-48 sm:h-56 shrink-0 overflow-hidden">
        <Image
          src={PROJECT_IMAGES[project.slug] ?? project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Subtle gradient overlay to keep it branded */}
        <div className={cn('absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60')} />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-brand-blue/85 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link
            href={`/portfolio/${project.slug}`}
            className="flex items-center gap-2 text-white font-body font-medium text-sm border border-white/50 rounded-full px-5 py-2.5 hover:bg-white hover:text-brand-blue transition-colors duration-200"
          >
            Keys Araşdırması <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Category badge pinned to bottom-left of image */}
        <div className="absolute bottom-3 left-4">
          <Badge className="bg-white/90 text-brand-blue border-0 text-xs font-medium shadow-sm">
            {project.category}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <h3 className="font-heading font-semibold text-brand-dark text-base sm:text-lg leading-snug mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-brand-gray font-body leading-relaxed flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-xs font-body text-brand-gray bg-brand-light px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
