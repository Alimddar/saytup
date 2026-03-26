import { Zap, Star } from 'lucide-react';
import Container from '@/components/layout/Container';
import Link from 'next/link';
import type { Metadata } from 'next';
import PlanCards from '@/components/sections/PlanCards';

export const metadata: Metadata = {
  title: 'Paketlər | Saytup.az — Veb İnkişaf Studiyası',
  description: 'Saytup.az-ın qiymət paketləri. Başlanğıc, Standart və Premium planlar — biznesinizin ehtiyaclarına uyğun seçin.',
};

const PLANS = [
  {
    id: 'starter',
    name: 'Small',
    subtitle: 'Yeni başlayan bizneslər üçün',
    icon: 'Zap',
    originalPrice: '450',
    price: '225',
    currency: '₼',
    period: 'layihə başına',
    discount: '50%',
    color: 'from-slate-500 to-slate-700',
    borderColor: 'border-gray-200',
    popular: false,
    features: [
      'Responsiv dizayn (Mobil uyumlu)',
      'Yarı xüsusi dizayn',
      '2 dəfə düzəliş paketi',
      '1–3 səhifə',
      'Əlaqə forması',
      'SSL sertifikatı',
      'Google Maps inteqrasiyası',
      '1 il .az domen',
      '1 il hosting',
      'SEO inteqrasiyası',
      'WhatsApp düyməsi',
      '1 ay texniki dəstək',
    ],
    suitableFor: [
      'Yeni fəaliyyətə başlayan bizneslər üçün',
      'Yalnız 1 məhsul və ya 1 xidmət təqdim edənlər üçün',
      'Müştərilərin sizi asan tapmasını istəyənlər üçün',
      'Sadə, sürətli və büdcəyə uyğun sayt axtaranlar üçün',
    ],
    cta: 'Başla',
    ctaHref: '/contact',
  },
  {
    id: 'medium',
    name: 'Medium',
    subtitle: 'Böyüməkdə olan bizneslər üçün',
    icon: 'Star',
    originalPrice: '900',
    price: '450',
    currency: '₼',
    period: 'layihə başına',
    discount: '50%',
    color: 'from-brand-blue to-brand-blue-dark',
    borderColor: 'border-brand-blue',
    popular: true,
    features: [
      'Responsiv dizayn (Mobil uyumlu)',
      'Xüsusi dizayn',
      '3 dəfə düzəliş paketi',
      '5–7 səhifə',
      '1 il .az domen',
      '1 il hosting',
      'Google Maps inteqrasiyası',
      'SEO inteqrasiyası',
      'Google Analytics qurulumu',
      'Əlaqə forması',
      'SSL sertifikatı',
      'WhatsApp düyməsi',
      'Bloq bölməsi',
      'Sosial media inteqrasiyası',
      'Korporativ e-poçt (1 ədəd)',
      '2 ay texniki dəstək',
    ],
    suitableFor: [
      'Artıq fəaliyyətdə olan bizneslər üçün',
      'Bir neçə məhsul və ya xidmət təqdim edənlər üçün',
      'Daha geniş və funksional sayt istəyənlər üçün',
      'Müştəri axınını artırmaq istəyənlər üçün',
      'Peşəkar görünüşə önəm verənlər üçün',
    ],
    cta: 'Ətraflı Müzakirə Et',
    ctaHref: '/contact',
  },
  {
    id: 'premium',
    name: 'Premium',
    subtitle: 'Böyük layihələr üçün',
    icon: 'Crown',
    originalPrice: '1,250',
    price: '625',
    currency: '₼',
    period: 'layihə başına',
    discount: '50%',
    color: 'from-orange-500 to-orange-700',
    borderColor: 'border-orange-200',
    popular: false,
    features: [
      'Responsiv dizayn (Mobil uyumlu)',
      'Xüsusi dizayn',
      '4 dəfə düzəliş paketi',
      '7+ səhifə',
      '1 il .az domen',
      '1 il hosting',
      'Google Maps inteqrasiyası',
      'SEO inteqrasiyası',
      'Google Analytics qurulumu',
      'Əlaqə forması',
      'SSL sertifikatı',
      'WhatsApp düyməsi',
      'Sosial media inteqrasiyası',
      'Çoxlu dil dəstəyi',
      'Rezervasiya / sifariş sistemi',
      'Performans optimizasiyası',
      '3 ay texniki dəstək',
      'Google My Business quraşdırma',
      'Korporativ e-poçt (2 ədəd)',
    ],
    suitableFor: [
      'Orta və böyük bizneslər üçün',
      'Çoxsaylı məhsul və ya xidmət təqdim edənlər üçün',
      'Online sifariş və ya rezervasiya sistemi istəyənlər üçün',
      'Bir neçə dildə fəaliyyət göstərən və ya genişlənmək istəyənlər üçün',
      'Yüksək performans və peşəkar sayt tələb edənlər üçün',
      'Saytın davamlı işləməsi və dəstək istəyənlər üçün',
    ],
    cta: 'Layihəni Müzakirə Et',
    ctaHref: '/contact',
  },
];

