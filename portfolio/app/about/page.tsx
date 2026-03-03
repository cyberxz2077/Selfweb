'use client';

import { Navbar } from "@/app/components/layout/Navbar";
import { Footer } from "@/app/components/layout/Footer";
import { TextTile, GridTile } from "@/app/components/ui/GridTile";
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

export default function About() {
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
                title="关于我"
                content={
                  <div>
                    <p className="text-xl text-slate-600">
                      5年产品经理经验，专注AI Agent系统架构与Vibe Coding全栈落地
                    </p>
                  </div>
                }
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <GridTile>
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
              <TextTile
                title="个人优势"
                content={
                  <div className="space-y-2 text-sm text-slate-600">
                    <p>• AI Agent架构设计</p>
                    <p>• LLM工程化落地</p>
                    <p>• Vibe Coding全栈</p>
                    <p>• B端系统架构</p>
                  </div>
                }
              />
            </motion.div>

            <motion.div variants={fadeInUp} className="lg:col-span-2">
              <TextTile
                title="连续创业 | 2025.01 - 至今"
                content={
                  <div className="space-y-3 text-sm text-slate-600">
                    <p className="font-medium text-slate-900">创始人 / AI产品负责人</p>
                    <p>主导设计开发Claw OS、Startup Hub等AI-Native产品。精通Multi-agent协作、Semantic Router意图分发与RAG知识库构建。</p>
                  </div>
                }
              />
            </motion.div>

            <motion.div variants={fadeInUp} className="lg:col-span-2">
              <TextTile
                title="中国电建中南勘测设计研究院 | 2024.05 - 2025.01"
                content={
                  <div className="space-y-3 text-sm text-slate-600">
                    <p className="font-medium text-slate-900">产品经理</p>
                    <p>水电站数字孪生项目，构建产业互联网平台，集成BIM模型与实时监测数据。AI应用落地：嵌入计算机视觉算法实现违章智能识别与风险预警。</p>
                  </div>
                }
              />
            </motion.div>

            <motion.div variants={fadeInUp} className="lg:col-span-2">
              <TextTile
                title="湖南羊驼教育 | 2021.11 - 2024.03"
                content={
                  <div className="space-y-3 text-sm text-slate-600">
                    <p className="font-medium text-slate-900">产品经理</p>
                    <p>从0到1搭建内部ERP系统，覆盖招生-教学-财务全业务链，实现23%人效提升与财务流程自动化。</p>
                  </div>
                }
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <TextTile
                title="教育经历"
                content={
                  <div className="space-y-2 text-sm text-slate-600">
                    <p className="font-medium text-slate-900">中南林业科技大学</p>
                    <p>会展经济与管理 | 2014-2018</p>
                  </div>
                }
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <GridTile>
                <div className="h-full flex flex-col">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    AI Agent与LLM
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white rounded-full text-xs text-slate-600">Multi-agent</span>
                    <span className="px-3 py-1 bg-white rounded-full text-xs text-slate-600">RAG</span>
                    <span className="px-3 py-1 bg-white rounded-full text-xs text-slate-600">MCP</span>
                    <span className="px-3 py-1 bg-white rounded-full text-xs text-slate-600">Prompt</span>
                  </div>
                  <div className="flex-1" />
                </div>
              </GridTile>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <GridTile>
                <div className="h-full flex flex-col">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    开发工具链
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white rounded-full text-xs text-slate-600">Claude Code</span>
                    <span className="px-3 py-1 bg-white rounded-full text-xs text-slate-600">Vercel</span>
                    <span className="px-3 py-1 bg-white rounded-full text-xs text-slate-600">Supabase</span>
                    <span className="px-3 py-1 bg-white rounded-full text-xs text-slate-600">Figma</span>
                  </div>
                  <div className="flex-1" />
                </div>
              </GridTile>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <GridTile>
                <div className="h-full flex flex-col">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    产品方法论
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white rounded-full text-xs text-slate-600">ERP/CRM</span>
                    <span className="px-3 py-1 bg-white rounded-full text-xs text-slate-600">数字孪生</span>
                    <span className="px-3 py-1 bg-white rounded-full text-xs text-slate-600">Workflow</span>
                  </div>
                  <div className="flex-1" />
                </div>
              </GridTile>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <GridTile>
                <div className="h-full flex flex-col">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    AI平台
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white rounded-full text-xs text-slate-600">Coze</span>
                    <span className="px-3 py-1 bg-white rounded-full text-xs text-slate-600">Dify</span>
                    <span className="px-3 py-1 bg-white rounded-full text-xs text-slate-600">n8n</span>
                    <span className="px-3 py-1 bg-white rounded-full text-xs text-slate-600">OpenClaw</span>
                  </div>
                  <div className="flex-1" />
                </div>
              </GridTile>
            </motion.div>

            <motion.div variants={fadeInUp} className="lg:col-span-2">
              <TextTile
                title="职业摘要"
                content={
                  <p className="text-sm text-slate-600">
                    5年产品经理经验，专注AI Agent系统架构与Vibe Coding全栈落地。主导设计开发Claw OS-基于用户本地数据库的Multi-agent AI系统、Start-up Hub-基于分布式AI代理匹配协议的项目团队寻人集合站。连续创业背景，擅长将复杂B端业务（数字孪生/ERP）抽象为AI工作流，寻找非标准价值信号与产品化的最优解。
                  </p>
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
