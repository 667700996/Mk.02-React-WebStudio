'use client';

import { motionChoreo } from '@/lib/homeContent';
import ViewportReveal from '../ViewportReveal';

export default function MotionChoreoSection() {
  return (
    <section className="exec-section position-relative overflow-hidden">
      <div className="studio-container position-relative">
        <div className="floating-orb orb-1" style={{ left: '14%', top: '16%', opacity: 0.28 }} />
        <div className="floating-orb orb-2" style={{ right: '6%', top: '20%', opacity: 0.28 }} />
        <ViewportReveal className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-3 mb-4 exec-head">
          <div>
            <span className="badge-pill bg-opacity-10 bg-primary text-primary">Motion lab</span>
            <h2 className="display-6 fw-bold text-white mt-3" style={{ fontFamily: 'var(--font-display)' }}>
              Executive summary — motion governance
            </h2>
            <p className="text-muted mb-0">Every motion pattern is orchestrated with GPU-friendly transforms and reduced-motion fallbacks.</p>
          </div>
          <div className="text-muted small text-uppercase letter-spacing-1">Cinematic + safe</div>
        </ViewportReveal>

        <div className="row g-3 g-lg-4">
          {motionChoreo.map((item, idx) => (
            <div key={item.title} className="col-md-6 col-xl-4">
              <ViewportReveal delay={idx * 60} className="glass-card p-3 p-lg-4 motion-card h-100">
                <div className="d-inline-flex align-items-center gap-2 text-uppercase small letter-spacing-1 text-primary mb-2">
                  <span className="dot-accent" />
                  {item.title}
                </div>
                <div className="d-flex flex-wrap gap-2">
                  {item.moves.map((move) => (
                    <span key={move} className="chip">
                      {move}
                    </span>
                  ))}
                </div>
              </ViewportReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
