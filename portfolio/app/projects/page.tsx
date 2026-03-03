'use client';

import { Navbar } from "@/app/components/layout/Navbar";
import { BigCard } from "@/app/components/ui/BigCard";
import { cn } from '@/lib/utils';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: "Claw OS",
    description: "Local-First个人AI操作系统，Multi-agent架构，开源项目",
    tags: ["OpenClaw", "RAG", "MCP", "Vector DB"],
    status: "开发中",
    link: "https://github.com/cyberxz2077",
  },
  {
    id: 2,
    title: "Startup Hub",
    description: "AI-Native创业匹配平台，独立全栈开发，Vibe Coding实践",
    tags: ["Vercel", "Supabase", "Claude Code"],
    status: "已上线",
    link: "https://startup-hub-woad.vercel.app/",
  },
  {
    id: 3,
    title: "拾石 PebblePick",
    description: "用户数字分身与技能交易平台",
    tags: ["BP完成", "商业计划书"],
    status: "BP完成",
    link: "https://pebblepick-pitch-deck-39846361924.us-west1.run.app/",
  },
  {
    id: 4,
    title: "问记 Wenji",
    description: "探索式学习AI Agent，非线性对话泳道式交互",
    tags: ["Coze", "RAG", "Prompt Engineering"],
    status: "Demo",
    link: "https://wenji-39846361924.us-west1.run.app/",
  },
];

export default function Projects() {
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
          <BigCard title="项目作品">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <a
                  key={project.id}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 bg-white rounded-2xl hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${project.status === '已上线' || project.status === '开发中' ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'}`} />
                      <span className="text-sm text-slate-500">{project.status}</span>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-slate-100 rounded-full text-xs">{tag}</span>
                    ))}
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6">Claw OS - 核心特性</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 bg-white rounded-2xl">
                  <h4 className="font-bold mb-2">多智能体语义路由</h4>
                  <p className="text-slate-600 text-sm">Semantic Router：意图识别引擎自动分流用户请求</p>
                </div>
                <div className="p-6 bg-white rounded-2xl">
                  <h4 className="font-bold mb-2">仿生记忆管理系统</h4>
                  <p className="text-slate-600 text-sm">非静态的记忆生命周期，模拟人类认知机制</p>
                </div>
                <div className="p-6 bg-white rounded-2xl">
                  <h4 className="font-bold mb-2">Life Stream数字孪生</h4>
                  <p className="text-slate-600 text-sm">主动+被动数据采集，构建个人知识图谱</p>
                </div>
                <div className="p-6 bg-white rounded-2xl">
                  <h4 className="font-bold mb-2">MCP协议扩展</h4>
                  <p className="text-slate-600 text-sm">打通本地文件系统/Obsidian/浏览器工具链</p>
                </div>
              </div>
            </div>
          </BigCard>
        </div>
      </main>
    </div>
  );
}
