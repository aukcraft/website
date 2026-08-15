# Lighthouse 基线留档

首次全量留档：**2026-08-15**（tasks 4.3 遗留项补执行）。

## 环境

- lighthouse `13.4.1`、chrome-headless-shell `152.0.7977.42`（Chrome for Testing）
- 目标：线上站 `https://www.aukcraft.org/`（en / zh × desktop / mobile 四组合）
- 类别：performance, accessibility, best-practices, seo

## 成绩

| 组合 | Performance | Accessibility | Best Practices | SEO |
|---|---|---|---|---|
| desktop en | 94 | 98 | 100 | 100 |
| desktop zh | 91 | 98 | 100 | 100 |
| mobile en | 91 | 98 | 100 | 100 |
| mobile zh | 87 | 98 | 100 | 100 |

对照 add-org-website 遗留目标（Performance ≥ 95 / Accessibility ≥ 95）：Accessibility 达标，Performance 未达（差距 1–8 分）。

## 已知问题（留档时点）

1. **heading 跳级**（accessibility 唯一实扣分）：Philosophy 板块 h1 → h3，缺 h2。→ 已在 `align-readme-and-baseline` change 中修复（SectionHeading 改 `<h2>`），修复后成绩以复跑为准。
2. **CJK 字体渲染阻塞**（performance 主要缺口）：Noto Sans SC / Noto Serif SC 走 Google Fonts CSS；mobile zh FCP 2.7s、render-blocking 估算节省 570ms。候选方案：fontsource 自托管 + 子集化（单开 change）。
3. 主线程工作 7.4s（mobile zh）：字体光栅化 + canvas 点阵；波浪 rAF 已有视口门控。

## 复跑命令

```bash
# 在 website/ 之外的任意目录（node_modules 不入站）
npx lighthouse "https://www.aukcraft.org/" \
  --output=json --output-path=desktop-home.json \
  --preset=desktop --chrome-flags="--no-sandbox" \
  --only-categories=performance,accessibility,best-practices,seo
```

mobile 组合去掉 `--preset=desktop`；zh 页换 URL 为 `https://www.aukcraft.org/zh/`。

## 预算（org-website 基线 spec 同步）

- Accessibility ≥ 98、Best Practices = 100、SEO = 100
- Performance ≥ 85（本留档最低值 87 为锚点；95 为遗留目标，待字体专项）
- 任何涉及渲染路径/字体/脚本的变更后必须复跑四组合对照
