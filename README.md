# sid-inthub.github.io — Phase 1 portfolio (maintenance)

Personal portfolio site for **Siddharth Shanmugam** — Solution Architect & AI-Leveraged Product Builder, founder of CliqMenu (INTHUB).

Built with **Jekyll** and deployed via **GitHub Pages**.

- **Live:** https://sid-inthub.github.io/
- **Status:** Phase 1 — maintenance only. The active personal site is **Phase 2**, [`sid-inthub-profile`](https://github.com/INTHUB/sid-inthub-profile) (Next.js 16), live at [sid.inthub.com.au](https://sid.inthub.com.au) since 2026-05-09.

For system design, see [`ARCHITECTURE.md`](ARCHITECTURE.md). For Claude Code working agreements, see [`.claude/CLAUDE.md`](.claude/CLAUDE.md).

## Local development

### Prerequisites

- Ruby (system Ruby on macOS works; rbenv/asdf also fine)
- Bundler

### Setup

```bash
git clone https://github.com/sid-inthub/sid-inthub.github.io.git
cd sid-inthub.github.io
bundle install
bundle exec jekyll serve
```

Open http://localhost:4000.

## Where to edit what

| Change                                | File                                    |
| ------------------------------------- | --------------------------------------- |
| Profile name, headline, bio, contacts | `_includes/section-profile.html`        |
| Projects                              | `_includes/section-projects.html`       |
| Skills                                | `_includes/section-skills.html`         |
| Certifications & education            | `_includes/section-certifications.html` |
| Experience                            | `_includes/section-experience.html`     |
| Header nav, theme toggle button       | `_includes/header.html`                 |
| Colors, layout, spacing               | `assets/css/main.css`                   |
| Tab / theme / nav behavior            | `assets/js/main.js`                     |
| Site title, SEO description           | `_config.yml`                           |

`index.md` is a thin shell that pulls these partials together. You rarely need to edit it.

## Deployment

GitHub Pages deploys automatically on push to `main` via [`.github/workflows/jekyll-gh-pages.yml`](.github/workflows/jekyll-gh-pages.yml).

Branch model:

- `aidev` — working branch. All commits land here first.
- `main` — deploy branch. Manually open a PR from `aidev` → `main` and merge to deploy.

There is **no auto-promote workflow** in this repo. Deploys are intentionally gated by a manual PR merge.

## Stack

- Jekyll 3.9.3
- Remote theme: [`pages-themes/minimal@v0.2.0`](https://github.com/pages-themes/minimal) — heavily overridden by local CSS
- kramdown Markdown processor
- Plugins: `jekyll-remote-theme`, `jekyll-seo-tag`

## License

MIT.
