'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'glass' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Badge({
  children,
  variant = 'default',
  size = 'md',
  className,
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center px-3 py-1 rounded-full font-medium transition-all duration-300';
  
  const variants = {
    default: 'bg-[#0EA5E9]/10 text-[#0EA5E9] hover:bg-[#0EA5E9]/20',
    glass: 'glass-button text-[#0EA5E9]',
    outline: 'border border-[#0EA5E9] text-[#0EA5E9]',
  };
  
  const sizes = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-3 py-1',
    lg: 'text-base px-4 py-1.5',
  };
  
  const classes = cn(baseStyles, variants[variant], sizes[size], className);
  
  return <span className={classes}>{children}</span>;
}
