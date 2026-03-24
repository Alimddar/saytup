'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { m, AnimatePresence } from 'framer-motion';
import Container from '@/components/layout/Container';
import Link from 'next/link';

const FAQ_ITEMS = [
  {
    id: 1,
    question: 'Siz hansı texnologiyalardan istifadə edirsiniz?',
    answer:
      'Biz əsasən React, Next.js, TypeScript və Tailwind CSS ilə işləyirik. Backend tərəfindən Node.js, PostgreSQL və ya MongoDB istifadə edirik. Hər layihə üçün ən uyğun texnologiya seçimi aparılır.',
  },
  {
    id: 2,
    question: 'Bir vebsayt layihəsi nə qədər vaxt alır?',
    answer:
      'Bu layihənin mürəkkəbliyindən asılıdır. Sadə korporativ sayt 2–4 həftəyə hazır olur. Orta mürəkkəblikdə e-ticarət platforması 6–10 həftə, böyük fərdi veb tətbiqlər isə 3–6 ay çəkə bilər. Konsultasiyadan sonra daha dəqiq müddət müəyyənləşdiririk.',
  },
  {
    id: 3,
    question: 'Layihənin qiyməti necə müəyyən edilir?',
    answer:
      'Qiymət layihənin həcminə, funksionallığına və müddətinə görə dəyişir. Biz əvvəlcə sizinlə pulsuz konsultasiya keçirib tələbləri dəqiqləşdiririk, sonra şəffaf qiymət təklifi hazırlayırıq. Gizli ödənişlər yoxdur.',
  },
  {
    id: 4,
    question: 'Layihə başladıqdan sonra tələblər dəyişə bilərmi?',
    answer:
      'Bəli, dəyişikliklər mümkündür. Kiçik dəyişikliklər əlavə xərc tələb etmir. Əsaslı dəyişikliklər üçün yeni qiymət razılaşdırılır. Bütün prosesdə şəffaf ünsiyyəti özəl tutururq.',
  },
  {
    id: 5,
    question: 'Buraxılışdan sonra texniki dəstək varmı?',
    answer:
      'Hər layihəyə 1 illik pulsuz texniki dəstək daxildir. Bu müddətdə kiçik səhvlər, yeniləmələr və sorğulara 24 saat ərzində cavab veririk. Uzunmüddətli dəstək üçün ayrıca paketlər təklif edirik.',
  },
  {
    id: 6,
    question: 'Domain adı və hosting məsələsini siz həll edirsinizmi?',
    answer:
      'Bəli, domain qeydiyyatı və hosting seçimində tam yardım göstəririk. Sizin üçün ən uyğun hosting planını tövsiyə edir, qurulumu həyata keçiririk. İstəsəniz, bu xidmətləri bizdən davamlı olaraq ala bilərsiniz.',
  },
  {
    id: 7,
    question: 'Mövcud saytımı yenidən qurmaq mümkündürmü?',
    answer:
      'Əlbəttə. Köhnəlmiş saytların tam yenidən dizaynı və hazırlanması xidmətlərini göstəririk. Əvvəlki saytınızdakı kontent, SEO dəyərləri və digər vacib elementləri qoruyaraq müasir platforma köçürürük.',
  },
  {
    id: 8,
    question: 'Siz yalnız Bakı şirkətləri ilə işləyirsinizmi?',
    answer:
      'Xeyr, biz Azərbaycan daxilindəki bütün şəhərlərdən, həmçinin xarici ölkələrdən müştərilərlə uzaqdan işləyirik. Video zəng, e-poçt və messencer vasitəsilə rahat ünsiyyət qururuq.',
  },
  {
    id: 9,
    question: 'Saytımın mobil cihazlarda düzgün görünməsini necə təmin edirsiniz?',
    answer:
      'Biz hər layihəni "mobil-first" yanaşması ilə hazırlayırıq. Bu o deməkdir ki, dizayn ilk növbədə mobil ekranlar üçün optimallaşdırılır, sonra böyük ekranlara uyğunlaşdırılır. Bütün cihazlarda sınaqdan keçirilir.',
  },
  {
    id: 10,
    question: 'SEO xidməti ayrıca ödənişlidirmi?',
    answer:
      'Bütün hazırladığımız saytlara əsas SEO optimallaşdırması daxildir: sürətli yüklənmə, semantik HTML, meta etiketlər, Open Graph. Davamlı SEO kampaniyası və açar söz strategiyası isə ayrıca xidmət kimi təklif olunur.',
  },
  {
    id: 11,
    question: 'Ödəniş şərtləri necədir?',
    answer:
      'Adətən ödəniş iki hissəyə bölünür: layihə başlanmazdan əvvəl 50%, buraxılışda isə qalan 50%. Böyük layihələr üçün aylıq hissə-hissə ödəniş planı da razılaşdırıla bilər.',
  },
  {
    id: 12,
    question: 'Layihə prosesinin hansı mərhələlərindən ibarətdir?',
    answer:
      'Prosesimiz 4 mərhələdən ibarətdir: Kəşf (biznesinizi tanıyırıq), Dizayn (sxemlər və vizual hazırlanır), İnkişaf (kod yazılır, sınaqlar keçirilir) və Buraxılış & Dəstək (sayt yayımlanır, bizdən dəstək davam edir).',
  },
];

const categories = [
  { label: 'Hamısı', value: 'all' },
  { label: 'Proses', value: 'proses' },
  { label: 'Qiymətlər', value: 'qiymət' },
  { label: 'Texniki', value: 'texniki' },
];

function FaqItem({ item, isOpen, onToggle }: {
  item: typeof FAQ_ITEMS[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-brand-blue-light/30 transition-colors duration-200"
      >
        <span className="font-heading font-600 text-brand-dark text-lg pr-4">
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
            <div className="px-6 pb-6 text-brand-gray leading-relaxed">
              {item.answer}
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqPage() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-blue via-brand-blue-dark to-[#0f3d7a] pt-24 sm:pt-32 pb-12 sm:pb-20">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-medium px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
              Tez-tez Verilən Suallar
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-700 text-white mb-6 leading-tight">
              Suallarınıza
              <span className="text-brand-orange"> Cavablar</span>
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed">
              Xidmətlərimiz, proses və qiymətlərimiz barədə ən çox sorulan suallara cavab tapmaq üçün aşağıya baxın.
              Sualınız yoxdursa, bizimlə birbaşa əlaqə saxlayın.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ List */}
      <section className="py-12 sm:py-16 md:py-20">
        <Container>
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

      {/* CTA */}
      <section className="py-16 bg-brand-dark">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-heading font-700 text-white mb-4">
              Cavabını tapmadınız?
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              Sualınızı bilavasitə bizə göndərin. 24 saat ərzində cavab veririk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-orange text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors duration-200"
              >
                Bizimlə Əlaqə
              </Link>
              <Link
                href="/plans"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors duration-200"
              >
                Paketlərə Bax
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
