# Phase 1 Copy Draft — LOCKED

Last updated: 2026-05-01
Status: **Locked v1** — Sid signed off on the 6 open questions; edits applied to `_includes/` on 2026-05-01.

This is the locked copy that drives both the website edits and the PDF/Word resume.

## Locked decisions (2026-05-01)

| # | Question | Decision |
|---|---|---|
| 1 | Subtitle option | **A** — "Solution Architect & AI-Leveraged Product Builder \| Cloud-Native \| Integration \| EDA" |
| 2 | Availability flag | **B** — "Open to advisory, partnerships, and architecture engagements" |
| 3 | CliqMenu branding | **Yes** — name CliqMenu publicly (launch imminent, brand already public via cliqmenu.com) |
| 4 | Founder framing | **"Founder & Product Owner"** (paired with Solution Architect + AI-Orchestrated Delivery Lead in roles list) |
| 5 | Repo count detail | **Removed** — no "9+ repos" mention; multi-agent delivery kept abstract |
| 6 | New certifications since Feb 2026 | **None** — formal certs unchanged. AI self-learning content (feature-based AI workflows, context engineering, prompt engineering) folded into the **AI-Leveraged Delivery** skills category |

---

## 1. Profile section (`section-profile.html`)

### Current (for reference)
- **Title:** Siddharth Shanmugam
- **Subtitle:** Integration Architect | Bridge business needs with technical execution | System Integration | API | EDA
- **Summary:** Results-driven professional with over 20 years of expertise in development, design, and architecture, specializing in Integration and Solution Architecture...
- **Availability:** Available for New Engagements

### Proposed

**Title:** Siddharth Shanmugam *(unchanged)*

**Subtitle (pick one):**
- **A.** Solution Architect & AI-Leveraged Product Builder | Cloud-Native | Integration | EDA
- **B.** Solution Architect & Founder | AI-Orchestrated Delivery | Cloud-Native | Integration | EDA
- **C.** Solution Architect, AI-Orchestrated Delivery Lead, Founder — INTHUB / CliqMenu

**Summary (proposed):**
> 20+ years across development, design, and architecture — specialising in integration, event-driven, and API-led design. Now leading INTHUB's flagship venture, **CliqMenu**, a multi-module SaaS platform shipping commercially in May 2026. Designs and ships cloud-native serverless architecture end-to-end (AWS, Terraform, AppSync, EventBridge, Lambda, DynamoDB) across web (React) and mobile (Flutter), with **AI as a core delivery practice** — not a side experiment. Bridges deep enterprise integration heritage (MuleSoft, IBM, Solace) with modern AI-orchestrated multi-agent product delivery.

**Availability flag (pick one):**
- **A.** Open to advisory & partnership conversations
- **B.** Open to advisory, partnerships, and architecture engagements
- **C.** *Remove the flag entirely* — site can stand on its own

---

## 2. Key Projects section (`section-projects.html`)

### Reorder
1. **CliqMenu** (NEW LEAD — replaces "Digital Ordering SaaS Platform")
2. **Integration Competency & EDA** — Super Retail Group *(unchanged)*
3. **IBM Stack & ICC Establishment** — Sunsuper *(unchanged)*

### NEW project card — CliqMenu

**Title:** CliqMenu — Multi-Module SaaS Platform for Food Service

**Roles:** Founder · Solution Architect · Product Owner · AI-Orchestrated Delivery Lead

**Client:** INTHUB (own venture) | 2024 to date | Brisbane, Australia
*Live in AU/NZ from May 2026 · India activation late June 2026*

**Tech tags:**
- AWS Serverless (Lambda, DynamoDB, AppSync, EventBridge, Cognito, API Gateway, Amplify)
- Terraform IaC
- React (Vite) · Flutter
- Stripe Connect
- AI Orchestration (Claude Code, MCP, multi-agent)

**Description:**
> Founded and architected **CliqMenu**, a five-module SaaS platform for food service businesses — starting with food trucks, expanding to restaurants. Modules: customer ordering (FOS, PWA), staff order management (OMS, Flutter), business management (BMS), platform admin, and marketing site. Pilot launching May 2026 in AU/NZ; India activation late June 2026.

**Achievements:**
- Designed cloud-native serverless architecture: AppSync GraphQL + DynamoDB + Lambda + EventBridge, Terraform-managed across sandbox/dev/test/prod environments
- Shipped Flutter OMS to TestFlight + Play Store with full release pipeline (Fastlane, staged release notes, branch-based promotion)
- Established AI-orchestrated multi-agent delivery workflow across 9+ repos (serverless, infra, BMS, FOS, OMS, Admin, marketing, help, general) — covering implementation, refactor, code review, cross-repo investigation
- Defined product vision, roadmap, and go-to-market; led pilot prep for May 2026 launch
- Designed event-driven order flow integrating Stripe Connect for marketplace payments
- Branch-based deployment model: `aidev` → `dev` → `test` → `main` with PR-based promotion and CI/CD across web + mobile

---

## 3. Skills section (`section-skills.html`)

### Proposed reorder + new categories

#### NEW LEAD: Cloud-Native & Serverless
- AWS: Lambda, DynamoDB, AppSync, EventBridge, Cognito, API Gateway, Amplify, S3 + CloudFront, SES, SQS, SNS
- Terraform IaC, multi-environment deploys (sandbox / dev / test / prod)
- AWS Cloud Practitioner (course)
- Azure (Logic Apps, Functions, API Management, Service Bus, Event Grid)#
- GCP, Pub/Sub#

