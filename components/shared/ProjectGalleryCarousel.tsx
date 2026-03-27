'use client';

import { useState } from 'react';
import Image from 'next/image';
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
    <div className="relative w-full overflow-hidden rounded-[28px] border border-white/10 bg-slate-950 shadow-[0_30px_80px_-35px_rgba(15,23,42,0.9)] select-none min-h-[320px] sm:min-h-[420px] lg:min-h-[540px]">
      <AnimatePresence initial={false} custom={direction}>
        <m.div
          key={current}
          custom={direction}
          variants={{
            enter: (d: number) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
            center: { x: 0, opacity: 1 },
            exit: (d: number) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <Image
            src={images[current]}
            alt=""
            fill
            aria-hidden="true"
            className="object-cover blur-2xl scale-110 opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/70 to-brand-dark/90" />
          <div className="absolute inset-0 p-4 sm:p-6 lg:p-8">
            <div className="relative h-full w-full overflow-hidden rounded-[20px] border border-white/10 bg-black/20">
              <Image
                src={images[current]}
                alt={`${title} — şəkil ${current + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
              />
            </div>
          </div>
        </m.div>
      </AnimatePresence>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/30 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/45 to-transparent" />

      <div className="absolute left-4 top-4 z-10 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs font-body text-white/80 backdrop-blur">
        {current + 1} / {images.length}
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/45 text-white backdrop-blur transition-colors hover:bg-black/65"
            aria-label="Əvvəlki şəkil"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/45 text-white backdrop-blur transition-colors hover:bg-black/65"
            aria-label="Növbəti şəkil"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-2 backdrop-blur">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className={`h-2.5 rounded-full transition-all duration-200 ${
                  i === current ? 'w-6 bg-white' : 'w-2.5 bg-white/45 hover:bg-white/70'
                }`}
                aria-label={`Şəkil ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
