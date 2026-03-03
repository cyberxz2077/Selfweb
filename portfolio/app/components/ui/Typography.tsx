'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'p' | 'small';
  className?: string;
  children: React.ReactNode;
}

export function Typography({ variant = 'p', className, children }: TypographyProps) {
  const baseStyles = 'font-sans text-[#1E3A5F]';
  
  const variants = {
    h1: 'text-4xl md:text-6xl font-bold font-display tracking-tight',
    h2: 'text-3xl md:text-4xl font-bold font-display tracking-tight',
    h3: 'text-2xl md:text-3xl font-semibold font-display tracking-tight',
    p: 'text-lg md:text-xl leading-relaxed text-[#1E3A5F]',
    small: 'text-sm leading-relaxed text-[#64748B]',
  };
  
  const classes = cn(baseStyles, variants[variant], className);
  
  switch (variant) {
    case 'h1':
      return <h1 className={classes}>{children}</h1>;
    case 'h2':
      return <h2 className={classes}>{children}</h2>;
    case 'h3':
      return <h3 className={classes}>{children}</h3>;
    case 'small':
      return <small className={classes}>{children}</small>;
    default:
      return <p className={classes}>{children}</p>;
  }
}
