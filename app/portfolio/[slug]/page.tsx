import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Container from '@/components/layout/Container';
import ScrollReveal from '@/components/shared/ScrollReveal';
import ProjectGalleryCarousel from '@/components/shared/ProjectGalleryCarousel';
import JsonLd from '@/components/shared/JsonLd';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import { PROJECTS } from '@/lib/constants';
import { generatePageMetadata, SITE_URL } from '@/lib/seo';

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};
  return generatePageMetadata({
    title: `${project.title} Layihəsi | Saytup.digital Portfolio`,
    description: `${project.description} Saytup.digital tərəfindən hazırlanmış veb sayt layihəsi. Azərbaycanda peşəkar veb inkişaf.`,
    keywords: [
      `${project.title} layihəsi`, 'veb tətbiq nümunəsi', 'sayt case study',
      ...project.tags, 'Azərbaycan',
    ],
    path: `/portfolio/${project.slug}`,
    ogImage: project.image,
  });
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const idx = PROJECTS.findIndex((p) => p.slug === slug);
  if (idx === -1) notFound();
  const project = PROJECTS[idx];
  const prev = idx > 0 ? PROJECTS[idx - 1] : null;
  const next = idx < PROJECTS.length - 1 ? PROJECTS[idx + 1] : null;

  const creativeWorkSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    creator: { '@id': 'https://saytup.digital/#organization' },
    image: project.image,
    url: `${SITE_URL}/portfolio/${project.slug}`,
    keywords: project.tags.join(', '),
    inLanguage: 'az',
  };

  return (
    <>
      <JsonLd data={creativeWorkSchema} />

      {/* Hero */}
      <section
        className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 min-h-[300px] sm:min-h-[420px] flex items-end overflow-hidden"
        aria-labelledby="project-hero-heading"
      >
        <Image
          src={project.image}
          alt={`${project.title} — Saytup.digital tərəfindən hazırlanmış veb sayt layihəsi, Azərbaycan`}
          fill
          className="object-cover scale-105 blur-[3px]"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/50 to-brand-dark/30" />
        <Container className="relative z-10 w-full">
          <div className="text-white flex flex-col items-start gap-4">
            <Breadcrumbs
              items={[
                { label: 'Portfolio', href: '/portfolio' },
                { label: project.title, href: `/portfolio/${project.slug}` },
              ]}
            />

            <Badge className="bg-brand-orange text-white border-0">{project.category}</Badge>

            <h1 id="project-hero-heading" className="text-3xl sm:text-5xl font-heading font-bold leading-tight">
              {project.title}
            </h1>

            <p className="text-white/80 font-body text-base sm:text-lg max-w-xl">{project.description}</p>

            <div className="inline-flex max-w-full flex-wrap items-center gap-x-2 gap-y-1 rounded-full bg-white/10 px-4 py-2 text-sm font-body text-white/80">
              <span className="text-white/60">Sifarişçi:</span>
              <span className="font-medium text-white">{project.client}</span>
            </div>

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
      <article className="py-12 sm:py-16 md:py-20 bg-brand-light">
        <Container>
          <div className="mx-auto max-w-6xl">

            <ScrollReveal>
              <ProjectGalleryCarousel images={project.images} title={project.title} />
            </ScrollReveal>
          </div>

          <div className="max-w-3xl mx-auto">
            <ScrollReveal delay={0.1}>
              <div className="mt-10">
                <h2 className="text-2xl font-heading font-semibold text-brand-dark mb-4">Layihə Haqqında</h2>
                <p className="text-brand-gray font-body leading-relaxed">{project.fullDescription}</p>
              </div>
            </ScrollReveal>

            {(prev || next) && (
              <div className="flex justify-between items-center pt-12 mt-12 border-t border-brand-gray/20">
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
            )}
          </div>
        </Container>
      </article>

      {/* CTA */}
      <section className="py-16 bg-brand-dark text-center">
        <Container>
          <h2 className="text-2xl font-heading font-semibold text-white mb-4">
            Bəyəndiniz? Öz saytınızı hazırlatmağa başlayın.
          </h2>
          <Link href="/contact">
            <Button className="bg-brand-orange hover:bg-brand-orange/90 text-white font-body mt-4 px-8 py-3 h-auto">
              Sayt Sifariş Edin
            </Button>
          </Link>
        </Container>
      </section>
    </>
  );
}
