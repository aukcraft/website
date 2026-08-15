export interface Skill {
  slug: string;
  /** GitHub repo the skill installs from, e.g. 'owner/repo'. */
  source: string;
  /** Short one-line summary */
  tagline: { en: string; zh: string };
  /** Longer description shown in the detail panel */
  description: { en: string; zh: string };
}

/** aukcraft's own skills, from the standalone aukcraft/skills repo. */
export const skills: Skill[] = [
  {
    slug: 'aukcraft-site-design',
    source: 'aukcraft/skills',
    tagline: {
      en: 'The aukcraft.org page shell as a drop-in design system.',
      zh: '可直接套用的 aukcraft.org 页面外壳与设计系统。',
    },
    description: {
      en: 'Reproduce the aukcraft.org page shell and design system — dark editorial style, interactive dot-field dynamic background, Flight Line motion language, bilingual routes — on a new Astro + Tailwind static site. Provides drop-in asset files plus the hard design rules that keep the result consistent.',
      zh: '在新的 Astro + Tailwind 静态站点上复现 aukcraft.org 的页面外壳与设计系统——深色编辑风、可交互点阵动态背景、Flight Line 动效语言、双语路由。提供可直接套用的资源文件，以及保证视觉一致的硬性设计规则。',
    },
  },
  {
    slug: 'aukcraft-app-design',
    source: 'aukcraft/skills',
    tagline: {
      en: 'aukcraft design rules for desktop application UIs.',
      zh: 'aukcraft 桌面应用 UI 的设计规范。',
    },
    description: {
      en: 'Design rules for aukcraft desktop application UIs — Tauri, Electron, native, or any desktop toolkit. Covers upgrading an existing UI (audit-first, token remap) and designing from scratch (token core first), with framework-agnostic rules and a theme generator script that produces shadcn/CSS/Tailwind themes from a product accent color. Includes a worked Peregrine example.',
      zh: 'aukcraft 桌面应用 UI 的设计规范——适用于 Tauri、Electron、原生或任意桌面工具链。覆盖升级现有 UI（审计先行、token 重映射）与从零设计（token 核心先行）两种场景，规则与框架无关，并附带主题生成脚本：从产品 accent 色生成 shadcn/CSS/Tailwind 主题。含完整的 Peregrine 工作示例。',
    },
  },
  {
    slug: 'aukcraft-mobile-design',
    source: 'aukcraft/skills',
    tagline: {
      en: 'aukcraft design rules for mobile application UIs.',
      zh: 'aukcraft 移动端应用 UI 的设计规范。',
    },
    description: {
      en: 'Design rules for aukcraft mobile application UIs — native iOS/Android, React Native, Flutter, Tauri Mobile, or any mobile toolkit. Shares the neutral token core and restraint philosophy with the desktop and site skills, adapted for touch, safe areas, one-handed use, and platform idioms. Includes a theme generator script with a platform-neutral JSON format for non-CSS stacks, plus touch and navigation pattern references.',
      zh: 'aukcraft 移动端应用 UI 的设计规范——适用于原生 iOS/Android、React Native、Flutter、Tauri Mobile 或任意移动工具链。与桌面端、网站规范共享同一套中性色 token 内核与克制哲学，针对触屏、安全区、单手操作与平台惯例做了适配。附带主题生成脚本（非 CSS 技术栈可用平台中立的 JSON 格式）与触摸/导航模式参考。',
    },
  },
];
