'use client';

import { Navbar } from "@/app/components/layout/Navbar";
import { Footer } from "@/app/components/layout/Footer";
import { TextTile, SocialTile, GridTile } from "@/app/components/ui/GridTile";
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

export default function Contact() {
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
                title="联系方式"
                content={
                  <div>
                    <p className="text-xl text-slate-600">
                      期待与您交流
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
                  <p className="text-slate-600 text-sm mt-2">
                    期望薪资：20k-30k
                  </p>
                  <div className="flex-1" />
                </div>
              </GridTile>
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
              <SocialTile
                name="Phone"
                username="13142263877"
                platform="Phone"
                href="tel:13142263877"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <SocialTile
                name="WeChat"
                username="Hi_Cortana"
                platform="WeChat"
                href="#"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <SocialTile
                name="GitHub"
                username="@Cyberxz2077"
                platform="GitHub"
                href="https://github.com/cyberxz2077"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <SocialTile
                name="X / Twitter"
                username="@Cyberxz2077"
                platform="X"
                href="https://x.com"
              />
            </motion.div>

            <motion.div variants={fadeInUp} className="lg:col-span-2">
              <TextTile
                title="个人网站"
                content={
                  <div className="space-y-4">
                    <p className="text-xl text-slate-600">
                      https://cyberxz.vercel.app/
                    </p>
                    <p className="text-base text-slate-500">
                      欢迎访问我的个人作品集网站
                    </p>
                  </div>
                }
                href="https://cyberxz.vercel.app/"
              />
            </motion.div>

            <motion.div variants={fadeInUp} className="lg:col-span-2">
              <TextTile
                title="工作地点"
                content={
                  <div className="space-y-4">
                    <p className="text-xl text-slate-600">
                      杭州 / 上海
                    </p>
                    <p className="text-base text-slate-500">
                      中国
                    </p>
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
