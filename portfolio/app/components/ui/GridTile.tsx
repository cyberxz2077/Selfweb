'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GridTileProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'auto';
  href?: string;
  onClick?: () => void;
}

export function GridTile({
  children,
  className,
  size = 'md',
  href,
  onClick,
}: GridTileProps) {
  const sizeClasses = {
    sm: 'aspect-square',
    md: 'aspect-square',
    lg: 'aspect-video',
    auto: '',
  };

  const baseClasses = cn(
    'bg-slate-100 rounded-3xl p-6 relative overflow-hidden',
    'transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]',
    'hover:bg-slate-200 hover:-translate-y-1 hover:shadow-soft',
    sizeClasses[size],
    className
  );

  const Content = () => (
    <div className={baseClasses}>
      {children}
      {(href || onClick) && (
        <div className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-soft">
          <span className="text-slate-900 text-lg">↗</span>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileTap={{ scale: 0.98 }}
      >
        <Content />
      </motion.a>
    );
  }

  if (onClick) {
    return (
      <motion.button
        onClick={onClick}
        whileTap={{ scale: 0.98 }}
      >
        <Content />
      </motion.button>
    );
  }

  return <Content />;
}

interface TextTileProps {
  title: string;
  subtitle?: string;
  content?: React.ReactNode;
  className?: string;
  href?: string;
}

export function TextTile({ title, subtitle, content, className, href }: TextTileProps) {
  return (
    <GridTile href={href} className={className}>
      <div className="h-full flex flex-col">
        {subtitle && (
          <div className="text-sm text-sky-600 font-medium mb-2 uppercase tracking-wider">
            {subtitle}
          </div>
        )}
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
          {title}
        </h3>
        {content && <div className="text-slate-600 text-base md:text-lg">{content}</div>}
        <div className="flex-1" />
      </div>
    </GridTile>
  );
}

interface ProjectTileProps {
  title: string;
  description?: string;
  tags?: string[];
  image?: string;
  status?: string;
  href?: string;
  className?: string;
}

export function ProjectTile({
  title, description, tags = [], image, status, href, className }: ProjectTileProps) {
  return (
    <GridTile href={href} className={className}>
      <div className="h-full flex flex-col">
        <div className="flex items-center justify-between mb-4">
          {status && (
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-xs text-slate-500 font-medium">
                {status}
              </span>
            </div>
          )}
        </div>
        {image && (
          <div className="mb-4 rounded-2xl overflow-hidden bg-slate-200">
            <img src={image} alt={title} className="w-full h-40 object-cover" />
          </div>
        )}
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          {title}
        </h3>
        {description && (
          <p className="text-slate-600 text-sm mb-4 line-clamp-2">
            {description}
          </p>
        )}
        {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-auto">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white rounded-full text-xs text-slate-600">
                  {tag}
                </span>
              ))}
            </div>
          )}
      </div>
    </GridTile>
  );
}

interface SocialTileProps {
  name: string;
  username?: string;
  platform?: string;
  avatar?: string;
  href?: string;
  className?: string;
}

export function SocialTile({ name, username, platform, avatar, href, className }: SocialTileProps) {
  return (
    <GridTile href={href} className={className}>
      <div className="h-full flex flex-col">
        {avatar && (
          <div className="mb-4">
            <img src={avatar} alt={name} className="w-12 h-12 rounded-full bg-slate-200" />
          </div>
        )}
        <h3 className="text-lg font-bold text-slate-900">
          {name}
        </h3>
        {username && (
          <p className="text-slate-600 text-sm">
            {username}
          </p>
        )}
        {platform && (
          <div className="flex items-center gap-2 mt-2">
            <span className="px-3 py-1 bg-white rounded-full text-xs text-slate-600">
              {platform}
            </span>
          </div>
        )}
        <div className="flex-1" />
      </div>
    </GridTile>
  );
}
