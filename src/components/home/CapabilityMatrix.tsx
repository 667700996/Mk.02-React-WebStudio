'use client';

import { useRef, useState, MouseEvent } from 'react';
import { Layers, Zap, Activity, Grid, Command, Cpu } from 'lucide-react';

const gridItems = [
  {
    title: 'Design Engineering',
    description: 'Pixel-perfect translation from Figma to React.',
    icon: <Layers className="w-5 h-5" />,
    stats: ['System Architecture', 'Tokens']
  },
  {
    title: 'Product Storytelling',
    description: 'Narrative interfaces guiding user journeys.',
    icon: <Command className="w-5 h-5" />,
    stats: ['Narrative IA', 'Docs Engine']
  },
  {
    title: 'Operations & Growth',
    description: 'Infrastructure for scalable publishing.',
    icon: <Activity className="w-5 h-5" />,
    stats: ['Analytics', 'CMS + MDX']
  },
  {
    title: 'Motion & Physics',
    description: 'GPU-accelerated cinematic interactions.',
    icon: <Zap className="w-5 h-5" />,
    stats: ['12ms Budget', 'Spring Physics']
  },
  {
    title: 'System Architecture',
    description: 'Type-safe foundations for scale.',
    icon: <Cpu className="w-5 h-5" />,
    stats: ['React 19', 'Edge Runtime']
  },
  {
    title: 'Universal Canvas',
    description: 'Unified core serving all surfaces.',
    icon: <Grid className="w-5 h-5" />,
    stats: ['Scalability', 'Multi-tenant']
  }
];

export default function CapabilityMatrix() {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  return (
    <section className="py-32 bg-surface-0 relative overflow-hidden" id="capabilities">
        <div className="studio-container relative z-10">
            <div className="mb-24 md:flex md:items-end md:justify-between">
                <div className="max-w-2xl">
                    <span className="text-xs font-bold text-accent-primary tracking-[0.2em] uppercase mb-6 block">
                        Capabilities
                    </span>
                    <h2 className="text-5xl md:text-6xl font-medium text-white tracking-tight leading-[1.1]">
                        Executive summary — capabilities. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">
                            Systems and delivery.
                        </span>
                    </h2>
                </div>
                <p className="mt-8 md:mt-0 text-lg text-secondary leading-relaxed max-w-sm text-right">
                    We bridge the gap between creative vision and rigorous technical execution.
                </p>
            </div>

            <div 
                ref={divRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleFocus}
                onMouseLeave={handleBlur}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative"
            >
                {/* Spotlight Overlay */}
                <div
                    className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                    style={{
                        opacity,
                        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.1), transparent 40%)`,
                    }}
                />

                {gridItems.map((item, index) => (
                    <div 
                        key={index} 
                        className="group relative h-full rounded-3xl border border-white/10 bg-surface-1/50 px-8 py-10 overflow-hidden"
                    >
                        {/* Spotlight Border Effect */}
                        <div
                            className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                            style={{
                                background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.1), transparent 40%)`,
                            }}
                        />
                        
                        <div className="relative z-10">
                            <div className="mb-8 inline-flex items-center justify-center p-3 rounded-xl bg-white/5 border border-white/10 text-secondary group-hover:text-white group-hover:bg-white/10 transition-colors duration-500">
                                {item.icon}
                            </div>
                            
                            <h3 className="mb-4 text-xl font-medium text-white tracking-tight">
                                {item.title}
                            </h3>
                            <p className="mb-8 text-secondary/80 leading-relaxed font-light">
                                {item.description}
                            </p>

                            <div className="pt-8 border-t border-white/5 flex gap-3">
                                {item.stats.map((stat, i) => (
                                    <span key={i} className="text-xs font-medium text-muted uppercase tracking-wider">
                                        {stat}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}
