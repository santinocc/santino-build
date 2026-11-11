#!/usr/bin/env node
/**
 * Broken-link check for the built site. Run after `npm run build`:
 *   npm run check:links
 *
 * For every HTML page in dist/, it checks each href, src and meta `content` URL that points
 * inside this site (relative to BASE, or absolute on SITE) and fails if the target file is missing.
 * It also fails on root-relative URLs that skip the base path (e.g. "/favicon.svg"),
 * because those return 404 on GitHub Pages.
 * External links are not checked: other sites' outages and bot blocks would make deploys flaky.
 *
 * Keep SITE and BASE in sync with `site` and `base` in astro.config.mjs.
 */
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = 'dist';
const SITE = 'https://santinocc.github.io';
const BASE = '/santino-build/';

if (!existsSync(DIST)) {
	console.error(`No ${DIST}/ folder. Run "npm run build" first.`);
	process.exit(1);
}

const pages = [];
(function walk(dir) {
	for (const name of readdirSync(dir)) {
		const path = join(dir, name);
		if (statSync(path).isDirectory()) walk(path);
		else if (path.endsWith('.html')) pages.push(path);
	}
})(DIST);

let checked = 0;
const broken = [];

for (const page of pages) {
	const html = readFileSync(page, 'utf8');
	for (const [, raw] of html.matchAll(/\s(?:href|src|content)="([^"]*)"/g)) {
		const url = raw.replaceAll('&amp;', '&');
		const path = url.startsWith(SITE + '/') ? url.slice(SITE.length) : url;
		if (!path.startsWith('/') || path.startsWith('//')) continue; // external, relative, or not a URL

		checked++;
		if (!path.startsWith(BASE)) {
			broken.push(`${relative(DIST, page)} -> ${url} (missing the ${BASE} base path)`);
			continue;
		}
		const target = decodeURIComponent(path.slice(BASE.length).split(/[?#]/)[0]);
		const file = join(DIST, target, target === '' || target.endsWith('/') ? 'index.html' : '');
		if (!existsSync(file)) broken.push(`${relative(DIST, page)} -> ${url}`);
	}
}

for (const line of broken) console.log(`BROKEN  ${line}`);
console.log(`${pages.length} pages, ${checked} internal links checked, ${broken.length} broken`);
process.exit(broken.length ? 1 : 0);
