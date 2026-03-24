import { Check, X, Zap, Star, Crown } from 'lucide-react';
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
    name: 'Başlanğıc',
    subtitle: 'Kiçik bizneslər üçün',
    icon: Zap,
    price: '800',
    currency: '₼',
    period: 'layihə başına',
    color: 'from-slate-500 to-slate-700',
    accentColor: 'text-slate-600',
    badgeColor: 'bg-slate-100 text-slate-700',
    borderColor: 'border-gray-200',
    popular: false,
    features: [
      { text: '5 səhifəyə qədər', included: true },
      { text: 'Responsiv (mobil uyğun) dizayn', included: true },
      { text: 'Əsas SEO optimallaşdırması', included: true },
      { text: 'Əlaqə forması', included: true },
      { text: 'Sosial media linklər', included: true },
      { text: '3 aylıq pulsuz dəstək', included: true },
      { text: 'E-ticarət funksionallığı', included: false },
      { text: 'Xüsusi animasiyalar', included: false },
      { text: 'CMS inteqrasiyası', included: false },
      { text: 'Xüsusi API inteqrasiyası', included: false },
    ],
    cta: 'Başla',
    ctaHref: '/contact',
  },
  {
    id: 'standard',
    name: 'Standart',
    subtitle: 'Böyüməkdə olan bizneslər üçün',
    icon: Star,
    price: '2,000',
    currency: '₼',
    period: 'layihə başına',
    color: 'from-brand-blue to-brand-blue-dark',
    accentColor: 'text-brand-blue',
    badgeColor: 'bg-brand-blue-light text-brand-blue',
    borderColor: 'border-brand-blue',
    popular: true,
    features: [
      { text: '15 səhifəyə qədər', included: true },
      { text: 'Responsiv dizayn + animasiyalar', included: true },
      { text: 'Tam SEO paketi', included: true },
      { text: 'Əlaqə forması + xəritə', included: true },
      { text: 'Sosial media inteqrasiyası', included: true },
      { text: '6 aylıq pulsuz dəstək', included: true },
      { text: 'E-ticarət (50 məhsula qədər)', included: true },
      { text: 'Xüsusi animasiyalar', included: true },
      { text: 'CMS inteqrasiyası', included: true },
      { text: 'Xüsusi API inteqrasiyası', included: false },
    ],
    cta: 'Ətraflı Müzakirə Et',
    ctaHref: '/contact',
  },
  {
    id: 'premium',
    name: 'Premium',
    subtitle: 'Böyük layihələr üçün',
    icon: Crown,
    price: '5,000',
    currency: '₼',
    period: 'layihə başına',
    color: 'from-orange-500 to-orange-700',
    accentColor: 'text-brand-orange',
    badgeColor: 'bg-brand-orange-light text-brand-orange',
    borderColor: 'border-orange-200',
    popular: false,
    features: [
      { text: 'Limitsiz səhifə', included: true },
      { text: 'Premium dizayn + mikro animasiyalar', included: true },
      { text: 'Tam SEO + performans auditi', included: true },
      { text: 'Çox kanallı əlaqə sistemi', included: true },
      { text: 'Tam sosial media ekosistemi', included: true },
      { text: '12 aylıq pulsuz dəstək', included: true },
      { text: 'Tam e-ticarət platforması', included: true },
      { text: 'Premium animasiyalar', included: true },
      { text: 'Fərdi CMS sistemi', included: true },
      { text: 'Xüsusi API inteqrasiyası', included: true },
    ],
    cta: 'Layihəni Müzakirə Et',
    ctaHref: '/contact',
  },
];

const COMPARISON_FEATURES = [
  { name: 'Səhifə sayı', starter: '5-ə qədər', standard: '15-ə qədər', premium: 'Limitsiz' },
  { name: 'Dizayn', starter: 'Standart', standard: 'Xüsusi', premium: 'Premium' },
  { name: 'Animasiyalar', starter: '—', standard: 'Əsas', premium: 'Tam' },
  { name: 'SEO', starter: 'Əsas', standard: 'Tam', premium: 'Tam + Audit' },
  { name: 'E-ticarət', starter: '—', standard: '50 məhsul', premium: 'Limitsiz' },
  { name: 'CMS', starter: '—', standard: 'Standart', premium: 'Fərdi' },
  { name: 'API inteqrasiyası', starter: '—', standard: '—', premium: 'Tam' },
  { name: 'Dəstək müddəti', starter: '3 ay', standard: '6 ay', premium: '12 ay' },
  { name: 'Çatdırılma müddəti', starter: '2–3 həftə', standard: '4–8 həftə', premium: '8–16 həftə' },
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
              Hər ölçüdə bizneslər üçün şəffaf qiymətlər. Gizli ödəniş yoxdur.
              Qərar vermədən əvvəl pulsuz konsultasiya üçün bizimlə əlaqə saxlayın.
            </p>
          </div>
        </Container>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 sm:py-16 md:py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {PLANS.map((plan) => {
              const Icon = plan.icon;
              return (
                <div
                  key={plan.id}
                  className={`relative rounded-3xl border-2 bg-white overflow-hidden flex flex-col transition-shadow duration-300 hover:shadow-2xl ${
                    plan.popular
                      ? 'border-brand-blue shadow-xl shadow-brand-blue/20 scale-105'
                      : plan.borderColor
                  }`}
                >
                  {plan.popular && (
                    <div className="bg-brand-blue text-white text-sm font-semibold text-center py-2">
                      Ən Çox Seçilən
                    </div>
                  )}

                  {/* Header */}
                  <div className={`bg-gradient-to-br ${plan.color} p-6 sm:p-8 text-white`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-heading font-700 text-xl">{plan.name}</h3>
                        <p className="text-white/70 text-sm">{plan.subtitle}</p>
                      </div>
                    </div>
                    <div className="flex items-end gap-1">
                      <span className="text-4xl font-heading font-700">
                        {plan.currency}{plan.price}
                      </span>
                    </div>
                    <p className="text-white/70 text-sm mt-1">{plan.period}</p>
                  </div>

                  {/* Features */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col">
                    <ul className="space-y-3 flex-1">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          {feature.included ? (
                            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-3 h-3 text-green-600" />
                            </div>
                          ) : (
                            <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center shrink-0 mt-0.5">
                              <X className="w-3 h-3 text-gray-400" />
                            </div>
                          )}
                          <span
                            className={`text-sm ${
                              feature.included ? 'text-brand-dark' : 'text-gray-400'
                            }`}
                          >
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>

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
            * Göstərilən qiymətlər təxminidir. Yekun qiymət layihənin tələblərinə əsasən müəyyənləşdirilir.
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
                    <th className="py-4 px-6 font-semibold text-center">Başlanğıc</th>
                    <th className="py-4 px-6 font-semibold text-center bg-brand-blue">
                      <span className="flex flex-col items-center gap-1">
                        Standart
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
