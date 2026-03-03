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
                title="About"
                content={
                  <div>
                    <p className="text-xl text-slate-600">
                      The person behind the products
                    </p>
                  </div>
                }
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <TextTile
                title="Hello, I'm 黄鑫哲"
                content={
                  <p className="text-base text-slate-600">
                    AI Product Manager with 7 years of experience, specializing in AI Agent system architecture.
                  </p>
                }
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <GridTile>
                <div className="h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-xs text-slate-500 font-medium">
                      Available for work
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    7+ Years
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Product experience
                  </p>
                  <div className="flex-1" />
                </div>
              </GridTile>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <TextTile
                title="AI Product Manager"
                content={
                  <p className="text-base text-slate-600">
                    Building AI-native products with multi-agent systems and Vibe Coding.
                  </p>
                }
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <TextTile
                title="Claw OS"
                content={
                  <p className="text-base text-slate-600">
                    Local-First multi-agent operating system.
                  </p>
                }
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <GridTile>
                <div className="h-full flex flex-col">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Product Strategy
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white rounded-full text-xs text-slate-600">
                      Vision
                    </span>
                    <span className="px-3 py-1 bg-white rounded-full text-xs text-slate-600">
                      Roadmap
                    </span>
                    <span className="px-3 py-1 bg-white rounded-full text-xs text-slate-600">
                      Research
                    </span>
                  </div>
                  <div className="flex-1" />
                </div>
              </GridTile>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <GridTile>
                <div className="h-full flex flex-col">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    AI Systems
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white rounded-full text-xs text-slate-600">
                      Agents
                    </span>
                    <span className="px-3 py-1 bg-white rounded-full text-xs text-slate-600">
                      RAG
                    </span>
                    <span className="px-3 py-1 bg-white rounded-full text-xs text-slate-600">
                      LLMs
                    </span>
                  </div>
                  <div className="flex-1" />
                </div>
              </GridTile>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <GridTile>
                <div className="h-full flex flex-col">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Design
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white rounded-full text-xs text-slate-600">
                      UI/UX
                    </span>
                    <span className="px-3 py-1 bg-white rounded-full text-xs text-slate-600">
                      Figma
                    </span>
                    <span className="px-3 py-1 bg-white rounded-full text-xs text-slate-600">
                      Prototyping
                    </span>
                  </div>
                  <div className="flex-1" />
                </div>
              </GridTile>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <GridTile>
                <div className="h-full flex flex-col">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    Development
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white rounded-full text-xs text-slate-600">
                      Next.js
                    </span>
                    <span className="px-3 py-1 bg-white rounded-full text-xs text-slate-600">
                      Vibe Coding
                    </span>
                    <span className="px-3 py-1 bg-white rounded-full text-xs text-slate-600">
                      Supabase
                    </span>
                  </div>
                  <div className="flex-1" />
                </div>
              </GridTile>
            </motion.div>

            <motion.div variants={fadeInUp} className="lg:col-span-2">
              <TextTile
                title="i design things."
                content={
                  <div className="space-y-4 text-base text-slate-600">
                    <p>i think design can change things.</p>
                    <p>i think the things we design are just as important as the things we choose not to.</p>
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
