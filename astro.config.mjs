// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// Served as a GitHub Pages project site until santino.build is connected.
	// When the custom domain goes live: site → 'https://santino.build', base → '/'.
	site: 'https://santinocc.github.io',
	base: '/santino-build/',

	// Matches the sitemap in PROJECT_BRIEF.md (e.g. /about/, /ja/about/).
	// Pairs with the default build.format 'directory' (about/index.html).
	trailingSlash: 'always',

	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'ja', 'es'],
		routing: {
			// English lives at the root (/about/); ja and es get a prefix (/ja/about/).
			prefixDefaultLocale: false,
		},
	},
});
