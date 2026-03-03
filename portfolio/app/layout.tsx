import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "黄鑫哲 - AI Product Manager",
  description: "7年产品经理经验，专注AI Agent系统架构与Vibe Coding全栈落地",
  keywords: "AI产品经理, 个人品牌, 作品集, 黄鑫哲, AI Agent, Vibe Coding",
  authors: [{ name: "黄鑫哲" }],
  openGraph: {
    title: "黄鑫哲 - AI Product Manager",
    description: "7年产品经理经验，专注AI Agent系统架构与Vibe Coding全栈落地",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
