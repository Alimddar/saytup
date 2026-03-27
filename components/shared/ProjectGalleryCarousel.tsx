'use client';

import { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectGalleryCarouselProps {
  images: string[];
  title: string;
}

export default function ProjectGalleryCarousel({ images, title }: ProjectGalleryCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (next: number) => {
    setDirection(next > current ? 1 : -1);
    setCurrent(next);
  };

  const prev = () => go((current - 1 + images.length) % images.length);
  const next = () => go((current + 1) % images.length);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="relative flex min-h-[240px] items-center justify-center bg-slate-50 p-3 sm:min-h-[360px] sm:p-5 lg:min-h-[520px] lg:p-6">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <m.img
            key={`${current}-${images[current]}`}
            src={images[current]}
            alt={`${title} — şəkil ${current + 1}`}
            custom={direction}
            variants={{
              enter: (d: number) => ({ x: d > 0 ? 24 : -24, opacity: 0 }),
              center: { x: 0, opacity: 1 },
              exit: (d: number) => ({ x: d > 0 ? -24 : 24, opacity: 0 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="block max-h-[72vh] w-auto max-w-full rounded-xl border border-slate-200 bg-white"
            draggable={false}
          />
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-slate-600 shadow-sm transition-colors hover:bg-white"
              aria-label="Əvvəlki şəkil"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-slate-600 shadow-sm transition-colors hover:bg-white"
              aria-label="Növbəti şəkil"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex flex-col gap-3 border-t border-slate-200 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs font-body text-slate-500">
            {current + 1} / {images.length}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-end">
            {images.map((image, i) => (
              <button
                key={`${image}-${i}`}
                onClick={() => go(i)}
                className={`h-2 rounded-full transition-all duration-200 ${
                  i === current ? 'w-6 bg-slate-900' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Şəkil ${i + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
