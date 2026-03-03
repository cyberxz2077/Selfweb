'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface IrregularCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  roundedStyle?: 'default' | 'alt' | 'circle';
  showOverlayOnHover?: boolean;
  overlayContent?: React.ReactNode;
}

export function IrregularCard({
  children,
  className,
  hoverEffect = true,
  roundedStyle = 'default',
  showOverlayOnHover = false,
  overlayContent,
}: IrregularCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const roundedClasses = {
    default: 'rounded-[32px_16px_32px_16px]',
    alt: 'rounded-[16px_32px_16px_32px]',
    circle: 'rounded-3xl',
  };

  const baseClasses = cn(
    'bg-white border border-slate-200 overflow-hidden',
    roundedClasses[roundedStyle],
    className
  );

  const hoverClasses = hoverEffect
    ? 'transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-medium'
    : '';

  return (
    <div className="relative">
      {showOverlayOnHover && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 bg-black/40 backdrop-blur-[2px] pointer-events-none z-40"
          style={{ pointerEvents: isHovered ? 'auto' : 'none' }}
        />
      )}

      <motion.div
        className={cn(baseClasses, hoverClasses, 'relative z-50')}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ zIndex: isHovered && showOverlayOnHover ? 60 : 50 }}
      >
        {children}
        
        {showOverlayOnHover && overlayContent && isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {overlayContent}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  tags?: string[];
  image?: string;
  status?: string;
  href?: string;
  className?: string;
}

export function ProjectCard({
  title,
  description,
  tags = [],
  image,
  status,
  href,
  className,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const CardContent = (
    <IrregularCard
      className={className}
      showOverlayOnHover={!!href}
      hoverEffect={true}
    >
      <div className="p-6">
        {status && (
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
              {status}
            </span>
          </div>
        )}

        {image && (
          <div className="mb-4 rounded-2xl overflow-hidden bg-slate-100 aspect-video">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <h3 className="text-xl font-semibold text-slate-900 mb-2">
          {title}
        </h3>
        
        <p className="text-slate-600 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="tag text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {href && (
        <div className="px-6 pb-6">
          <motion.button
            className="w-full py-3 bg-slate-900 text-white rounded-xl font-medium text-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View Project →
          </motion.button>
        </div>
      )}
    </IrregularCard>
  );

  if (href) {
    return (
      <a
        href={href}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {CardContent}
      </a>
    );
  }

  return CardContent;
}

interface TextCardProps {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  className?: string;
}

export function TextCard({ title, subtitle, content, className }: TextCardProps) {
  return (
    <IrregularCard className={className} roundedStyle="circle">
      <div className="p-8">
        {subtitle && (
          <p className="text-sm font-medium text-sky-600 mb-2 uppercase tracking-wider">
            {subtitle}
          </p>
        )}
        <h3 className="text-2xl font-semibold text-slate-900 mb-4">
          {title}
        </h3>
        <div className="text-slate-600 leading-relaxed">
          {content}
        </div>
      </div>
    </IrregularCard>
  );
}
