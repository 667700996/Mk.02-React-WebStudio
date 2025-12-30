'use client';

import { animationGallery } from '@/lib/homeContent';
import ViewportReveal from '../ViewportReveal';

export default function AnimationGallerySection() {
  return (
    <section className="py-5 py-lg-6">
      <div className="studio-container">
        <ViewportReveal className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-3 mb-4">
          <div>
            <span className="badge-pill bg-opacity-10 bg-primary text-primary">Animation gallery</span>
            <h2 className="display-6 fw-bold text-white mt-3" style={{ fontFamily: 'var(--font-display)' }}>
              Executive summary — motion vocabulary
            </h2>
            <p className="text-muted mb-0">Reusable animation motifs tuned for performance budgets and accessibility.</p>
          </div>
          <div className="text-muted small text-uppercase letter-spacing-1">GPU-friendly</div>
        </ViewportReveal>

        <div className="row g-3 g-lg-4">
          {animationGallery.map((item, idx) => (
            <div key={item.title} className="col-md-6 col-xl-4">
              <ViewportReveal delay={idx * 60} className="glass-card p-3 p-lg-4 animation-card h-100">
                <div className="animation-orb" />
                <div className="text-white fw-semibold">{item.title}</div>
                <div className="text-muted">{item.detail}</div>
                <div className="animation-track mt-3">
                  <span className="animation-dot" />
                  <span className="animation-dot" />
                  <span className="animation-dot" />
                </div>
              </ViewportReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
