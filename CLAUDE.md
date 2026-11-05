# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project status

This repo is **pre-scaffold**: it contains only `PROJECT_BRIEF.md`. No Astro project, `package.json`, or build tooling exists yet. `PROJECT_BRIEF.md` is the source of truth for scope, sitemap, content, and done criteria. Read it at the start of every session. When the project is scaffolded, update this file with the real commands and structure.

## What this is

**santino.build** is Santino Cervera's personal portfolio. It is a static, multilingual (en / ja / es) Astro site deployed to GitHub Pages through GitHub Actions. The content comes from https://santinocc.github.io/, but the design is new. Do not copy that site's design.

## Planned architecture (from the brief)

- **Astro + TypeScript**, static output. Ship no client JavaScript unless a feature needs it.
- **i18n routing** configured in `astro.config.mjs` with locales `en` (default, unprefixed: `/about/`), `ja` (`/ja/about/`), and `es` (`/es/about/`). Every page must exist in all three locales. The language switcher links to the *same* page in the other locale, so route structure must stay parallel across locales.
- **Pages:** Home, About, Experience, Projects, Certifications, Contact.
- **Content** in Markdown/MDX under Astro Content Collections with schemas. Projects entries need summary, stack, role, repo link, and an optional demo link.
- Each page needs a `lang` attribute and `hreflang` alternates for all three locales.
- The font stack must include Japanese glyphs. Spanish accented characters must render correctly.
- Use Astro's image handling for all images.

## Expected commands (once scaffolded)

- `npm run dev`: local dev server
- `npm run build`: production build. **This must pass before you propose any commit.**
- Check for broken links before each deploy. The tool is not chosen yet.

## Working rules (from the brief, mandatory)

1. Propose a plan before writing code and wait for approval.
2. Make small, focused changes, with one concern per commit.
3. Show the diff and a summary before each commit. **Do not commit without approval.**
4. Never edit outside `/Users/santino/workspace/santino-build`. Never touch `/Users/santino/workspace/PersonalWebsite`.
5. Never add secrets, API keys, phone numbers, home addresses, or the personal email address. The Contact page uses LinkedIn, GitHub, and a contact form only. Keep `.env` in `.gitignore`.
6. Japanese and Spanish copy is machine-drafted. Mark it as a draft until Santino approves it.
7. When a decision is missing, ask **one question at a time**.

## Content constraints

- Do not carry over these items from the old site: the social placeholder links (Facebook, Twitter, Instagram, YouTube), the emoji hobbies section, and the standalone Blockchain page. The Blockchain content moves into the Sapore project entry.
- Open or undecided items: logo, a blog or build-log section, analytics (none in v1), and the custom domain (santino.build, which is not registered yet). Do not implement any of these without asking.
