import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Projets / Portfolio : src/content/projets/<slug>.md
const projets = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projets' }),
  schema: z.object({
    titre: z.string(),
    resume: z.string(),
    nature: z.enum(['création', 'participation']).optional(),
    statut: z.enum(['en cours', 'réalisé']).optional(),
    domaines: z.array(z.string()).default([]),
    lien: z.string().url().optional(),
    annee: z.number().optional(),
    ordre: z.number().default(100),
    brouillon: z.boolean().default(false),
  }),
});

// Blog / Articles techniques & retours d'expérience : src/content/blog/<slug>.md
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    titre: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    tempsLecture: z.string().optional(),
    brouillon: z.boolean().default(false),
  }),
});

export const collections = { projets, blog };
