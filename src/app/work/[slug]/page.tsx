import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import ProjectArtwork from '@/components/work/ProjectArtwork';
import { getPortfolioProject, portfolioProjects } from '@/lib/portfolioProjects';
import { siteConfig } from '@/lib/siteConfig';

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getPortfolioProject(slug);

  if (!project) return { title: 'Project not found' };

  return {
    title: `${project.title} — ${project.type}`,
    description: project.description,
    openGraph: {
      title: `${project.title} — ${project.type}`,
      description: project.description,
      url: `${siteConfig.url}/work/${project.slug}`,
    },
  };
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getPortfolioProject(slug);
  if (!project) notFound();

  const projectIndex = portfolioProjects.findIndex((item) => item.slug === project.slug);
  const nextProject = portfolioProjects[(projectIndex + 1) % portfolioProjects.length];

  return (
    <main className={`cx-case cx-case--${project.accent}`}>
      <header className="cx-case__hero">
        <div className="cx-case__eyebrow">
          <Link href="/#work"><ArrowLeft aria-hidden="true" /> Selected work</Link>
          <span>{project.context} · {project.year}</span>
        </div>
        <div className="cx-case__title">
          <span>{project.index} / 03</span>
          <h1>{project.title}<sup>®</sup></h1>
          <p>{project.type}</p>
        </div>
        <p className="cx-case__lead">{project.description}</p>
      </header>

      <section className="cx-case__art" aria-label={`${project.title} visual system`}>
        <ProjectArtwork accent={project.accent} index={projectIndex} />
      </section>

      <section className="cx-case__brief">
        <div>
          <span>Role</span>
          <p>{project.role}</p>
        </div>
        <div>
          <span>Timeline</span>
          <p>{project.duration}</p>
        </div>
        <div>
          <span>Discipline</span>
          <p>{project.tags.join(' · ')}</p>
        </div>
        <div>
          <span>Status</span>
          <p>Interactive prototype</p>
        </div>
      </section>

      <section className="cx-case__narrative" aria-labelledby="challenge-title">
        <div className="cx-case__label"><span>01</span> The challenge</div>
        <div>
          <h2 id="challenge-title">Complexity without<br /><em>confusion.</em></h2>
          <p>{project.challenge}</p>
        </div>
      </section>

      <section className="cx-case__metrics" aria-label="Prototype metrics">
        {project.metrics.map((metric) => (
          <div key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </section>

      <section className="cx-case__idea" aria-labelledby="idea-title">
        <div className="cx-case__idea-orbit" aria-hidden="true"><span /><i /></div>
        <div className="cx-case__label"><span>02</span> The idea</div>
        <div>
          <h2 id="idea-title">A system that<br />teaches itself.</h2>
          <p>{project.idea}</p>
        </div>
      </section>

      <section className="cx-case__principles" aria-labelledby="principles-title">
        <div className="cx-case__label"><span>03</span> Design principles</div>
        <h2 id="principles-title">Every decision<br />earns its place.</h2>
        <div className="cx-case__principle-list">
          {project.principles.map((principle) => (
            <article key={principle.number}>
              <span>{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cx-case__system" aria-labelledby="system-title">
        <div>
          <div className="cx-case__label"><span>04</span> System architecture</div>
          <h2 id="system-title">Designed as a<br />living system.</h2>
          <p>{project.outcome}</p>
        </div>
        <ol>
          {project.system.map((item, index) => (
            <li key={item}><span>0{index + 1}</span>{item}<i /></li>
          ))}
        </ol>
      </section>

      <section className="cx-case__next">
        <p>Next case study</p>
        <Link href={`/work/${nextProject.slug}`}>
          <span>{nextProject.title}</span>
          <ArrowUpRight aria-hidden="true" />
        </Link>
        <small>{nextProject.type}</small>
      </section>
    </main>
  );
}
