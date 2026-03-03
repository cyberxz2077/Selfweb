'use client';

import { Navbar } from "@/app/components/layout/Navbar";
import { Footer } from "@/app/components/layout/Footer";
import { ProjectTile, TextTile, GridTile } from "@/app/components/ui/GridTile";
import { motion } from 'framer-motion';

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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
  }
};

export default function Projects() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      
      <main className="pt-32 pb-20 px-6">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <motion.div variants={fadeInUp} className="lg:col-span-2">
              <TextTile
                title="项目作品"
                content={
                  <div>
                    <p className="text-xl text-slate-600">
                      正在构建的AI-Native产品
                    </p>
                  </div>
                }
              />
            </motion.div>

            {projects.map((project) => (
              <motion.div key={project.id} variants={fadeInUp}>
                <ProjectTile
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  status={project.status}
                  href={project.link}
                />
              </motion.div>
            ))}

            <motion.div variants={fadeInUp} className="lg:col-span-2">
              <TextTile
                title="Claw OS - 核心特性"
                content={
                  <div className="space-y-3 text-sm text-slate-600">
                    <p>• 多智能体语义路由（Semantic Router）：意图识别引擎自动分流用户请求</p>
                    <p>• 仿生记忆管理系统：非静态的记忆生命周期，模拟人类认知机制</p>
                    <p>• Life Stream数字孪生：主动+被动数据采集，构建个人知识图谱</p>
                    <p>• MCP协议扩展：打通本地文件系统/Obsidian/浏览器工具链</p>
                  </div>
                }
                href="https://github.com/cyberxz2077"
              />
            </motion.div>

            <motion.div variants={fadeInUp} className="lg:col-span-2">
              <TextTile
                title="技术栈"
                content={
                  <div className="space-y-2 text-sm text-slate-600">
                    <p><span className="font-medium text-slate-900">AI Agent:</span> Multi-agent协作、Planning、Tool Use、Memory、Persona</p>
                    <p><span className="font-medium text-slate-900">LLM工程:</span> RAG、Prompt Engineering、MCP协议、Skills</p>
                    <p><span className="font-medium text-slate-900">开发工具:</span> Claude Code、Vercel、Supabase、Figma</p>
                    <p><span className="font-medium text-slate-900">AI平台:</span> Coze、Dify、n8n、OpenClaw</p>
                  </div>
                }
              />
            </motion.div>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
}
