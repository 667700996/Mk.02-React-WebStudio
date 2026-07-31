import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Asterisk } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: 'About',
  description: `Inside ${siteConfig.name}: a multidisciplinary creative technology practice spanning product, motion, and frontend architecture.`,
};

const capabilities = [
  ['01', 'Product thinking', 'Framing ambiguous problems, modeling systems, prototyping the decisive interaction.'],
  ['02', 'Visual direction', 'Building distinctive brand worlds with disciplined type, color, composition, and art direction.'],
  ['03', 'Motion systems', 'Turning timing, physics, and spatial behavior into a coherent interaction language.'],
  ['04', 'Creative engineering', 'Shipping resilient React and WebGL experiences with performance built into the concept.'],
];

const values = [
  ['Clarity', 'The interface should reveal the idea, not compete with it.'],
  ['Restraint', 'A single precise gesture beats ten decorative effects.'],
  ['Curiosity', 'The best technical decisions often begin as visual questions.'],
  ['Finish', 'Quality lives in the last five percent: easing, focus, copy, loading, edge cases.'],
];

export default function AboutPage() {
  return (
    <main className="cx-about">
      <section className="cx-about__hero">
        <p className="cx-kicker"><span /> About the practice</p>
        <h1>I DESIGN<br /><span>SYSTEMS</span><br />YOU CAN FEEL.</h1>
        <div className="cx-about__intro">
          <p>Commonline is the independent practice of a multidisciplinary creative technologist based in Seoul, working where product design, motion, and frontend architecture become one craft.</p>
          <span>37.5665° N<br />126.9780° E</span>
        </div>
      </section>

      <div className="cx-signal-strip" aria-hidden="true">
        <div>
          {Array.from({ length: 2 }, (_, group) => (
            <span key={group}>Taste with logic <Asterisk /> Systems with soul <Asterisk /> Technology with purpose <Asterisk /></span>
          ))}
        </div>
      </div>

      <section className="cx-about__statement">
        <div className="cx-section-index"><span>01 / POINT OF VIEW</span><span>CRAFT IS A SYSTEM</span></div>
        <p>
          I believe technology should feel <em>inevitable</em> — not because it is familiar,
          but because every detail has been resolved with enough care that no other answer feels possible.
        </p>
      </section>

      <section className="cx-about__capabilities" aria-labelledby="capability-title">
        <div className="cx-about__sticky">
          <div className="cx-section-index"><span>02 / PRACTICE</span><span>FULL-STACK CREATIVITY</span></div>
          <h2 id="capability-title">From first question<br />to final frame.</h2>
          <p>One continuous line of thinking across strategy, design, motion, and code.</p>
        </div>
        <div className="cx-about__capability-list">
          {capabilities.map(([number, title, description]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cx-about__values" aria-labelledby="values-title">
        <div className="cx-section-index"><span>03 / OPERATING PRINCIPLES</span><span>HOW THE WORK GETS BETTER</span></div>
        <h2 id="values-title">The standard is<br /><span>the experience.</span></h2>
        <div className="cx-about__value-grid">
          {values.map(([title, body], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cx-about__now">
        <div>
          <p className="cx-kicker"><span /> Now</p>
          <h2>Open to the right<br />impossible problem.</h2>
        </div>
        <p>Interested in product design, creative technology, and interface roles where craft and technical ambition are treated as the same responsibility.</p>
        <Link href="/contact">Start a conversation <ArrowUpRight aria-hidden="true" /></Link>
      </section>
    </main>
  );
}
