# Boxifu Portfolio

A static personal portfolio built with Astro for academic work, game development projects, and technical case studies.

## Architecture

- `src/pages/` contains route files for the public pages.
- `src/layouts/BaseLayout.astro` owns the shared HTML shell, metadata, header, and footer.
- `src/components/` contains reusable presentation components.
- `src/content/projects/` contains Markdown project entries.
- `src/content/config.ts` defines the typed project schema.
- `src/styles/global.css` contains global design tokens, layout rules, and responsive styling.

The site is intentionally static and dependency-light. Project content is separated from presentation so future updates can usually be made by editing Markdown.

## Commands

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
```

## Adding A Project

Create a new Markdown file in `src/content/projects/`:

```markdown
---
title: "Project Title"
summary: "One clear sentence about the project."
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

Longer project notes go here.
```

The Projects page and individual project route will update automatically.

## GitHub Pages

The Astro config defaults to a project site hosted at `https://boxifu.github.io/boxifu-portfolio/`.

If the repository name or Pages URL changes, set these environment variables in the build:

- `ASTRO_SITE`, for example `https://boxifu.github.io`
- `ASTRO_BASE`, for example `/boxifu-portfolio`

The included GitHub Actions workflow uses pnpm, builds the static site from `main`, and deploys `dist/` to GitHub Pages.
Boxi Fu's portfolio website
