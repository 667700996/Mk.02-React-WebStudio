'use client';

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
  return (
    <div className="group relative p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all duration-500 hover:border-white/10 hover:bg-white/[0.04]">
      {/* Subtle Inner Glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative z-10">
        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-0 border border-white/10 text-secondary shadow-lg group-hover:scale-110 group-hover:border-white/20 group-hover:text-white transition-all duration-300">
            {item.icon}
        </div>
        
        <h3 className="mb-3 text-lg font-semibold text-white tracking-tight">
            {item.title}
        </h3>
        <p className="mb-8 text-sm text-secondary leading-relaxed opacity-80">
            {item.description}
        </p>

        <ul className="flex flex-wrap gap-2">
            {item.stats.map((stat, i) => (
                <li key={i} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] font-medium text-muted uppercase tracking-wider group-hover:border-white/10 transition-colors">
                    {stat}
                </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default function CapabilityMatrix() {
  return (
    <section className="py-32 bg-surface-0 relative" id="capabilities">
        <div className="studio-container relative z-10">
            <div className="mb-20 text-center max-w-3xl mx-auto">
                <span className="text-xs font-semibold text-accent-primary tracking-[0.2em] uppercase mb-4 block">
                    Capabilities
                </span>
                <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6 leading-tight">
                    Integrated <span className="text-muted">Workflow.</span>
                </h2>
                <p className="text-lg text-secondary leading-relaxed max-w-2xl mx-auto">
                    From architectural blueprints to final pixel polish, we unify the entire product lifecycle under one rigorous system.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {gridItems.map((item, index) => (
                    <CleanCard key={index} item={item} />
                ))}
            </div>
        </div>
    </section>
  );
}