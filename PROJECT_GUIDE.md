# Project Guide

Read this file first when modifying the portfolio. It documents the repository conventions so future assistants can make focused changes without rediscovering the architecture.

## Project Architecture

This is a static Astro portfolio for academic work, game development projects, and technical case studies.

- Astro owns routing through `src/pages/`.
- TypeScript is used for config, content schemas, and component props.
- Project entries live in Markdown under `src/content/projects/`.
- Research and publication placeholder entries currently live in `src/i18n/ui.ts`.
- English and Chinese routes live under `/en/` and `/zh/`.
- Shared interface translations live in `src/i18n/ui.ts`.
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
    ├── i18n/
    ├── layouts/
    ├── pages/
    └── styles/
```

Use these folders consistently:

- `src/pages/`: Astro routes only.
- `src/layouts/`: page-level wrappers and shells.
- `src/components/`: reusable Astro components.
- `src/content/projects/`: project Markdown entries.
- `src/i18n/`: locale config, translation dictionaries, and localized content helpers.
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
- Use `localizedPath(locale, "/path/")` and `pathWithBase()` for locale-aware internal links.
- Use normal HTML elements first. Add JavaScript only when static HTML cannot solve the problem.

## Internationalization

The public URL structure is symmetrical:

```text
/en/
/en/about/
/en/projects/
/en/projects/project-slug/
/en/research/
/zh/
/zh/about/
/zh/projects/
/zh/projects/project-slug/
/zh/research/
```

The root routes `/`, `/about/`, `/projects/`, and `/projects/project-slug/` are lightweight redirects to the English routes.
The root route `/research/` is also a lightweight redirect to `/en/research/`.

Locale conventions:

- Supported locales are defined in `src/i18n/config.ts`.
- Shared UI copy is defined in `src/i18n/ui.ts`.
- `BaseLayout.astro` receives a `locale` prop and sets the page language.
- `SiteHeader.astro` renders the language switcher and locale-aware nav links.
- Route files under `src/pages/[locale]/` generate English and Chinese pages from the same templates.
- Keep route slugs in English kebab-case for both languages, for example `/zh/projects/precious-stones/`.

## Markdown Conventions

Project pages are content collection entries. Every project Markdown file must include frontmatter that satisfies `src/content/config.ts`.

Use this structure for longer project pages:

```markdown
---
title: "Project Title"
summary: "One clear sentence describing the project and why it matters."
role: "Your role"
locale: "en"
projectSlug: "project-title"
year: 2026
status: "active"
category: "Digital Games"
order: 10
media:
  type: "placeholder"
  alt: "Project media placeholder"
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

The dynamic route `src/pages/[locale]/projects/[slug].astro` renders every project through `src/components/ProjectDetail.astro`.

Do not create one-off Astro pages for individual projects unless a project truly needs a custom layout. Add localized Markdown files to `src/content/projects/` instead.

A copyable starter exists at:

```text
src/content/projects/_template.md
```

When creating a real project, copy that structure into a new kebab-case Markdown file and update the frontmatter.

## How To Add A New Project

1. Create an English Markdown file in `src/content/projects/`, for example `teaching-simulation-tool.md`.
2. Create a Chinese Markdown file in `src/content/projects/zh/`. Prefix its filename with `zh-`, for example `zh-teaching-simulation-tool.md`, so Astro content IDs stay unique.
3. Set `locale: "en"` on the English entry and `locale: "zh"` on the Chinese entry.
4. Set the same `projectSlug` value in both files so language switching keeps users on the equivalent project.
5. Fill in localized title, summary, role, tags, and body content.
6. Set `featured: true` only for projects that deserve priority in future curated sections. The current Home page uses a build-time random selection from visible project categories.
7. Run `pnpm build` before committing.

The project list and detail page are generated automatically.

Project metadata conventions:

- `category` controls visible grouping on the Projects page and the eligible random project pool on the Home page. Visible category keys are `Digital Games`, `Computer Graphics / Simulations`, and `Research Works`. The public label for `Research Works` is currently "Research and UI Works".
- `Board Games / Paper Prototypes` remains a valid hidden category for archived board-game entries. Those entries stay in the content collection but do not appear in category lists while the category is omitted from `src/i18n/ui.ts`.
- `locale` controls whether a project appears in `/en/` or `/zh/`.
- `projectSlug` controls the public URL and should match between English and Chinese versions. Do not use a custom `slug` field because Astro treats that name specially.
- `order` controls sorting inside a category. Use increments of 10 so future projects can fit between existing entries.
- `media.type` can be `placeholder`, `image`, or `youtube`.
- `media.src` is required for `image` and `youtube`. Use a public asset path for images, such as `assets/images/projects/project-slug/hero.webp`, or a YouTube video ID for YouTube.
- `media.alt` should describe the image when `media.type` is `image` or describe the placeholder when no media is ready yet.

## Research And Publications Page

The research listing page lives at:

```text
src/pages/[locale]/research/index.astro
```

Its default English and Chinese page copy, including placeholder entries, currently lives in `src/i18n/ui.ts` under `research`.

For now, keep this page as a simple listing page. Do not add a teaching section unless there is actual teaching experience to show.

When adding real citations:

1. Replace the placeholder `research.entries` values in `src/i18n/ui.ts`.
2. Keep formal citation titles, author lists, venue names, and DOI text in their original language unless a translated citation is specifically needed.
3. Put paper PDFs in `public/assets/pdfs/`.
4. Link to Google Scholar, DOI pages, project pages, or PDFs from the entry text once the citation details are final.
5. If the list grows beyond a handful of entries, consider creating a dedicated Astro content collection for publications instead of keeping entries in `ui.ts`.

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
