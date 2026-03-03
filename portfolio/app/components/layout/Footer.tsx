'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="font-semibold text-slate-900 text-lg">黄鑫哲</span>
              </div>
              <p className="text-slate-600 max-w-sm mb-6">
                AI Product Manager building the future with multi-agent systems and Vibe Coding.
              </p>
              
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-sm text-emerald-700 font-medium">Open to opportunities</span>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.h4
              className="text-slate-900 font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Navigation
            </motion.h4>
            <motion.ul
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {['Home', 'About', 'Work', 'Thoughts', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                    className="text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Contact */}
          <div>
            <motion.h4
              className="text-slate-900 font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Contact
            </motion.h4>
            <motion.div
              className="space-y-3 text-slate-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <a href="mailto:Cyberxz2077@gmail.com" className="block hover:text-slate-900 transition-colors">
                Cyberxz2077@gmail.com
              </a>
              <a href="tel:13142263877" className="block hover:text-slate-900 transition-colors">
                13142263877
              </a>
              <p>Hangzhou, China</p>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-sm text-slate-500">
            © {currentYear} 黄鑫哲. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
