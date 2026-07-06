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
      heading: "Hi! I'm Boxi Fu,",
      intro: [
        "and I’m a game designer and developer at USC ICT, recently graduated with a degree in Computer Science - Game Development at the USC Viterbi School of Engineering, at the University of Southern California, in the USC Games program.",
        "I have a strong computer science and mathematics background, yet decided to pursue a career in game development during my senior year of undergraduate study at University of California, Berkeley. I see game design and programming as a perfect marriage between my coding experience and my interests in arts and music.",
        "In my free time, I make digital art: whether it's 2D fan art of games I play, 3D models in Blender, or Live2D models I experiment with. Recently, I've been experimenting with generative AI, specifically Stable Diffusion with LoRA for AI Art. I also hope that I can get better at playing League of Legends.",
      ],
      photoAlt: "Boxi Fu wearing sunglasses in front of a stone wall",
      resumeTitle: "Resume",
      resumeBody: "A current game development resume is embedded below. You can also open or download the PDF directly.",
      resumeOpen: "Open resume PDF",
      resumeDownload: "Download resume",
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
      heading: "你好！我是付伯曦，",
      intro: [
        "我是一名游戏设计师与开发者，目前在 USC ICT 工作，近期从南加州大学 Viterbi 工程学院的计算机科学 - 游戏开发方向毕业，并参与 USC Games 项目。",
        "我有较强的计算机科学与数学背景，但在 UC Berkeley 本科四年级时决定进入游戏开发领域。我认为游戏设计与程序开发很好地结合了我的编程经验，以及我对艺术和音乐的兴趣。",
        "空闲时，我会创作数字艺术：包括喜欢的游戏同人 2D 插画、Blender 3D 模型，以及实验性的 Live2D 模型。最近我也在尝试生成式 AI，尤其是使用 Stable Diffusion 与 LoRA 创作 AI Art。我还希望自己能把英雄联盟打得更好一点。",
      ],
      photoAlt: "付伯曦戴着太阳镜站在石墙前",
      resumeTitle: "简历",
      resumeBody: "下面嵌入的是当前的游戏开发方向简历。你也可以直接打开或下载 PDF。",
      resumeOpen: "打开简历 PDF",
      resumeDownload: "下载简历",
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
