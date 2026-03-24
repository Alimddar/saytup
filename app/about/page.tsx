import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, Award, Eye, Handshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Container from '@/components/layout/Container';
import SectionHeading from '@/components/shared/SectionHeading';
import ScrollReveal from '@/components/shared/ScrollReveal';

export const metadata: Metadata = {
  title: 'Haqqımızda',
  description: 'Saytup.az haqqında öyrənin — Bakı, Azərbaycanda qurulan, kiçik bizneslərin güclü onlayn mövcudluq yaratmasına kömək edən veb inkişaf studiyası.',
};

const values = [
  {
    title: 'Keyfiyyət Kəmiyyətdən Üstündür',
    description: 'Daha yaxşı nəticə vermək üçün az layihə götürürük. Hər müştəri tam diqqətimizi alır.',
    gradient: 'from-brand-blue to-brand-blue-dark',
    Icon: Award,
  },
  {
    title: 'Şəffaflıq',
    description: 'Aydın ünsiyyət, heç bir sürpriz, dürüst müddətlər. Layihənizin necə getdiyi həmişə məlum olur.',
    gradient: 'from-brand-orange to-orange-600',
    Icon: Eye,
  },
  {
    title: 'Uzunmüddətli Tərəfdaşlıq',
    description: 'Biz qurmaqla bitiririk — biz sizimlə böyüyürük. Seçdiyiniz paketə uyğun dəstək xidməti ilə yanınızdayıq.',
    gradient: 'from-green-500 to-emerald-600',
    Icon: Handshake,
  },
];

const team = [
  {
    name: 'Elvin Məmmədov',
    role: 'Təsisçi və Baş Proqramçı',
    bio: '7+ illik veb tətbiq hazırlama təcrübəsi. Təmiz kod və əla istifadəçi təcrübəsi ehtirasına sahibdir.',
    initials: 'EM',
    gradient: 'from-brand-blue to-brand-blue-dark',
  },
  {
    name: 'Nigar Həsənova',
    role: 'UI/UX Dizayneri',
    bio: 'Bakı texnologiya startapında keçmiş məhsul dizayneri. Həm gözəl həm de funksional interfeyslər yaradır.',
    initials: 'NH',
    gradient: 'from-purple-500 to-indigo-600',
  },
  {
    name: 'Rəşad Əliyev',
    role: 'Full-Stack Proqramçı',
    bio: 'Frontend bilikləri olan backend mütəxəssisi. Hər şeyin göründüyü qədər yaxşı işlədiyini təmin edir.',
    initials: 'RA',
    gradient: 'from-brand-orange to-red-500',
  },
];

const differentiators = [
  { title: 'Yerli Anlayış', description: 'Azərbaycan bazarını və onun xüsusi ehtiyaclarını bilirik — dil, ödəniş sistemləri, iş mədəniyyəti.' },
  { title: 'Müasir Texnologiya', description: 'React, Next.js, TypeScript — qlobal şirkətlər tərəfindən istifadə olunan alətlər, kiçik biznes qiymətləriylə.' },
  { title: 'Sabit Qiymətli Layihələr', description: 'Saatlıq hesablama sürprizləri yoxdur. Qiyməti əvvəlcədən razılaşırıq və ona sadiq qalırıq.' },
  { title: 'Pulsuz 1 İllik Dəstək', description: 'Buraxılışdan sonra da yanınızdayıq. Səhvlər, yeniləmələr, suallar — 12 ay ərzində daxildir.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-blue to-brand-blue-dark pt-24 sm:pt-32 pb-12 sm:pb-20">
        <Container>
          <div className="text-white max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-6">Saytup Haqqında</h1>
            <p className="text-lg text-white/80 font-body leading-relaxed">
              Saytup.az, Bakı, Azərbaycanda fəaliyyət göstərən bir veb inkişaf studiyasıdır. Kiçik və orta bizneslərin rəqəmsal dünyada güclü yer tutmasına kömək edirik — funksional, sürətli və nəticəyönümlü veb həllərlə.
            </p>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-12 sm:py-16 lg:py-24 bg-brand-light">
        <Container>
          <SectionHeading title="Dəyərlərimiz" subtitle="Hər şeyi idarə edən prinsiplərimiz" className="mb-14" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.gradient} mb-4 flex items-center justify-center`}>
                    <value.Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-heading font-semibold text-brand-dark text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-brand-gray font-body leading-relaxed">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <Container>
          <SectionHeading title="Komandamız" subtitle="Kiçik komanda, böyük nəticələr" className="mb-14" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <ScrollReveal key={member.name} delay={index * 0.1}>
                <div className="text-center">
                  <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-2xl font-heading font-bold text-white">{member.initials}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-brand-dark text-lg">{member.name}</h3>
                  <p className="text-brand-orange text-sm font-body font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-brand-gray font-body leading-relaxed">{member.bio}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 lg:py-24 bg-brand-light">
        <Container>
          <SectionHeading title="Niyə Bizi Seçin" subtitle="Saytup ilə işləməyi fərqləndirən nədir" className="mb-14" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {differentiators.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-6 shadow-sm flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-heading font-semibold text-brand-dark mb-1">{item.title}</h3>
                    <p className="text-sm text-brand-gray font-body leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-dark text-center">
        <Container>
          <ScrollReveal>
            <h2 className="text-3xl font-heading font-semibold text-white mb-4">Layihənizə başlamağa hazırsınız?</h2>
            <p className="text-white/60 font-body mb-8 max-w-md mx-auto">Birlikdə əla bir şey quralım.</p>
            <Link href="/contact">
              <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white font-body font-medium px-10 py-4 h-auto text-base">
                Bizimlə Əlaqə <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
