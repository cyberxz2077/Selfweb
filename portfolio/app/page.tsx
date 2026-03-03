'use client';

import { Navbar } from "@/app/components/layout/Navbar";
import { Footer } from "@/app/components/layout/Footer";
import { TextTile, ProjectTile, SocialTile, GridTile } from "@/app/components/ui/GridTile";
import { motion } from 'framer-motion';

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

export default function Home() {
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
                title="黄鑫哲"
                content={
                  <div className="space-y-4">
                    <p className="text-2xl text-slate-400">AI Product Manager</p>
                    <p>5年产品经理经验，专注AI Agent系统架构与Vibe Coding全栈落地。精通Multi-agent协作、Semantic Router意图分发与RAG知识库构建。</p>
                  </div>
                }
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <ProjectTile
                title="Claw OS"
                description="Local-First个人AI操作系统，Multi-agent架构"
                tags={["OpenClaw", "RAG", "MCP"]}
                status="开发中"
                href="/projects"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <ProjectTile
                title="Startup Hub"
                description="AI-Native创业匹配平台，Vibe Coding全栈开发"
                tags={["Vercel", "Supabase"]}
                status="已上线"
                href="/projects"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <TextTile
                title="拾石 PebblePick"
                content={
                  <p>用户数字分身与技能交易平台 · BP完成</p>
                }
                href="/projects"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <ProjectTile
                title="问记 Wenji"
                description="探索式学习AI Agent，非线性对话交互"
                tags={["Coze", "RAG"]}
                status="Demo"
                href="/projects"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <SocialTile
                name="黄鑫哲"
                username="@Cyberxz2077"
                platform="X"
                href="https://x.com"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <SocialTile
                name="Email"
                username="Cyberxz2077@gmail.com"
                platform="Mail"
                href="mailto:Cyberxz2077@gmail.com"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <TextTile
                title="AI Agent的下一个形态"
                content={
                  <div className="text-sm text-slate-500">
                    v260302.1 · 2026-03-02
                  </div>
                }
                href="/thoughts"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <TextTile
                title="为什么我要做Claw OS"
                content={
                  <div className="text-sm text-slate-500">
                    v260301.1 · 2026-03-01
                  </div>
                }
                href="/thoughts"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <GridTile href="/about">
                <div className="h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-xs text-slate-500 font-medium">
                      求职中
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    AI产品经理
                  </h3>
                  <p className="text-slate-600 text-sm">
                    期望薪资：20k-30k
                  </p>
                  <div className="flex-1" />
                </div>
              </GridTile>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <GridTile href="/projects">
                <div className="h-full flex flex-col">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    查看全部项目
                  </h3>
                  <p className="text-slate-600 text-sm">
                    了解我正在做的事情
                  </p>
                  <div className="flex-1" />
                </div>
              </GridTile>
            </motion.div>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
}
