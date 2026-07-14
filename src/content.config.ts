import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string().default('Dispatch'),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    author: z.string().default('gigcodelife'),
  }),
});

export const collections = { posts };
