'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2, Box } from 'lucide-react';

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
  
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const y = useTransform(scrollY, [0, 400], [0, 100]);

  return (
    <section ref={containerRef} className="reboot-hero position-relative overflow-hidden min-vh-100 d-flex align-items-center bg-surface-0">
      {/* Cinematic Aurora Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-accent-primary/10 blur-[120px] mix-blend-screen animate-pulse-slow" />
         <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-accent-secondary/10 blur-[120px] mix-blend-screen animate-pulse-slow" style={{ animationDelay: '2s' }} />
         <div className="absolute top-[20%] right-[20%] w-[30vw] h-[30vw] rounded-full bg-purple-500/10 blur-[100px] mix-blend-screen animate-pulse-slow" style={{ animationDelay: '4s' }} />
      </div>

      <div className="studio-container position-relative z-10">
        <motion.div 
          className="hero-content max-w-4xl mx-auto text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          style={{ opacity, y }}
        >
          {/* Badge */}
          <motion.div variants={textVariant} className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-medium text-secondary">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-primary shadow-[0_0_8px_rgba(126,242,201,0.6)]" />
              System v2.5.0
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.div variants={textVariant}>
            <h1 className="display-1 font-bold tracking-tighter mb-6 text-white leading-[1.1]">
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 pb-2">
                Architecting
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-primary via-white to-accent-secondary">
                Digital Gravity.
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={textVariant}>
            <p className="text-xl text-secondary mb-10 max-w-2xl mx-auto leading-relaxed font-light">
              We build universal design systems that bend physics. 
              <span className="text-white/80 block mt-1">From immersive portfolios to enterprise product layers.</span>
            </p>
          </motion.div>

          {/* Actions */}
          <motion.div variants={textVariant} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 rounded-full bg-white text-surface-0 font-semibold text-sm hover:bg-gray-100 transition-colors flex items-center gap-2 group">
              <span>Deploy System</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="#showcase" className="px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white font-semibold text-sm hover:bg-white/10 transition-colors flex items-center gap-2 backdrop-blur-sm">
              <Play className="w-4 h-4 fill-current" />
              <span>Watch Showreel</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}