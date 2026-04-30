# Sid Profile Site — Task Tracker

Last updated: 2026-05-01
Owner: Sid

---

## Phase 1 — Update existing Jekyll site (sid-inthub.github.io)

**Repo:** `/Users/sid/WS/IntHub/sid-inthub.github.io`
**URL:** https://sid-inthub.github.io
**Status:** In progress (started 2026-05-01)
**Goal:** Rewrite positioning + content. No infra/theme changes. Lock copy that will also drive the PDF/Word resume.

### Tasks
- [x] Lock Phase 1 copy in chat (positioning, summary, CliqMenu framing) — locked 2026-05-01
- [x] Update `_includes/section-profile.html` — title, subtitle, summary, availability flag
- [x] Update `_includes/section-projects.html` — lead with CliqMenu (branded, module breakdown, May 2026 launch)
- [x] Update `_includes/section-skills.html` — reorder AWS-native up; add AI-leveraged delivery category; legacy integration below; drop `#` from React/Flutter
- [x] Update `_includes/section-experience.html` — refresh INTHUB entry; add AppSync/Terraform/MCP tech tags
- [x] Update `index.md` page title + `_config.yml` title/description
- [x] Local preview — skipped (Ruby 4.0.3 incompatibility with `github-pages` gem; static eyeball review done instead)
- [x] Commit on `aidev`, push, open PR `aidev` → `main` (commit `a9cd39f` on 2026-05-01)
- [x] PR merged to `main`; GitHub Pages auto-deploy live at https://sid-inthub.github.io/ (2026-05-01)

### Skipped (no change needed)
- `_includes/section-certifications.html` — no new certs/training to add per Sid's call

### Phase 1 Resume (2026-05-01)
- [x] `docs-local/resume.md` — master markdown content (single source of truth)
- [x] `docs-local/resume.html` — print-optimised HTML for PDF export via browser print (A4, embedded CSS)
- [x] `docs-local/resume-export.md` — browser-print-to-PDF + pandoc-to-.docx workflow
- [ ] Sid reviews `resume.html` in browser, exports PDF, exports .docx (per `resume-export.md`)
- [ ] Sid feeds back any content changes; we update `resume.md` master, re-sync `resume.html`

### Phase 1 Resume (post-site)
- [ ] Generate PDF/Word resume content from the locked Phase 1 copy
- [ ] Deliver in chat

### Files to change (Phase 1 scope)
- `_includes/section-profile.html`
- `_includes/section-projects.html`
- `_includes/section-skills.html`
- `_includes/section-experience.html`
- `index.md` (page title only if needed)
- `_config.yml` (description only if needed)

### Out of scope for Phase 1
- Theme changes
- New pages or layouts
- DNS / hosting changes
- New infrastructure

---

## Phase 2 — sid.inthub.com.au (planned start 2026-05-08)

**Status:** Direction locked 2026-05-01 (see `phase2-vision.md`). Build kicks off 2026-05-08.
**Goal:** Brand-new site on AWS account `754496250264`, hosted at `sid.inthub.com.au`.

### Locked positioning (2026-05-01)
Phase 2 is **not** a refreshed resume site. It is a **founder / product-builder showcase**.

Lead message: **AI-leveraged delivery lead, product owner, end-to-end product builder.**
- CliqMenu work and AI delivery practice are the headline.
- 20+ years of enterprise integration experience is **demoted to a footer / background section** — credibility, not centrepiece.
- Completely different UI from Phase 1 (no Jekyll, no segmented control tabs, no integration-architect-style layout).
- Full vision and content priorities in [`phase2-vision.md`](phase2-vision.md).

### Tech (locked)
- Plain HTML + CSS, single page (no build tool, no framework)
- AWS S3 + CloudFront, new git repo

### Decisions still open at Phase 2 kickoff (2026-05-08)
- [ ] New repo name (e.g. `sid-inthub-profile`, `sid.inthub.com.au`)
- [ ] Brand token alignment (CliqMenu vs INTHUB vs personal-brand)
- [ ] Hero tagline final wording
- [ ] Visuals strategy (screenshots, architecture diagrams, GIFs)
- [ ] Whether to deprecate `sid-inthub.github.io` or leave as a mirror
- [ ] Deploy pipeline (GitHub Actions vs AWS Amplify vs `aws s3 sync`)

### Infra
- [ ] Create new git repo
- [ ] DNS: add `sid.inthub.com.au` CNAME on GoDaddy → CloudFront
- [ ] AWS: S3 bucket, ACM cert (us-east-1), CloudFront distribution
- [ ] Deploy pipeline

### Content build
- [ ] Hero (AI-leveraged delivery / Product Owner / end-to-end builder framing)
- [ ] CliqMenu showcase (modules, architecture, post-pilot outcomes)
- [ ] AI-Leveraged Delivery practice section (multi-agent, MCP, context engineering, feature-based workflows)
- [ ] End-to-End Delivery proof section
- [ ] Past integration experience as compressed footer (20+ years summary)
- [ ] Contact

---

## Current Project Context (reference)

- **CliqMenu pilot:** 2026-05-18 (revised from earlier 2026-05-08)
- **CliqMenu public launch:** 2026-05-22 (TBC if revised)
- **Markets:** AU/NZ live; India activation late June 2026
- **AWS account (INTHUB):** `754496250264` (admin-inthub)
- **Domain `inthub.com.au`:** GoDaddy DNS, coexists with O365
