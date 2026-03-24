import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/layout/Container';
import SectionHeading from '@/components/shared/SectionHeading';
import ProjectCard from '@/components/shared/ProjectCard';
import ScrollReveal from '@/components/shared/ScrollReveal';
import { PROJECTS } from '@/lib/constants';

export default function Portfolio() {
  const featuredProjects = PROJECTS.slice(0, 4);

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-brand-light">
      <Container>
        <SectionHeading
          title="Son İşlərimiz"
          subtitle="Qürur duyduğumuz layihələr"
          className="mb-14"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1} className="h-full">
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-brand-blue font-body font-medium hover:gap-3 transition-all duration-200"
          >
            Bütün Layihələrə Bax <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
