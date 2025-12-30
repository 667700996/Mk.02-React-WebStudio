'use client';

import { motion } from 'framer-motion';
import { Layers, Box, Cpu, Zap, GitMerge, Shield } from 'lucide-react';

const lanes = [
  {
    id: 'narrative',
    icon: <Layers className="w-5 h-5 text-accent-tertiary" />,
    title: 'Narrative Layer',
    description: 'Unified voice & story across all surfaces.',
    tags: ['Hero Systems', 'Case OS', 'Launch Kits'],
    color: 'border-accent-tertiary/20 bg-accent-tertiary/5'
  },
  {
    id: 'product',
    icon: <Box className="w-5 h-5 text-accent-secondary" />,
    title: 'Product Layer',
    description: 'Conversion-tuned education & onboarding.',
    tags: ['Interactive Pricing', 'Docs Engine', 'Service Menus'],
    color: 'border-accent-secondary/20 bg-accent-secondary/5'
  },
  {
    id: 'system',
    icon: <Cpu className="w-5 h-5 text-accent-primary" />,
    title: 'Core System',
    description: 'The engineering spine powering it all.',
    tags: ['Design Tokens', 'A11y Gates', 'Analytics'],
    color: 'border-accent-primary/20 bg-accent-primary/5'
  },
];

const features = [
  { icon: <Zap className="w-4 h-4" />, label: 'Edge Rendering' },
  { icon: <GitMerge className="w-4 h-4" />, label: 'Atomic Blocks' },
  { icon: <Shield className="w-4 h-4" />, label: 'Type Safe' },
];

export default function SystemBlueprint() {
  return (
    <section className="py-24 relative overflow-hidden" id="system">
      <div className="studio-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="mono-pill border-white/10 bg-white/5 mb-6">System Architecture</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
                One codebase. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-tertiary">
                    Infinite surfaces.
                </span>
            </h2>
            <p className="text-lg text-secondary">
                We architect universal-grade foundations so your portfolio, product, and launch pages all share the same DNA.
            </p>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Connecting Lines Layer (Visual only, behind cards) */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent hidden lg:block -translate-y-1/2" />
            
            {lanes.map((lane, i) => (
                <motion.div
                    key={lane.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className={`relative p-8 rounded-3xl border backdrop-blur-sm ${lane.color} group hover:border-white/20 transition-colors`}
                >
                    <div className="absolute -top-3 left-8 px-3 py-1 bg-surface-0 border border-white/10 rounded-full text-xs font-mono text-muted uppercase tracking-wider">
                        Layer 0{i + 1}
                    </div>

                    <div className="mb-6 p-3 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                        {lane.icon}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">{lane.title}</h3>
                    <p className="text-secondary mb-8 h-12">{lane.description}</p>

                    <div className="space-y-3">
                        {lane.tags.map((tag) => (
                            <div key={tag} className="flex items-center gap-3 text-sm text-muted group-hover:text-white transition-colors">
                                <div className="w-1.5 h-1.5 rounded-full bg-current opacity-50" />
                                {tag}
                            </div>
                        ))}
                    </div>

                    {/* Animated Pulse on Hover */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </motion.div>
            ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-4">
            {features.map((feat, i) => (
                <motion.div
                    key={feat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    className="px-6 py-3 rounded-full border border-white/5 bg-white/5 flex items-center gap-3 text-sm text-secondary hover:bg-white/10 hover:text-white transition-colors"
                >
                    {feat.icon}
                    <span className="font-medium">{feat.label}</span>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}