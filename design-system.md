# 黄鑫哲个人品牌网站 - 设计规范文档 v1.1

## 更新日志
- v1.1 (2026-03-02): 新增方格卡片统一布局系统，参考 marco.fyi 设计风格

---

## 一、设计概念

### 「极光棱镜」
将个人成长轨迹可视化为光的折射——每一次转折都是一次光谱分解，最终汇聚成独特的个人色彩。

**核心关键词**：清透 | 锐利 | 科幻 | 光影渐变 | 玻璃质感

---

## 二、色彩系统

### 2.1 主色调光谱

```
冰川白 #FAFBFC ───────────────────────────────────── 背景基底
    │
    ▼
海蓝 #0EA5E9 ──→ 深海蓝 #0284C7 ──→ 午夜蓝 #0C4A6E
    │                                           主文字色
    ▼
树绿 #10B981 ──→ 森林绿 #059669 ──→ 苔藓绿 #064E3B
    │
    ▼
朝阳橙 #F97316 ──→ 琥珀 #D97706 ──→ 赤陶 #9A3412
    │
    ▼
云白 #F8FAFC ───────────────────────────────────── 卡片背景
```

### 2.2 色彩使用规则

| 用途 | 色值 | 说明 |
|-----|------|------|
| **页面背景** | `linear-gradient(180deg, #FAFBFC 0%, #F8FAFC 100%)` | 冰川白到云白的微妙渐变 |
| **主文字** | `#1E3A5F` | 午夜蓝，保持品牌色 |
| **次要文字** | `#64748B` |  slate-500 |
| **强调色-项目** | `#0EA5E9` | 海蓝，用于项目相关 |
| **强调色-成长** | `#10B981` | 树绿，用于关于我 |
| **强调色-未来** | `#F97316` | 朝阳橙，用于未来展望 |
| **边框/分割线** | `rgba(30, 58, 95, 0.1)` | 10% 透明度的午夜蓝 |
| **玻璃背景** | `rgba(255, 255, 255, 0.7)` | 白色半透明 |

### 2.3 CSS 变量定义

```css
:root {
  /* 色彩 */
  --color-ice: #FAFBFC;
  --color-cloud: #F8FAFC;
  --color-sea: #0EA5E9;
  --color-sea-deep: #0284C7;
  --color-midnight: #1E3A5F;
  --color-forest: #10B981;
  --color-sunrise: #F97316;
  --color-text-primary: #1E3A5F;
  --color-text-secondary: #64748B;
  --color-border: rgba(30, 58, 95, 0.1);
  
  /* 玻璃效果 */
  --glass-bg: rgba(255, 255, 255, 0.7);
  --glass-border: rgba(255, 255, 255, 0.5);
  --glass-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
  --glass-blur: blur(20px);
}
```

---

## 三、字体系统

### 3.1 字体搭配

| 用途 | 字体 | 字重 | 安装包 |
|-----|------|------|--------|
| **中文大标题** | 得意黑 (Smiley Sans) | 400 | `@chinese-fonts/dyh` |
| **中文正文** | 思源黑体 (Source Han Sans SC) | 300-700 | `@chinese-fonts/syst` |
| **英文标题** | Space Grotesk | 400-700 | Google Fonts |
| **代码/术语** | JetBrains Mono | 400 | Google Fonts |

### 3.2 字体栈配置

```css
:root {
  --font-display: 'Smiley Sans', 'Space Grotesk', 'Source Han Sans SC', sans-serif;
  --font-body: 'Source Han Sans SC', 'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', sans-serif;
  --font-heading-en: 'Space Grotesk', 'Smiley Sans', sans-serif;
  --font-mono: 'JetBrains Mono', 'Source Han Sans SC', monospace;
}
```

### 3.3 字体使用规范

| 元素 | 字体 | 大小 | 字重 | 行高 | 字间距 |
|-----|------|------|------|------|--------|
| **Hero 主标题** | 得意黑 | 48-64px | 400 | 1.1 | -0.02em |
| **H1** | 得意黑 | 36-48px | 400 | 1.2 | -0.01em |
| **H2** | 得意黑 | 28-32px | 400 | 1.3 | 0 |
| **H3** | 思源黑体 | 20-24px | 500 | 1.4 | 0 |
| **正文** | 思源黑体 | 16-18px | 400 | 1.7 | 0.01em |
| **小字/注释** | 思源黑体 | 14px | 400 | 1.5 | 0 |
| **按钮** | 得意黑 | 16px | 400 | 1 | 0.02em |
| **代码** | JetBrains Mono | 14px | 400 | 1.6 | 0 |

