# CLAUDE.md — sid-inthub.github.io (Phase 1 portfolio)

This is **Phase 1** of Sid's personal portfolio — a Jekyll site on GitHub Pages, live at https://sid-inthub.github.io/.

Phase 2 (`sid-inthub-profile`, Next.js, live at `sid.inthub.com.au`) is the **active** personal-profile codebase. This repo is in **maintenance mode** per Sid's call. See `ARCHITECTURE.md` at repo root for system design, and `README.md` for the project intro.

---

## Repo posture

- **Maintenance only.** No redesigns, no theme migrations, no new sections without explicit ask.
- **Confirm scope before editing.** Most "update my profile" / "improve the site" requests should land in Phase 2 (`/Users/sid/WS/IntHub/inthub/sid-inthub-profile`), not here. Ask if the user's intent is ambiguous.
- **Open question (do not act on unprompted):** deprecate this repo vs 301-redirect to `sid.inthub.com.au`. No decision yet.

---

## Stack

- **Jekyll 3.9.3** + **`pages-themes/minimal@v0.2.0`** as a remote theme (heavily overridden by local CSS).
- **kramdown** Markdown processor.
- **Plugins:** `jekyll-remote-theme`, `jekyll-seo-tag`.
- **Build/Deploy:** GitHub Pages via `.github/workflows/jekyll-gh-pages.yml` (`actions/jekyll-build-pages` → `deploy-pages`).
- **No AWS, no S3, no CloudFront.** Different from every other INTHUB repo. Don't propose AWS migrations unless explicitly asked.
- **No tests, no lint.** GitHub Pages build success is the only check.

---

## Site structure

- `index.md` — single-page shell using `_layouts/default.html`. Includes 5 section partials and inlines a tab/segmented-control wrapper.
- `_includes/` — `head.html`, `header.html`, and the 5 section partials: `section-profile.html`, `section-projects.html`, `section-skills.html`, `section-certifications.html`, `section-experience.html`.
- `_layouts/default.html` — outer chrome (head, header, main container, JS bundle).
- `assets/css/main.css` (primary, ~954 lines) and `assets/css/styles.css` (secondary, ~420 lines) — custom design system overriding the minimal theme.
- `assets/js/main.js` — mobile nav toggle, dark/light theme toggle (persisted to `localStorage` with `prefers-color-scheme` fallback), segmented-tab switching, hash-link → tab routing.
- `assets/images/` — profile photos.
- `_data/`, `_themes/` — currently empty. Reserved.
- `_config.yml` — site title, description, theme, plugins.

### Where to edit what

| Change you want to make                   | File                                                              |
| ----------------------------------------- | ----------------------------------------------------------------- |
| Profile name / headline / bio / contacts  | `_includes/section-profile.html`                                  |
| Projects card content                     | `_includes/section-projects.html`                                 |
| Skills section                            | `_includes/section-skills.html`                                   |
| Certifications & education                | `_includes/section-certifications.html`                           |
| Experience timeline                       | `_includes/section-experience.html`                               |
| Site title / SEO description              | `_config.yml`                                                     |
| Header nav, logo text, theme toggle button | `_includes/header.html`                                          |
| Colors, spacing, layout                   | `assets/css/main.css` (primary), `assets/css/styles.css` (legacy) |
| Tab/theme/nav behavior                    | `assets/js/main.js`                                               |

---

## Branch model (this repo only)

- **`aidev`** is the default working branch. **All commits land here first.**
- **`main`** is the deploy branch — pushes to `main` trigger the GitHub Pages workflow.
- **No `dev`/`test` tier.** No `auto-promote-pr.yml` workflow in this repo (unlike `sid-inthub-profile`, `website-inthub`, x2 repos).
- **Promotion is manual** — Sid opens a PR `aidev` → `main` via the GitHub UI or `gh pr create`, then merges.

### Rules

- When the user says "commit and push" for this repo, target **`aidev` only**. Never push directly to `main`.
- Never open or merge the `aidev → main` PR without explicit instruction. The deploy is intentionally manual.
- The `.github/workflows/blank.yml` file is a no-op stub — do not modify or rely on it.

---

## Local development

```bash
bundle install                    # one-time, after Gemfile changes
bundle exec jekyll serve          # http://localhost:4000 with live reload
bundle exec jekyll build          # one-shot build into _site/
```

- Requires Ruby + Bundler. macOS system Ruby works; rbenv/asdf also fine.
- `Gemfile.lock` is tracked for local-dev reproducibility. **GitHub Pages ignores it** and resolves its own gem versions, so don't worry about pinning for prod.
- `_site/` is gitignored. Never commit build output.
- `.jekyll-cache/` and `.ruby-lsp/` are gitignored (or should be — verify if adding new tooling).

---

## What NOT to do

- Don't add Tailwind, a JS bundler, or any build step beyond Jekyll. The site is intentionally simple.
- Don't replace `pages-themes/minimal` with a different theme. The local CSS assumes it.
- Don't add AWS / Terraform / S3 / CloudFront integration. Phase 1 stays on GitHub Pages.
- Don't add tests or lint config "just because". There's no value here.
- Don't restructure the segmented-tab UI or theme toggle without an explicit ask — they work and are wired across CSS + JS + HTML in a way that's easy to break.
- Don't propose porting Phase 2 features back into this repo. Phase 1 freezes; Phase 2 evolves.

---

## When to escalate / switch repos

If the user's request is really about Phase 2, stop and ask:

> "This is the Phase 1 Jekyll site. The Phase 2 successor (`sid-inthub-profile`, live at `sid.inthub.com.au`) is the active personal-profile codebase. Should I switch over to that repo for this change?"

If the user wants infra/AWS/contact-form work, point to:
- **`inthub-infra`** — Terraform IaC for all INTHUB AWS resources (not used by this site).
- **`inthub-serverless`** — Python Lambda (corporate-site contact form, not used by this site).
- **`website-inthub`** — INTHUB corporate marketing site.
