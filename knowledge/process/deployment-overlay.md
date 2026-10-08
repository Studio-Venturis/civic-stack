---
type: Process
title: Deployment overlay guide
description: How to create a per-municipality overlay bundle without leaking client data into core.
tags: [process, deployment]
status: draft
generated: { by: claude-code/sonnet-5-5, at: 2026-10-08T06:40:00Z }
---

# Steps

1. Copy `deployments/_template/` to `deployments/<name>/`.
2. Fill in brand, modules, hosting and integrations. Link to core with relative paths such as `../../knowledge/modules/cms-core.md`.
3. Keep it private. `.gitignore` excludes everything in `deployments/` except `_template/`.
4. Run `npm run check`; overlays are validated like any bundle.

# Rules

* Overlays link into core; core never links to an overlay.
* No secrets in an overlay. Reference secret-store names only.
* Rationale in [ADR 0004](/decisions/adr-0004-core-and-overlays.md).
