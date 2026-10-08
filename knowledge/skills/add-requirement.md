---
type: Skill
title: Add a requirement
description: Run when discovery with staff or residents surfaces a need the bundle does not cover.
tags: [skill, requirements]
status: draft
generated: { by: claude-code/sonnet-5-5, at: 2026-10-08T06:40:00Z }
---

# When this applies

A real need from users or operators is not yet captured as a requirement.

# Steps

1. Search `knowledge/requirements/` first. Extend an existing requirement if it fits.
2. Create `req-<area>-<nnn>.md` with `req_id`, `status: draft`, `modules`, `verification: planned`, and a list of planned `tests`.
3. Link the standards it implies and the module that implements it.
4. Describe the need in plain language. Omit personal contact details and any client-identifying information.
5. Run `npm run okf:index && npm run docs:matrix && npm run check`.
6. Add a dated line to the nearest `log.md`.
