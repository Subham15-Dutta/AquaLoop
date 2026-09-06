# Aqua Loop Roadmap

## File Description

This file exists as Aqua Loop's living development checklist. Developers, maintainers, and AI assistants must read it before starting new development and update it when project status materially changes. It records completed foundations, active refinements, pending module work, and future milestones so contributors understand priorities and avoid duplicate work.

Status in this file describes implementation maturity, not merely whether a route or component exists.

## Completed

- [x] Website architecture
- [x] Navigation
- [x] Dashboard implementation
- [x] Monitoring implementation
- [x] AI Intelligence implementation
- [x] Water Optimization implementation
- [x] Sustainability implementation
- [x] Alerts implementation
- [x] Settings implementation
- [x] Development environment setup
- [x] Supabase integration
- [x] Local development workflow

These items establish the MVP foundation. Refinement, validation, accessibility, resilience, and production hardening remain separate work.

## In Progress

### Dashboard Refinement

- [x] Complete header integration and align page-level controls.
- [x] Strengthen typography and information hierarchy.
- [x] Improve chart clarity, labels, tooltips, and visual consistency.
- [ ] Align telemetry values, units, timestamps, and status treatment.
- [ ] Polish tank telemetry and make levels immediately understandable.
- [ ] Complete interactive actions with hover, focus, active, loading, and feedback states.
- [x] Validate the first viewport for SIH judging, presentation screenshots, and investor demos.

### Monitoring Refinement

- [ ] Align gauges and standardize scales, thresholds, and labels.
- [ ] Polish live telemetry, units, update time, and stale/disconnected states.
- [ ] Improve historical charts, legends, time ranges, and interactions.
- [ ] Improve system-health hierarchy and make abnormal conditions actionable.
- [ ] Validate real-time behavior and fallback states.

## Pending

### AI Intelligence

- [ ] Refine the hierarchy across classification, recommendation, forecasting, and leak-detection experiences.
- [ ] Clearly distinguish observed inputs, AI predictions, confidence, and recommended actions.
- [ ] Add consistent loading, empty, error, and backend-unavailable states.
- [ ] Improve forecast and anomaly visualizations.
- [ ] Validate explanations, thresholds, units, and model-result terminology.

### Water Optimization

- [ ] Clarify baseline, target, projected savings, and optimization opportunity.
- [ ] Prioritize recommendations by operational impact, urgency, effort, and confidence.
- [ ] Improve treatment-path and water-flow visualization.
- [ ] Add clear action and outcome states for optimization recommendations.
- [ ] Align metrics and terminology with Dashboard, Monitoring, and Sustainability.

### Sustainability

- [ ] Strengthen freshwater reduction, reuse, and environmental-impact hierarchy.
- [ ] Add transparent units, baselines, targets, and reporting periods.
- [ ] Improve trend charts and target-progress comparisons.
- [ ] Connect sustainability outcomes to operational actions and water savings.
- [ ] Prepare executive-ready and presentation-ready summaries.

### Alerts

- [ ] Refine severity, status, source, and timestamp hierarchy.
- [ ] Improve filtering, sorting, acknowledgement, dismissal, and resolution workflows.
- [ ] Make recommended next actions clear for critical and warning alerts.
- [ ] Add consistent empty, loading, error, and real-time update states.
- [ ] Verify accessibility and visual distinction without relying only on color.

### Settings

- [ ] Organize configuration into clear, scalable sections.
- [ ] Refine threshold, notification, integration, and preference controls.
- [ ] Add validation, unsaved-change protection, save progress, success, and error feedback.
- [ ] Distinguish editable values from read-only system information.
- [ ] Review permissions and safeguards for sensitive or destructive settings.

## Cross-Cutting Work After UI Refinement

- [ ] Validate responsive behavior, keyboard access, contrast, and reduced motion.
- [ ] Standardize loading, empty, error, disconnected, and stale-data states.
- [ ] Verify Supabase schemas, real-time subscriptions, and production data paths.
- [ ] Replace or explicitly label demo fallbacks before production use.
- [ ] Connect and validate production AI models and document model behavior.
- [ ] Add automated tests for critical workflows and data boundaries.
- [ ] Complete authentication, authorization, observability, security, and deployment hardening.

## Future Vision

### Phase 1 — SIH Demo Ready

Deliver a polished, stable, coherent demonstration centered on the Dashboard, Monitoring, AI intelligence, optimization value, and measurable sustainability impact.

### Phase 2 — Production Ready

Harden real data flows, AI services, authentication, authorization, security, testing, accessibility, observability, failure handling, and deployment operations.

### Phase 3 — Pilot Deployment

Integrate a real facility's sensors and workflows, validate recommendations with operators, measure water savings, collect feedback, and establish a reliable operating baseline.

### Phase 4 — Commercial SaaS Launch

Deliver a secure multi-tenant platform with onboarding, configurable sites, reporting, integrations, governance, support, billing, and scalable operations.

## Instructions for Future AI Agents

Before beginning work:

1. Read `BRAIN.md`.
2. Read `UI_GUIDELINES.md`.
3. Read `ROADMAP.md`.
4. Understand the relevant project context and inspect the current implementation.
5. Then implement changes in line with the documented priorities and conventions.

Never make assumptions without consulting these files. Confirm whether a checklist item is already complete before duplicating it. When work materially completes, adds, removes, or reprioritizes an item, update this roadmap in the same change so it remains trustworthy.