### 3.4 响应式字体

```css
/* 移动端 */
@media (max-width: 768px) {
  :root {
    --text-hero: 36px;
    --text-h1: 28px;
    --text-h2: 22px;
    --text-body: 16px;
  }
}

/* 平板 */
@media (min-width: 769px) and (max-width: 1024px) {
  :root {
    --text-hero: 48px;
    --text-h1: 36px;
    --text-h2: 28px;
    --text-body: 17px;
  }
}

/* 桌面 */
@media (min-width: 1025px) {
  :root {
    --text-hero: 64px;
    --text-h1: 48px;
    --text-h2: 32px;
    --text-body: 18px;
  }
}
```

---

## 四、间距系统

### 4.1 基础单位

基础单位：**4px**

| Token | 值 | 用途 |
|-------|-----|------|
| `space-1` | 4px | 图标间距、细线 |
| `space-2` | 8px | 紧凑元素间距 |
| `space-3` | 12px | 按钮内边距 |
| `space-4` | 16px | 默认间距 |
| `space-5` | 20px | 卡片内边距 |
| `space-6` | 24px | 区块间距 |
| `space-8` | 32px | 大间距 |
| `space-10` | 40px | 区块标题间距 |
| `space-12` | 48px | 大区块间距 |
| `space-16` | 64px | 页面间距 |
| `space-20` | 80px | Hero 间距 |
| `space-24` | 96px | 最大间距 |

### 4.2 区块间距

| 区块类型 | 上间距 | 下间距 |
|---------|--------|--------|
| **Hero** | 80px | 120px |
| **关于我** | 120px | 120px |
| **项目** | 120px | 120px |
| **技能** | 80px | 80px |
| **未来展望** | 120px | 120px |
| **联系** | 80px | 80px |

---

## 五、布局系统

### 5.1 破碎网格布局

打破传统12栏网格，采用**不对称、重叠、动态**的布局：

```
┌─────────────────────────────────────────────────────────┐
│  ┌─────────────────┐                                    │
│  │   Hero 区       │     ┌──────────────┐               │
│  │   左对齐大标题   │     │   浮动卡片    │               │
│  │   + 动态光谱     │     │   玻璃质感    │               │
│  └─────────────────┘     └──────────────┘               │
│                                                         │
│       ┌───────────────────────────────────┐             │
│       │      关于我 - 时间线叙事            │             │
│       │      斜向排列的关键节点             │             │
│       └───────────────────────────────────┘             │
│                                                         │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │   项目 1     │  │   项目 2     │  │   项目 3     │  │
│  │   交错高度   │  │   交错高度   │  │   交错高度   │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
│                                                         │
│       ┌───────────────────────────────────┐             │
│       │      未来展望 - 版本时间轴          │             │
│       │      v260302.1  →  v260301.1      │             │
│       └───────────────────────────────────┘             │
└─────────────────────────────────────────────────────────┘
```

### 5.2 容器宽度

| 断点 | 最大宽度 | 水平内边距 |
|-----|---------|-----------|
| 移动端 (<768px) | 100% | 20px |
| 平板 (768-1024px) | 720px | 24px |
| 桌面 (1024-1280px) | 960px | 32px |
| 大屏 (>1280px) | 1200px | 48px |

### 5.3 网格系统

```css
/* 项目卡片网格 - 交错布局 */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

/* 项目卡片交错高度 */
.project-card:nth-child(1) { transform: translateY(0); }
.project-card:nth-child(2) { transform: translateY(40px); }
.project-card:nth-child(3) { transform: translateY(20px); }
.project-card:nth-child(4) { transform: translateY(60px); }
```

---

## 5.4 方格卡片统一布局系统（核心设计）

参考 marco.fyi 网站，所有内容除详情页外均采用方格卡片展示。

### 5.4.1 设计原则

