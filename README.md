# santino.build

Personal portfolio of Santino Cervera, software engineer. A static site in English, Japanese, and Spanish, built with [Astro](https://astro.build/) and TypeScript and deployed to GitHub Pages.

**Live site:** https://santinocc.github.io/santino-build/

| Language | URL |
|---|---|
| English (default) | `/santino-build/` |
| 日本語 | `/santino-build/ja/` |
| Español | `/santino-build/es/` |

Each language has the same six pages: Home, About, Experience, Projects, Certifications, and Contact.

## Requirements

- **Node.js 22.23.4 or newer** (Astro 7 requires it). The version is pinned in `.nvmrc`; with [nvm](https://github.com/nvm-sh/nvm), run `nvm use`.
- npm (comes with Node.js).

## Run locally

```bash
git clone https://github.com/santinocc/santino-build.git
cd santino-build
npm install
npm run dev
```

Open http://localhost:4321/santino-build/. The site lives under `/santino-build/`, not `/`, because that is its path on GitHub Pages.

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Starts the dev server with live reload. |
| `npm run build` | Type-checks with `astro check`, then builds the static site into `dist/`. A type error fails the build. |
| `npm run check:links` | Checks every internal link and asset in `dist/`. Run it after a build. |
| `npm run preview` | Serves the built `dist/` folder, to check the production build locally. |
| `npm run check` | Type check only. |

Before pushing, run `npm run build && npm run check:links`. These are the same checks the deploy runs.

## Deploy

Every push to `main` deploys the site automatically with GitHub Actions (`.github/workflows/deploy.yml`):

1. `npm ci`
2. `npm run build` (type check and build)
3. `npm run check:links`
4. Upload `dist/` and deploy it to GitHub Pages

If the build or the link check fails, nothing is deployed and the live site stays as it was. Progress and logs are in the repository's **Actions** tab, where a deploy can also be started by hand (**Deploy to GitHub Pages → Run workflow**).

One-time repository setting: **Settings → Pages → Source** must be **GitHub Actions**.

### Moving to the custom domain

When `santino.build` is ready, change `site` and `base` in `astro.config.mjs` (and the matching `SITE` and `BASE` constants in `scripts/check-links.mjs`), add the domain under **Settings → Pages → Custom domain**, and set up DNS with the domain registrar.

## Editing content

All page text lives in Markdown files under `src/content/`, one folder per language:

```
src/content/
├── pages/          Home, About, and Contact text
├── experience/     one file per job
├── education/      one file per degree
├── projects/       one file per project
└── certifications/ one file per certification
    ├── en/
    ├── ja/
    └── es/
```

The same file name in `en/`, `ja/`, and `es/` is the same item in three languages. Every page must exist in all three languages, so add a new item to all three folders. The fields each file needs are defined in `src/content.config.ts`; a missing required field or a wrong value (such as a badly formatted date) fails the build with a message that names the file.

Interface text (navigation, labels, buttons) is in `src/i18n/ui.ts`. A label that exists in English but is missing in Japanese or Spanish also fails the build.

### Translation status

Japanese and Spanish text is machine-drafted. Each content file has a `translationStatus` field:

- `draft`: the page shows a "draft translation, pending review" notice.
- `approved`: reviewed; the notice goes away.

To approve a page, set `translationStatus: approved` in every file it shows (for example, all of `experience/ja/` and `education/ja/` for the Japanese Experience page). The interface labels have their own status in `uiTranslationStatus` in `src/i18n/ui.ts`.

## Contact form

The Contact page form posts to [Formspree](https://formspree.io/), which forwards messages by email. The form ID is in `src/config.ts`; it is public by design and is not a secret. Without an ID, the page shows no form. No email address appears in the site or the repository.

## Project structure

```
src/
├── components/pages/   one component per page, shared by all three languages
├── components/         header, footer, language switcher
├── content/            page text (see "Editing content")
├── content.config.ts   content fields and validation
├── i18n/               locales, interface text, URL helpers
├── layouts/            base layout: <html lang>, hreflang links, meta tags
├── lib/                content and date helpers
├── pages/              English routes; [locale]/ generates the ja and es routes
└── styles/global.css
scripts/check-links.mjs broken-link check
```
