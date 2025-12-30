'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useRef } from 'react';

const showcases = [
  {
    title: 'Bio/AI Platform',
    category: 'Enterprise System',
    summary: 'End-to-end brand + product site with live pricing, gated labs, and launch drops.',
    metric: '+38% demo intent',
    color: 'from-blue-500 to-cyan-400',
    image: 'linear-gradient(135deg, #1e3a8a 0%, #06b6d4 100%)' // Placeholder for actual image
  },
  {
    title: 'Infra Intelligence',
    category: 'SaaS Architecture',
    summary: 'System rewrite for speed, accessibility, and modular marketing at enterprise scale.',
    metric: 'TTFB: 38ms edge',
    color: 'from-emerald-500 to-lime-400',
    image: 'linear-gradient(135deg, #064e3b 0%, #84cc16 100%)'
  },
  {
    title: 'Consumer Fintech',
    category: 'Financial Product',
    summary: 'Portfolio-to-product experience with motion-led hero, docs, and support surfaces.',
    metric: 'CSAT: +22 pts',
    color: 'from-purple-500 to-pink-400',
    image: 'linear-gradient(135deg, #581c87 0%, #db2777 100%)'
  },
];

function TiltCard({ item, index }: { item: typeof showcases[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative h-full min-h-[400px] w-full rounded-3xl bg-surface-1 border border-white/5 p-8 flex flex-col justify-between group cursor-pointer"
    >
      <div 
        style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
        className="absolute inset-4 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
      >
        <div className={`absolute inset-0 rounded-2xl blur-3xl opacity-20 bg-gradient-to-br ${item.color}`} />
      </div>

      <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
        <span className="mono-pill mb-4 inline-block border-white/10 bg-black/20 backdrop-blur-md">{item.category}</span>
        <h3 className="text-3xl font-bold text-white mb-2 leading-tight">{item.title}</h3>
        <p className="text-secondary text-lg leading-relaxed">{item.summary}</p>
      </div>

      <div style={{ transform: "translateZ(25px)" }} className="relative z-10 pt-8 border-t border-white/5 mt-auto">
        <div className="flex items-center justify-between">
            <div className="flex flex-col">
                <span className="text-xs text-muted uppercase tracking-wider font-semibold">Impact</span>
                <span className={`text-xl font-mono bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>{item.metric}</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <ArrowRight className="w-4 h-4 text-white -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function WorkShowcases() {
  return (
    <section className="py-24 relative overflow-hidden" id="case-studies">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-0 w-1/3 h-1/3 bg-accent-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-accent-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="studio-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
                <span className="mono-pill text-accent-primary border-accent-primary/20 bg-accent-primary/5 mb-4">Selected Works</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                    Engineering <span className="text-secondary">meets</span> <br />
                    <span className="bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">Digital Artistry.</span>
                </h2>
                <p className="text-lg text-secondary/80">
                    Showcasing systems that blend technical precision with cinematic user experiences.
                </p>
            </div>
            <button className="group flex items-center gap-2 text-white font-medium hover:text-accent-primary transition-colors">
                <span>View all projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 perspective-1000">
          {showcases.map((item, index) => (
            <TiltCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}