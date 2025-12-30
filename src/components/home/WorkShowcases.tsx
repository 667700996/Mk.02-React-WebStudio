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
                <span className="mono-pill border-white/10 bg-white/5 text-secondary mb-4">Selected engagements</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                    Executive summary — delivery record.
                </h2>
                <p className="text-lg text-secondary/80">
                    Systems that align leadership narratives with measurable product outcomes.
                </p>
            </div>
            <button className="group flex items-center gap-2 text-white font-medium hover:text-accent-primary transition-colors">
                <span>View case library</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {showcases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col justify-between h-full min-h-[400px] p-10 rounded-[2rem] bg-surface-1/50 border border-white/5 hover:border-white/10 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
              
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] font-bold text-white/60 uppercase tracking-widest mb-8">
                    {item.category}
                </span>
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight leading-tight group-hover:text-accent-primary transition-colors duration-300">{item.title}</h3>
                <p className="text-lg text-secondary leading-relaxed font-light">{item.summary}</p>
              </div>

              <div className="relative z-10 pt-8 mt-auto flex items-end justify-between border-t border-white/5">
                <div>
                    <span className="block text-[10px] text-muted uppercase tracking-widest font-semibold mb-2">Result</span>
                    <span className="text-2xl font-mono text-white tracking-tight">{item.metric}</span>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:text-white group-hover:border-white/30 group-hover:bg-white/5 transition-all duration-300">
                    <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500 ease-out" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
