# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project status

`PROJECT_BRIEF.md` is the source of truth for scope, sitemap, content, and done criteria. Read it at the start of every session. The step-by-step build plan was agreed in conversation: scaffold → locale config → i18n helpers → base layout → content schemas → page routes → English content → ja/es drafts → contact form → images → link check + deploy → README → final checks. Done so far: the Astro scaffold and the locale/base-path config. Everything else below marked *planned* does not exist yet.

## What this is

**santino.build** is Santino Cervera's personal portfolio. It is a static, multilingual (en / ja / es) Astro site for GitHub Pages. The content comes from https://santinocc.github.io/, but the design is new. Do not copy that site's design. The repo is public: https://github.com/santinocc/santino-build.

## Commands

- Node **22.23.4 or newer** is required by Astro 7 (pinned in `.nvmrc`). Claude Code's shell can still resolve an older nvm Node from its startup PATH. If `node -v` is below 22.23.4, prefix commands with `export PATH="$HOME/.nvm/versions/node/v22.23.4/bin:$PATH";`.
- `npm install`: install dependencies
- `npm run dev`: dev server
- `npm run build`: type-checks with `astro check`, then builds to `dist/`. A type error (for example, a ja/es UI string missing a key that `en` defines) fails the build. **This must pass before you propose any commit.**
- `npm run check`: type check only.
- `npm run preview`: serve `dist/`. The site is at `http://localhost:4321/santino-build/`, not at `/`.
- `npm run check:links`: after a build, checks every internal link and asset in `dist/` (`scripts/check-links.mjs`, no dependencies). It also fails on root-relative URLs that skip the base path. External links are not checked. Keep its `SITE` and `BASE` constants in sync with `astro.config.mjs`.
- There is no test suite or linter yet.
- **Deploy:** `.github/workflows/deploy.yml` runs on every push to `main`: `npm ci`, `npm run build`, `npm run check:links`, then deploys `dist/` to GitHub Pages. A failing build or link check stops the deploy. The repo setting Pages → Source must be "GitHub Actions".
- TypeScript is held at 6.x because `@astrojs/check` 0.9 does not support TypeScript 7 yet.

## Architecture

**URLs and base path** (`astro.config.mjs`):
- `site: 'https://santinocc.github.io'`, `base: '/santino-build/'`, `trailingSlash: 'always'`.
- Every internal link and asset URL must be built from the base path, using `import.meta.env.BASE_URL` or the `astro:i18n` URL helpers. Never hardcode a root-relative path like `/favicon.svg`; it returns 404 on the deployed site.
- When the custom domain `santino.build` goes live, only `site` and `base` should need to change.

**Locales:**
- `en` is the default and has no prefix (`/about/`); `ja` and `es` use `/ja/about/` and `/es/about/`.
- There is no locale fallback, because every page must exist in all three locales.
- The language switcher links to the *same* page in another locale, so routes must stay parallel across locales.

**Planned structure (from the agreed plan):**
- `src/i18n/`: interface strings and locale/path helpers.
- One base layout that sets `<html lang>`, `hreflang` alternates (plus `x-default`), and meta tags. It uses a system font stack with Japanese glyphs (Hiragino Sans, Yu Gothic, Noto Sans JP) and no web-font downloads.
- Content Collections with schemas (projects, experience, education, certifications, page copy), stored in per-locale folders such as `src/content/projects/ja/`. Each entry has `translationStatus: draft | approved`.
- English pages in `src/pages/` and ja/es generated from `src/pages/[locale]/`. Both render shared page components from `src/components/pages/`, so each page's markup exists once.
- Static output with no client JavaScript unless a feature needs it. Images go through Astro's image handling.

## Git workflow

- Work on a feature branch.
- Show the diff and a summary, then wait for approval before committing.
- After approval, fast-forward `main` and push `origin main`.
- Don't delete branches or create remote resources unless asked.

## Working rules (from the brief, mandatory)

1. Propose a plan before writing code and wait for approval.
2. Make small, focused changes, with one concern per commit.
3. **Do not commit without approval.**
4. Never edit outside `/Users/santino/workspace/santino-build`. Never touch `/Users/santino/workspace/PersonalWebsite`.
5. Never add secrets, API keys, phone numbers, home addresses, or the personal email address. The Contact page uses LinkedIn, GitHub, and a contact form only. Keep `.env` in `.gitignore`.
6. Japanese and Spanish copy is machine-drafted. Mark it as a draft until Santino approves it.
7. When a decision is missing, ask **one question at a time**.

## Content constraints

- Do not carry over these items from the old site: the social placeholder links (Facebook, Twitter, Instagram, YouTube), the emoji hobbies section, and the standalone Blockchain page. The Blockchain content moves into the Sapore project entry.
- Decided: the contact form uses Formspree (form ID in `src/config.ts`, public by design); the link check is `scripts/check-links.mjs`.
- Open or undecided items: the logo, a blog or build-log section, analytics (none in v1), and the custom domain. Do not implement any of these without asking.
