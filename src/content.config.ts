import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Une fiche par projet : src/content/projets/<slug>.md
const projets = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projets' }),
  schema: z.object({
    titre: z.string(),
    resume: z.string(),
    // « création » = projet porté par Tom, « participation » = contribution à un projet tiers
    nature: z.enum(['création', 'participation']).optional(),
    statut: z.enum(['en cours', 'réalisé']).optional(),
    domaines: z.array(z.string()).default([]),
    lien: z.string().url().optional(),
    annee: z.number().optional(),
    ordre: z.number().default(100),
    brouillon: z.boolean().default(false),
  }),
});

export const collections = { projets };
