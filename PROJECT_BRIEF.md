# santino.build: Project Brief

## 1. Goal

Rebuild Santino Cervera's personal website as a multilingual portfolio (English, Japanese, Spanish) that presents his engineering work, his career change from construction and oil & gas into software and AI, and his projects.

The site is a rebuild based on the content of https://santinocc.github.io/. It is not a copy of that site's design.

**Audience:** recruiters and hiring managers in Japan and abroad, clients, and collaborators.

## 2. Decisions already made

- Name: **santino.build**
- Framework: **Astro** (static output, no client JavaScript unless needed)
- Languages: **English, Japanese, Spanish**. English is the default locale.
- Hosting: **GitHub Pages**, deployed from GitHub Actions
- Repository: **public**
- Working folder: `/Users/santino/workspace/santino-build` (new project; do not modify `/Users/santino/workspace/PersonalWebsite`)

## 3. Sitemap

| Page | English | Japanese | Spanish |
|---|---|---|---|
| Home | `/` | `/ja/` | `/es/` |
| About | `/about/` | `/ja/about/` | `/es/about/` |
| Experience | `/experience/` | `/ja/experience/` | `/es/experience/` |
| Projects | `/projects/` | `/ja/projects/` | `/es/projects/` |
| Certifications | `/certifications/` | `/ja/certifications/` | `/es/certifications/` |
| Contact | `/contact/` | `/ja/contact/` | `/es/contact/` |

Each page exists in all three languages. The language switcher links to the same page in another locale.

## 4. Content plan

**Home:** a short introduction (who he is, what he builds), links to Projects and Experience, and a short list of current focus areas.

**About:** a narrative that connects the construction and oil & gas background, the Tecnologico de Monterrey and university degrees, and the move to software engineering. Include the "Interests" line: languages, countries lived in, cooking.

**Experience:** a timeline based on the CV.
- JPMorgan Chase, Software Engineer (Nov 2022 to Dec 2025)
- Chefini, Founder and Full Stack Engineer (2026 to present)
- Construction and infrastructure roles: Guzman Construction Group, Build Group (Project Engineer), INTECSEA, Schlumberger
- Education: NUS (Offshore Technology), University of Tokyo (Earthquake Engineering), Tecnologico de Monterrey (Civil Engineering)

**Projects:**
- Chefini: recipe marketplace app (Node.js/Express, React Native, Stripe Connect, AWS)
- Sapore: Web3 mobile app built at an Ethereum hackathon (Sept 2026), with Worldcoin-based Sybil resistance
- Future projects, added as they are finished: Python (LLM tool), Kotlin (service), Go (CLI or service), Ruby on Rails (CRUD API)

Each project entry has a short summary, the stack, the role, and links to the repository and a live demo if one exists.

**Certifications:** the Anthropic Skilljar course certifications.

**Contact:** LinkedIn, GitHub, and a contact form. Do not publish the personal email address.

**Removed from the current site:** the social media placeholder links (Facebook, Twitter, Instagram, YouTube), the emoji-based hobbies section, and the separate Blockchain knowledge page (its content moves into the Sapore project entry).

## 5. Technical requirements

- Astro with TypeScript
- Locale routing with the `en`, `ja`, and `es` locales configured in `astro.config.mjs`
- Content in Markdown or MDX, validated by Astro Content Collections schemas
- Responsive layout that works on phones
- Japanese text renders correctly (use a font stack that includes Japanese glyphs)
- Spanish accents and characters render correctly
- `hreflang` tags and a `lang` attribute on each page
- Images optimized with Astro's image handling
- No API keys or secrets in the repository. Add `.env` to `.gitignore`.

## 6. Done criteria

- All pages build with `npm run build` and no errors
- Every page exists in all three languages, and the language switcher works
- Mobile layout works at 375px width
- Lighthouse scores above 90 for performance, accessibility, and SEO on the home page
- No broken links (checked before each deploy)
- GitHub Pages deployment works from a GitHub Action
- README explains how to run, build, and deploy the site

## 7. Working rules for Claude Code

1. Read this brief and `CLAUDE.md` at the start of every session.
2. Propose a plan before writing code. Wait for approval on the plan.
3. Make small, focused changes. One concern per commit.
4. Show the diff and summarize the change before each commit. Do not commit without approval.
5. Never edit files outside `/Users/santino/workspace/santino-build`, and never touch `/Users/santino/workspace/PersonalWebsite`.
6. Do not add secrets, API keys, personal phone numbers, or home addresses to the repository.
7. Write Japanese and Spanish copy as a draft for Santino to review. Mark machine-drafted translations as drafts until he approves them.
8. Run `npm run build` before proposing any commit.
9. When a decision is missing, ask one question at a time and wait for the answer.

## 8. Open items (to decide later)

- Logo or visual identity: keep it minimal for now.
- Whether to add a blog or build-log section after launch.
- Analytics: none for the first version.
- Custom domain: santino.build, once registered and connected to GitHub Pages.
