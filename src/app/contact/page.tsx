'use client';

import { useState } from 'react';
import { Form, Alert } from 'react-bootstrap';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    timeline: '',
    services: '',
    message: '',
  });
  const [submissionStatus, setSubmissionStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionStatus(null);

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmissionStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setSubmissionStatus('error');
    }
  };

  return (
    <main className="py-5">
      <div className="studio-container">
        <section className="page-hero">
          <span className="badge-pill bg-opacity-10 bg-primary text-primary">Start a project</span>
          <h1 className="display-5 fw-bold mt-3">Tell us about your next release.</h1>
          <p className="lead mt-3">
            Share a few details and we will respond within one business day with scope, timeline, and a tailored plan.
          </p>
        </section>

        <div className="row g-4">
          <div className="col-lg-5">
            <div className="glass-card p-4 p-lg-5 h-100">
              <h2 className="h4 text-white mb-3">What you can expect</h2>
              <ul className="text-muted d-grid gap-2 mb-4">
                <li>Discovery call and narrative alignment within 72 hours.</li>
                <li>System architecture, motion plan, and timeline in week one.</li>
                <li>Launch-ready build with performance and a11y guardrails.</li>
              </ul>
              <div className="d-grid gap-3">
                <div>
                  <div className="text-uppercase small letter-spacing-1 text-muted">Email</div>
                  <a href="mailto:hello@commonline.studio" className="text-white text-decoration-none">
                    hello@commonline.studio
                  </a>
                </div>
                <div>
                  <div className="text-uppercase small letter-spacing-1 text-muted">Typical timeline</div>
                  <div className="text-white">4-6 weeks for a full flagship system</div>
                </div>
                <div>
                  <div className="text-uppercase small letter-spacing-1 text-muted">Availability</div>
                  <div className="text-white">Next intake: two to four weeks</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="glass-card p-4 p-lg-5">
              <Form onSubmit={handleSubmit} className="studio-form">
                <div className="row g-3">
                  <div className="col-md-6">
                    <Form.Group controlId="formName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} autoComplete="name" required />
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group controlId="formEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} autoComplete="email" required />
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group controlId="formCompany">
                      <Form.Label>Company</Form.Label>
                      <Form.Control type="text" name="company" value={formData.company} onChange={handleChange} autoComplete="organization" />
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group controlId="formServices">
                      <Form.Label>Primary need</Form.Label>
                      <Form.Select name="services" value={formData.services} onChange={handleChange}>
                        <option value="">Select one</option>
                        <option value="flagship">Universal flagship</option>
                        <option value="portfolio">Portfolio system</option>
                        <option value="product">Product + docs layer</option>
                        <option value="launch">Launch + campaign drops</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group controlId="formBudget">
                      <Form.Label>Estimated budget</Form.Label>
                      <Form.Select name="budget" value={formData.budget} onChange={handleChange}>
                        <option value="">Select range</option>
                        <option value="20-40k">$20-40k</option>
                        <option value="40-80k">$40-80k</option>
                        <option value="80-150k">$80-150k</option>
                        <option value="150k+">$150k+</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group controlId="formTimeline">
                      <Form.Label>Desired timeline</Form.Label>
                      <Form.Select name="timeline" value={formData.timeline} onChange={handleChange}>
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="4-6w">4-6 weeks</option>
                        <option value="6-10w">6-10 weeks</option>
                        <option value="10w+">10+ weeks</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                  <div className="col-12">
                    <Form.Group controlId="formMessage">
                      <Form.Label>Project goals</Form.Label>
                      <Form.Control
                        as="textarea"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="What are you hoping to build or transform?"
                        required
                      />
                      <Form.Text>Share goals, constraints, and any deadlines.</Form.Text>
                    </Form.Group>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary btn-lg fw-semibold mt-4">
                  Send message
                </button>
              </Form>

              {submissionStatus === 'success' && (
                <Alert variant="success" className="mt-4">
                  Your message has been sent successfully. We will be in touch shortly.
                </Alert>
              )}
              {submissionStatus === 'error' && (
                <Alert variant="danger" className="mt-4">
                  Something went wrong. Please try again later or email us directly.
                </Alert>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
