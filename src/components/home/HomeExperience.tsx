'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { ArrowDown, ArrowUpRight, Asterisk, MoveUpRight } from 'lucide-react';
import { PointerEvent, useEffect, useRef, useState } from 'react';
import ProjectArtwork from '@/components/work/ProjectArtwork';
import { portfolioProjects, type PortfolioProject } from '@/lib/portfolioProjects';

const ease = [0.16, 1, 0.3, 1] as const;
const SignalCore = dynamic(() => import('./SignalCore'), {
  ssr: false,
  loading: () => <div className="cx-hero__signal-fallback" aria-hidden="true" />,
});

const disciplines = [
  ['01', 'Direction', 'Positioning, narrative, visual worlds'],
  ['02', 'Experience', 'UX architecture, interaction, prototypes'],
  ['03', 'Motion', 'Choreography, 3D, generative systems'],
  ['04', 'Engineering', 'Creative code, WebGL, performance'],
];

function LoadingCurtain() {
  const [visible, setVisible] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (sessionStorage.getItem('cx-intro-seen')) {
      setVisible(false);
      return;
    }
    const timer = window.setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem('cx-intro-seen', 'true');
    }, reduceMotion ? 350 : 1750);
    return () => window.clearTimeout(timer);
  }, [reduceMotion]);

  return (
    <motion.div
      className="cx-loader"
      initial={false}
      animate={visible ? 'open' : 'closed'}
      variants={{
        open: { y: '0%' },
        closed: { y: '-105%', transition: { duration: reduceMotion ? 0.2 : 0.9, ease } },
      }}
      aria-hidden="true"
    >
      <div className="cx-loader__brand">
        <span className="cx-brand__mark"><i /></span>
        COMMONLINE
      </div>
      <div className="cx-loader__sequence">
        <span>CALIBRATING THE IMPOSSIBLE</span>
        <div><i /></div>
      </div>
      <span className="cx-loader__index">©26 / SEOUL</span>
    </motion.div>
  );
}

function CursorAura() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const x = useSpring(mouseX, { stiffness: 560, damping: 46, mass: 0.3 });
  const y = useSpring(mouseY, { stiffness: 560, damping: 46, mass: 0.3 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const move = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
      const target = event.target as HTMLElement;
      setActive(Boolean(target.closest('a, button, [data-cursor="focus"]')));
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className={`cx-cursor ${active ? 'is-active' : ''}`}
      style={{ x, y }}
      aria-hidden="true"
    />
  );
}

function ProjectCard({ project, index }: { project: PortfolioProject; index: number }) {
  const cardRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const onPointerMove = (event: PointerEvent<HTMLElement>) => {
    if (reduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty('--mx', `${((event.clientX - rect.left) / rect.width) * 100}%`);
    cardRef.current.style.setProperty('--my', `${((event.clientY - rect.top) / rect.height) * 100}%`);
    cardRef.current.style.setProperty('--rx', `${((event.clientY - rect.top) / rect.height - 0.5) * -3}deg`);
    cardRef.current.style.setProperty('--ry', `${((event.clientX - rect.left) / rect.width - 0.5) * 3}deg`);
  };

  const reset = () => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty('--rx', '0deg');
    cardRef.current.style.setProperty('--ry', '0deg');
  };

  return (
    <motion.article
      ref={cardRef}
      className="cx-project"
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.9, delay: index * 0.06, ease }}
      data-cursor="focus"
    >
      <div className="cx-project__head">
        <span>{project.index} / 03</span>
        <span>{project.type}</span>
        <MoveUpRight aria-hidden="true" />
      </div>
      <Link href={`/work/${project.slug}`} className="cx-project__visual-link" aria-label={`Read the ${project.title} case study`}>
        <ProjectArtwork accent={project.accent} index={index} />
      </Link>
      <div className="cx-project__body">
        <div>
          <h3>{project.title}<sup>®</sup></h3>
          <p>{project.description}</p>
          <Link href={`/work/${project.slug}`} className="cx-project__case-link">
            View case study <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
        <ul>
          {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
      </div>
    </motion.article>
  );
}

