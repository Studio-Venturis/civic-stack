---
type: Process
title: Context checklist before the first agent run
description: What must exist in a new deployment before any agent writes code.
tags: [process, onboarding, agents]
status: draft
generated: { by: claude-code/sonnet-5-5, at: 2026-10-08T06:40:00Z }
---

# Checklist

1. A deployment overlay created from `deployments/_template/`.
2. Brand tokens set as USWDS theme settings in the overlay.
3. Enabled modules chosen from the core [modules](/modules/cms-core.md).
4. Needs from discovery captured, with requirements extended via [add-requirement](/skills/add-requirement.md).
5. RPO, RTO, hosting region and retention classes recorded.
6. Golden tasks defined (see below) so agents have a measurable first assignment.
7. `npm run check` passes before work starts.
8. Services defined as concept files ([format](/specs/service-definition.md)) and checked with `npm run okf:answerable`.

# Golden tasks (planned)

Small tasks an agent must complete while passing accessibility checks and using only USWDS components, for example "add a department page". They prove the context works and show engineers what good output looks like. Not yet implemented.