```
┌─────────────────────────────────────────────────────────┐
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐   │
│  │ 方格卡片 │ │ 方格卡片 │ │ 方格卡片 │ │ 方格卡片 │   │
│  │         │ │         │ │         │ │         │   │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘   │
│  ┌───────────────────────┐ ┌─────────┐ ┌─────────┐   │
│  │   跨列方格卡片        │ │方格卡片 │ │方格卡片 │   │
│  │   (col-span-2)       │ │         │ │         │   │
│  └───────────────────────┘ └─────────┘ └─────────┘   │
│  ┌─────────┐ ┌─────────┐ ┌───────────────────────┐   │
│  │方格卡片 │ │方格卡片 │ │   跨列方格卡片         │   │
│  │         │ │         │ │   (col-span-2)        │   │
│  └─────────┘ └─────────┘ └───────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

### 5.4.2 网格配置

| 断点 | 列数 | 卡方间距 | 圆角 |
|-----|------|---------|------|
| 移动端 (<768px) | 1列 | 16px | 28px (3xl) |
| 平板 (768-1024px) | 2列 | 16px | 28px (3xl) |
| 桌面 (>1024px) | 4列 | 16px | 28px (3xl) |

### 5.4.3 跨列布局

- **单列** (默认): `col-span-1`
- **双列**: `lg:col-span-2` - 用于重要标题或长内容
- **三列**: `lg:col-span-3` - 用于较长的文本介绍
- **四列**: `lg:col-span-4` - 用于全宽内容（极少使用）

### 5.4.4 卡片类型

| 卡片类型 | 用途 | 特征 |
|---------|------|------|
| **GridTile** | 基础方格卡片 | 纯内容容器 |
| **TextTile** | 文本展示卡片 | 包含标题+内容区域 |
| **ProjectTile** | 项目展示卡片 | 包含图片、标签、状态 |
| **SocialTile** | 社交媒体卡片 | 包含平台图标、名称、链接 |

### 5.4.5 卡片设计规范

```css
/* 方格卡片基础样式 */
.grid-tile {
  /* 背景 */
  background: #F1F5F9; /* slate-100 */
  
  /* 圆角 - 关键：不规则圆角效果 */
  border-radius: 28px; /* 3xl */
  
  /* 内边距 */
  padding: 24px;
  
  /* 交互 */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* 悬停效果 */
  cursor: pointer;
}

.grid-tile:hover {
  /* 轻微上浮 */
  transform: translateY(-2px);
  
  /* 阴影增强 */
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
}

/* 卡片右下角箭头按钮 */
.tile-arrow {
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: translate(-4px, 4px);
  transition: all 0.3s ease;
}

.grid-tile:hover .tile-arrow {
  opacity: 1;
  transform: translate(0, 0);
}
```

---

## 六、玻璃质感组件

### 6.1 基础玻璃卡片

```css
.glass-card {
  /* 背景 */
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  
  /* 边框 */
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  
  /* 阴影 */
  box-shadow: 
    0 4px 6px -1px rgba(0, 0, 0, 0.05),
    0 2px 4px -1px rgba(0, 0, 0, 0.03),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
  
  /* 过渡 */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### 6.2 玻璃卡片悬停效果

```css
.glass-card:hover {
  /* 背景变亮 */
  background: rgba(255, 255, 255, 0.85);
  
  /* 边框变色 */
  border-color: rgba(14, 165, 233, 0.3); /* 海蓝边框 */
  
  /* 阴影增强 */
  box-shadow: 
    0 20px 25px -5px rgba(0, 0, 0, 0.08),
    0 10px 10px -5px rgba(0, 0, 0, 0.02),
    0 0 0 1px rgba(14, 165, 233, 0.1);
  
  /* 微上浮 */
  transform: translateY(-4px) scale(1.01);
}
```

### 6.3 玻璃按钮

```css
.glass-button {
  /* 基础样式 */
  background: rgba(14, 165, 233, 0.1); /* 海蓝10% */
  backdrop-filter: blur(8px);
  border: 1px solid rgba(14, 165, 233, 0.3);
  border-radius: 12px;
  
  /* 文字 */
  color: #0EA5E9;
  font-family: var(--font-display);
  font-size: 16px;
  letter-spacing: 0.02em;
  
  /* 内边距 */
  padding: 12px 24px;
  
  /* 过渡 */
  transition: all 0.3s ease;
}

.glass-button:hover {
  background: rgba(14, 165, 233, 0.2);
  box-shadow: 0 0 20px rgba(14, 165, 233, 0.3);
  transform: translateY(-2px);
}
```

### 6.4 主按钮（强调色）

```css
.button-primary {
  background: linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 14px 28px;
  font-family: var(--font-display);
  font-size: 16px;
  letter-spacing: 0.02em;
  box-shadow: 0 4px 14px rgba(14, 165, 233, 0.4);
  transition: all 0.3s ease;
}

.button-primary:hover {
  box-shadow: 0 6px 20px rgba(14, 165, 233, 0.5);
  transform: translateY(-2px);
}
```

---

## 七、动效系统

### 7.1 页面加载序列

```
0ms     → 背景渐变淡入 (opacity 0→1, 500ms)
200ms   → Hero 标题从下方滑入 + 淡入 (translateY 30px→0, opacity 0→1, 600ms)
400ms   → 副标题跟随 (translateY 20px→0, opacity 0→1, 500ms)
600ms   → 浮动卡片从右侧滑入 (translateX 50px→0, opacity 0→1, 600ms)
800ms   → 导航栏淡入 (opacity 0→1, 400ms)
1000ms  → CTA 按钮出现 (scale 0.9→1, opacity 0→1, 400ms)
```

### 7.2 滚动触发动画

```css
/* 淡入上滑 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 使用 Intersection Observer 触发 */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### 7.3 悬停微交互

```css
/* 磁吸按钮效果 */
.button-magnetic {
  transition: transform 0.2s ease;
}

/* 光泽扫过效果 */
.glass-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
  transition: left 0.5s ease;
}

