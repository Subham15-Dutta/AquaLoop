# Aqua Loop Project Brain

## File Description

This file exists as Aqua Loop's permanent memory and primary source of truth. Every AI assistant and every developer joining the project must read it first, before investigating or changing the code. It contains the product's identity, business context, vision, architecture, current development state, and non-negotiable working rules.

## Project Overview

**Project name:** Aqua Loop  
**Tagline:** Predict. Purify. Reuse.

Aqua Loop is an enterprise water-intelligence product for operators and decision-makers responsible for water systems in AI and data-center infrastructure. The application turns operational telemetry into monitoring, prediction, treatment guidance, optimization decisions, sustainability evidence, and actionable alerts.

## Mission

Aqua Loop's mission is to provide an AI-powered water intelligence platform designed for AI and data centers. It helps operators:

- Reduce dependence on freshwater supplies.
- Maximize the safe treatment and reuse of greywater.
- Predict water demand and system risks before they become costly incidents.
- Optimize treatment paths and day-to-day water operations.
- Improve environmental sustainability while making impact measurable.

The product should connect technical water-system data to clear operational and executive decisions.

## Core Modules

- **Dashboard:** Executive overview of the most important water, system, AI, and sustainability metrics. This is the primary product entry point and demo surface.
- **Monitoring:** Live and historical sensor telemetry, water-quality indicators, equipment state, and system health.
- **AI Intelligence:** Water classification, treatment recommendations, demand forecasting, anomaly detection, and leak-risk intelligence.
- **Water Optimization:** Operational recommendations for reducing consumption, improving reuse, and selecting efficient treatment strategies.
- **Sustainability:** Freshwater reduction, reuse performance, environmental impact, carbon-related metrics, and progress toward sustainability targets.
- **Alerts:** Prioritized operational notifications, severity and status workflows, and recommended responses.
- **Settings:** System configuration, thresholds, preferences, integrations, and account-level controls.

## Technical Stack

- **Next.js:** Application framework using the App Router.
- **React:** Component-based user-interface layer.
- **TypeScript:** Typed frontend and shared application contracts.
- **Supabase:** PostgreSQL data storage and real-time data integration.
- **Python backend:** FastAPI-based AI service for classification, recommendations, forecasting, and leak detection.
- **Recharts:** Data visualization and interactive charting.

Supporting frontend technologies include Tailwind CSS, shadcn-style UI primitives, Radix UI, and Lucide icons. The frontend includes fallback data paths so local UI development can continue when external services are unavailable; fallbacks must never be misrepresented as live production data.

## Architecture at a Glance

The Next.js frontend lives in `app/`, with authenticated-style product routes under `app/(app)/`. Shared interface components live in `components/`; data-access and API abstractions live in `lib/`; TypeScript contracts live in `types/`. Supabase supplies persisted and real-time operational data. The Python/FastAPI service in `backend/` supplies AI and optimization endpoints.

Keep page components focused on presentation and orchestration. Reuse shared components, centralize external-data access in the existing library layer, and preserve type safety at system boundaries. Do not bypass established abstractions without a documented reason.

## Product Philosophy

The application must always feel like **an enterprise AI water intelligence platform**.

It must never feel like a student project or a generic dashboard. Every feature should demonstrate operational credibility, clear information hierarchy, domain awareness, and deliberate visual design. Data must lead to insight or action; decorative metrics without decision value should not be added.

## Current Status

Aqua Loop has a functioning full-stack MVP and established navigation, data integration, core pages, and development workflow. The current stage is focused on refining the product for a high-quality SIH demonstration, followed by production hardening.

| Module | Status |
| --- | --- |
| Dashboard | UI Refinement In Progress |
| Monitoring | UI Refinement In Progress |
| AI Intelligence | Pending Refinement |
| Water Optimization | Pending Refinement |
| Sustainability | Pending Refinement |
| Alerts | Pending Refinement |
| Settings | Pending Refinement |

"Implemented" means a module and its core experience exist; it does not mean the module is production-complete. Consult [ROADMAP.md](./ROADMAP.md) for the refinement checklist and future milestones.

## Rules for AI Assistants

Before making any change:

1. Read `BRAIN.md`.
2. Read `UI_GUIDELINES.md`.
3. Read `ROADMAP.md`.
4. Inspect the relevant implementation and preserve compatible project conventions.
5. Update the roadmap when a task materially changes project status, scope, or priorities.

Never skip these files. Do not infer that older summaries override them. If the code, documentation, and these files disagree, verify the implementation and explicitly resolve or report the discrepancy instead of silently guessing.

