'use client';

import Link from 'next/link';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CircleDot,
  MoveRight,
} from 'lucide-react';
import { PointerEvent, useEffect, useRef, useState } from 'react';
import ProjectArtwork from '@/components/work/ProjectArtwork';
import { portfolioProjects, type PortfolioProject } from '@/lib/portfolioProjects';

const practice = [
  {
    number: '01',
    title: 'Frame the right problem',
    body: 'Reduce ambiguity before adding interface. The narrative, user model, and success signal are designed together.',
    detail: 'Direction · Product strategy · IA',
  },
  {
    number: '02',
    title: 'Prototype the behavior',
    body: 'Motion, hierarchy, and edge cases become executable early—where a team can feel them, test them, and improve them.',
    detail: 'Interaction · Motion · Prototyping',
  },
  {
    number: '03',
    title: 'Build the system beneath it',
    body: 'Tokens, components, content models, and performance budgets keep the experience coherent after launch.',
    detail: 'Frontend architecture · Design systems',
  },
];

const deliveryContract = [
  ['Rendering', 'Progressive by default', 'Useful without WebGL or motion'],
  ['Interaction', 'Input-agnostic', 'Keyboard, touch, pointer'],
  ['Motion', 'Frame-budgeted', 'Transform-led, reduced-motion safe'],
  ['Accessibility', 'Structural', 'Semantic HTML, visible focus'],
  ['Content', 'Composable', 'Typed models, durable narratives'],
  ['Quality', 'Measured', 'Build, lint, responsive review'],
];

const stack = [
  'Product thinking',
  'Interaction systems',
  'Creative engineering',
  'Frontend architecture',
  'Motion direction',
  'Performance design',
];

function useLocalTime() {
  const [time, setTime] = useState('--:--');

  useEffect(() => {
    const update = () => {
      setTime(
        new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Asia/Seoul',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }).format(new Date()),
      );
    };

    update();
    const interval = window.setInterval(update, 30_000);
    return () => window.clearInterval(interval);
  }, []);

  return time;
}

function SignalField() {
  const time = useLocalTime();

  return (
    <div className="pf-signal" aria-label="Commonline live system signal">
      <div className="pf-signal__grid" aria-hidden="true" />
      <div className="pf-signal__axis pf-signal__axis--x" aria-hidden="true" />
      <div className="pf-signal__axis pf-signal__axis--y" aria-hidden="true" />
      <div className="pf-signal__rings" aria-hidden="true">
        <i />
        <i />
        <i />
        <span />
      </div>
      <div className="pf-signal__core" aria-hidden="true">
        <i />
      </div>

      <div className="pf-signal__topline">
        <span>CLS / SIGNAL_01</span>
        <span className="pf-live"><i /> Live</span>
      </div>
      <div className="pf-signal__coordinate">
        <span>37.5665° N</span>
        <span>126.9780° E</span>
      </div>
      <div className="pf-signal__readout">
        <span>Local / Seoul</span>
        <strong>{time}</strong>
      </div>
      <div className="pf-signal__caption">
        <span>One continuous system</span>
        <p>Strategy → Interface → Code</p>
      </div>
    </div>
  );
}

