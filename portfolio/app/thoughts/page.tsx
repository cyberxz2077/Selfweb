'use client';

import { Navbar } from "@/app/components/layout/Navbar";
import { Footer } from "@/app/components/layout/Footer";
import { TextTile } from "@/app/components/ui/GridTile";
import { motion } from 'framer-motion';

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

export default function Thoughts() {
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
                title="Thoughts"
                content={
                  <div>
                    <p className="text-xl text-slate-600">
                      Version-controlled thinking on AI, products, and the future
                    </p>
                  </div>
                }
              />
            </motion.div>

            {articles.map((article, index) => (
              <motion.div key={article.title} variants={fadeInUp}>
                <TextTile
                  title={article.title}
                  content={
                    <div className="space-y-2 text-sm text-slate-500">
                      <p>{article.version}</p>
                      <p>{article.date}</p>
                    </div>
                  }
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
}
