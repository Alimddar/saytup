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
    <div className="overflow-hidden rounded-[30px] border border-slate-200/80 bg-white shadow-[0_18px_50px_-38px_rgba(15,23,42,0.28)]">
      <div className="flex items-center justify-between gap-4 border-b border-slate-200/80 px-5 py-4 sm:px-6">
        <div>
          <p className="text-[11px] font-body uppercase tracking-[0.22em] text-slate-400">Layihə Qalereyası</p>
          <h3 className="mt-1 font-heading text-lg font-semibold text-slate-900 sm:text-xl">{title}</h3>
        </div>
        <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-body text-slate-500">
          {current + 1} / {images.length}
        </div>
      </div>

      <div className="bg-slate-50/70 p-3 sm:p-4 lg:p-5">
        <div className="relative rounded-[24px] border border-slate-200/80 bg-white p-3 sm:p-4">
          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-slate-600 shadow-sm transition-colors hover:bg-slate-50"
                aria-label="Əvvəlki şəkil"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-slate-600 shadow-sm transition-colors hover:bg-slate-50"
                aria-label="Növbəti şəkil"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </>
          )}

          <div className="flex min-h-[220px] items-center justify-center rounded-[18px] bg-[#f8fafc] p-2 sm:min-h-[340px] sm:p-3 lg:min-h-[520px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <m.img
                key={`${current}-${images[current]}`}
                src={images[current]}
                alt={`${title} — şəkil ${current + 1}`}
                custom={direction}
                variants={{
                  enter: (d: number) => ({ x: d > 0 ? 32 : -32, opacity: 0 }),
                  center: { x: 0, opacity: 1 },
                  exit: (d: number) => ({ x: d > 0 ? -32 : 32, opacity: 0 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.24, ease: 'easeOut' }}
                className="block max-h-[72vh] w-auto max-w-full rounded-[14px] border border-slate-200/80 bg-white"
                draggable={false}
              />
            </AnimatePresence>
          </div>
        </div>

        {images.length > 1 && (
          <div className="mt-3 overflow-x-auto pb-1">
            <div className="flex min-w-max gap-2.5">
              {images.map((image, i) => (
                <button
                  key={`${image}-${i}`}
                  onClick={() => go(i)}
                  className={`group relative overflow-hidden rounded-[18px] border bg-white transition-all ${
                    i === current
                      ? 'border-slate-300 shadow-sm ring-1 ring-slate-200'
                      : 'border-slate-200/80 hover:border-slate-300'
                  }`}
                  aria-label={`Şəkil ${i + 1}`}
                >
                  <div className="flex h-18 w-24 items-center justify-center bg-slate-50 p-1.5 sm:h-20 sm:w-28">
                    <img
                      src={image}
                      alt=""
                      className="max-h-full max-w-full rounded-[12px] object-contain"
                      draggable={false}
                    />
                  </div>
                  <div className={`absolute inset-x-0 bottom-0 h-px transition-opacity ${
                    i === current ? 'bg-slate-900 opacity-100' : 'bg-slate-300 opacity-0 group-hover:opacity-100'
                  }`} />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
