import { siteConfig } from '@/lib/siteConfig';

export default function TermsPage() {
  return (
    <main className="py-5">
      <div className="studio-container">
        <section className="page-hero">
          <span className="badge-pill bg-opacity-10 bg-primary text-primary">Terms</span>
          <h1 className="display-5 fw-bold mt-3">Terms of service</h1>
          <p className="lead mt-3">
            These terms define how you may use {siteConfig.name} and how we deliver services.
          </p>
        </section>

        <section className="legal-shell">
          <h2>Use of site</h2>
          <p>
            You may use this site for informational purposes only. Do not attempt to interfere with its operation or
            security.
          </p>

          <h2>Services</h2>
          <p>
            Project scope, timelines, and fees are defined in a separate statement of work. This site does not constitute
            a binding offer.
          </p>

          <h2>Intellectual property</h2>
          <p>
            All content and design elements are owned by {siteConfig.name} unless stated otherwise. Unauthorized reuse is
            prohibited.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            We provide the site as-is and make no warranties. We are not liable for any damages arising from its use.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms can be sent to <a href="mailto:hello@commonline.studio">hello@commonline.studio</a>.
          </p>
        </section>
      </div>
    </main>
  );
}
