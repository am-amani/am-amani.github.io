import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const collections = {
	work: defineCollection({
		// Load Markdown files in the src/content/work directory.
		loader: glob({ base: './src/content/work', pattern: '**/*.md' }),
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string().optional(),
			img_alt: z.string().optional(),
		}),
	}),
	workDe: defineCollection({
		loader: glob({ base: './src/content/work-de', pattern: '**/*.md' }),
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string().optional(),
			img_alt: z.string().optional(),
		}),
	}),
	publications: defineCollection({
		loader: glob({ base: './src/content/publications', pattern: '**/*.md' }),
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			authors: z.array(z.string()),
			authorRole: z.string().optional(),
			venue: z.string(),
			abstractSummary: z.string(),
			downloadHref: z.string(),
			journalHref: z.string(),
			codeHref: z.string().optional(),
			tags: z.array(z.string()).default([]),
		}),
	}),
	publicationsDe: defineCollection({
		loader: glob({ base: './src/content/publications-de', pattern: '**/*.md' }),
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			authors: z.array(z.string()),
			authorRole: z.string().optional(),
			venue: z.string(),
			abstractSummary: z.string(),
			downloadHref: z.string(),
			journalHref: z.string(),
			codeHref: z.string().optional(),
			tags: z.array(z.string()).default([]),
		}),
	}),
	news: defineCollection({
		loader: glob({ base: './src/content/news', pattern: '**/*.md' }),
		schema: z.object({
			title: z.string(),
			summary: z.string(),
			publishDate: z.coerce.date(),
			category: z.string(),
			isCelebration: z.boolean().default(false),
		}),
	}),
	newsDe: defineCollection({
		loader: glob({ base: './src/content/news-de', pattern: '**/*.md' }),
		schema: z.object({
			title: z.string(),
			summary: z.string(),
			publishDate: z.coerce.date(),
			category: z.string(),
			isCelebration: z.boolean().default(false),
		}),
	}),
};
