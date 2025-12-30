import type { Metadata } from 'next';
import { siteConfig } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'About',
  description: `Learn how ${siteConfig.name} builds universal flagship systems for portfolio, product, and launch.`,
};

export default function AboutPage() {
  const pillars = [
    {
      title: 'Senior, compact teams',
      description:
        'Strategy, design, and engineering sit in one pod so narrative and execution stay aligned from day one.',
    },
    {
      title: 'Systems with taste',
      description:
        'We pair bold art direction with reusable foundations: tokens, components, and publishing flows that scale.',
    },
    {
      title: 'Transparent momentum',
      description:
        'Weekly demos, shared roadmaps, and instrumentation keep every decision visible through launch and iteration.',
    },
  ];

  return (
    <main className="py-5">
      <div className="studio-container">
        <section className="page-hero">
          <span className="badge-pill bg-opacity-10 bg-primary text-primary">About {siteConfig.name}</span>
          <h1 className="display-5 fw-bold mt-3">Executive summary — about the studio.</h1>
          <p className="lead mt-3">
            {siteConfig.name} blends narrative direction, product strategy, and engineering rigor. We build flagship systems
            that serve executives, product teams, and launch operations from a single foundation.
          </p>
        </section>

        <section className="stat-grid mb-5">
          <div className="stat-card">
            <div className="stat-label">Avg. launch</div>
            <div className="stat-value">4-6 wks</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Core Web Vitals</div>
            <div className="stat-value">99/100</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Reusable modules</div>
            <div className="stat-value">120+</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Update to live</div>
            <div className="stat-value">&lt;20m</div>
          </div>
        </section>

        <section className="glass-card p-4 p-lg-5 mb-5">
          <h2 className="h3 text-white">How we partner</h2>
          <p className="text-muted mb-4">
            We embed with teams to clarify the narrative, design the system, and deliver with governance. You keep the toolkit:
            component libraries, publishing guides, and instrumentation that make every release predictable.
          </p>
          <div className="d-grid gap-4 gap-lg-5">
            {pillars.map((pillar) => (
              <div key={pillar.title}>
                <h3 className="h5 text-white">{pillar.title}</h3>
                <p className="text-muted mb-0">{pillar.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="glass-card p-4 p-lg-5">
          <h2 className="h3 text-white">Leadership snapshots</h2>
          <div className="d-grid gap-3 mt-4">
            <div>
              <h3 className="h5 text-white mb-1">Avery Han — Partner, Strategy</h3>
              <p className="text-muted mb-0">Discovery, messaging, and information architecture. Former product lead across B2B and creator tools.</p>
            </div>
            <div>
              <h3 className="h5 text-white mb-1">Marcel Ortiz — Partner, Engineering</h3>
              <p className="text-muted mb-0">Architects resilient React platforms and observability pipelines with a focus on performance.</p>
            </div>
            <div>
              <h3 className="h5 text-white mb-1">Riya Desai — Partner, Design</h3>
              <p className="text-muted mb-0">Visual language, interaction pacing, and editorial systems that keep every screen on-brand.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