const COMPARISON_FEATURES = [
  { name: 'Səhifə sayı', starter: '1–3', standard: '5–7', premium: '7+' },
  { name: 'Dizayn', starter: 'Yarı xüsusi', standard: 'Xüsusi', premium: 'Xüsusi' },
  { name: 'Düzəliş paketi', starter: '2 dəfə', standard: '3 dəfə', premium: '4 dəfə' },
  { name: 'SEO', starter: 'Var', standard: 'Var', premium: 'Var' },
  { name: 'Google Analytics', starter: '—', standard: 'Var', premium: 'Var' },
  { name: 'Bloq bölməsi', starter: '—', standard: 'Var', premium: 'Var' },
  { name: 'Çoxlu dil', starter: '—', standard: '—', premium: 'Var' },
  { name: 'Rezervasiya sistemi', starter: '—', standard: '—', premium: 'Var' },
  { name: 'Korporativ e-poçt', starter: '—', standard: '1 ədəd', premium: '2 ədəd' },
  { name: 'Texniki dəstək', starter: '1 ay', standard: '2 ay', premium: '3 ay' },
  { name: 'Domen + Hosting', starter: '1 il', standard: '1 il', premium: '1 il' },
];

export default function PlansPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-blue via-brand-blue-dark to-[#0f3d7a] pt-24 sm:pt-32 pb-12 sm:pb-20">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-medium px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
              Qiymət Paketləri
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-700 text-white mb-6 leading-tight">
              Biznesinizə Uyğun
              <span className="text-brand-orange"> Paketi Seçin</span>
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed">
              Biznesinizin mərhələsinə uyğun paket seçin. Hər paket real nəticəyə yönəlmiş, dəqiq müəyyənləşdirilmiş xidmətləri əhatə edir.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-sm font-semibold px-5 py-2.5 rounded-full">
              🎉 Bütün paketlərdə 50% endirim — məhdud müddətlidir!
            </div>
          </div>
        </Container>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 sm:py-16 md:py-20">
        <Container>
          <PlanCards plans={PLANS} />

          <p className="text-center text-brand-gray text-sm mt-8">
            * Endirim müddəti məhduddur. Qiymətlər layihənin tələblərinə əsasən dəyişə bilər.
          </p>
        </Container>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-700 text-brand-dark mb-4">
                Paketləri Müqayisə Edin
              </h2>
              <p className="text-brand-gray">
                Hansı paketin sizin üçün uyğun olduğunu aşağıdakı cədvəldən müəyyənləşdirin.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-brand-dark text-white">
                    <th className="text-left py-4 px-6 font-semibold rounded-tl-2xl">Xüsusiyyət</th>
                    <th className="py-4 px-6 font-semibold text-center">Small</th>
                    <th className="py-4 px-6 font-semibold text-center bg-brand-blue">
                      <span className="flex flex-col items-center gap-1">
                        Medium
                        <span className="text-xs font-normal bg-brand-orange px-2 py-0.5 rounded-full">
                          Populyar
                        </span>
                      </span>
                    </th>
                    <th className="py-4 px-6 font-semibold text-center rounded-tr-2xl">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_FEATURES.map((row, idx) => (
                    <tr
                      key={idx}
                      className={`border-t border-gray-100 ${
                        idx % 2 === 0 ? 'bg-white' : 'bg-brand-light/50'
                      }`}
                    >
                      <td className="py-4 px-6 font-medium text-brand-dark">{row.name}</td>
                      <td className="py-4 px-6 text-center text-brand-gray">{row.starter}</td>
                      <td className="py-4 px-6 text-center text-brand-blue font-semibold bg-brand-blue-light/30">
                        {row.standard}
                      </td>
                      <td className="py-4 px-6 text-center text-brand-orange font-semibold">{row.premium}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      {/* Note + FAQ callout */}
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-brand-blue-light rounded-3xl p-8">
              <div className="w-12 h-12 rounded-2xl bg-brand-blue flex items-center justify-center mb-5">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-heading font-700 text-xl text-brand-dark mb-3">
                Fərdi Təklif Lazımdır?
              </h3>
              <p className="text-brand-gray text-sm leading-relaxed mb-5">
                Layihəniz standart paketlərə sığmırsa, narahat olmayın. Tələblərinizi dinləyib sizə xüsusi qiymət təklifi hazırlayırıq.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-brand-blue font-semibold text-sm hover:gap-3 transition-all duration-200"
              >
                Pulsuz Konsultasiya →
              </Link>
            </div>

            <div className="bg-brand-orange-light rounded-3xl p-8">
              <div className="w-12 h-12 rounded-2xl bg-brand-orange flex items-center justify-center mb-5">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-heading font-700 text-xl text-brand-dark mb-3">
                Suallarınız Var?
              </h3>
              <p className="text-brand-gray text-sm leading-relaxed mb-5">
                Paketlər, proseslər və texniki detallar haqqında tez-tez sorulan sualların cavablarını FAQ səhifəmizdə tapa bilərsiniz.
              </p>
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 text-brand-orange font-semibold text-sm hover:gap-3 transition-all duration-200"
              >
                FAQ-a Get →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-dark">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-heading font-700 text-white mb-4">
              Layihənizi Başlatmağa Hazırsınız?
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              Pulsuz konsultasiya üçün bu gün bizimlə əlaqə saxlayın. 24 saat ərzində cavab veririk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-orange text-white font-semibold rounded-xl hover:bg-orange-600 transition-colors duration-200"
              >
                Layihə Başlat
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors duration-200"
              >
                İşlərimizə Bax
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
