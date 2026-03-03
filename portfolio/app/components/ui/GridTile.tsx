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
    'bg-slate-100 rounded-3xl p-6 relative',
    'transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]',
    'hover:translate-y-[-2px]',
    'hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)]',
    sizeClasses[size],
    className
  );

  const Content = () => (
    <div className={baseClasses}>
      {children}
      {(href || onClick) && (
        <div className="absolute bottom-5 right-5 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 translate-x-[-4px] translate-y-[4px] transition-all duration-300 ease group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0">
          <span className="text-slate-900">↗</span>
        </div>
      )}
    </div>
  );

  const WrappedContent = href || onClick ? (
    <div className="group">
      <Content />
    </div>
  ) : (
    <Content />
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileTap={{ scale: 0.98 }}
        className="block"
      >
        {WrappedContent}
      </motion.a>
    );
  }

  if (onClick) {
    return (
      <motion.button
        onClick={onClick}
        whileTap={{ scale: 0.98 }}
        className="block w-full text-left"
      >
        {WrappedContent}
      </motion.button>
    );
  }

  return WrappedContent;
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
