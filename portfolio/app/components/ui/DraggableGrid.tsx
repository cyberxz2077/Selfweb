'use client';

import React, { useState, useEffect } from 'react';
import GridLayout, { Layout } from 'react-grid-layout';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

interface GridItem {
  id: string;
  title?: string;
  content: React.ReactNode;
  layout: {
    x: number;
    y: number;
    w: number;
    h: number;
    minW?: number;
    minH?: number;
    maxW?: number;
    maxH?: number;
  };
}

interface DraggableGridProps {
  items: GridItem[];
  cols?: number;
  rowHeight?: number;
  width?: number;
  onLayoutChange?: (layout: Layout[]) => void;
  isDraggable?: boolean;
  isResizable?: boolean;
}

export function DraggableGrid({
  items,
  cols = 4,
  rowHeight = 140,
  width = 1200,
  onLayoutChange,
  isDraggable = true,
  isResizable = true,
}: DraggableGridProps) {
  const [mounted, setMounted] = useState(false);
  const [containerWidth, setContainerWidth] = useState(width);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      const container = document.getElementById('draggable-grid-container');
      if (container) {
        setContainerWidth(container.offsetWidth);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const layout = items.map((item) => ({
    i: item.id,
    ...item.layout,
  }));

  const handleLayoutChange = (newLayout: Layout[]) => {
    onLayoutChange?.(newLayout);
  };

  if (!mounted) {
    return null;
  }

  return (
    <div id="draggable-grid-container" className="w-full">
      <GridLayout
        className="layout"
        layout={layout}
        cols={cols}
        rowHeight={rowHeight}
        width={containerWidth}
        onLayoutChange={handleLayoutChange}
        isDraggable={isDraggable}
        isResizable={isResizable}
        margin={[16, 16]}
        containerPadding={[0, 0]}
        useCSSTransforms={true}
        draggableHandle=".drag-handle"
      >
        {items.map((item) => (
          <div
            key={item.id}
            className={cn(
              'bg-slate-100 rounded-3xl overflow-hidden',
              'transition-shadow duration-300',
              'hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)]',
              'group relative'
            )}
          >
            {isDraggable && (
              <div className="drag-handle absolute top-3 left-3 w-8 h-8 rounded-full bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab active:cursor-grabbing flex items-center justify-center z-10">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="4" cy="4" r="1.5" fill="#64748b"/>
                  <circle cx="10" cy="4" r="1.5" fill="#64748b"/>
                  <circle cx="4" cy="10" r="1.5" fill="#64748b"/>
                  <circle cx="10" cy="10" r="1.5" fill="#64748b"/>
                </svg>
              </div>
            )}
            <div className="p-6 h-full overflow-auto">
              {item.title && (
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
              )}
              {item.content}
            </div>
            {isResizable && (
              <div className="react-resizable-handle react-resizable-handle-se absolute bottom-0 right-0 w-4 h-4 cursor-se-resize opacity-0 group-hover:opacity-100 transition-opacity">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="absolute bottom-1 right-1">
                  <path d="M9 1L1 9M9 5L5 9M9 9L9 9" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
            )}
          </div>
        ))}
      </GridLayout>
    </div>
  );
}

interface FilterOption {
  id: string;
  label: string;
}

interface FilterBarProps {
  options: FilterOption[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export function FilterBar({ options, activeFilter, onFilterChange }: FilterBarProps) {
  const [highlightStyle, setHighlightStyle] = useState({ left: 0, width: 0 });
  const buttonRefs = React.useRef<{ [key: string]: HTMLButtonElement | null }>({});

  useEffect(() => {
    const activeButton = buttonRefs.current[activeFilter];
    if (activeButton) {
      setHighlightStyle({
        left: activeButton.offsetLeft,
        width: activeButton.offsetWidth,
      });
    }
  }, [activeFilter]);

  return (
    <div className="relative flex items-center gap-1 bg-slate-100 rounded-full p-1">
      <div
        className="absolute h-[calc(100%-8px)] bg-white rounded-full shadow-sm transition-all duration-300 ease-out"
        style={{
          left: highlightStyle.left + 4,
          width: highlightStyle.width - 8,
          top: 4,
        }}
      />
      {options.map((option) => (
        <button
          key={option.id}
          ref={(el) => { buttonRefs.current[option.id] = el; }}
          onClick={() => onFilterChange(option.id)}
          className={cn(
            'relative z-10 px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200',
            activeFilter === option.id
              ? 'text-slate-900'
              : 'text-slate-500 hover:text-slate-700'
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      className={cn(
        'relative w-14 h-8 rounded-full transition-colors duration-300',
        isDark ? 'bg-slate-800' : 'bg-slate-200'
      )}
    >
      <motion.div
        className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center"
        animate={{ left: isDark ? '32px' : '4px' }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        {isDark ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="#fbbf24"/>
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="5" fill="#fbbf24"/>
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )}
      </motion.div>
    </button>
  );
}

interface CornerLinkProps {
  title: string;
  href: string;
}

export function CornerLink({ title, href }: CornerLinkProps) {
  return (
    <a
      href={href}
      className="absolute bottom-4 right-4 flex items-center gap-2 group"
    >
      <span className="text-sm font-medium text-slate-600 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        {title}
      </span>
      <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
        <svg width="18" height="18" viewBox="0 0 18 18" className="text-slate-900">
          <path d="M5 13L13 5M13 5H7M13 5V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </a>
  );
}

interface StatusDotProps {
  status: 'online' | 'offline' | 'busy';
  pulse?: boolean;
}

export function StatusDot({ status, pulse = true }: StatusDotProps) {
  const colors = {
    online: 'bg-emerald-500',
    offline: 'bg-slate-400',
    busy: 'bg-amber-500',
  };

  return (
    <span className="relative flex h-2 w-2">
      {pulse && status === 'online' && (
        <span className={cn('absolute inline-flex h-full w-full rounded-full opacity-75', colors[status], 'animate-ping')}/>
      )}
      <span className={cn('relative inline-flex rounded-full h-2 w-2', colors[status])}/>
    </span>
  );
}

interface PlayingIndicatorProps {
  isPlaying: boolean;
}

export function PlayingIndicator({ isPlaying }: PlayingIndicatorProps) {
  if (!isPlaying) return null;
  
  return (
    <div className="flex items-end gap-0.5 h-4">
      {[0.85, 1.26, 0.62].map((duration, i) => (
        <div
          key={i}
          className="w-0.5 bg-emerald-500 rounded-full"
          style={{
            height: '100%',
            animation: `playing ${duration}s infinite ease`,
          }}
        />
      ))}
    </div>
  );
}
