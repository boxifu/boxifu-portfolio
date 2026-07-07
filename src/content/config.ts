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
