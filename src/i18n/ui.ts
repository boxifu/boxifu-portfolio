import type { Locale } from "./config";

const googleScholarUrl = "https://scholar.google.com/citations?user=L3FMSnUAAAAJ&hl=en";

const researchEntries = [
  {
    title: "Toward a virtual human exhibit for public ai education",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=L3FMSnUAAAAJ&citation_for_view=L3FMSnUAAAAJ:2osOgNQ5qMEC",
    meta: "W Ning, H Timothy, FU Boxi. International Conference on Computers in Education, 2023.",
    body: "A public AI education contribution listed on Google Scholar.",
    tags: ["AI education", "Virtual humans", "2023"],
  },
  {
    title:
      "The 7th Patient: An Evaluation of an Educational Game for High-School AI and Probability Education",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=L3FMSnUAAAAJ&citation_for_view=L3FMSnUAAAAJ:UeHWp8X0CEIC",
    meta: "DV Pynadath, N Wang, E Greenwald, KE Mayfield-Ingram, H Asturias, et al. Springer, 2026.",
    body: "An evaluation-focused publication about an educational game for AI and probability learning.",
    tags: ["Educational games", "AI education", "2026"],
  },
  {
    title:
      "The 7th patient: Lessons learned from an educational game for high-school AI and probability education",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=L3FMSnUAAAAJ&citation_for_view=L3FMSnUAAAAJ:qjMakFHDy7sC",
    meta: "DV Pynadath, N Wang, E Greenwald, KE Mayfield-Ingram, H Asturias, et al. IATED, 2026.",
    body: "A lessons-learned publication connected to high-school AI and probability education.",
    tags: ["Educational games", "AI education", "2026"],
  },
  {
    title: "Becoming Fei: An Educational Game for AI and Data Science Education for Novice Learners",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=L3FMSnUAAAAJ&citation_for_view=L3FMSnUAAAAJ:u-x6o8ySG0sC",
    meta:
      "N Wang, B Fu, B Dincer, O Masur, D Faizi, H Ravindran, J Wang, D Lai, et al. International Conference on Human-Computer Interaction, 69-79, 2025.",
    body: "A publication on an educational game for novice AI and data science learners.",
    tags: ["Educational games", "Data science", "2025"],
  },
  {
    title: "THE 7TH PATIENT: AN EDUCATIONAL GAME FOR HIGH-SCHOOL AI AND PROBABILITY EDUCATION",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=L3FMSnUAAAAJ&citation_for_view=L3FMSnUAAAAJ:9yKSN-GCB0IC",
    meta: "DV Pynadath, N Wang, E Greenwald, KE Mayfield-Ingram, H Asturias, et al. ICERI2025 Proceedings, 9070-9079, 2025.",
    body: "A proceedings publication about The 7th Patient as an educational AI and probability game.",
    tags: ["Educational games", "Probability", "2025"],
  },
  {
    title: "The 7th Patient: Designing an Educational Game for High School AI and Probability Education",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=L3FMSnUAAAAJ&citation_for_view=L3FMSnUAAAAJ:d1gkVwhDpl0C",
    meta: "N Wang, E Greenwald, D Pynadath, K Mayfield-Ingram, H Asturias, et al. Springer, 2025.",
    body: "A design-focused publication about The 7th Patient and high-school AI/probability education.",
    tags: ["Game design", "AI education", "2025"],
  },
  {
    title: "Virtually Human: An Exhibit for Public AI Education",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=L3FMSnUAAAAJ&citation_for_view=L3FMSnUAAAAJ:u5HHmVD_uO8C",
    meta:
      "N Wang, T Hurt, A Krakowski, E Greenwald, J Hammerman, et al. International Conference on Human-Computer Interaction, 436-443, 2025.",
    body: "A publication on a public-facing AI education exhibit.",
    tags: ["AI education", "Exhibit", "2025"],
  },
];