#### NEW: AI-Leveraged Delivery
- AI-orchestrated full-stack delivery — implementation, refactor, code review, cross-repo investigation
- Multi-agent workflows (Claude Code, agent SDKs, MCP servers, hooks)
- Prompt engineering, Chain-of-Thought (applied in production)
- Tools: Claude Code, Cursor, Windsurf, LangChain

#### REFRAMED: Front-End (drop `#` markers)
- React (Vite, React Router, TypeScript, Bootstrap)
- Flutter (multi-platform, TestFlight + Play Store releases)
- Architect-level — AI-assisted implementation
- HTML / CSS / JavaScript

#### Integration Platforms & API *(demoted from #1 to #4)*
- MuleSoft
- IBM Suite (IIB, ACE, MQ, API Connect, DataPower)
- Boomi
- Solace
- AWS-native integration (API Gateway, EventBridge, AppSync, SQS, SNS)
- Workato#, TIBCO#

#### API, Languages & Observability *(unchanged)*
- REST, SOAP, GraphQL, AsyncAPI, gRPC
- API Security: OAuth 2.0, OpenID Connect, SAML, JWT
- API Governance & Lifecycle Management
- Java / JavaScript / Python / TypeScript
- Dynatrace, Splunk, ELK, Grafana, New Relic#

#### Databases, OS & ERP *(mostly unchanged)*
- Oracle, MS SQL Server, MySQL
- MongoDB, Amazon DynamoDB
- Snowflake#, Amazon RDS#, IBM DB2#
- Linux, Windows Server, AIX
- Apple App Store + Google Play Console — Admin
- SAP R/3, SAP ERP (ECC), SAP CRM, S/4HANA#

#### Methodologies & Architecture *(updated)*
- Event-Driven Architecture (EDA)
- Domain-Driven Design (DDD), Data-Driven Design
- **AI-Orchestrated Multi-Agent Delivery** *(NEW)*
- Agile (Scrum, Kanban), TDD, BDD
- TOGAF
- AI Chain-of-Thought prompting

#### Vendor Products *(unchanged)*
- Manhattan Active Omni (Order Management)
- Channel Advisor Marketplace Fanatics Retail
- Epsilon Loyalty Management
- Stripe Connect (Payment Processing)
- Salesforce Commerce Cloud (SFCC)
- Salesforce Marketing Cloud (SFMC)

---

## 4. Experience section (`section-experience.html`)

### INTHUB entry — refresh

**Current:**
- **Heading:** Client: INTHUB
- **Roles:** Product Owner/Manager, Service Design & Delivery Lead
- **Dates:** Oct '23 to date | Brisbane, Australia
- **Tech:** AWS (Cognito, Amplify, EventBridge, Lambda, DynamoDB, API Gateway), React, Flutter, AI (Prompt Engg.), Stripe Connect

**Proposed:**
- **Heading:** INTHUB — CliqMenu Venture
- **Roles:** Founder · Solution Architect · Product Owner · AI-Orchestrated Delivery Lead
- **Dates:** Oct '23 to date | Brisbane, Australia
- **Tech:** AWS Serverless (Lambda, DynamoDB, AppSync, EventBridge, Cognito, API Gateway, Amplify, S3+CloudFront), Terraform, React (Vite), Flutter, Stripe Connect, AI Orchestration (Claude Code, MCP, multi-agent)

**Bullets (updated):**
- Founded INTHUB's flagship venture **CliqMenu** — five-module SaaS for food service (food trucks → restaurants); commercial launch May 2026 in AU/NZ
- Architected cloud-native serverless platform: AppSync + DynamoDB + Lambda + EventBridge, Terraform-managed across sandbox / dev / test / prod
- Established AI-orchestrated multi-agent delivery workflow spanning 9+ repos, covering implementation, refactor, code review, and cross-repo investigation
- Shipped Flutter OMS to TestFlight + Play Store with Fastlane-based release pipeline
- Defined product vision, roadmap, and go-to-market; led pilot prep
- Branch-based PR-promotion model (`aidev` → `dev` → `test` → `main`) with CI/CD across web + mobile

### Other entries *(no changes proposed)*
- Super Retail Group (Mar '18 – Oct '23)
- Sunsuper (Feb '15 – Mar '18, with break)
- Shorter entries (BHP, RMS, Medibank, Coles IT, prior 2004–2012) — keep as-is

---

## 5. Page metadata

### `index.md` front-matter
- `title:` Sid - Solution Architect & AI-Leveraged Product Builder *(was: "Sid - Integration & Solution Architect")*
- `availability_status:` per chosen option above

### `_config.yml`
- `title:` Sid - Solution Architect & AI-Leveraged Product Builder *(was: "Sid - Integration & Solution Architect")*
- `description:` Personal portfolio of Siddharth Shanmugam — Solution Architect, AI-Orchestrated Delivery Lead, founder of CliqMenu

---

## Open questions for Sid

1. **Subtitle option** — A, B, or C above? (My lean: A — keeps it broad without nailing you to "Founder" if you want to soften that on resume reads.)
2. **Availability flag** — A, B, or remove?
3. **CliqMenu branding** — happy to name CliqMenu directly on the public site? (Memory says product is launching May 2026 in AU/NZ — I'd lean yes, since launch is imminent and it's already public via cliqmenu.com.)
4. **Founder framing** — comfortable with the "Founder" label, or prefer "Co-founder" / "Founding Architect" / "Architect & Product Owner"?
5. **Repo count detail** — okay to publicly say "9+ repos / multi-agent delivery workflow" or keep that more abstract? (Could read as overshare to some recruiters.)
6. **Anything to add to certifications/training** since Feb 2026?
