'use client';

import { FormEvent, useState } from 'react';
import { ArrowUpRight, Copy, Check } from 'lucide-react';

const email = 'hello@commonline.studio';

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    reason: 'Opportunity',
    message: '',
  });

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`${formData.reason} — ${formData.name}${formData.company ? ` / ${formData.company}` : ''}`);
    const body = encodeURIComponent(
      `Hi Commonline,\n\n${formData.message}\n\n—\n${formData.name}\n${formData.email}${formData.company ? `\n${formData.company}` : ''}`,
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="cx-contact-page">
      <section className="cx-contact-page__hero">
        <div className="cx-contact-page__orbit" aria-hidden="true"><span /><i /></div>
        <p className="cx-kicker"><span /> Available for select opportunities</p>
        <h1>LET’S MAKE<br /><span>THE NEXT</span><br />THING MATTER.</h1>
        <div className="cx-contact-page__email">
          <a href={`mailto:${email}`}>{email}</a>
          <button type="button" onClick={copyEmail} aria-label="Copy email address">
            {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
            <span aria-live="polite">{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </section>

      <section className="cx-contact-page__form-section">
        <div>
          <div className="cx-section-index"><span>01 / MESSAGE</span><span>REPLY WITHIN 1–2 DAYS</span></div>
          <h2>Tell me what<br />you’re building.</h2>
          <p>Roles, ambitious products, creative collaborations, or the problem nobody has quite solved yet.</p>
        </div>

        <form className="cx-contact-form" onSubmit={handleSubmit}>
          <div className="cx-field">
            <label htmlFor="contact-name">Your name</label>
            <input
              id="contact-name"
              name="name"
              autoComplete="name"
              value={formData.name}
              onChange={(event) => setFormData({ ...formData, name: event.target.value })}
              placeholder="Name"
              required
            />
          </div>
          <div className="cx-field">
            <label htmlFor="contact-email">Email address</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={(event) => setFormData({ ...formData, email: event.target.value })}
              placeholder="you@company.com"
              required
            />
          </div>
          <div className="cx-field">
            <label htmlFor="contact-company">Company <span>Optional</span></label>
            <input
              id="contact-company"
              name="company"
              autoComplete="organization"
              value={formData.company}
              onChange={(event) => setFormData({ ...formData, company: event.target.value })}
              placeholder="Company or team"
            />
          </div>
          <div className="cx-field">
            <label htmlFor="contact-reason">I’m reaching out about</label>
            <select
              id="contact-reason"
              name="reason"
              value={formData.reason}
              onChange={(event) => setFormData({ ...formData, reason: event.target.value })}
            >
              <option>Opportunity</option>
              <option>Project</option>
              <option>Collaboration</option>
              <option>Something else</option>
            </select>
          </div>
          <div className="cx-field cx-field--wide">
            <label htmlFor="contact-message">The interesting part</label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={(event) => setFormData({ ...formData, message: event.target.value })}
              placeholder="A little context, the ambition, and what a great outcome looks like…"
              required
            />
          </div>
          <button type="submit" className="cx-contact-form__submit">
            <span>Open in email</span>
            <ArrowUpRight aria-hidden="true" />
          </button>
        </form>
      </section>
    </main>
  );
}
