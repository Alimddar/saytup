'use client';

import { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import Container from '@/components/layout/Container';
import ProjectCard from '@/components/shared/ProjectCard';
import { PROJECTS } from '@/lib/constants';

export default function PortfolioGrid() {
  const categories = ['Hamısı', ...new Set(PROJECTS.map((project) => project.category))];
  const [active, setActive] = useState('Hamısı');

  const filtered = active === 'Hamısı' ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <section className="py-20 bg-brand-light" aria-labelledby="portfolio-grid-heading">
      <Container>
        <h2 id="portfolio-grid-heading" className="sr-only">Hazırlanmış Saytlar</h2>
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-body font-medium transition-all duration-200 ${
                active === cat
                  ? 'bg-brand-blue text-white shadow-md'
                  : 'bg-white text-brand-gray hover:text-brand-blue hover:border-brand-blue border border-transparent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <m.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <m.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="h-full"
              >
                <ProjectCard project={project} />
              </m.div>
            ))}
          </AnimatePresence>
        </m.div>
      </Container>
    </section>
  );
}
