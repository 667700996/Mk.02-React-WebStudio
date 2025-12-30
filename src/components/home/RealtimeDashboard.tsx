'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Cpu, Database, Globe, Server, Wifi } from 'lucide-react';

const generateData = (length: number) => {
  return Array.from({ length }, () => Math.floor(Math.random() * 40) + 30);
};

export default function RealtimeDashboard() {
  const [trafficData, setTrafficData] = useState(generateData(20));
  const [cpuLoad, setCpuLoad] = useState(42);
  const [memoryUsage, setMemoryUsage] = useState(64);
  const [visitors, setVisitors] = useState(1284);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrafficData((prev) => {
        const newData = [...prev.slice(1), Math.floor(Math.random() * 50) + 20];
        return newData;
      });
      setCpuLoad(Math.floor(Math.random() * 30) + 30);
      setMemoryUsage(Math.floor(Math.random() * 20) + 50);
      setVisitors((prev) => prev + Math.floor(Math.random() * 5) - 2);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="exec-section relative border-y border-white/5 bg-black/40 backdrop-blur-sm">
      <div className="studio-container">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6 exec-head">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Operational</span>
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Executive summary — live telemetry</h2>
            <p className="text-white/60 mt-2 max-w-lg">
              Continuous observability across edge nodes, active sessions, and global latency.
            </p>
          </div>
          <div className="flex gap-4">
             <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 flex items-center gap-3">
                <Globe className="w-4 h-4 text-accent-primary" />
                <div className="flex flex-col">
                    <span className="text-[10px] text-white/40 uppercase tracking-wider">Region</span>
                    <span className="text-xs font-mono text-white">us-east-1</span>
                </div>
             </div>
             <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 flex items-center gap-3">
                <Wifi className="w-4 h-4 text-emerald-400" />
                <div className="flex flex-col">
                    <span className="text-[10px] text-white/40 uppercase tracking-wider">Latency</span>
                    <span className="text-xs font-mono text-white">24ms</span>
                </div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Traffic Monitor */}
          <div className="md:col-span-2 p-6 rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex items-center justify-between mb-6 relative z-10">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent-primary/10">
                  <Activity className="w-5 h-5 text-accent-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Edge Traffic</h3>
                  <p className="text-xs text-white/40 font-mono">Requests / sec</p>
                </div>
              </div>
              <span className="text-2xl font-mono text-white">{visitors}</span>
            </div>
            
            <div className="h-48 flex items-end justify-between gap-1 relative z-10">
              {trafficData.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ height: 0 }}
                  animate={{ height: `${value}%` }}
                  transition={{ type: 'tween', duration: 0.6, ease: 'easeOut' }}
                  className="w-full bg-accent-primary/20 rounded-t-sm relative group/bar"
                >
                    <motion.div 
                        className="absolute bottom-0 left-0 w-full bg-accent-primary opacity-60"
                        animate={{ height: '100%' }}
                        transition={{ type: 'tween', duration: 0.6, ease: 'easeOut' }}
                    />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Resource Stack */}
          <div className="grid grid-cols-1 gap-6">
             {/* CPU Card */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden group">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <Cpu className="w-4 h-4 text-purple-400" />
                        <span className="text-sm font-semibold text-white">CPU Load</span>
                    </div>
                    <span className="text-sm font-mono text-purple-300">{cpuLoad}%</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                        className="h-full bg-purple-500"
                        animate={{ width: `${cpuLoad}%` }}
                        transition={{ type: 'tween', duration: 0.6, ease: 'easeOut' }}
                    />
                </div>
            </div>

            {/* Memory Card */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden group">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <Database className="w-4 h-4 text-orange-400" />
                        <span className="text-sm font-semibold text-white">Memory</span>
                    </div>
                    <span className="text-sm font-mono text-orange-300">{memoryUsage}%</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                        className="h-full bg-orange-500"
                        animate={{ width: `${memoryUsage}%` }}
                        transition={{ type: 'tween', duration: 0.6, ease: 'easeOut' }}
                    />
                </div>
            </div>

             {/* Server Status */}
             <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Server className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-semibold text-white">Vercel Edge</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-xs text-emerald-400 font-mono">OPERATIONAL</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
