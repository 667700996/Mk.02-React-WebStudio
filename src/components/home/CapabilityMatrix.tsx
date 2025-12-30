'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { MouseEvent } from 'react';
import { Layers, Zap, Activity, Grid, Command, Cpu } from 'lucide-react';

const gridItems = [
  {
    title: 'Design Engineering',
    description: 'Bridging the gap between Figma and production code with pixel-perfect precision.',
    icon: <Layers className="w-5 h-5" />,
    stats: ['System Architecture', 'Tokens', 'Motion']
  },
  {
    title: 'Product Storytelling',
    description: 'Narrative-driven interfaces that guide users through complex product journeys.',
    icon: <Command className="w-5 h-5" />,
    stats: ['Narrative IA', 'Docs Engine', 'Launch Kits']
  },
  {
    title: 'Operations & Growth',
    description: 'Scalable infrastructure for publishing, analytics, and experimentation.',
    icon: <Activity className="w-5 h-5" />,
    stats: ['Analytics', 'CMS + MDX', 'SEO Auto']
  },
  {
    title: 'Motion & Physics',
    description: 'Cinematic interactions powered by GPU-accelerated physics engines.',
    icon: <Zap className="w-5 h-5" />,
    stats: ['12ms Budget', 'Spring Physics', 'WebGL']
  },
  {
    title: 'System Architecture',
    description: 'Robust, type-safe foundations built for enterprise scale and speed.',
    icon: <Cpu className="w-5 h-5" />,
    stats: ['React 19', 'Edge Runtime', 'Type Safe']
  },
  {
    title: 'Universal Canvas',
    description: 'One codebase serving portfolio, product, and documentation surfaces.',
    icon: <Grid className="w-5 h-5" />,
    stats: ['Scalability', 'Multi-tenant', 'Unified Core']
  },
];

function CleanCard({ item }: { item: typeof gridItems[0] }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className="group relative border border-white/5 bg-surface-1 px-6 py-8 transition-colors hover:bg-white/[0.02]"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full flex flex-col z-20">
        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-secondary group-hover:text-white transition-colors">
            {item.icon}
        </div>
        
        <h3 className="mb-2 text-lg font-semibold text-white group-hover:text-white transition-colors">
            {item.title}
        </h3>
        <p className="mb-6 text-sm text-secondary leading-relaxed flex-grow">
            {item.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
            {item.stats.map((stat, i) => (
                <span key={i} className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded bg-white/5 text-muted">
                    {stat}
                </span>
            ))}
        </div>
      </div>
    </div>
  );
}

export default function CapabilityMatrix() {
  return (
    <section className="py-24 bg-surface-0 relative border-t border-white/5" id="capabilities">
        <div className="studio-container relative z-10">
            <div className="mb-16 max-w-2xl">
                <span className="mono-pill border-white/10 bg-white/5 text-secondary mb-4">
                    Capabilities
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
                    Full-Stack Orchestration.
                </h2>
                <p className="text-lg text-secondary/80">
                    We ship aligned squads—concept to code, instrumented and production-ready.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/5">
                {gridItems.map((item, index) => (
                    <CleanCard key={index} item={item} />
                ))}
            </div>
        </div>
    </section>
  );
}