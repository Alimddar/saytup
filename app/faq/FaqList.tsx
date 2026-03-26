'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { m, AnimatePresence } from 'framer-motion';
import Container from '@/components/layout/Container';
import Link from 'next/link';
import { FAQ_ITEMS, type FaqItem } from '@/lib/constants';

function FaqItem({ item, isOpen, onToggle }: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-brand-blue-light/30 transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <span className="font-heading font-semibold text-brand-dark text-lg pr-4">
          {item.question}
        </span>
        <m.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.15 }}
          className="shrink-0 w-8 h-8 rounded-full bg-brand-blue-light flex items-center justify-center text-brand-blue"
        >
          <ChevronDown className="w-4 h-4" />
        </m.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <m.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.15, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-brand-gray leading-relaxed font-body">
              {item.answer}
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqList() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <>
      <section className="py-12 sm:py-16 md:py-20" aria-labelledby="faq-list-heading">
        <Container>
          <h2 id="faq-list-heading" className="sr-only">Tez-tez Verilən Suallar Siyahısı</h2>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col gap-3">
              {FAQ_ITEMS.map((item) => (
                <FaqItem
                  key={item.id}
                  item={item}
                  isOpen={openId === item.id}
                  onToggle={() => setOpenId(openId === item.id ? null : item.id)}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-brand-dark">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-heading font-semibold text-white mb-4">
              Cavabını tapmadınız?
            </h2>
            <p className="text-slate-400 mb-8 text-lg font-body">
              Sualınızı bilavasitə bizə göndərin. 24 saat ərzində cavab veririk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-orange text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors duration-200"
              >
                Sayt Sifariş Et
              </Link>
              <Link
                href="/plans"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors duration-200"
              >
                Qiymət Paketlərimizə Baxın
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
