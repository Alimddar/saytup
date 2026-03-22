'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Container from '@/components/layout/Container';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-light pt-20">
      {/* Dot Grid Background */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(circle, #1A73E8 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <Container className="relative z-10 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <span className="inline-flex items-center gap-2 bg-brand-blue-light text-brand-blue text-sm font-body font-medium px-4 py-1.5 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
                Veb İnkişaf Studiyası · Bakı, Azərbaycan
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-brand-dark leading-tight mb-6"
            >
              Biznesinizi Böyüdən{' '}
              <span className="text-brand-blue">Veb Tətbiqlər</span>{' '}
              Qururuq
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="text-lg text-brand-gray font-body leading-relaxed mb-8 max-w-lg"
            >
              Saytup.az kiçik bizneslərin gözəl, sürətli və effektiv veb tətbiqlər işə salmasına kömək edən Bakıda veb inkişaf studiyasıdır.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/portfolio">
                <Button className="bg-brand-blue hover:bg-brand-blue-dark text-white font-body font-medium px-8 py-3 h-auto text-base">
                  İşlərimizə Bax
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white font-body font-medium px-8 py-3 h-auto text-base transition-colors duration-200"
                >
                  Pulsuz Qiymət Al
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right — Abstract Graphic */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="hidden lg:flex items-center justify-center relative"
          >
            <div className="relative w-full max-w-lg">
              {/* Main card */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-blue-light flex items-center justify-center shrink-0">
                      <div className="w-3 h-3 rounded-sm bg-brand-blue" />
                    </div>
                    <div className="flex-1">
                      <div className="h-2.5 bg-brand-dark/10 rounded-full w-3/4 mb-1.5" />
                      <div className="h-2 bg-brand-dark/5 rounded-full w-1/2" />
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-orange-light flex items-center justify-center shrink-0">
                      <div className="w-3 h-3 rounded-sm bg-brand-orange" />
                    </div>
                    <div className="flex-1">
                      <div className="h-2.5 bg-brand-dark/10 rounded-full w-2/3 mb-1.5" />
                      <div className="h-2 bg-brand-dark/5 rounded-full w-5/12" />
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center shrink-0">
                      <div className="w-3 h-3 rounded-sm bg-green-500" />
                    </div>
                    <div className="flex-1">
                      <div className="h-2.5 bg-brand-dark/10 rounded-full w-4/5 mb-1.5" />
                      <div className="h-2 bg-brand-dark/5 rounded-full w-3/5" />
                    </div>
                  </div>
                </div>
                <div className="mt-6 h-24 bg-gradient-to-r from-brand-blue to-brand-blue-dark rounded-xl flex items-end p-4 gap-2">
                  {[40, 65, 50, 80, 60, 90, 75].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-white/30 rounded-t-sm"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* Floating badge 1 */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2"
              >
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div>
                  <p className="text-xs font-heading font-semibold text-brand-dark">98% Bal</p>
                  <p className="text-xs font-body text-brand-gray">Lighthouse</p>
                </div>
              </motion.div>

              {/* Floating badge 2 */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-brand-blue rounded-2xl shadow-lg px-4 py-3"
              >
                <p className="text-xs font-heading font-bold text-white">15+ Layihə</p>
                <p className="text-xs font-body text-white/70">Bakıda Tamamlandı</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
