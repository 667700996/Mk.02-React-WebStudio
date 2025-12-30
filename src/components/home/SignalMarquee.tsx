'use client';

import { motion } from 'framer-motion';

const signals = [
  'Next 15 / React 19',
  'Edge streaming',
  'Global CDN',
  'Design Tokens',
  'MDX Engine',
  'A11y First',
  'WebGL Ready',
  'RUM Tracking',
  'Auto-Deploy',
  'Zero-Runtime CSS',
  'Type-Safe',
];

export default function SignalMarquee() {
  return (
    <section className="relative py-8 border-y border-white/5 bg-surface-0 overflow-hidden">
      {/* Gradient Masks */}
      <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-surface-0 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-surface-0 to-transparent z-10 pointer-events-none" />

      <div className="flex">
        <motion.div
          className="flex gap-12 items-center flex-nowrap whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            duration: 40,
            ease: "linear",
          }}
        >
          {[...signals, ...signals, ...signals, ...signals].map((signal, index) => (
            <div
              key={`${signal}-${index}`}
              className="group flex items-center gap-3 text-sm font-mono uppercase tracking-widest text-muted hover:text-white transition-colors cursor-default"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent-primary/40 group-hover:bg-accent-primary group-hover:shadow-[0_0_8px_rgba(126,242,201,0.6)] transition-all duration-300" />
              {signal}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}