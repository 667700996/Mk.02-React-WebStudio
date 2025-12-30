import type { Metadata } from 'next';
import { siteConfig } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'Privacy',
  description: `Privacy policy for ${siteConfig.name}.`,
};

export default function PrivacyPage() {
  return (
    <main className="py-5">
      <div className="studio-container">
        <section className="page-hero">
          <span className="badge-pill bg-opacity-10 bg-primary text-primary">Privacy</span>
          <h1 className="display-5 fw-bold mt-3">Privacy policy</h1>
          <p className="lead mt-3">
            We respect your data and keep collection to the minimum required to operate {siteConfig.name}.
          </p>
        </section>

        <section className="legal-shell">
          <h2>Information we collect</h2>
          <p>
            We collect information you submit through forms, such as your name, email, and project details. We also collect
            basic analytics to understand traffic and improve performance.
          </p>

          <h2>How we use information</h2>
          <p>
            We use your information to respond to inquiries, deliver services, and improve the experience. We do not sell
            personal data.
          </p>

          <h2>Data retention</h2>
          <p>
            We retain inquiry data for as long as necessary to support the engagement. You may request deletion at any time.
          </p>

          <h2>Third-party services</h2>
          <p>
            We may use third-party tools for analytics and infrastructure. These providers are contractually required to
            protect your data.
          </p>

          <h2>Contact</h2>
          <p>
            For privacy questions, email <a href="mailto:hello@commonline.studio">hello@commonline.studio</a>.
          </p>
        </section>
      </div>
    </main>
  );
}
