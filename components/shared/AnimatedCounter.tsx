'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
  target: number;
  suffix: string;
  label: string;
}

export default function AnimatedCounter({ target, suffix, label }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1200;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <span className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white">
        {count}{suffix}
      </span>
      <span className="text-sm font-body text-white/70 mt-1">{label}</span>
    </div>
  );
}
