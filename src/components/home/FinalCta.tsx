'use client';

import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';

export default function FinalCta() {
  return (
    <section className="final-cta exec-section">
      <div className="studio-container">
        <div className="final-shell glass-card">
          <div>
            <p className="mono-pill">Executive summary</p>
            <h3>Next steps for a flagship engagement.</h3>
            <p className="section-copy">
              We&apos;ll align narrative, system architecture, and release governance, then deliver a site that is fast, credible,
              and built to scale.
            </p>
          </div>

          <Link href={siteConfig.primaryCta.href} className="btn btn-primary hero-btn" aria-label={siteConfig.primaryCta.label}>
            {siteConfig.primaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
