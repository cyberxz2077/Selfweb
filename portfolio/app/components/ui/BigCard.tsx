'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BigCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export function BigCard({ children, className, title }: BigCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'bg-slate-100 rounded-[2rem] p-8 md:p-12 lg:p-16',
        'transition-all duration-300',
        'hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)]',
        'min-h-[calc(100vh-200px)]',
        className
      )}
    >
      {title && (
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8">
          {title}
        </h1>
      )}
      {children}
    </motion.div>
  );
}
