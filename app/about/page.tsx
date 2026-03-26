import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
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
    title: 'Nəticəyə Fokuslanırıq',
    description: 'Hər layihəyə sadəcə dizayn işi kimi yox, etibar, müraciət və satış problemi kimi baxırıq. Verdiyimiz qərarlar real nəticə gətirməlidir.',
    gradient: 'from-brand-blue to-brand-blue-dark',
    Icon: Award,
  },
  {
    title: 'Prosesi Aydın Saxlayırıq',
    description: 'Müddət, görülən iş və növbəti addımlar hər mərhələdə aydın olur. Siz layihənizin hansı vəziyyətdə olduğunu hər zaman dəqiq bilirsiniz.',
    gradient: 'from-brand-orange to-orange-600',
    Icon: Eye,
  },
  {
    title: 'Buraxılışdan Sonra da Yanınızdayıq',
    description: 'Saytı təhvil verib geri çəkilmirik. Dəstək, optimizasiya və inkişaf ilə layihənizin uzunmüddətli işlək qalmasına kömək edirik.',
    gradient: 'from-green-500 to-emerald-600',
    Icon: Handshake,
  },
];

const team = [
  {
    name: 'Alimdar Musayev',
    role: 'Backend Developer & AI/ML Engineer',
    bio: 'Server tərəfi arxitektura və süni intellekt həllərinin kəsişməsində işləyir. API dizaynından model inteqrasiyasına qədər — sistemin düzgün düşünməsini təmin edir.',
    image: 'https://i.ibb.co/cKhQvPTw/image.jpg',
  },
  {
    name: 'Muhammedali Aliyev',
    role: 'Backend Developer',
    bio: 'Performanslı, miqyaslana bilən backend sistemlər qurur. Mürəkkəb iş məntiqini sadə, etibarlı kod xəttinə çevirməyi bacarır.',
    image: 'https://i.ibb.co/5hFv3vnF/image.jpg',
  },
  {
    name: 'Tunar Novruzzade',
    role: 'Frontend Developer & UI/UX Designer',
    bio: 'İstifadəçinin gördüyü hər pikseldən məsuldur. Dizayn düşüncəsi ilə frontend texnikasını birləşdirib həm gözəl, həm də işlək interfeyslər yaradır.',
    image: 'https://i.ibb.co/JRYhgXcD/image.jpg',
  },
];

const differentiators = [
  { title: 'Yerli Bazar Bilikləri', description: 'Azərbaycan biznes mühitini, istehlakçı davranışını və rəqəmsal ehtiyacları dərindən bilirik. Yerli kontekstə uyğun həllər təqdim edirik.' },
  { title: 'Sənaye Standartı Texnologiya', description: 'React, Next.js, TypeScript — dünyanın aparıcı texnologiya şirkətlərinin etibar etdiyi stack. Miqyaslana bilən, sürətli və təhlükəsiz quruluş.' },
  { title: 'Şəffaf Qiymət Siyasəti', description: 'Gizli ödənişlər yoxdur. Layihə başlamazdan əvvəl tam məbləği razılaşırıq — büdcəniz həmişə nəzarətinizdə olur.' },
  { title: 'Nəticəyönümlü Yanaşma', description: 'Sadəcə sayt deyil, biznesinizin rəqəmsal motoru qururuq. Hər qərar istifadəçi təcrübəsi və konversiya məntiqinə əsaslanır.' },
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
              Saytup kiçik və orta bizneslər üçün etibar yaradan, peşəkar görünən və real nəticə gətirən rəqəmsal həllər hazırlayan veb inkişaf studiyasıdır. Strategiyadan dizayna, inkişafdan buraxılışa qədər bütün prosesi idarə edirik ki, siz biznesinizi böyütməyə fokuslana biləsiniz.
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
              <ScrollReveal key={value.title} delay={index * 0.1} className="h-full">
                <div className="bg-white rounded-2xl p-6 shadow-sm h-full flex flex-col">
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
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-brand-blue-light">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
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
          <SectionHeading title="Niyə Bizi Seçməlisiniz" subtitle="Saytup ilə işləməyi fərqləndirən nədir" className="mb-14" />
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
            <p className="text-white/60 font-body mb-8 max-w-md mx-auto">İdeyanızı işlək rəqəmsal həllə çevirək.</p>
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
