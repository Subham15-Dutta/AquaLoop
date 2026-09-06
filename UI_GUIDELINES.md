# Aqua Loop UI Guidelines

## File Description

This file exists to protect Aqua Loop's visual identity and user experience. Designers, developers, and AI assistants must read it before making any UI or UX change. It contains the brand principles, layout and interaction standards, chart rules, and constraints that prevent accidental redesigns or inconsistent one-off components.

## Brand Identity

**Brand:** Aqua Loop  
**Tagline:** Predict. Purify. Reuse.

The interface represents an intelligent operational platform for water systems in AI and data centers. It should communicate trust, precision, control, and measurable sustainability.

## Design Principles

Every interface should feel:

- **Enterprise:** Credible in an operations center, executive review, or procurement discussion.
- **Professional:** Restrained, legible, and intentional.
- **Premium:** Polished through details, hierarchy, and consistency rather than decoration.
- **Intelligent:** Data is contextualized into insight, status, prediction, or recommended action.
- **Modern:** Current patterns and clean presentation without chasing short-lived trends.
- **Minimal:** Only useful information and controls compete for attention.
- **Data driven:** Metrics, units, time ranges, thresholds, and status meaning are explicit.

## Avoid

- Gaming-style interfaces, sci-fi control panels, or arcade visual language.
- Neon overload, excessive glow, or high-saturation colors used decoratively.
- Student-project aesthetics such as arbitrary gradients, novelty widgets, or inconsistent cards.
- Excessive animation, looping motion, or transitions that slow comprehension.
- Dense clutter, repeated information, and weak hierarchy.
- Random colors that do not convey established brand or semantic meaning.
- New visual patterns that duplicate an existing component without a clear need.

## Visual Foundation

Use the project's established design tokens and components before creating new values.

- **Primary:** Aqua Loop Blue (`#2563EB`) for brand emphasis, primary actions, active states, and primary charts.
- **Success:** Aqua Loop Green (`#40B840`) for water quality, sustainability, recycled water, and healthy or achieved states.
- **Freshwater accent:** Purple (`#8443AD`) only for freshwater demand and freshwater-related indicators; it must not become the dominant interface color.
- **Warning:** Amber (`#F59E0B`) for attention-required states.
- **Destructive:** Red (`#EF4444`) for critical, failed, or destructive states.
- **Neutral:** Slate-based tones for text, borders, surfaces, and secondary information.
- **Typography:** Inter and the existing sans-serif fallback stack.
- **Shape:** Use the established radius scale; card rounding should remain consistent within a view.
- **Elevation:** Prefer subtle borders and the existing shadow tokens. Strong shadow or glow is reserved for purposeful emphasis.

Semantic colors must keep the same meaning across pages. Maintain readable contrast, and never rely on color alone to communicate status.

## Dashboard Standards

The Dashboard is Aqua Loop's highest-priority page. It is used in presentation decks, SIH judging, and investor demos, so it must create a strong first impression without sacrificing operational usefulness.

The first viewport should answer four questions quickly:

1. Is the water system healthy?
2. How much water is being consumed, treated, and reused?
3. Is AI detecting or predicting anything important?
4. What requires attention or action now?

Lead with decision-critical KPIs, establish a clear reading order, keep units and time context visible, and avoid filling the page with equal-weight cards. Screenshots must remain understandable without a presenter explaining every widget.

## Layout Rules

- Use consistent spacing from the existing project spacing system; do not introduce arbitrary gaps.
- Keep cards in the same row aligned and, where their roles are comparable, at consistent heights.
- Preserve a clear typography hierarchy for page titles, section titles, card titles, metrics, labels, and supporting text.
- Use consistent shadows, borders, corner radii, and surface treatments across modules.
- Use consistent internal card padding and align labels, values, icons, and actions to a shared grid.
- Preserve the established sidebar, header, content width, and responsive behavior.
- Group related data spatially and separate unrelated concerns with whitespace, not decoration.
- Design desktop-first for the current demo while preventing avoidable overflow and broken layouts at smaller widths.

## Interaction Rules

Every button must have visible **hover**, **keyboard-focus**, and **active/pressed** states. Disabled and loading states must be distinct when applicable.

Interactive elements must look interactive. Use appropriate cursor behavior, affordances, labels, and feedback. Do not make decorative cards clickable without a visible cue, and do not style static content like a control.

- Preserve clear keyboard focus indicators; never remove focus styling without an accessible replacement.
- Give icon-only actions an accessible name and, when useful, a tooltip.
- Confirm destructive actions or make them safely reversible.
- Show useful feedback for loading, success, empty, disconnected, stale-data, and error states.
- Keep motion brief and functional. Respect reduced-motion preferences.

## Chart Rules

- Charts must use professional, restrained styling and remain subordinate to the insight they communicate.
- Label axes with the metric and unit where ambiguity is possible.
- Include the applicable time range and distinguish live, historical, forecast, and target data.
- Use consistent colors for the same measures and semantic states across the application.
- Provide readable tooltips, legends when needed, and smooth but restrained interactions.
- Avoid misleading scales, truncated axes without context, decorative 3D effects, and unnecessary gradients.
- Handle loading, empty, sparse, and error states explicitly.
- Keep gridlines and axis marks subtle, but ensure values remain readable.
- Where accessibility requires it, supplement color with labels, line styles, icons, or patterns.

## Future UI Decisions

Any new UI component must:

- Match the existing design language and reuse available primitives.
- Preserve Aqua Loop's enterprise identity.
- Follow the existing spacing, typography, color, radius, and elevation systems.
- Have a clear information or workflow purpose.
- Work with relevant loading, empty, error, disabled, and responsive states.
- Be checked in the context of the full page, not only in isolation.

If a requested change conflicts with these guidelines, call out the conflict before implementing a new design direction. Update this document when an intentional, project-wide design decision is adopted.
