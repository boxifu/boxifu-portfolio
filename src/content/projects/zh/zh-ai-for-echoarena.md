---
title: "AI For EchoArena"
summary: "UC Berkeley 研究项目，重建 EchoArena 基础训练场景，并使用 knowledge tracing 个性化训练者的训练课程。"
role: "程序、技术美术、动画、设计"
locale: "zh"
projectSlug: "ai-for-echoarena"
year: 2023
status: "complete"
category: "Research Works"
order: 30
media:
  type: "image"
  src: "/assets/images/projects/ai-for-echoarena/cover.png"
  alt: "AI For EchoArena project poster"
heroImage:
  src: "/assets/images/projects/ai-for-echoarena/cover.png"
  alt: "AI For EchoArena project poster"
gallery:
  - src: "/assets/images/projects/ai-for-echoarena/screenshot-01.png"
    alt: "AI For EchoArena training scene screenshot"
    caption: "从旧 AI For EchoArena 作品集页面恢复的训练场景截图。"
  - src: "/assets/images/projects/ai-for-echoarena/screenshot-02.png"
    alt: "AI For EchoArena knowledge tracing diagram"
    caption: "从旧作品集页面恢复的 knowledge tracing 图。"
  - src: "/assets/images/projects/ai-for-echoarena/screenshot-03.png"
    alt: "AI For EchoArena server and player POV screenshot"
    caption: "从旧作品集页面恢复的 server/player POV 截图。"
tags:
  - AI
  - Knowledge Tracing
  - Scenic
featured: false
links:
  - label: "旧作品集页面"
    url: "https://sites.google.com/view/boxifu/ai-for-echoarena?authuser=1"
  - label: "CHI 2023"
    url: "https://chi2023.acm.org/"
  - label: "Related Google Scholar profile"
    url: "https://scholar.google.com/citations?user=cTnv_d8AAAAJ&hl=en"
embeds:
  - type: "website"
    title: "CHI 2023"
    url: "https://chi2023.acm.org/"
    fileLabel: "打开 CHI"
    group: "documents"
  - type: "website"
    title: "Related Google Scholar profile"
    url: "https://scholar.google.com/citations?user=cTnv_d8AAAAJ&hl=en"
    fileLabel: "打开 Scholar"
    group: "documents"
---

## 概览

AI For EchoArena 是 UC Berkeley 的研究项目，目标是重建 EchoArena 的基础训练场景，并按照每位训练者的表现个性化呈现训练顺序。项目使用 knowledge tracing model 来估计训练者对特定技能的掌握程度，并在运行时调整训练课程。

研究方向聚焦于 XR 中的个性化 psychomotor skill training，通过概率任务程序和 Bayesian knowledge tracing 支持自适应练习序列。

## 贡献

- 实现 knowledge tracing model 和 curriculum generation system。
- 使用 Scenic 编程语言构建基础训练场景。
- 实现训练过程中的 metrics 数据收集。
- 制作 NPC 移动和动作动画。
- 实现与飞盘、环境和玩家相关的交互行为。
- 支持 EchoArena 地图和 3D 环境重建。

## 研究背景

旧作品集中包含了相关 CHI 2023 研究摘要，描述系统如何将 XR 训练任务分布建模为概率程序，使用 Bayesian knowledge tracing 预测技能掌握情况，并通过个性化任务排序调整训练课程。

## 后续可补充

- 旧作品集没有暴露 YouTube gameplay ID，所以目前使用本地捕获的截图。
- 如果论文图表允许用于作品集展示，可继续加入图表或系统说明图。
