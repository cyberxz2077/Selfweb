'use client';

import { useState, useEffect } from 'react';
import { Navbar } from "@/app/components/layout/Navbar";
import { Footer } from "@/app/components/layout/Footer";
import { DraggableGrid } from "@/app/components/ui/DraggableGrid";
import { ThemeToggle } from "@/app/components/ui/DraggableGrid";
import { cn } from '@/lib/utils';

const gridItems = [
  {
    id: 'intro',
    content: (
      <div className="h-full flex flex-col">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">黄鑫哲</h2>
        <p className="text-xl text-slate-400 mb-4">AI Product Manager</p>
        <p className="text-slate-600">5年产品经理经验，专注AI Agent系统架构与Vibe Coding全栈落地。</p>
      </div>
    ),
    layout: { x: 0, y: 0, w: 2, h: 2, minW: 1, minH: 1, maxW: 2, maxH: 2 },
  },
  {
    id: 'claw-os',
    content: (
      <div className="h-full flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-xs text-slate-500">开发中</span>
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2">Claw OS</h3>
        <p className="text-slate-600 text-sm mb-3">Local-First个人AI操作系统</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {['OpenClaw', 'RAG', 'MCP'].map(tag => (
            <span key={tag} className="px-2 py-1 bg-white rounded-full text-xs text-slate-600">{tag}</span>
          ))}
        </div>
      </div>
    ),
    layout: { x: 2, y: 0, w: 1, h: 1, minW: 1, minH: 1 },
  },
  {
    id: 'startup-hub',
    content: (
      <div className="h-full flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-xs text-slate-500">已上线</span>
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2">Startup Hub</h3>
        <p className="text-slate-600 text-sm mb-3">AI-Native创业匹配平台</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {['Vercel', 'Supabase'].map(tag => (
            <span key={tag} className="px-2 py-1 bg-white rounded-full text-xs text-slate-600">{tag}</span>
          ))}
        </div>
      </div>
    ),
    layout: { x: 3, y: 0, w: 1, h: 1, minW: 1, minH: 1 },
  },
  {
    id: 'pebble-pick',
    content: (
      <div className="h-full flex flex-col">
        <h3 className="text-lg font-bold text-slate-900 mb-2">拾石 PebblePick</h3>
        <p className="text-slate-600 text-sm">用户数字分身与技能交易平台 · BP完成</p>
      </div>
    ),
    layout: { x: 2, y: 1, w: 1, h: 1, minW: 1, minH: 1 },
  },
  {
    id: 'wenji',
    content: (
      <div className="h-full flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 bg-slate-400 rounded-full" />
          <span className="text-xs text-slate-500">Demo</span>
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2">问记 Wenji</h3>
        <p className="text-slate-600 text-sm mb-3">探索式学习AI Agent</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {['Coze', 'RAG'].map(tag => (
            <span key={tag} className="px-2 py-1 bg-white rounded-full text-xs text-slate-600">{tag}</span>
          ))}
        </div>
      </div>
    ),
    layout: { x: 3, y: 1, w: 1, h: 1, minW: 1, minH: 1 },
  },
  {
    id: 'social-x',
    content: (
      <div className="h-full flex flex-col">
        <h3 className="text-lg font-bold text-slate-900">黄鑫哲</h3>
        <p className="text-slate-600 text-sm">@Cyberxz2077</p>
        <div className="mt-auto">
          <span className="px-2 py-1 bg-white rounded-full text-xs text-slate-600">X</span>
        </div>
      </div>
    ),
    layout: { x: 0, y: 2, w: 1, h: 1, minW: 1, minH: 1 },
  },
  {
    id: 'social-email',
    content: (
      <div className="h-full flex flex-col">
        <h3 className="text-lg font-bold text-slate-900">Email</h3>
        <p className="text-slate-600 text-sm">Cyberxz2077@gmail.com</p>
        <div className="mt-auto">
          <span className="px-2 py-1 bg-white rounded-full text-xs text-slate-600">Mail</span>
        </div>
      </div>
    ),
    layout: { x: 1, y: 2, w: 1, h: 1, minW: 1, minH: 1 },
  },
  {
    id: 'blog-1',
    content: (
      <div className="h-full flex flex-col">
        <h3 className="text-lg font-bold text-slate-900 mb-2">AI Agent的下一个形态</h3>
        <p className="text-sm text-slate-500">v260302.1 · 2026-03-02</p>
      </div>
    ),
    layout: { x: 2, y: 2, w: 1, h: 1, minW: 1, minH: 1 },
  },
  {
    id: 'blog-2',
    content: (
      <div className="h-full flex flex-col">
        <h3 className="text-lg font-bold text-slate-900 mb-2">为什么我要做Claw OS</h3>
        <p className="text-sm text-slate-500">v260301.1 · 2026-03-01</p>
      </div>
    ),
    layout: { x: 3, y: 2, w: 1, h: 1, minW: 1, minH: 1 },
  },
  {
    id: 'hiring',
    content: (
      <div className="h-full flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-xs text-slate-500 font-medium">求职中</span>
        </div>
        <h3 className="text-lg font-bold text-slate-900">AI产品经理</h3>
        <p className="text-slate-600 text-sm">期望薪资：20k-30k</p>
      </div>
    ),
    layout: { x: 0, y: 3, w: 1, h: 1, minW: 1, minH: 1 },
  },
  {
    id: 'view-all',
    content: (
      <div className="h-full flex flex-col">
        <h3 className="text-lg font-bold text-slate-900 mb-2">查看全部项目</h3>
        <p className="text-slate-600 text-sm">了解我正在做的事情</p>
      </div>
    ),
    layout: { x: 1, y: 3, w: 1, h: 1, minW: 1, minH: 1 },
  },
  {
    id: 'theme-toggle',
    content: (
      <div className="h-full flex flex-col items-center justify-center">
        <span className="text-sm text-slate-500 mb-2">主题切换</span>
        <ThemeToggle isDark={false} onToggle={() => {}} />
      </div>
    ),
    layout: { x: 2, y: 3, w: 1, h: 1, minW: 1, minH: 1 },
  },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [containerWidth, setContainerWidth] = useState(1200);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      const container = document.getElementById('grid-container');
      if (container) {
        setContainerWidth(container.offsetWidth);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLayoutChange = (layout: any[]) => {
    console.log('Layout changed:', layout);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark', !isDark);
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className={cn('min-h-screen transition-colors duration-300', isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900')}>
      <Navbar isDark={isDark} onToggleTheme={toggleTheme} />
      
      <main className="pt-32 pb-20 px-6">
        <div id="grid-container" className="max-w-6xl mx-auto">
          <DraggableGrid
            items={gridItems}
            cols={4}
            rowHeight={140}
            width={containerWidth}
            onLayoutChange={handleLayoutChange}
            isDraggable={true}
            isResizable={true}
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
