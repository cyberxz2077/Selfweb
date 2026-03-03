'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GridItem {
  id: string;
  content: React.ReactNode;
  layout: {
    x: number;
    y: number;
    w: number;
    h: number;
  };
}

interface DraggableGridProps {
  items: GridItem[];
  cols?: number;
  rowHeight?: number;
  width?: number;
  onLayoutChange?: (layout: { x: number; y: number; w: number; h: number; i: string }[]) => void;
  isDraggable?: boolean;
  isResizable?: boolean;
}

export function DraggableGrid({
  items,
  cols = 4,
  rowHeight = 140,
  isDraggable = true,
}: DraggableGridProps) {
  const [mounted, setMounted] = useState(false);
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleDragStart = (id: string) => () => {
    setDraggedItem(id);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
  };

  if (!mounted) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="grid gap-4"
      style={{
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridAutoRows: `${rowHeight}px`,
      }}
    >
      {items.map((item) => (
        <motion.div
          key={item.id}
          drag={isDraggable}
          dragMomentum={false}
          onDragStart={handleDragStart(item.id)}
          onDragEnd={handleDragEnd}
          whileDrag={{ scale: 1.02, zIndex: 50 }}
          className={cn(
            'bg-slate-100 rounded-3xl overflow-hidden',
            'transition-shadow duration-300',
            'hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)]',
            'group relative',
            isDraggable && 'cursor-grab active:cursor-grabbing'
          )}
          style={{
            gridColumn: `span ${item.layout.w}`,
            gridRow: `span ${item.layout.h}`,
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {isDraggable && (
            <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="4" cy="4" r="1.5" fill="#64748b"/>
                <circle cx="10" cy="4" r="1.5" fill="#64748b"/>
                <circle cx="4" cy="10" r="1.5" fill="#64748b"/>
                <circle cx="10" cy="10" r="1.5" fill="#64748b"/>
              </svg>
            </div>
          )}
          <div className="p-6 h-full overflow-auto">
            {item.content}
          </div>
        </motion.div>
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

export function StatusDot({ status, pulse = true }: { status: 'online' | 'offline' | 'busy'; pulse?: boolean }) {
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
