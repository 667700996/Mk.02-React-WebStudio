'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2, Box } from 'lucide-react';

const textVariant: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1],
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export default function RebootHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax effects
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section ref={containerRef} className="reboot-hero position-relative overflow-hidden min-vh-100 d-flex align-items-center">
      {/* Clean Background - Pure gradients, no noise/particles */}
      <div className="position-absolute top-0 start-0 w-100 h-100 z-0 pointer-events-none bg-surface-0">
         <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-accent-primary/5 blur-[120px]" />
         <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-accent-secondary/5 blur-[100px]" />
      </div>

      <div className="studio-container position-relative z-10">
        <motion.div 
          className="hero-content"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content Column */}
          <div className="hero-shell">
            <motion.div variants={textVariant} className="hero-meta">
              <span className="hero-spark"></span>
              <span className="mono-pill">System v2.5.0</span>
            </motion.div>

            <motion.div variants={textVariant} className="hero-copy">
              <h1 className="display-1 fw-bold tracking-tighter mb-4 text-white">
                <span className="d-block">Architecting</span>
                <span className="d-block text-secondary">Digital Gravity.</span>
              </h1>
              <p className="lead text-secondary mb-5 max-w-2xl">
                We build universal design systems that bend physics. 
                From immersive portfolio flagships to enterprise product layers, 
                experience the weight of premium engineering.
              </p>
            </motion.div>

            <motion.div variants={textVariant} className="hero-actions">
              <Link href="/contact" className="hero-btn group">
                <span>Deploy System</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="#showcase" className="ghost-btn">
                <Play className="w-4 h-4 fill-current" />
                <span>Watch Showreel</span>
              </Link>
            </motion.div>

            <motion.div variants={textVariant} className="hero-grid">
              <div className="hero-pillars glass-card">
                <div className="hero-pillars__title d-flex align-items-center gap-2">
                  <Box className="w-4 h-4 text-accent-primary" />
                  <span>Universal</span>
                </div>
                <div className="hero-pillars__detail">One codebase, infinite surfaces.</div>
              </div>
              <div className="hero-pillars glass-card">
                <div className="hero-pillars__title d-flex align-items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent-secondary" />
                  <span>Precision</span>
                </div>
                <div className="hero-pillars__detail">Pixel-perfect engineering.</div>
              </div>
            </motion.div>
          </div>

          {/* Visual/Interactive Column */}
          <motion.div 
            style={{ opacity }}
            variants={textVariant}
            className="hero-right d-none d-lg-grid"
          >
            <div className="glass-card p-4 h-100 d-flex flex-column justify-content-between relative overflow-hidden group hover:border-accent-primary/50 transition-colors duration-500">
              {/* Decorative Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="d-flex justify-content-between align-items-center mb-4 relative z-1">
                <span className="hero-right__badge">System Status</span>
                <span className="mono-pill text-xs">All Systems Go</span>
              </div>

              <div className="hero-right__stats relative z-1">
                <div className="stat-line">
                  <span>Frame Budget</span>
                  <span className="font-mono text-accent-primary">12ms</span>
                </div>
                <div className="stat-line">
                  <span>LCP Score</span>
                  <span className="font-mono text-emerald-400">0.8s</span>
                </div>
                <div className="stat-line">
                  <span>Accessibility</span>
                  <span className="font-mono text-purple-400">100%</span>
                </div>
              </div>

              <div className="hero-right__timeline mt-4 relative z-1">
                <div className="text-xs text-muted mb-3 font-mono uppercase tracking-wider">Deployment Log</div>
                <div className="timeline-row">
                  <span>Running static generation...</span>
                  <span className="text-accent-secondary">Done</span>
                </div>
                <div className="timeline-row">
                  <span>Optimizing assets...</span>
                  <span className="text-accent-secondary">Done</span>
                </div>
                <div className="timeline-row">
                  <span>Hydrating interaction layer...</span>
                  <span className="text-accent-primary animate-pulse">Active</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}