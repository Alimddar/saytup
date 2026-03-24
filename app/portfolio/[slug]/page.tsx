import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Container from '@/components/layout/Container';
import ScrollReveal from '@/components/shared/ScrollReveal';
import { PROJECTS } from '@/lib/constants';
import { PROJECT_IMAGES } from '@/lib/projectImages';

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const idx = PROJECTS.findIndex((p) => p.slug === slug);
  if (idx === -1) notFound();
  const project = PROJECTS[idx];
  const prev = idx > 0 ? PROJECTS[idx - 1] : null;
  const next = idx < PROJECTS.length - 1 ? PROJECTS[idx + 1] : null;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 min-h-[300px] sm:min-h-[420px] flex items-end overflow-hidden">
        {/* Background image */}
        <Image
          src={PROJECT_IMAGES[project.slug] ?? project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark gradient so text is readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/50 to-brand-dark/30" />
        <Container className="relative z-10 w-full">
          <div className="text-white flex flex-col items-start gap-4">
            {/* Back link — always its own row */}
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-body transition-colors">
              <ArrowLeft className="w-4 h-4" /> Portfolioya Qayıt
            </Link>

            {/* Category badge */}
            <Badge className="bg-brand-orange text-white border-0">{project.category}</Badge>

            {/* Title */}
            <h1 className="text-3xl sm:text-5xl font-heading font-bold leading-tight">{project.title}</h1>

            {/* Description */}
            <p className="text-white/80 font-body text-base sm:text-lg max-w-xl">{project.description}</p>

            {/* Tags + optional live URL */}
            <div className="flex flex-wrap items-center gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="bg-white/20 text-white text-xs font-body px-3 py-1 rounded-full">{tag}</span>
              ))}
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-white text-brand-blue text-xs font-body font-medium px-3 py-1 rounded-full hover:bg-brand-blue hover:text-white transition-colors duration-200"
                >
                  <ExternalLink className="w-3 h-3" /> Sayta Bax
                </a>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Details */}
      <section className="py-12 sm:py-16 md:py-20 bg-brand-light">
        <Container>
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <h2 className="text-2xl font-heading font-semibold text-brand-dark mb-4">Layihə Haqqında</h2>
              <p className="text-brand-gray font-body leading-relaxed mb-12">{project.fullDescription}</p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
              {[
                { label: 'Problem', content: project.challenge, color: 'bg-red-50 border-red-100', accent: 'text-red-500' },
                { label: 'Həll', content: project.solution, color: 'bg-brand-blue-light border-brand-blue/10', accent: 'text-brand-blue' },
                { label: 'Nəticə', content: project.result, color: 'bg-green-50 border-green-100', accent: 'text-green-600' },
              ].map((item, i) => (
                <ScrollReveal key={item.label} delay={i * 0.1} className="h-full">
                  <div className={`rounded-2xl p-5 border h-full flex flex-col gap-2 ${item.color}`}>
                    <span className={`text-xs font-heading font-bold uppercase tracking-wider ${item.accent}`}>{item.label}</span>
                    <p className="text-sm text-brand-gray font-body leading-relaxed flex-1">{item.content}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-8 border-t border-brand-gray/20">
              {prev ? (
                <Link href={`/portfolio/${prev.slug}`} className="flex items-center gap-2 text-brand-blue font-body font-medium hover:gap-3 transition-all">
                  <ArrowLeft className="w-4 h-4" /> {prev.title}
                </Link>
              ) : <div />}
              {next ? (
                <Link href={`/portfolio/${next.slug}`} className="flex items-center gap-2 text-brand-blue font-body font-medium hover:gap-3 transition-all">
                  {next.title} <ArrowRight className="w-4 h-4" />
                </Link>
              ) : <div />}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-dark text-center">
        <Container>
          <h2 className="text-2xl font-heading font-semibold text-white mb-4">Bəyəndiniz? Öz layihənizə başlayın.</h2>
          <Link href="/contact">
            <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white font-body mt-4 px-8 py-3 h-auto">
              Birlikdə İşləyək
            </Button>
          </Link>
        </Container>
      </section>
    </>
  );
}
