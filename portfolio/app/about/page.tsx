'use client';

import { Navbar } from "@/app/components/layout/Navbar";
import { BigCard } from "@/app/components/ui/BigCard";
import { ThemeToggle } from "@/app/components/ui/DraggableGrid";
import { cn } from '@/lib/utils';
import { useState } from 'react';

export default function About() {
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
          <BigCard title="关于我">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">AI产品经理</h2>
                  <p className="text-lg text-slate-600">
                    5年产品经理经验，专注AI Agent系统架构与Vibe Coding全栈落地
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">个人优势</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li>• AI Agent架构设计</li>
                    <li>• LLM工程化落地</li>
                    <li>• Vibe Coding全栈</li>
                    <li>• B端系统架构</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">求职状态</h3>
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="font-medium">求职中 · 期望薪资：20k-30k</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">工作经历</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-white rounded-2xl">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold">连续创业</h4>
                        <span className="text-sm text-slate-500">2025.01 - 至今</span>
                      </div>
                      <p className="text-slate-600 text-sm">创始人 / AI产品负责人</p>
                      <p className="text-slate-500 text-sm mt-2">主导设计开发Claw OS、Startup Hub等AI-Native产品</p>
                    </div>
                    
                    <div className="p-4 bg-white rounded-2xl">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold">中国电建中南勘测设计研究院</h4>
                        <span className="text-sm text-slate-500">2024.05 - 2025.01</span>
                      </div>
                      <p className="text-slate-600 text-sm">产品经理</p>
                      <p className="text-slate-500 text-sm mt-2">水电站数字孪生项目，AI应用落地</p>
                    </div>
                    
                    <div className="p-4 bg-white rounded-2xl">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold">湖南羊驼教育</h4>
                        <span className="text-sm text-slate-500">2021.11 - 2024.03</span>
                      </div>
                      <p className="text-slate-600 text-sm">产品经理</p>
                      <p className="text-slate-500 text-sm mt-2">从0到1搭建内部ERP系统</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">教育经历</h3>
                  <div className="p-4 bg-white rounded-2xl">
                    <h4 className="font-bold">中南林业科技大学</h4>
                    <p className="text-slate-600 text-sm">会展经济与管理 | 2014-2018</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-4">技能标签</h3>
              <div className="flex flex-wrap gap-3">
                {['Multi-agent', 'RAG', 'MCP', 'Prompt', 'Claude Code', 'Vercel', 'Supabase', 'Figma', 'Coze', 'Dify', 'n8n', 'OpenClaw', 'ERP/CRM', '数字孪生', 'Workflow'].map(tag => (
                  <span key={tag} className="px-4 py-2 bg-white rounded-full text-sm">{tag}</span>
                ))}
              </div>
            </div>
          </BigCard>
        </div>
      </main>
    </div>
  );
}
