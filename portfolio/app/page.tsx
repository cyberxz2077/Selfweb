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
                    <p>Building AI-native products with multi-agent systems. 7 years of product experience.</p>
                  </div>
                }
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <ProjectTile
                title="Claw OS"
                description="Local-First personal AI operating system with multi-agent architecture"
                tags={["OpenClaw", "RAG"]}
                status="Active"
                href="/projects"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <ProjectTile
                title="Startup Hub"
                description="AI-native startup matching platform built with Vibe Coding"
                tags={["Vercel", "Supabase"]}
                status="Live"
                href="/projects"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <TextTile
                title="i design things."
                content={
                  <p>i think design can change things.</p>
                }
                href="/about"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <ProjectTile
                title="Wenji"
                description="Exploratory learning AI agent with non-linear dialogue interaction"
                tags={["Coze", "Prompt"]}
                status="Released"
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
                name="黄鑫哲"
                username="Cyberxz2077@gmail.com"
                platform="Email"
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
                      Available for work
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Let's Talk
                  </h3>
                  <div className="flex-1" />
                </div>
              </GridTile>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <GridTile href="/projects">
                <div className="h-full flex flex-col">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    View All Projects
                  </h3>
                  <p className="text-slate-600 text-sm">
                    See everything I've been working on
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