export default function HomeExperience() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroTextY = useTransform(heroProgress, [0, 1], ['0%', '32%']);
  const heroTextOpacity = useTransform(heroProgress, [0, 0.68], [1, 0]);
  const canvasScale = useTransform(heroProgress, [0, 1], [1, 0.76]);
  const canvasOpacity = useTransform(heroProgress, [0, 0.8], [1, 0.15]);

  return (
    <main className="cx-experience">
      <LoadingCurtain />
      <CursorAura />

      <section ref={heroRef} className="cx-hero" aria-labelledby="hero-title">
        <div className="cx-hero__grid" aria-hidden="true" />
        <motion.div className="cx-hero__canvas" style={{ scale: canvasScale, opacity: canvasOpacity }}>
          <SignalCore scrollProgress={heroProgress} />
          <div className="cx-hero__halo" />
        </motion.div>

        <motion.div
          className="cx-hero__copy"
          style={{ y: heroTextY, opacity: heroTextOpacity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <p className="cx-kicker"><span /> Independent creative technology studio</p>
          <h1 id="hero-title">
            <span>WE BUILD</span>
            <span className="cx-hero__outline">IMPOSSIBLE</span>
            <span>INTERFACES<i>.</i></span>
          </h1>
          <div className="cx-hero__sub">
            <p>Brand, motion and creative code — fused into digital experiences that refuse to be ignored.</p>
            <Link href="#work" className="cx-round-link" aria-label="Explore selected work">
              <ArrowDown aria-hidden="true" />
            </Link>
          </div>
        </motion.div>

        <div className="cx-hero__meta cx-hero__meta--left">
          <span>CREATIVE SYSTEMS</span><span>© 2026</span>
        </div>
        <div className="cx-hero__meta cx-hero__meta--right">
          <span>SEOUL / WORLDWIDE</span><span>37.5665° N</span>
        </div>
      </section>

      <div className="cx-signal-strip" aria-label="Studio disciplines">
        <div>
          {Array.from({ length: 2 }, (_, group) => (
            <span key={group}>
              Creative direction <Asterisk /> Digital experiences <Asterisk /> Motion systems <Asterisk /> Creative engineering <Asterisk />
            </span>
          ))}
        </div>
      </div>

      <section className="cx-manifesto" aria-labelledby="manifesto-title">
        <div className="cx-section-index">
          <span>01 / BELIEF</span><span>THE INTERNET CAN STILL FEEL NEW</span>
        </div>
        <motion.div
          className="cx-manifesto__copy"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.32 }}
          transition={{ duration: 1, ease }}
        >
          <h2 id="manifesto-title">
            We turn <em>ambition</em> into<br />
            experiences people <span>feel.</span>
          </h2>
          <div>
            <p>We partner with people building what comes next. No templates. No visual noise. Just precise ideas, engineered with emotion.</p>
            <span className="cx-manifesto__number">1:1</span>
          </div>
        </motion.div>
      </section>

      <section id="work" className="cx-work" aria-labelledby="work-title">
        <div className="cx-section-index">
          <span>02 / SELECTED WORK</span><span>EXPERIMENTS WITH PURPOSE</span>
        </div>
        <div className="cx-section-heading">
          <h2 id="work-title">Proof, not promises.</h2>
          <p>Selected collaborations from the edge of brand, technology and culture.</p>
        </div>
        <div className="cx-work__list">
          {portfolioProjects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
        </div>
      </section>

      <section id="process" className="cx-process" aria-labelledby="process-title">
        <div className="cx-process__sticky">
          <div className="cx-section-index">
            <span>03 / HOW WE WORK</span><span>ONE COMPOSITE PRACTICE</span>
          </div>
          <h2 id="process-title">One studio.<br /><span>Zero handoffs.</span></h2>
          <p>Every discipline stays in the room from the first provocation to the final frame.</p>
        </div>
        <div className="cx-process__list">
          {disciplines.map(([number, title, description]) => (
            <motion.div
              key={number}
              initial={{ opacity: 0.25 }}
              whileInView={{ opacity: 1 }}
              viewport={{ amount: 0.65 }}
              transition={{ duration: 0.5 }}
            >
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <ArrowUpRight aria-hidden="true" />
            </motion.div>
          ))}
        </div>
      </section>

      <section id="lab" className="cx-lab" aria-labelledby="lab-title">
        <div className="cx-lab__noise" aria-hidden="true" />
        <div className="cx-section-index">
          <span>04 / LIVE LAB</span><span>RUNNING AT 60 FRAMES OF CURIOSITY</span>
        </div>
        <div className="cx-lab__content">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease }}
          >
            <p className="cx-kicker"><span /> Runtime telemetry</p>
            <h2 id="lab-title">Beauty should<br />benchmark well.</h2>
            <p className="cx-lab__description">Atmosphere without friction. Every layer is measured, adaptive and deliberately composed for the device beneath it.</p>
            <div className="cx-lab__stats">
              <div><strong>60</strong><span>Target FPS</span></div>
              <div><strong>1.5</strong><span>Max DPR</span></div>
              <div><strong>AA</strong><span>Accessible</span></div>
            </div>
          </motion.div>
          <div className="cx-lab__console" data-cursor="focus">
            <div className="cx-console__top"><span>COMMONLINE / RUNTIME</span><span>LIVE <i /></span></div>
            <div className="cx-console__orb">
              <div className="cx-console__sphere" />
              <span className="cx-console__axis cx-console__axis--x" />
              <span className="cx-console__axis cx-console__axis--y" />
            </div>
            <div className="cx-console__readout">
              <div><span>FRAME</span><b>16.6ms</b></div>
              <div><span>GPU</span><b>0.42</b></div>
              <div><span>MOTION</span><b>ADAPTIVE</b></div>
            </div>
          </div>
        </div>
      </section>

      <section className="cx-contact" aria-labelledby="contact-title">
        <div className="cx-contact__orbit" aria-hidden="true"><span /><i /></div>
        <p>Have something impossible in mind?</p>
        <h2 id="contact-title">LET’S MAKE IT<br /><span>REAL.</span></h2>
        <Link href="/contact" className="cx-contact__link">
          <span>Start a conversation</span>
          <ArrowUpRight aria-hidden="true" />
        </Link>
        <div className="cx-contact__foot"><span>AVAILABLE FOR SELECT PROJECTS · Q4 2026</span><span>SCROLL COMPLETE / 100%</span></div>
      </section>
    </main>
  );
}
