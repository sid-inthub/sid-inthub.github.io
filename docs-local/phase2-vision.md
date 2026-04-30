# Phase 2 Vision — sid.inthub.com.au

Status: **Direction locked 2026-05-01.** Implementation starts 2026-05-08.

## Positioning shift from Phase 1

Phase 1 (Jekyll site at sid-inthub.github.io) repositioned Sid as "Solution Architect & AI-Leveraged Product Builder," but kept the structure of a traditional integration-architect portfolio with CliqMenu added on top.

**Phase 2 inverts that.** The site is no longer a chronological resume page. It's a **founder / product-builder showcase** for someone who runs AI-leveraged end-to-end product delivery.

| | Phase 1 (sid-inthub.github.io) | Phase 2 (sid.inthub.com.au) |
|---|---|---|
| **Primary message** | "20-year architect, now also doing CliqMenu + AI" | "AI-leveraged delivery lead and product owner who ships end-to-end" |
| **Lead content** | Skills tabs + chronological experience timeline | CliqMenu showcase + AI practice + end-to-end delivery proof |
| **Past integration experience** | Featured (3 of 3 project cards) | Compressed to a footer / background section |
| **UI** | Jekyll-theme-minimal, segmented control tabs | Completely custom design, product-style narrative |
| **URL** | sid-inthub.github.io | sid.inthub.com.au |
| **Audience** | General recruiters, integration consulting market | Partners, advisors, product / founder community, modern recruiters |
| **Tone** | Resume-style | Narrative + proof |

## Content priorities (Phase 2 page, top to bottom)

1. **Hero** — name, one-line positioning, contact, availability
   - Tagline direction: positions Sid as **AI-leveraged delivery lead, product owner, end-to-end product builder**
   - NOT "20-year integration architect" framing — that's deliberately moved to the footer

2. **CliqMenu showcase** — what it is, the five modules, architecture, current state
   - After 18 May 2026 pilot, include real outcomes (customers, app store presence, screenshots)
   - Optional: architecture diagram, module visual, app store badges, demo video / GIF

3. **AI-Leveraged Delivery Practice** — what this actually means in production
   - Multi-agent orchestration (Claude Code, MCP, agent SDKs, hooks)
   - Context engineering for AI agents (functional / business / data-flow contexts)
   - Feature-based AI workflows
   - Concrete walkthrough: how a feature goes from idea → PR → deploy with AI in the loop

4. **End-to-End Delivery** — proof point that one person + AI can ship a full product
   - Vision → roadmap → architecture → build → ship → run
   - Web (React), mobile (Flutter), backend (AWS serverless), infra (Terraform), DevOps (CI/CD), app store releases
   - Spans both technical and product/PO responsibilities

5. **Past — 20+ years in enterprise integration** — compressed footer section
   - Brief retro covering: SRG, Sunsuper, BHP, Coles, NAB, IBM, Bank of America
   - Anchor framing: "before INTHUB, I led integration architecture for..."
   - Drives credibility without dominating the page; details available in PDF resume / LinkedIn

6. **Contact** — email, LinkedIn, optional booking link

## Audience-driven design choices

- Narrative + proof, not resume bullets
- Generous whitespace, large headings, scrollable single page (anchored sections)
- Visuals matter — screenshots, diagrams, GIFs of real CliqMenu work where possible
- Brand-aligned (decide on May 8: mirror cliqmenu.com tokens, inthub.com.au tokens, or a fresh personal brand)
- ATS friendliness moves to the PDF/Word resume — the site does **not** need to be ATS-optimised

## Tech (locked from earlier discussion)

- Plain HTML + CSS, single `index.html` (or short multi-section anchors on one page)
- Vanilla JS only if genuinely needed (smooth scroll, mobile menu)
- No build tool, no React, no framework — keeps long-term maintenance trivial and AI-edit-friendly
- Hosting: AWS S3 + CloudFront on account `754496250264`
- Domain: `sid.inthub.com.au` (CNAME on GoDaddy → CloudFront, ACM cert in `us-east-1`)
- New git repo, separate from `sid-inthub.github.io`

## Decisions still open at May 8 kickoff

- New repo name
- Brand token alignment (CliqMenu vs INTHUB vs personal-brand)
- Hero tagline final wording
- Visuals strategy: screenshots, architecture diagrams, GIFs
- CliqMenu module visualisation approach
- Whether to keep `sid-inthub.github.io` as a mirror or deprecate (and what redirect to use)
- Deploy pipeline (GitHub Actions vs AWS Amplify vs `aws s3 sync` script)

## Source material to draw from

- `docs-local/resume.md` (locked Phase 1 master content)
- `_includes/section-projects.html` (CliqMenu card content)
- `_includes/section-experience.html` (full work history for the footer)
- CliqMenu launch outcomes (will be available post-pilot 18 May, post-launch 22 May)
- INTHUB / CliqMenu brand assets (logos, color tokens) from inthub-infra and x2-website-cliqmenu repos

## Explicit non-goals for Phase 2

- Not a resume — the PDF/Word resume covers the chronological format
- Not ATS-friendly — recruiters who need ATS get the PDF
- Not a blog — keep scope tight; insights/blog can come later
- Not a full reskin of the integration content — Phase 1 already cleaned that up; here we *demote* it
