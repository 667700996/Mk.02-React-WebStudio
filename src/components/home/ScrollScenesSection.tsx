'use client';

import { useEffect, useRef, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { scrollScenes } from '@/lib/homeContent';
import ViewportReveal from '@/components/ViewportReveal';

export default function ScrollScenesSection() {
  const [activeScene, setActiveScene] = useState(scrollScenes[0].title);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setActiveScene(scrollScenes[0].title);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveScene(entry.target.getAttribute('data-scene') || scrollScenes[0].title);
          }
        });
      },
      { threshold: 0.55, rootMargin: '-10% 0px -10% 0px' },
    );

    stepRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const currentScene = scrollScenes.find((scene) => scene.title === activeScene) ?? scrollScenes[0];

  return (
    <section className="exec-section">
      <div className="studio-container">
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-3 mb-4 exec-head">
          <div>
            <span className="badge-pill bg-opacity-10 bg-primary text-primary">Scroll Story</span>
            <h2 className="display-6 fw-bold text-white mt-3" style={{ fontFamily: 'var(--font-display)' }}>
              Executive summary — build choreography
            </h2>
            <p className="text-muted mb-0" style={{ maxWidth: '620px' }}>
              Each phase reacts as you scroll—mirroring how the system responds to launches, updates, and experiments.
            </p>
          </div>
          <span className="text-muted small text-uppercase letter-spacing-1">Scroll-linked animation</span>
        </div>
        <Row className="g-4">
          <Col lg={5}>
            <div className="glass-card sticky-top scene-sticky p-4 p-lg-5 d-grid gap-3">
              <div className="badge rounded-pill bg-opacity-10 bg-primary text-primary text-uppercase letter-spacing-1 w-auto">
                {currentScene.label}
              </div>
              <h3 className="h4 text-white mb-1">{currentScene.title}</h3>
              <p className="text-muted mb-2">{currentScene.description}</p>
              <div className="d-flex align-items-center gap-2 text-white">
                <span className="dot-accent" />
                <span className="fw-semibold">{currentScene.kpi}</span>
              </div>
              <div className="scene-graphic">
                <div className="scene-gradient" />
                <div className="scene-orb scene-orb-1" />
                <div className="scene-orb scene-orb-2" />
                <div className="scene-grid" />
              </div>
            </div>
          </Col>
          <Col lg={7} className="d-grid gap-3">
            {scrollScenes.map((scene, idx) => {
              const isActive = scene.title === activeScene;
              return (
                <ViewportReveal key={scene.title} delay={idx * 80} variant="lift">
                  <div
                    ref={(el) => {
                      stepRefs.current[idx] = el;
                    }}
                    data-scene={scene.title}
                    className={`scene-step glass-card p-4 p-lg-5 ${isActive ? 'scene-step-active' : ''}`}
                  >
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="badge rounded-pill bg-opacity-10 bg-light text-light">{scene.label}</span>
                      <span className="text-muted small letter-spacing-1">{scene.kpi}</span>
                    </div>
                    <h3 className="h5 text-white mb-2">{scene.title}</h3>
                    <p className="text-muted mb-0">{scene.description}</p>
                  </div>
                </ViewportReveal>
              );
            })}
          </Col>
        </Row>
      </div>
    </section>
  );
}
