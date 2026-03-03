'use client';

import { Navbar } from "@/app/components/layout/Navbar";
import { Footer } from "@/app/components/layout/Footer";
import { ProjectTile, TextTile } from "@/app/components/ui/GridTile";
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Claw OS",
    description: "Local-First personal AI operating system with multi-agent architecture",
    tags: ["OpenClaw", "RAG", "Vector DB"],
    status: "Active",
  },
  {
    id: 2,
    title: "Startup Hub",
    description: "AI-native startup matching platform built with Vibe Coding",
    tags: ["Vercel", "Supabase", "Claude Code"],
    status: "Live",
  },
  {
    id: 3,
    title: "Wenji",
    description: "Exploratory learning AI agent with non-linear dialogue interaction",
    tags: ["Coze", "RAG", "Prompt Engineering"],
    status: "Released",
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
                title="Work"
                content={
                  <div>
                    <p className="text-xl text-slate-600">
                      Things I've built or am building
                    </p>
                  </div>
                }
              />
            </motion.div>

            {projects.map((project, index) => (
              <motion.div key={project.id} variants={fadeInUp}>
                <ProjectTile
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  status={project.status}
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
