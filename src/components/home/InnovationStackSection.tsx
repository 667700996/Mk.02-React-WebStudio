'use client';

import { Row, Col } from 'react-bootstrap';
import { deepSystems, performanceSignals } from '@/lib/homeContent';
import ViewportReveal from '@/components/ViewportReveal';

export default function InnovationStackSection() {
  return (
    <section className="py-5">
      <div className="studio-container">
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-3 mb-4">
          <div>
            <span className="badge-pill bg-opacity-10 bg-primary text-primary">Engineering stack</span>
            <h2 className="display-6 fw-bold text-white mt-3" style={{ fontFamily: 'var(--font-display)' }}>
              Performance, observability, and governance at scale
            </h2>
            <p className="text-muted mb-0" style={{ maxWidth: '620px' }}>
              Measurable motion budgets, RUM instrumentation, and release guardrails baked into every surface.
            </p>
          </div>
          <div className="d-flex flex-wrap gap-2">
            {performanceSignals.map((signal) => (
              <span key={signal.label} className="badge bg-opacity-10 bg-light text-light text-uppercase letter-spacing-1">
                {signal.value}
              </span>
            ))}
          </div>
        </div>
        <Row className="g-4">
          {deepSystems.map((item, idx) => (
            <Col key={item.title} lg={6}>
              <ViewportReveal variant={idx % 2 === 0 ? 'slide-left' : 'slide-right'} delay={idx * 80}>
                <article className="innovation-card glass-card h-100 p-4 p-lg-5">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="badge rounded-pill bg-opacity-10 bg-primary text-primary">{item.tag}</span>
                    <span className="text-muted small letter-spacing-1">{item.metric}</span>
                  </div>
                  <h3 className="h4 text-white">{item.title}</h3>
                  <p className="text-muted mb-0">{item.description}</p>
                  <div className="innovation-glow" />
                </article>
              </ViewportReveal>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
