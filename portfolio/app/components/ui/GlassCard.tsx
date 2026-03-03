'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export function GlassCard({
  children,
  className,
  hoverEffect = true,
  padding = 'md',
}: GlassCardProps) {
  const baseStyles = 'glass-card';
  
  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };
  
  const hoverStyles = hoverEffect ? '' : 'hover:transform-none hover:shadow-none';
  
  const classes = cn(baseStyles, paddings[padding], hoverStyles, className);
  
  return <div className={classes}>{children}</div>;
}
