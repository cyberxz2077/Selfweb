'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Work', href: '/projects' },
  { name: 'Thoughts', href: '/thoughts' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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
              {/* Logo */}
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

              <div className="h-6 w-px bg-black/10 mx-1" />

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-1">
                {NAV_LINKS.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.08 }}
                  >
                    <Link
                      href={link.href}
                      className={`
                        relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                        ${pathname === link.href 
                          ? 'text-slate-900 bg-black/5' 
                          : 'text-slate-600 hover:text-slate-900 hover:bg-black/[0.03]'
                        }
                      `}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileTap={{ scale: 0.9 }}
              >
                <div className="relative w-5 h-4">
                  <motion.span
                    className="absolute left-0 w-full h-0.5 bg-slate-900 rounded-full"
                    animate={{
                      top: isMobileMenuOpen ? '50%' : '0%',
                      rotate: isMobileMenuOpen ? 45 : 0,
                      translateY: isMobileMenuOpen ? '-50%' : '0%'
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-slate-900 rounded-full"
                    animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="absolute left-0 w-full h-0.5 bg-slate-900 rounded-full"
                    animate={{
                      bottom: isMobileMenuOpen ? '50%' : '0%',
                      rotate: isMobileMenuOpen ? -45 : 0,
                      translateY: isMobileMenuOpen ? '50%' : '0%'
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
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
                        className={`
                          block px-6 py-4 rounded-2xl text-lg font-medium transition-all
                          ${pathname === link.href
                            ? 'text-slate-900 bg-black/5'
                            : 'text-slate-600 hover:text-slate-900 hover:bg-black/[0.03]'
                          }
                        `}
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
