import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    role: z.string().optional(),
    locale: z.enum(["en", "zh"]).default("en"),
    projectSlug: z.string().optional(),
    year: z.number(),
    status: z.enum(["active", "complete", "archived"]).default("complete"),
    category: z
      .enum([
        "Digital Games",
        "Computer Graphics / Simulations",
        "Research Works",
        "Board Games / Paper Prototypes",
      ])
      .default("Digital Games"),
    order: z.number().default(999),
    media: z
      .object({
        type: z.enum(["image", "youtube", "placeholder"]).default("placeholder"),
        src: z.string().optional(),
        alt: z.string().optional(),
      })
      .default({ type: "placeholder" }),
    heroImage: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    gallery: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
          caption: z.string().optional(),
        }),
      )
      .default([]),
    embeds: z
      .array(
        z.object({
          type: z.enum(["youtube", "googleSlides", "googleDocs", "googleSheets", "localDocument", "itch"]),
          title: z.string(),
          url: z.string().url().optional(),
          id: z.string().optional(),
          previewSrc: z.string().optional(),
          fileSrc: z.string().optional(),
          fileLabel: z.string().optional(),
          group: z.enum(["video", "documents", "play"]).optional(),
        }),
      )
      .default([]),
    tags: z.array(z.string()).default([]),
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string().url(),
        }),
      )
      .default([]),
    featured: z.boolean().default(false),
  }),
});

export const collections = { projects };
