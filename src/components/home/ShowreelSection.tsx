'use client';

import { showreel } from '@/lib/homeContent';
import ViewportReveal from '@/components/ViewportReveal';

export default function ShowreelSection() {
  return (
    <section className="exec-section" id="showreel">
      <div className="studio-container">
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-3 mb-4 exec-head">
          <div>
            <span className="badge-pill bg-opacity-10 bg-primary text-primary">Capability evidence</span>
            <h2 className="display-6 fw-bold text-white mt-3" style={{ fontFamily: 'var(--font-display)' }}>
              Executive summary — delivery evidence
            </h2>
            <p className="text-muted mb-0" style={{ maxWidth: '640px' }}>
              Portfolio, product, and launch surfaces delivered on a single system with measurable outcomes.
            </p>
          </div>
          <span className="text-muted small text-uppercase letter-spacing-1">Scroll or drag</span>
        </div>
        <div className="showreel-track">
          {showreel.map((item, idx) => (
            <ViewportReveal key={item.title} variant="lift" delay={idx * 80}>
              <article className="showreel-card glass-card">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="badge rounded-pill bg-opacity-10 bg-primary text-primary">{item.type}</span>
                  <span className="text-muted small letter-spacing-1">{item.metric}</span>
                </div>
                <h3 className="h5 text-white mb-2">{item.title}</h3>
                <p className="text-muted mb-3">{item.description}</p>
                <div className="d-flex flex-wrap gap-2">
                  {item.tech.map((tech) => (
                    <span key={tech} className="badge bg-opacity-10 bg-light text-light text-uppercase letter-spacing-1">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </ViewportReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
