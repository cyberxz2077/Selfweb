'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Thoughts', href: '/thoughts' },
  { name: 'Contact', href: '/contact' },
];

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'media', label: 'Media' },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const pathname = usePathname();

  useEffect(() => {
    setActiveFilter('all');
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none"
      >
        <div className="pointer-events-auto">
          <div className="glass-frost rounded-full px-2 py-2 shadow-medium">
            <div className="flex items-center gap-1">
              <Link href="/" className="relative group">
                <motion.div
                  className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-black/5 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="font-semibold text-slate-900 tracking-tight">
                    黄鑫哲
                  </span>
                </motion.div>
              </Link>

              <div className="h-6 w-px bg-slate-200/20 mx-2" />

              <div className="hidden md:flex items-center gap-1">
                {FILTERS.map((filter) => (
                  <motion.button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === filter.id ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900 hover:bg-white/10'}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {filter.label}
                  </motion.button>
                ))}
              </div>

              <div className="h-6 w-px bg-slate-200/20 mx-2" />

              <Link
                href="/contact"
                className="px-5 py-2 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-24 left-6 right-6 z-50"
            >
              <div className="glass-frost rounded-3xl p-4 shadow-large">
                <div className="flex flex-col gap-2">
                  {NAV_LINKS.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block px-6 py-4 rounded-2xl text-lg font-medium transition-all ${pathname === link.href ? 'text-slate-900 bg-black/5' : 'text-slate-600 hover:text-slate-900 hover:bg-black/[0.03]'}`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
