'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps extends Omit<HTMLMotionProps<"button">, 'children'> {
  variant?: 'primary' | 'outline' | 'ghost' | 'soft';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]';

  const variants = {
    primary: 'bg-slate-900 text-white hover:bg-slate-800 hover:-translate-y-0.5 hover:shadow-medium',
    outline: 'border border-slate-200 text-slate-900 bg-transparent hover:bg-slate-50 hover:-translate-y-0.5',
    ghost: 'text-slate-600 hover:text-slate-900 hover:bg-slate-50',
    soft: 'bg-slate-100 text-slate-900 hover:bg-slate-200 hover:-translate-y-0.5',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-xl',
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg rounded-2xl',
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}

interface IconButtonProps extends Omit<HTMLMotionProps<"button">, 'children'> {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function IconButton({
  children,
  variant = 'ghost',
  size = 'md',
  className,
  ...props
}: IconButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]';

  const variants = {
    primary: 'bg-slate-900 text-white hover:bg-slate-800',
    outline: 'border border-slate-200 text-slate-900 hover:bg-slate-50',
    ghost: 'text-slate-600 hover:text-slate-900 hover:bg-slate-50',
  };

  const sizes = {
    sm: 'w-8 h-8 rounded-lg',
    md: 'w-10 h-10 rounded-xl',
    lg: 'w-12 h-12 rounded-2xl',
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}
