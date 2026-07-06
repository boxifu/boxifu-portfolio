# Project Guide

Read this file first when modifying the portfolio. It documents the repository conventions so future assistants can make focused changes without rediscovering the architecture.

## Project Architecture

This is a static Astro portfolio for academic work, game development projects, and technical case studies.

- Astro owns routing through `src/pages/`.
- TypeScript is used for config, content schemas, and component props.
- Project entries live in Markdown under `src/content/projects/`.
- Shared page chrome lives in `src/layouts/BaseLayout.astro`.
- Reusable UI pieces live in `src/components/`.
- Static public files live in `public/assets/`.
- Global design tokens and responsive rules live in `src/styles/global.css`.

The site is static and deployable to GitHub Pages. Avoid adding server-only features, client state, or new dependencies unless there is a clear long-term reason.

## Folder Structure

```text
.
├── .github/workflows/deploy.yml
├── astro.config.ts
├── package.json
├── pnpm-lock.yaml
├── PROJECT_GUIDE.md
├── README.md
├── public/
│   └── assets/
│       ├── downloads/
│       ├── images/
│       └── pdfs/
└── src/
    ├── assets/
    ├── components/
    ├── content/
    │   ├── config.ts
    │   └── projects/
    ├── layouts/
    ├── pages/
    └── styles/
```

Use these folders consistently:

- `src/pages/`: Astro routes only.
- `src/layouts/`: page-level wrappers and shells.
- `src/components/`: reusable Astro components.
- `src/content/projects/`: project Markdown entries.
- `src/styles/`: global CSS and future shared stylesheets.
- `src/assets/`: source assets that should be processed by Astro.
- `public/assets/images/`: static images referenced by URL.
- `public/assets/pdfs/`: static PDFs.
- `public/assets/downloads/`: other static downloadable files.

## Naming Conventions

- Components: `PascalCase.astro`, for example `ProjectCard.astro`.
- Layouts: `PascalCase.astro`, for example `BaseLayout.astro`.
- Routes: lowercase file and folder names, for example `about.astro`.
- Project Markdown files: lowercase kebab-case, for example `ai-probability-game.md`.
- Public assets: lowercase kebab-case with descriptive names, for example `ai-probability-game-screenshot-01.webp`.
- CSS classes: lowercase kebab-case, with `block__element` when useful.

Prefer clear names over clever short names. Future edits should be obvious from the file path.

## Coding Conventions

- Keep components small and focused.
- Keep content in Markdown when it is project-specific.
- Keep repeated page structure in components.
- Use TypeScript props for reusable components.
- Do not add animation or visual effects unless the design specifically needs them.
- Do not duplicate the header, footer, or project-detail markup in page files.
- Use `import.meta.env.BASE_URL` when linking to internal public routes or static assets from components/pages.
- Use normal HTML elements first. Add JavaScript only when static HTML cannot solve the problem.

## Markdown Conventions

Project pages are content collection entries. Every project Markdown file must include frontmatter that satisfies `src/content/config.ts`.

Use this structure for longer project pages:

```markdown
---
title: "Project Title"
summary: "One clear sentence describing the project and why it matters."
role: "Your role"
year: 2026
status: "active"
tags:
  - Unity
  - Research
featured: false
links:
  - label: "Repository"
    url: "https://github.com/boxifu/example"
---

## Overview

Describe the project in plain language.

## Contributions

- Name the work you personally did.
- Mention collaborators or team context when relevant.

## Technical Notes

Explain tools, architecture, methods, or implementation details.

## Reflection

Capture what changed, what you learned, or what comes next.
```

Use sentence-case headings. Keep the first paragraph understandable to someone outside the project.

## Reusable Project Page Template

The dynamic route `src/pages/projects/[slug].astro` renders every project through `src/components/ProjectDetail.astro`.

Do not create one-off Astro pages for individual projects unless a project truly needs a custom layout. Add a Markdown file to `src/content/projects/` instead.

A copyable starter exists at:

```text
src/content/projects/_template.md
```

When creating a real project, copy that structure into a new kebab-case Markdown file and update the frontmatter.

## How To Add A New Project

1. Create a new Markdown file in `src/content/projects/`.
2. Name it with lowercase kebab-case, for example `teaching-simulation-tool.md`.
3. Fill in the required frontmatter.
4. Add body content with `Overview`, `Contributions`, `Technical Notes`, and `Reflection` sections when appropriate.
5. Set `featured: true` only for projects that should appear on the Home page.
6. Run `pnpm build` before committing.

