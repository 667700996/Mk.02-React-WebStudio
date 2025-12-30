'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Home, FileText, Mail, Github, Twitter, Terminal, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface CommandItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  shortcut?: string[];
  action: () => void;
}

export default function CommandMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const router = useRouter();

  const toggleOpen = useCallback(() => setIsOpen((prev) => !prev), []);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        toggleOpen();
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [toggleOpen]);

  const runCommand = useCallback((command: () => void) => {
    setIsOpen(false);
    command();
  }, []);

  const commands: CommandItem[] = [
    {
      id: 'home',
      label: 'Home',
      icon: <Home className="w-4 h-4" />,
      action: () => router.push('/'),
    },
    {
      id: 'blog',
      label: 'Blog',
      icon: <FileText className="w-4 h-4" />,
      action: () => router.push('/blog'),
    },
    {
      id: 'contact',
      label: 'Contact',
      icon: <Mail className="w-4 h-4" />,
      action: () => router.push('/contact'),
    },
    {
      id: 'github',
      label: 'GitHub',
      icon: <Github className="w-4 h-4" />,
      action: () => window.open('https://github.com', '_blank'),
    },
    {
      id: 'twitter',
      label: 'Twitter',
      icon: <Twitter className="w-4 h-4" />,
      action: () => window.open('https://twitter.com', '_blank'),
    },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-start justify-center pt-[20vh] px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-xl shadow-2xl overflow-hidden"
          >
            <div className="flex items-center px-4 border-b border-white/10">
              <Search className="w-5 h-5 text-gray-500 mr-3" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or search..."
                className="flex-1 h-14 bg-transparent text-white placeholder-gray-500 focus:outline-none text-lg font-medium"
                autoFocus
              />
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/10 rounded-md transition-colors"
              >
                <span className="sr-only">Close</span>
                <kbd className="hidden sm:inline-block px-2 py-0.5 text-xs font-mono text-gray-400 bg-white/5 border border-white/10 rounded-md shadow-sm">ESC</kbd>
                <X className="w-5 h-5 text-gray-400 sm:hidden" />
              </button>
            </div>
            
            <div className="py-2 max-h-[60vh] overflow-y-auto">
              {filteredCommands.length === 0 ? (
                <div className="px-4 py-8 text-center text-gray-500">
                  <p>No results found.</p>
                </div>
              ) : (
                <div className="px-2">
                    <div className="px-2 py-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Suggestions
                    </div>
                  {filteredCommands.map((cmd) => (
                    <button
                      key={cmd.id}
                      onClick={() => runCommand(cmd.action)}
                      className="w-full flex items-center px-3 py-3 text-sm text-gray-300 hover:bg-white/10 hover:text-white rounded-lg transition-colors group text-left"
                    >
                      <div className="p-2 mr-3 bg-white/5 rounded-md text-gray-400 group-hover:text-white group-hover:bg-white/10 transition-colors">
                        {cmd.icon}
                      </div>
                      <span className="flex-1 font-medium">{cmd.label}</span>
                      {cmd.shortcut && (
                        <div className="flex gap-1">
                          {cmd.shortcut.map((key) => (
                            <kbd
                              key={key}
                              className="px-2 py-1 text-xs font-mono text-gray-500 bg-black/20 rounded border border-white/5"
                            >
                              {key}
                            </kbd>
                          ))}
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <div className="px-4 py-2 border-t border-white/5 bg-white/5 flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center gap-2">
                <Terminal className="w-3 h-3" />
                <span>System Ready</span>
              </div>
              <div className="flex gap-3">
                <span>Select <kbd className="font-sans">↵</kbd></span>
                <span>Navigate <kbd className="font-sans">↑↓</kbd></span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