function ProjectFeature({
  project,
  index,
}: {
  project: PortfolioProject;
  index: number;
}) {
  return (
    <article className="pf-project" data-reveal>
      <div className="pf-project__index" aria-hidden="true">
        <span>{project.index}</span>
        <i />
        <span>03</span>
      </div>

      <Link
        href={`/work/${project.slug}`}
        className="pf-project__visual"
        aria-label={`Explore the ${project.title} case study`}
      >
        <ProjectArtwork accent={project.accent} index={index} />
        <span className="pf-project__view">
          View case
          <ArrowUpRight aria-hidden="true" />
        </span>
        <span className="pf-project__status">Interactive prototype</span>
      </Link>

      <div className="pf-project__content">
        <div className="pf-project__meta">
          <span>{project.type}</span>
          <span>{project.year}</span>
        </div>
        <h3>{project.title}</h3>
        <p className="pf-project__summary">{project.description}</p>

        <div className="pf-project__facts">
          <div>
            <span>Context</span>
            <p>{project.context}</p>
          </div>
          <div>
            <span>Contribution</span>
            <p>{project.role}</p>
          </div>
          <div>
            <span>System proof</span>
            <p>{project.system.slice(0, 2).join(' · ')}</p>
          </div>
        </div>

        <div className="pf-project__metrics">
          {project.metrics.slice(0, 2).map((metric) => (
            <div key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>

        <Link href={`/work/${project.slug}`} className="pf-text-link">
          Read the system story
          <MoveRight aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

export default function HomeExperience() {
  const rootRef = useRef<HTMLElement>(null);
  const pointerFrame = useRef<number | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const targets = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]'));

    if (reduceMotion || !('IntersectionObserver' in window)) {
      targets.forEach((target) => target.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    const root = rootRef.current;
    if (!root || event.pointerType === 'touch') return;

    if (pointerFrame.current !== null) {
      window.cancelAnimationFrame(pointerFrame.current);
    }

    const x = event.clientX;
    const y = event.clientY;
    pointerFrame.current = window.requestAnimationFrame(() => {
      root.style.setProperty('--pointer-x', `${x}px`);
      root.style.setProperty('--pointer-y', `${y}px`);
    });
  };

  return (
    <main ref={rootRef} className="pf" onPointerMove={handlePointerMove}>
      <a className="pf-skip" href="#selected-work">Skip to selected work</a>

      <section className="pf-hero" aria-labelledby="pf-hero-title">
        <div className="pf-hero__ambient" aria-hidden="true" />
        <div className="pf-hero__copy">
          <div className="pf-eyebrow pf-hero__eyebrow">
            <span><i /> Available for select collaborations</span>
            <span>Seoul · Worldwide</span>
          </div>

          <h1 id="pf-hero-title">
            <span>Make complexity</span>
            <span>feel <em>inevitable.</em></span>
          </h1>

          <div className="pf-hero__intro">
            <p>
              Commonline is an independent design engineering practice creating
              digital products, interfaces, and visual systems where clarity and
              character are inseparable.
            </p>
            <div className="pf-hero__actions">
              <Link href="#selected-work" className="pf-button pf-button--solid">
                Explore selected work
                <ArrowDown aria-hidden="true" />
              </Link>
              <Link href="/about" className="pf-button pf-button--quiet">
                Inside the practice
                <ArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        <div className="pf-hero__signal">
          <SignalField />
        </div>

        <div className="pf-hero__rail" aria-label="Areas of practice">
          <span>Direction</span>
          <i />
          <span>Experience</span>
          <i />
          <span>Engineering</span>
          <i />
          <span>Systems</span>
        </div>
      </section>

      <section className="pf-statement" aria-labelledby="pf-statement-title">
        <div className="pf-section-label" data-reveal>
          <span>01 / Point of view</span>
          <span>Clarity is the highest form of craft</span>
        </div>
        <div className="pf-statement__grid">
          <h2 id="pf-statement-title" data-reveal>
            The best interface doesn’t ask for attention.
            <span>It turns intention into momentum.</span>
          </h2>
          <div className="pf-statement__aside" data-reveal>
            <CircleDot aria-hidden="true" />
            <p>
              I work across product thinking, interaction design, and frontend
              architecture—keeping the idea intact from first principle to final
              frame.
            </p>
          </div>
        </div>
      </section>

      <section id="selected-work" className="pf-work" aria-labelledby="pf-work-title">
        <div className="pf-section-label" data-reveal>
          <span>02 / Selected work</span>
          <span>Independent R&amp;D · 2026</span>
        </div>
        <div className="pf-work__heading" data-reveal>
          <h2 id="pf-work-title">Three systems.<br />Three kinds of complexity.</h2>
          <p>
            Concept work used as a proving ground for spatial UI, generative
            identity, explainable intelligence, and the engineering beneath each.
          </p>
        </div>

        <div className="pf-work__list">
          {portfolioProjects.map((project, index) => (
            <ProjectFeature key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>

      <section id="approach" className="pf-practice" aria-labelledby="pf-practice-title">
        <div className="pf-section-label" data-reveal>
          <span>03 / Practice</span>
          <span>One continuous line from premise to production</span>
        </div>

        <div className="pf-practice__intro" data-reveal>
          <h2 id="pf-practice-title">Craft is not a layer.<br /><span>It is the architecture.</span></h2>
          <p>
            The work stays coherent because strategy, interface, motion, and code
            are resolved as one system—not passed between isolated disciplines.
          </p>
        </div>

        <div className="pf-practice__steps">
          {practice.map((item) => (
            <article key={item.number} data-reveal>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <small>{item.detail}</small>
              <ArrowRight aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section id="system" className="pf-system" aria-labelledby="pf-system-title">
        <div className="pf-section-label" data-reveal>
          <span>04 / Engineering standard</span>
          <span>Designed for the real device, not the perfect demo</span>
        </div>

        <div className="pf-system__grid">
          <div className="pf-system__copy" data-reveal>
            <p className="pf-kicker"><i /> Delivery contract</p>
            <h2 id="pf-system-title">Beauty should<br />survive production.</h2>
            <p>
              Every experience is designed against a delivery contract: resilient
              rendering, inclusive inputs, intentional motion, and a system another
              team can understand.
            </p>
          </div>

          <div className="pf-contract" data-reveal>
            <div className="pf-contract__head">
              <span>COMMONLINE / QUALITY MODEL</span>
              <span className="pf-live"><i /> Active</span>
            </div>
            <div className="pf-contract__body">
              {deliveryContract.map(([label, value, detail], index) => (
                <div className="pf-contract__row" key={label}>
                  <span>0{index + 1}</span>
                  <strong>{label}</strong>
                  <p>{value}</p>
                  <small>{detail}</small>
                </div>
              ))}
            </div>
            <div className="pf-contract__foot">
              <span>Graceful degradation</span>
              <span>Reduced motion</span>
              <span>Semantic core</span>
            </div>
          </div>
        </div>
      </section>

      <section className="pf-stack" aria-label="Capabilities">
        <div className="pf-stack__track">
          {[...stack, ...stack].map((item, index) => (
            <span key={`${item}-${index}`}>
              {item}
              <i />
            </span>
          ))}
        </div>
      </section>

      <section className="pf-contact" aria-labelledby="pf-contact-title">
        <div className="pf-contact__orb" aria-hidden="true"><i /><span /></div>
        <div className="pf-section-label" data-reveal>
          <span>05 / Start a conversation</span>
          <span>New collaborations · Q4 2026</span>
        </div>
        <div className="pf-contact__content" data-reveal>
          <p>Have a difficult idea worth making real?</p>
          <h2 id="pf-contact-title">Let’s build what<br /><em>should exist.</em></h2>
          <Link href="/contact" className="pf-contact__link">
            <span>Begin a project</span>
            <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
