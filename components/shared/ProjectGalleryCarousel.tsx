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
    <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_30px_80px_-40px_rgba(15,23,42,0.35)]">
      <div className="border-b border-slate-200 bg-[linear-gradient(135deg,#0f172a_0%,#1e293b_55%,#334155_100%)] px-5 py-4 text-white sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[11px] font-body uppercase tracking-[0.24em] text-white/55">Layihə Qalereyası</p>
            <h3 className="mt-1 font-heading text-lg font-semibold sm:text-xl">{title}</h3>
          </div>
          <div className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-body text-white/80">
            {current + 1} / {images.length}
          </div>
        </div>
      </div>

      <div className="bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.12),_transparent_32%),linear-gradient(180deg,#f8fafc_0%,#e2e8f0_100%)] p-3 sm:p-5 lg:p-6">
        <div className="relative rounded-[28px] border border-white/70 bg-white/80 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur sm:p-4 lg:p-5">
          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 shadow-sm transition-all hover:-translate-x-0.5 hover:bg-white"
                aria-label="Əvvəlki şəkil"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 shadow-sm transition-all hover:translate-x-0.5 hover:bg-white"
                aria-label="Növbəti şəkil"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}

          <div className="flex min-h-[240px] items-center justify-center rounded-[22px] bg-[linear-gradient(180deg,#f8fafc_0%,#eef2f7_100%)] p-2 sm:min-h-[360px] sm:p-4 lg:min-h-[540px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <m.img
                key={images[current]}
                src={images[current]}
                alt={`${title} — şəkil ${current + 1}`}
                custom={direction}
                variants={{
                  enter: (d: number) => ({ x: d > 0 ? 48 : -48, opacity: 0 }),
                  center: { x: 0, opacity: 1 },
                  exit: (d: number) => ({ x: d > 0 ? -48 : 48, opacity: 0 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className="block max-h-[72vh] w-auto max-w-full rounded-[18px] border border-slate-200 bg-white shadow-[0_18px_45px_-30px_rgba(15,23,42,0.45)]"
                draggable={false}
              />
            </AnimatePresence>
          </div>
        </div>

        {images.length > 1 && (
          <div className="mt-4 overflow-x-auto pb-1">
            <div className="flex min-w-max gap-3">
              {images.map((image, i) => (
                <button
                  key={image}
                  onClick={() => go(i)}
                  className={`group relative overflow-hidden rounded-2xl border transition-all ${
                    i === current
                      ? 'border-brand-blue bg-white shadow-md ring-2 ring-brand-blue/15'
                      : 'border-slate-200 bg-white/80 hover:border-slate-300'
                  }`}
                  aria-label={`Şəkil ${i + 1}`}
                >
                  <div className="flex h-20 w-28 items-center justify-center bg-[linear-gradient(180deg,#f8fafc_0%,#eef2f7_100%)] p-1.5 sm:h-24 sm:w-36">
                    <img
                      src={image}
                      alt=""
                      className="max-h-full max-w-full rounded-xl border border-slate-200 object-contain"
                      draggable={false}
                    />
                  </div>
                  <div className={`absolute inset-x-0 bottom-0 h-0.5 transition-opacity ${
                    i === current ? 'bg-brand-blue opacity-100' : 'bg-slate-300 opacity-0 group-hover:opacity-100'
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
