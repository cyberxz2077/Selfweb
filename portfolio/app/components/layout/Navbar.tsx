'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/app/components/ui/DraggableGrid';

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'thoughts', label: 'Thoughts' },
];

interface NavbarProps {
  isDark?: boolean;
  onToggleTheme?: () => void;
}

export function Navbar({ isDark = false, onToggleTheme }: NavbarProps) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [slideStyle, setSlideStyle] = useState({ left: 0, width: 0 });
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const pathname = usePathname();

  useEffect(() => {
    const activeButton = buttonRefs.current[activeFilter];
    if (activeButton) {
      setSlideStyle({
        left: activeButton.offsetLeft,
        width: activeButton.offsetWidth,
      });
    }
  }, [activeFilter]);

  useEffect(() => {
    const pathToFilter: Record<string, string> = {
      '/': 'all',
      '/about': 'about',
      '/projects': 'projects',
      '/thoughts': 'thoughts',
    };
    setActiveFilter(pathToFilter[pathname] || 'all');
  }, [pathname]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none"
    >
      <div className="pointer-events-auto">
        <div className={`glass-frost rounded-full px-2 py-2 shadow-medium ${isDark ? 'dark-glass' : ''}`}>
          <div className="flex items-center gap-1 relative">
            <Link href="/" className="relative group">
              <motion.div
                className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-black/5 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className={`font-semibold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  黄鑫哲
                </span>
              </motion.div>
            </Link>

            <div className="h-6 w-px bg-slate-200/20 mx-2" />

            <div className="hidden md:flex items-center gap-1 relative">
              <motion.div
                className="absolute h-9 bg-slate-900 rounded-full transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
                animate={{
                  left: slideStyle.left + 4,
                  width: slideStyle.width - 8,
                }}
              />
              {FILTERS.map((filter) => (
                <motion.button
                  key={filter.id}
                  ref={(el) => { buttonRefs.current[filter.id] = el; }}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`relative z-10 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${activeFilter === filter.id ? 'text-white' : `${isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {filter.label}
                </motion.button>
              ))}
            </div>

            <div className="h-6 w-px bg-slate-200/20 mx-2" />

            {onToggleTheme && (
              <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
            )}

            <div className="h-6 w-px bg-slate-200/20 mx-2" />

            <Link
              href="/contact"
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${isDark ? 'bg-white text-slate-900 hover:bg-slate-200' : 'bg-slate-900 text-white hover:bg-slate-800'}`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
