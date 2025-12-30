'use client';

import { momentumMetrics, systemSignals } from '@/lib/homeContent';
import ViewportReveal from '@/components/ViewportReveal';

export default function ExecutiveSummarySection() {
  return (
    <section className="exec-section" id="executive-summary">
      <div className="studio-container">
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-3 mb-4 exec-head">
          <div>
            <span className="badge-pill bg-opacity-10 bg-primary text-primary">Executive summary</span>
            <h2 className="display-6 fw-bold text-white mt-3" style={{ fontFamily: 'var(--font-display)' }}>
              Performance, scale, and governance at a glance
            </h2>
            <p className="text-muted mb-0">
              Core outcomes and operational signals for leadership review.
            </p>
          </div>
          <div className="text-muted small text-uppercase letter-spacing-1">Snapshot</div>
        </div>

        <div className="exec-summary-grid mb-4">
          {momentumMetrics.map((metric, idx) => (
            <ViewportReveal key={metric.label} delay={idx * 40} className="exec-summary-card">
              <div className="exec-summary-label">{metric.label}</div>
              <div className="exec-summary-value">{metric.value}</div>
            </ViewportReveal>
          ))}
        </div>

        <div className="exec-summary-signals">
          {systemSignals.map((signal) => (
            <div key={signal.label} className="exec-summary-signal">
              <span className="text-muted text-uppercase letter-spacing-1 small">{signal.label}</span>
              <span className="text-white fw-semibold">{signal.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
