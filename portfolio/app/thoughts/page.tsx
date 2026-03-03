'use client';

import { Navbar } from "@/app/components/layout/Navbar";
import { BigCard } from "@/app/components/ui/BigCard";
import { cn } from '@/lib/utils';
import { useState } from 'react';

const articles = [
  {
    title: "AI Agent的下一个形态",
    version: "v260302.1",
    date: "2026-03-02",
    excerpt: "当我对AI Agent的理解发生了新的变化...",
  },
  {
    title: "为什么我要做Claw OS",
    version: "v260301.1",
    date: "2026-03-01",
    excerpt: "这篇文章记录了我开始这个项目的初衷...",
  },
  {
    title: "Multi-agent协作的最佳实践",
    version: "v260228.1",
    date: "2026-02-28",
    excerpt: "在构建多代理系统时的一些心得...",
  },
  {
    title: "Vibe Coding的革命性变化",
    version: "v260225.1",
    date: "2026-02-25",
    excerpt: "AI辅助编程如何改变了我的工作流...",
  },
];

export default function Thoughts() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark', !isDark);
  };

  return (
    <div className={cn('min-h-screen transition-colors duration-300', isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900')}>
      <Navbar isDark={isDark} onToggleTheme={toggleTheme} />
      
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <BigCard title="Thoughts">
            <p className="text-xl text-slate-600 mb-8">
              Version-controlled thinking on AI, products, and the future
            </p>

            <div className="space-y-4">
              {articles.map((article) => (
                <div
                  key={article.title}
                  className="p-6 bg-white rounded-2xl hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{article.title}</h3>
                    <span className="text-sm text-slate-500">{article.version}</span>
                  </div>
                  <p className="text-slate-600 mb-2">{article.excerpt}</p>
                  <p className="text-sm text-slate-500">{article.date}</p>
                </div>
              ))}
            </div>
          </BigCard>
        </div>
      </main>
    </div>
  );
}
