'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { MouseEvent } from 'react';
import { Layers, Zap, Activity, Grid, Command, Cpu } from 'lucide-react';

const gridItems = [
  {
    title: 'Design Engineering',
    description: 'Bridging the gap between Figma and production code with pixel-perfect precision.',
    icon: <Layers className="w-6 h-6" />,
    stats: ['System Architecture', 'Design Tokens', 'Motion Ramps']
  },
  {
    title: 'Product Storytelling',
    description: 'Narrative-driven interfaces that guide users through complex product journeys.',
    icon: <Command className="w-6 h-6" />,
    stats: ['Narrative IA', 'Interactive Docs', 'Launch Kits']
  },
  {
    title: 'Operations & Growth',
    description: 'Scalable infrastructure for publishing, analytics, and experimentation.',
    icon: <Activity className="w-6 h-6" />,
    stats: ['Analytics Schema', 'CMS + MDX', 'SEO Automation']
  },
  {
    title: 'Motion & Physics',
    description: 'Cinematic interactions powered by GPU-accelerated physics engines.',
    icon: <Zap className="w-6 h-6" />,
    stats: ['12ms Budget', 'Spring Physics', 'WebGL Ready']
  },
  {
    title: 'System Architecture',
    description: 'Robust, type-safe foundations built for enterprise scale and speed.',
    icon: <Cpu className="w-6 h-6" />,
    stats: ['React 19', 'Edge Runtime', 'Type Safe']
  },
  {
    title: 'Universal Canvas',
    description: 'One codebase serving portfolio, product, and documentation surfaces.',
    icon: <Grid className="w-6 h-6" />,
    stats: ['Infinite Scalability', 'Multi-tenant', 'Unified Core']
  },
];

function HoloCard({ item }: { item: typeof gridItems[0] }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className="group relative border border-white/10 bg-surface-1 px-8 py-10 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(126, 242, 201, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full flex flex-col">
        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500">
            <div className="text-accent-primary opacity-80 group-hover:opacity-100 transition-opacity">
                {item.icon}
            </div>
        </div>
        
        <h3 className="mb-3 text-xl font-bold text-white group-hover:text-accent-primary transition-colors duration-300">
            {item.title}
        </h3>
        <p className="mb-8 text-secondary leading-relaxed flex-grow">
            {item.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
            {item.stats.map((stat, i) => (
                <span key={i} className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-muted border border-white/5">
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
    <section className="py-32 relative bg-surface-0" id="capabilities">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        
        <div className="studio-container relative z-10">
            <div className="mb-20 max-w-2xl">
                <span className="mono-pill border-accent-secondary/20 bg-accent-secondary/5 text-accent-secondary mb-6">
                    Holo-Grid Matrix
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                    Full-Stack <br />
                    <span className="bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent">
                        Orchestration.
                    </span>
                </h2>
                <p className="text-lg text-secondary">
                    We ship aligned squads—concept to code, instrumented and production-ready.
                    Every layer of the stack is tuned for performance and delight.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-white/10 bg-white/5 rounded-3xl overflow-hidden divide-y divide-white/10 md:divide-y-0 lg:divide-y-0 lg:divide-x md:divide-x [&>div]:border-b md:[&>div]:border-b-0 lg:[&>div]:border-b-0">
                {gridItems.map((item, index) => (
                    <HoloCard key={index} item={item} />
                ))}
            </div>
        </div>
    </section>
  );
}