.glass-card:hover::before {
  left: 100%;
}

/* 文字渐变 */
.text-gradient {
  background: linear-gradient(135deg, #0EA5E9 0%, #10B981 50%, #F97316 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### 7.4 背景光晕动画

```css
.aurora-bg {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: -1;
  overflow: hidden;
}

.aurora-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.4;
  animation: float 20s ease-in-out infinite;
}

.aurora-blob-1 {
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(14, 165, 233, 0.3) 0%, transparent 70%);
  top: 10%;
  left: 20%;
  animation-delay: 0s;
}

.aurora-blob-2 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, transparent 70%);
  bottom: 20%;
  right: 10%;
  animation-delay: -5s;
}

.aurora-blob-3 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(249, 115, 22, 0.2) 0%, transparent 70%);
  top: 50%;
  right: 30%;
  animation-delay: -10s;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(50px, -30px) scale(1.1);
  }
  50% {
    transform: translate(-30px, 50px) scale(0.9);
  }
  75% {
    transform: translate(-50px, -20px) scale(1.05);
  }
}
```

---

## 八、组件规范

### 8.1 导航栏

```
┌─────────────────────────────────────────────────────────┐
│  Logo        首页    未来展望              [下载简历]    │
│  得意黑      思源黑体                    玻璃按钮        │
└─────────────────────────────────────────────────────────┘
```

- **高度**：64px（桌面）/ 56px（移动）
- **背景**：`rgba(255, 255, 255, 0.8)` + `backdrop-filter: blur(12px)`
- **位置**：Sticky top
- **Logo**：得意黑，20px
- **链接**：思源黑体，16px，悬停时颜色变为海蓝

### 8.2 Hero 区

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│   黄鑫哲                                                │
│   AI Product Manager                                    │
│                                                         │
│   7年产品经验 | 独立开发过AI产品 | 正在寻找杭州/上海的机会  │
│                                                         │
│   [ 查看项目 ]  [ 下载简历 ]                             │
│                                                         │
│              ┌──────────────────┐                       │
│              │   浮动玻璃卡片    │                       │
│              │   展示最新项目    │                       │
│              └──────────────────┘                       │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

- **主标题**：得意黑，64px（桌面）/ 36px（移动）
- **副标题**：Space Grotesk，24px，字重 300
- **描述**：思源黑体，18px， slate-500
- **按钮组**：主按钮 + 玻璃按钮

### 8.3 项目卡片

```
┌─────────────────────────────┐
│  ┌───────────────────────┐  │
│  │     项目截图           │  │
│  │     16:9 比例          │  │
│  └───────────────────────┘  │
│                             │
│  Claw OS                    │ ← 得意黑，24px
│  本地个人AI操作系统          │ ← 思源黑体，16px，slate-500
│                             │
│  [Multi-agent] [RAG]        │ ← 标签，玻璃效果
│                             │
│  [查看详情 →]               │ ← 链接，海蓝色
└─────────────────────────────┘
```

- **卡片**：玻璃质感，圆角 16px
- **图片**：圆角 12px，16:9 比例
- **标题**：得意黑，24px
- **描述**：思源黑体，16px
- **标签**：玻璃小标签，圆角 20px

### 8.4 时间线（关于我）

```
         2025
          │
          ▼
    ┌─────────────┐
    │  AI创业者    │ ← 得意黑
    │  连续创业... │ ← 思源黑体
    └─────────────┘
          │
          ▼
         2024
          │
          ▼
    ┌─────────────┐
    │ 数字孪生    │
    │ 智慧工地... │
    └─────────────┘
```

- **时间线**：2px 宽，渐变色彩（海蓝 → 树绿 → 朝阳橙）
- **节点**：12px 圆形，白色背景 + 彩色边框
- **卡片**：玻璃质感，左侧与节点对齐

### 8.5 技能标签

```
┌─────────────────────────────────────────────────────────┐
│  AI工具                                                  │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐           │
│  │ChatGPT │ │ Claude │ │DeepSeek│ │  ...   │           │
│  └────────┘ └────────┘ └────────┘ └────────┘           │
│                                                          │
│  Agent平台                                               │
│  ┌────────┐ ┌────────┐                                  │
│  │  Coze  │ │ Manus  │                                  │
│  └────────┘ └────────┘                                  │
└─────────────────────────────────────────────────────────┘
```

- **分类标题**：得意黑，20px
- **标签**：玻璃效果，圆角 8px，内边距 8px 16px
- **标签文字**：思源黑体，14px

### 8.6 文章列表（未来展望）

```
┌─────────────────────────────────────────────────────────┐
│                                                          │
│  v260302.1                              2026.03.02      │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   │
│  AI Agent的下一个形态                                    │
│  当我对AI Agent的理解发生了新的变化...                    │
│  [AI产品] [思考]                                         │
│                                                          │
│  v260301.1                              2026.03.01      │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━   │
│  为什么我要做Claw OS                                     │
│  这篇文章记录了我开始这个项目的初衷...                    │
│  [创业] [AI产品]                                         │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

- **版本号**：得意黑，16px，海蓝色
- **日期**：思源黑体，14px，slate-400
- **标题**：得意黑，24px
- **摘要**：思源黑体，16px，slate-500
- **标签**：玻璃小标签

---

## 九、响应式设计

### 9.1 断点

| 名称 | 断点 | 说明 |
|-----|------|------|
| **sm** | 640px | 大屏手机 |
| **md** | 768px | 平板 |
| **lg** | 1024px | 小桌面 |
| **xl** | 1280px | 桌面 |
| **2xl** | 1536px | 大桌面 |

### 9.2 响应式规则

| 元素 | 移动端 | 平板 | 桌面 |
|-----|--------|------|------|
| **导航** | 汉堡菜单 | 完整导航 | 完整导航 |
| **Hero 标题** | 36px | 48px | 64px |
| **项目网格** | 1列 | 2列 | 3列 |
| **卡片交错** | 无 | 有 | 有 |
| **时间线** | 垂直 | 垂直 | 垂直 |
| **容器内边距** | 20px | 24px | 48px |

---

## 十、设计原则总结

1. **清透感**：白色玻璃质感 + 背景光晕 + 大量留白
2. **锐利感**：得意黑的倾斜几何 + 不对称布局 + 斜向元素
3. **科幻感**：动态光晕 + 微交互 + 渐变色彩
4. **一致性**：所有组件使用统一的玻璃质感、圆角、阴影系统
5. **层次感**：通过透明度、模糊、阴影创造深度

---

## 十一、交付清单

- [x] 色彩系统
- [x] 字体系统
- [x] 间距系统
- [x] 布局系统
- [x] 玻璃质感组件
- [x] 动效系统
- [x] 组件规范
- [x] 响应式设计

---

**设计规范完成！** 移交架构师进行开发实施。
