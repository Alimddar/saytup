'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '@/components/layout/Container';
import ProjectCard from '@/components/shared/ProjectCard';
import { PROJECTS } from '@/lib/constants';

const categories = ['Hamısı', 'Veb Tətbiq', 'E-Commerce', 'Korporativ', 'UI/UX'];

export default function PortfolioPage() {
  const [active, setActive] = useState('Hamısı');

  const filtered = active === 'Hamısı' ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-blue to-brand-blue-dark pt-32 pb-20">
        <Container>
          <div className="text-center text-white">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4">Portfoliomuz</h1>
            <p className="text-lg text-white/70 font-body max-w-xl mx-auto">
              Real layihələr, real nəticələr — Azərbaycan bizneslərinin böyüməsi üçün.
            </p>
          </div>
        </Container>
      </section>

      {/* Filter + Grid */}
      <section className="py-20 bg-brand-light">
        <Container>
          {/* Filter Bar */}
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

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
