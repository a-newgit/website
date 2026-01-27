import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const caseStudies = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/case-studies" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      summary: z.string(),
      coverImage: image().optional(),
      tags: z.array(z.string()).default([]),
      role: z.string(),
      year: z.string(),
      duration: z.string().optional(),
      team: z.string().optional(),
      platform: z.string().optional(),
      tools: z.array(z.string()).default([]),
      client: z.string().optional(),
      style: z.enum(["visual", "narrative"]).default("visual"),
      draft: z.boolean().default(false),
    }),
});

const notes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/notes" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  "case-studies": caseStudies,
  notes,
};