The project list and detail page are generated automatically.

## How To Add Images

Use `public/assets/images/` for images that should be referenced directly from Markdown or component markup.

Recommended structure:

```text
public/assets/images/projects/project-slug/
├── hero.webp
├── screenshot-01.webp
└── screenshot-02.webp
```

Markdown example:

```markdown
![Gameplay screenshot](/boxifu-portfolio/assets/images/projects/project-slug/screenshot-01.webp)
```

Astro component/page example:

```astro
<img
  src={`${import.meta.env.BASE_URL}assets/images/projects/project-slug/screenshot-01.webp`}
  alt="Gameplay screenshot"
/>
```

Image conventions:

- Prefer `.webp` for screenshots and rendered images.
- Use `.png` when transparency or exact UI captures matter.
- Use `.jpg` only for photographic images where size matters.
- Always write meaningful alt text.
- Keep filenames descriptive and ordered when there are multiple images.

## Asset Organization

Use `public/assets/` for files that should be served unchanged:

- `public/assets/images/`: screenshots, diagrams, thumbnails, and page images.
- `public/assets/pdfs/`: papers, resumes, posters, and printable documents.
- `public/assets/downloads/`: builds, archives, datasets, or other downloads.

Use `src/assets/` only when Astro should process or bundle the asset.

## How To Embed YouTube Videos

Use `src/components/YouTubeEmbed.astro`.

In an Astro page or component:

```astro
---
import YouTubeEmbed from "@components/YouTubeEmbed.astro";
---

<YouTubeEmbed id="VIDEO_ID" title="Project gameplay trailer" />
```

Use the YouTube video ID, not the full URL. The component uses `youtube-nocookie.com` and lazy loading.

Astro content collection Markdown does not automatically support component imports. If a project needs rich embeds inside the body, convert that project entry to MDX later or add a typed media field to the project schema and render it in `ProjectDetail.astro`.

## How To Embed Google Docs

Use `src/components/GoogleDocsEmbed.astro`.

```astro
---
import GoogleDocsEmbed from "@components/GoogleDocsEmbed.astro";
---

<GoogleDocsEmbed
  url="https://docs.google.com/document/d/DOCUMENT_ID/edit"
  title="Design document"
/>
```

The Google Doc must be shared so viewers can access it. The component converts standard edit URLs to preview URLs.

## How To Embed Google Sheets

Use `src/components/GoogleSheetsEmbed.astro`.

```astro
---
import GoogleSheetsEmbed from "@components/GoogleSheetsEmbed.astro";
---

<GoogleSheetsEmbed
  url="https://docs.google.com/spreadsheets/d/SHEET_ID/edit"
  title="Research data table"
/>
```

The sheet must be published or shared so viewers can access it. For fully public embeds, prefer the Google Sheets published URL when available.

## How To Add PDFs

Place PDFs in `public/assets/pdfs/`.

Recommended structure:

```text
public/assets/pdfs/
├── resume.pdf
└── papers/
    └── project-slug-paper.pdf
```

Markdown link example:

```markdown
[Read the paper](/boxifu-portfolio/assets/pdfs/papers/project-slug-paper.pdf)
```

Astro link example:

```astro
<a href={`${import.meta.env.BASE_URL}assets/pdfs/papers/project-slug-paper.pdf`}>
  Read the paper
</a>
```

Keep PDFs reasonably compressed and use descriptive filenames.

## Deployment To GitHub Pages

The site is configured for GitHub Pages in `astro.config.ts`.

Defaults:

- `ASTRO_SITE`: `https://boxifu.github.io`
- `ASTRO_BASE`: `/boxifu-portfolio`

The deploy workflow is:

```text
.github/workflows/deploy.yml
```

Deployment steps:

1. Push changes to `main`.
2. GitHub Actions installs dependencies with pnpm.
3. The workflow runs `pnpm build`.
4. The generated `dist/` folder is uploaded to GitHub Pages.

Before pushing, run:

```bash
pnpm build
```

If the repository name changes, update `ASTRO_BASE`. If the GitHub Pages owner or domain changes, update `ASTRO_SITE`.

## Future Assistant Checklist

Before editing:

1. Read `PROJECT_GUIDE.md`.
2. Check `git status --short`.
3. Inspect the relevant page, component, or Markdown file.
4. Prefer adding content to `src/content/projects/` before changing route code.
5. Reuse existing components before creating new ones.
6. Run `pnpm build` after source changes.
7. Do not commit unless the user asks for a commit.