const contributedResearchEntries = [
  {
    title: "Detecting Ambiguity Aversion in Cyberattack Behavior to Inform Cognitive Defense Strategies",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=29_O2FoAAAAJ&sortby=pubdate&citation_for_view=29_O2FoAAAAJ:_Qo2XoVZTnwC",
    meta:
      "Stephan Carney, Soham Hans, Sofia Hirschmann, Stacey Marsella, Yvonne Fonken, Peggy Wu, Nikolos Gurney. arXiv preprint arXiv:2512.08107, 2025/12/8.",
    body: "A cognitive cybersecurity paper on modeling ambiguity aversion in red-team cyberattack behavior. Listed here as contributed work, not as a co-authored publication.",
    tags: ["Contributed work", "Cybersecurity", "2025"],
  },
  {
    title:
      "Security Logs to ATT&CK Insights: Leveraging LLMs for High-Level Threat Understanding and Cognitive Trait Inference",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=29_O2FoAAAAJ&sortby=pubdate&citation_for_view=29_O2FoAAAAJ:HDshCWvjkbEC",
    meta: "Soham Hans, Stacy Marsella, Sophia Hirschmann, Nikolos Gurney. arXiv preprint arXiv:2510.20930, 2025/10/23.",
    body: "A paper on using large language models to map security logs to MITRE ATT&CK insights and infer cognitive traits. Listed here as contributed work, not as a co-authored publication.",
    tags: ["Contributed work", "LLMs", "2025"],
  },
  {
    title: "Risk Psychology & Cyber-Attack Tactics",
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=29_O2FoAAAAJ&sortby=pubdate&citation_for_view=29_O2FoAAAAJ:mB3voiENLucC",
    meta:
      "Rubens Kim, Stephan Carney, Yvonne Fonken, Soham Hans, Sofia Hirschmann, Stacy Marsella, Peggy Wu, Nikolos Gurney. arXiv preprint arXiv:2510.20657, 2025/10/23.",
    body: "A paper examining whether measured cognitive processes predict cyber-attack behavior. Listed here as contributed work, not as a co-authored publication.",
    tags: ["Contributed work", "Cyberpsychology", "2025"],
  },
];

export const ui = {
  en: {
    siteName: "Boxifu",
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      research: "Research",
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
      heading: "Game & Research Projects",
      intro: "Games, simulations, research prototypes, and technical art projects.",
      categories: [
        { key: "Digital Games", label: "Digital Games" },
        { key: "Computer Graphics / Simulations", label: "Computer Graphics / Simulations" },
        { key: "Research Works", label: "Research and UI Works" },
      ],
      backToProjects: "Back to projects",
      role: "Role:",
      links: "Links",
      tools: "Development and Design Tools",
      openFile: "Open file",
    },
    research: {
      title: "Research",
      description: "Research and publication notes by Boxifu.",
      eyebrow: "Research",
      heading: "Research and publications",
      intro:
        "A growing list for research interests, publications, citations, posters, talks, and related academic contributions. Full citation details will be added as this page is expanded.",
      noteTitle: "Current focus",
      noteBody:
        "My academic work centers on simulation, educational games, and user interaction systems, especially projects that make AI, probability, and complex decision-making easier to understand through playable or interactive experiences.",
      profileLabel: "Google Scholar",
      profileUrl: googleScholarUrl,
      profileSummary: "Boxi Fu on Google Scholar: Project Specialist, University of Southern California.",
      listTitle: "Co-authored publications",
      entries: researchEntries,
      contributedTitle: "Contributed publications",
      contributedIntro:
        "Publications where I contributed project work or technical support but was not listed as a co-author.",
      contributedEntries: contributedResearchEntries,
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
      research: "研究",
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
      heading: "游戏与研究项目",
      intro: "游戏、仿真、研究原型与技术美术相关项目。",
      categories: [
        { key: "Digital Games", label: "数字游戏" },
        { key: "Computer Graphics / Simulations", label: "计算机图形 / 仿真" },
        { key: "Research Works", label: "研究与 UI 项目" },
      ],
      backToProjects: "返回项目列表",
      role: "职责：",
      links: "链接",
      tools: "开发与设计工具",
      openFile: "打开文件",
    },
    research: {
      title: "研究",
      description: "付伯曦的研究与发表内容。",
      eyebrow: "研究",
      heading: "研究与发表",
      intro:
        "这里将用于整理研究方向、发表内容、引用、海报、演讲以及相关学术贡献。具体引用信息会在后续补充。",
      noteTitle: "当前方向",
      noteBody:
        "我的学术兴趣主要围绕仿真、教育游戏与用户交互系统，尤其关注如何通过可玩和交互式体验帮助用户理解 AI、概率以及复杂决策过程。",
      profileLabel: "Google Scholar",
      profileUrl: googleScholarUrl,
      profileSummary: "Boxi Fu 的 Google Scholar 主页：Project Specialist, University of Southern California。",
      listTitle: "共同作者发表",
      entries: researchEntries,
      contributedTitle: "参与贡献的发表",
      contributedIntro: "这里列出我参与过项目工作或技术支持、但未作为共同作者署名的发表。",
      contributedEntries: contributedResearchEntries,
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
