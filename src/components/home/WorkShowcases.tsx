'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const showcases = [
  {
    title: 'Bio/AI Platform',
    category: 'Enterprise System',
    summary: 'End-to-end brand + product site with live pricing, gated labs, and launch drops.',
    metric: '+38% demo intent',
  },
  {
    title: 'Infra Intelligence',
    category: 'SaaS Architecture',
    summary: 'System rewrite for speed, accessibility, and modular marketing at enterprise scale.',
    metric: 'TTFB: 38ms edge',
  },
  {
    title: 'Consumer Fintech',
    category: 'Financial Product',
    summary: 'Portfolio-to-product experience with motion-led hero, docs, and support surfaces.',
    metric: 'CSAT: +22 pts',
  },
];

export default function WorkShowcases() {
  return (
    <section className="py-24 bg-surface-0 border-t border-white/5" id="case-studies">
      <div className="studio-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
                <span className="mono-pill border-white/10 bg-white/5 text-secondary mb-4">Selected Works</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                    Engineering Precision.
                </h2>
                <p className="text-lg text-secondary/80">
                    Systems that blend technical rigor with cinematic user experiences.
                </p>
            </div>
            <button className="group flex items-center gap-2 text-white font-medium hover:text-accent-primary transition-colors">
                <span>View all projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {showcases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col justify-between h-full min-h-[360px] p-8 rounded-2xl bg-surface-1 border border-white/5 hover:border-white/20 transition-colors"
            >
              <div>
                <span className="text-xs font-mono text-muted uppercase tracking-wider mb-6 block">{item.category}</span>
                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-secondary leading-relaxed">{item.summary}</p>
              </div>

              <div className="pt-8 mt-auto border-t border-white/5 flex items-center justify-between">
                <div className="flex flex-col">
                    <span className="text-[10px] text-muted uppercase tracking-wider font-semibold">Impact</span>
                    <span className="text-lg font-mono text-white">{item.metric}</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <ArrowRight className="w-4 h-4 text-white -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}