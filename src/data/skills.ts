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
];
