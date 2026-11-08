/**
 * Content Collections. Each collection keeps one folder per locale:
 *   src/content/<collection>/<locale>/<slug>.md   →   entry id "<locale>/<slug>"
 * The same <slug> in en/, ja/ and es/ is the same item in three languages.
 */
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** ja/es copy is machine-drafted and stays 'draft' until Santino approves it. */
const translationStatus = z.enum(['draft', 'approved']);

/** Month precision, e.g. "2022-11", or a year alone, e.g. "2026". */
const yearMonth = z
	.string()
	.regex(/^\d{4}(-(0[1-9]|1[0-2]))?$/, 'Use "YYYY" or "YYYY-MM", e.g. "2022-11"');

const markdownIn = (collection: string) =>
	glob({ pattern: '*/[^_]*.{md,mdx}', base: `./src/content/${collection}` });

const projects = defineCollection({
	loader: markdownIn('projects'),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			summary: z.string(),
			stack: z.array(z.string()).nonempty(),
			role: z.string(),
			/** When the project was built or launched; used for ordering. */
			date: yearMonth,
			repo: z.url().optional(),
			demo: z.url().optional(),
			cover: image().optional(),
			coverAlt: z.string().optional(),
			translationStatus,
		}),
});

const experience = defineCollection({
	loader: markdownIn('experience'),
	schema: z.object({
		company: z.string(),
		role: z.string(),
		/** Groups the timeline: software roles vs. construction and energy roles. */
		sector: z.enum(['software', 'construction-energy']),
		location: z.string().optional(),
		start: yearMonth,
		/** Omit for a current role ("present"). */
		end: yearMonth.optional(),
		highlights: z.array(z.string()).default([]),
		translationStatus,
	}),
});

const education = defineCollection({
	loader: markdownIn('education'),
	schema: z.object({
		institution: z.string(),
		program: z.string(),
		location: z.string().optional(),
		start: yearMonth.optional(),
		end: yearMonth.optional(),
		translationStatus,
	}),
});

const certifications = defineCollection({
	loader: markdownIn('certifications'),
	schema: z.object({
		title: z.string(),
		issuer: z.string(),
		date: yearMonth,
		url: z.url().optional(),
		translationStatus,
	}),
});

/** Free-form page copy (Home, About): the Markdown body is the page text. */
const pages = defineCollection({
	loader: markdownIn('pages'),
	schema: z.object({
		title: z.string(),
		/** Meta description for search results and link previews. */
		description: z.string(),
		/** Home page: short list of current focus areas. */
		focusAreas: z.array(z.string()).optional(),
		translationStatus,
	}),
});

export const collections = { projects, experience, education, certifications, pages };
