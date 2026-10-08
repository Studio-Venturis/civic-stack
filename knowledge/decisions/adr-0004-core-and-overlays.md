---
type: Decision
title: "ADR 0004: Core bundle plus per-deployment overlays"
description: Shared knowledge is upstream and versioned; each municipality's specifics live in a separate overlay bundle.
tags: [adr, deployment]
status: draft
generated: { by: claude-code/sonnet-5-5, at: 2026-10-08T06:40:00Z }
---

# Decision

* `knowledge/` is the public, upstream core. It never contains a real client's name, contacts, prices or credentials.
* `deployments/<name>/` holds brand tokens, enabled modules, integrations, hosting settings and stakeholder notes for one municipality. Overlays link into core; core never links to an overlay.
* Public forks must not commit real deployments. `.gitignore` excludes everything in `deployments/` except `_template/`.

# Why

Clones stay upgradeable and client details cannot leak into the public core. See the [overlay guide](/process/deployment-overlay.md).
