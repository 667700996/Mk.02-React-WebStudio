'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, Variants, useReducedMotion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2, Box } from 'lucide-react';
import HeroNetwork from '@/components/home/HeroNetwork';

const textVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1], // Cubic bezier for "luxury" feel
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function RebootHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const y = useTransform(scrollY, [0, 400], [0, 100]);

  return (
    <section ref={containerRef} className="reboot-hero position-relative overflow-hidden min-vh-100 d-flex align-items-center bg-surface-0">
      {/* Cinematic Aurora Background - Layered & Moving */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden bg-surface-0">
         <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-accent-primary/5 blur-[120px] mix-blend-screen animate-pulse-slow" />
         <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-accent-secondary/5 blur-[140px] mix-blend-screen animate-pulse-slow" style={{ animationDelay: '4s' }} />
         <div className="absolute top-[40%] left-[40%] w-[40vw] h-[40vw] rounded-full bg-purple-500/5 blur-[100px] mix-blend-overlay animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>
      {!shouldReduceMotion && <HeroNetwork />}

      <div className="studio-container position-relative z-10 h-full flex flex-col justify-center">
        <motion.div 
          className="hero-content max-w-5xl mx-auto text-center mt-20"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          style={{ opacity, y }}
        >
          {/* Badge */}
          <motion.div variants={textVariant} className="flex justify-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md text-xs font-medium text-secondary tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
              Enterprise-grade system
            </span>
          </motion.div>

          {/* Main Title - Massive & Tight */}
          <motion.div variants={textVariant}>
            <h1 className="text-[3.5rem] sm:text-[5rem] md:text-[6.5rem] font-bold tracking-tighter mb-8 text-white leading-[0.95]">
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">
                Enterprise
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/40 font-light italic font-serif">
                experience systems.
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={textVariant}>
            <p className="text-xl md:text-2xl text-secondary mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Strategy, design, and engineering unified into one flagship system. <br className="hidden md:block" />
              <span className="text-white/60">Built to scale from executive narratives to product education and launch operations.</span>
            </p>
          </motion.div>

          {/* Actions - Magnetic Feel */}
          <motion.div variants={textVariant} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact" className="px-8 py-4 rounded-full bg-white text-surface-0 font-medium text-base hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 group">
              <span>Start engagement</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="#showreel" className="px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white font-medium text-base hover:bg-white/10 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 backdrop-blur-sm">
              <Play className="w-4 h-4 fill-current" />
              <span>Showreel</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
