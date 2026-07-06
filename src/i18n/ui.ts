import type { Locale } from "./config";

export const ui = {
  en: {
    siteName: "Boxifu",
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      ariaLabel: "Primary navigation",
      language: "Language switcher",
    },
    home: {
      title: "Boxifu",
      description:
        "Academic and game developer portfolio focused on research, playable systems, and maintainable technical work.",
      eyebrow: "Portfolio",
      name: "Boxi Fu",
      role: "Game Designer, Programmer, and Technical Artist",
      masters: "I've received my Master of Science in CS Game Development at USC Games.",
      bachelors:
        "I've received my bachelor's degree in Computer Science and Applied Mathematics from UC Berkeley.",
      thanksPrefix: "Thank you for checking out my portfolio website! You can play some of the games through my",
      thanksLink: "itch.io",
      thanksSuffix: "links!",
      viewProjects: "View projects",
      about: "About",
      focusEyebrow: "Focus",
      focusTitle: "A portfolio built for depth, not noise.",
      focusCards: [
        {
          title: "Research-minded",
          body: "Space for academic context, methods, publications, presentations, and reflective project writing.",
        },
        {
          title: "Game developer ready",
          body: "Project pages can grow to include roles, design goals, technical notes, playable builds, media, and source links.",
        },
        {
          title: "Easy to extend",
          body: "Reusable layouts and Markdown content make future edits straightforward for both humans and coding agents.",
        },
      ],
      selectedWork: "Selected work",
      projects: "Projects",
    },
    about: {
      title: "About",
      description: "About Boxifu, an academic and game developer portfolio.",
      eyebrow: "About",
      heading: "Academic curiosity with a game developer's eye for systems.",
      intro:
        "This page is the home for a fuller biography, research interests, education, teaching, tools, and creative practice. The first version keeps the structure ready without pretending to know details that should come directly from you.",
      sections: [
        {
          title: "Research and academic work",
          body: "Use this section for research areas, publications, conference work, lab affiliations, or teaching experience. Keeping it in page content makes it easy to revise as your academic work evolves.",
        },
        {
          title: "Game development",
          body: "Use this section for engines, design interests, prototypes, shipped work, team roles, and the kinds of player experiences you care about building.",
        },
        {
          title: "Technical practice",
          body: "Use this section for programming languages, tools, systems work, production workflows, and maintainability values.",
        },
      ],
    },
    projects: {
      title: "Projects",
      description: "Projects by Boxifu across academic work, game development, and technical experiments.",
      eyebrow: "Projects",
      heading: "Work that can grow from short summaries into detailed case studies.",
      intro:
        "Each project is stored as a Markdown entry with typed metadata. Add a new localized file in src/content/projects to create another project page.",
      categories: [
        { key: "Digital Games", label: "Digital Games" },
        { key: "Computer Graphics / Simulations", label: "Computer Graphics / Simulations" },
        { key: "Board Games / Paper Prototypes", label: "Board Games / Paper Prototypes" },
      ],
      backToProjects: "Back to projects",
      role: "Role:",
      links: "Links",
    },
    footer: {
      heading: "Contact and Links",
      built: "Built with Astro.",
    },
  },
  zh: {
    siteName: "Boxifu",
    nav: {
      home: "首页",
      about: "关于",
      projects: "项目",
      ariaLabel: "主导航",
      language: "语言切换",
    },
    home: {
      title: "Boxifu",
      description: "付伯曦的作品集，展示游戏设计、程序、技术美术、研究与可玩的系统。",
      eyebrow: "作品集",
      name: "付伯曦",
      role: "游戏设计师、程序员、技术美术",
      masters: "我获得了 USC Games 计算机科学游戏开发方向的理学硕士学位。",
      bachelors: "我获得了 UC Berkeley 计算机科学与应用数学双专业的学士学位。",
      thanksPrefix: "感谢你浏览我的作品集网站！你可以通过我的",
      thanksLink: "itch.io",
      thanksSuffix: "链接试玩部分游戏！",
      viewProjects: "查看项目",
      about: "关于我",
      focusEyebrow: "重点",
      focusTitle: "一个为深度内容而设计的作品集。",
      focusCards: [
        {
          title: "面向研究",
          body: "为学术背景、研究方法、发表内容、展示材料与项目反思保留清晰空间。",
        },
        {
          title: "适合游戏开发",
          body: "项目页可以逐步补充职责、设计目标、技术笔记、可玩版本、媒体与源码链接。",
        },
        {
          title: "便于扩展",
          body: "复用布局和 Markdown 内容，让未来的人类作者或 AI 助手都能轻松维护。",
        },
      ],
      selectedWork: "精选作品",
      projects: "项目",
    },
    about: {
      title: "关于",
      description: "关于 Boxifu 的学术与游戏开发作品集。",
      eyebrow: "关于",
      heading: "带着游戏开发者的系统视角探索学术与创作。",
      intro:
        "这个页面会逐步补充更完整的个人简介、研究兴趣、教育背景、教学经历、工具经验与创作实践。当前版本先保留结构，之后可以继续替换成更精确的个人内容。",
      sections: [
        {
          title: "研究与学术",
          body: "这里可以放研究方向、论文、会议展示、实验室经历或教学经历。内容保留在页面层，便于随着学术经历更新。",
        },
        {
          title: "游戏开发",
          body: "这里可以放引擎经验、设计兴趣、原型、发布作品、团队职责，以及你关心的玩家体验类型。",
        },
        {
          title: "技术实践",
          body: "这里可以放编程语言、工具链、系统开发、制作流程，以及你对可维护性的理解。",
        },
      ],
    },
    projects: {
      title: "项目",
      description: "付伯曦在学术、游戏开发与技术实验方向的项目作品。",
      eyebrow: "项目",
      heading: "从简短介绍逐步扩展成完整案例研究的作品。",
      intro: "每个项目都以带类型校验的 Markdown 条目保存。添加新的本地化项目文件即可生成对应项目页。",
      categories: [
        { key: "Digital Games", label: "数字游戏" },
        { key: "Computer Graphics / Simulations", label: "计算机图形 / 仿真" },
        { key: "Board Games / Paper Prototypes", label: "桌游 / 纸面原型" },
      ],
      backToProjects: "返回项目列表",
      role: "职责：",
      links: "链接",
    },
    footer: {
      heading: "联系方式与链接",
      built: "使用 Astro 构建。",
    },
  },
} satisfies Record<Locale, Record<string, unknown>>;

export function useTranslations(locale: Locale) {
  return ui[locale];
}
