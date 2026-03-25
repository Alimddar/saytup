import { Check, Zap, Star, Crown } from 'lucide-react';
import Container from '@/components/layout/Container';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Paketlər | Saytup.az — Veb İnkişaf Studiyası',
  description: 'Saytup.az-ın qiymət paketləri. Başlanğıc, Standart və Premium planlar — biznesinizin ehtiyaclarına uyğun seçin.',
};

const PLANS = [
  {
    id: 'starter',
    name: 'Small',
    subtitle: 'Yeni başlayan bizneslər üçün',
    icon: Zap,
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
    icon: Star,
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
      '1 ay pulsuz nəzarət',
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
    icon: Crown,
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
      '2 ay pulsuz nəzarət',
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
  { name: 'Pulsuz nəzarət', starter: '—', standard: '1 ay', premium: '2 ay' },
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto items-start">
            {PLANS.map((plan) => {
              const Icon = plan.icon;
              return (
                <div
                  key={plan.id}
                  className={`relative rounded-3xl border-2 bg-white flex flex-col transition-shadow duration-300 hover:shadow-2xl ${
                    plan.popular
                      ? 'border-brand-blue shadow-xl shadow-brand-blue/20 md:-mt-4 md:mb-4 will-change-transform isolate'
                      : plan.borderColor
                  }`}
                  style={plan.popular ? { transform: 'translateZ(0)' } : undefined}
                >
                  {plan.popular && (
                    <div className="bg-brand-blue text-white text-sm font-semibold text-center py-2 rounded-t-[22px]">
                      Ən Çox Seçilən
                    </div>
                  )}

                  {/* Header */}
                  <div
                    className={`bg-gradient-to-br ${plan.color} p-6 sm:p-8 text-white ${
                      plan.popular ? '' : 'rounded-t-[22px]'
                    }`}
                    style={{ transform: 'translateZ(0)' }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-heading font-700 text-xl">{plan.name}</h3>
                        <p className="text-white/70 text-sm">{plan.subtitle}</p>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="flex items-center gap-3">
                      <span className="text-4xl font-heading font-700">
                        {plan.currency}{plan.price}
                      </span>
                      <div className="flex flex-col">
                        <span className="text-white/50 line-through text-sm">
                          {plan.currency}{plan.originalPrice}
                        </span>
                        <span className="bg-white/20 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                          -{plan.discount}
                        </span>
                      </div>
                    </div>
                    <p className="text-white/70 text-sm mt-1">{plan.period}</p>
                  </div>

                  {/* Features + Suitable For */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col">
                    <ul className="space-y-2.5 flex-1">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-green-600" />
                          </div>
                          <span className="text-sm text-brand-dark">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Who it's for */}
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <p className="text-xs font-semibold text-brand-gray uppercase tracking-wider mb-3">
                        Kimlər üçün uyğundur?
                      </p>
                      <ul className="space-y-1.5">
                        {plan.suitableFor.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-brand-blue mt-1 shrink-0 text-xs">✓</span>
                            <span className="text-xs text-brand-gray">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={plan.ctaHref}
                      className={`mt-8 w-full flex items-center justify-center py-4 px-6 rounded-xl font-semibold transition-all duration-200 ${
                        plan.popular
                          ? 'bg-brand-blue text-white hover:bg-brand-blue-dark'
                          : plan.id === 'premium'
                          ? 'bg-brand-orange text-white hover:bg-orange-600'
                          : 'bg-brand-dark text-white hover:bg-slate-800'
                      }`}
                    >
                      {plan.cta}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

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
