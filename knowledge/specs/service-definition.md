---
type: Specification
title: Service definition format
description: The concept file that describes one government service and drives pages, forms, queues, structured data and AI access.
tags: [spec, services, ai]
status: draft
generated: { by: claude-code/sonnet-5-5, at: 2026-10-08T07:00:00Z }
---

# Purpose

A service is something a resident or business does with the government: apply, pay, request, report, look up. Each service is one OKF concept file with `type: Service`. Everything else is generated from it, so facts are written once. See [ADR 0006](/decisions/adr-0006-service-definition.md).

# Where definitions live

* Generic examples ship in `knowledge/services/`.
* A real government's services live in its overlay: `deployments/<name>/services/`. Overlays link into core; core never links to an overlay.

# Required frontmatter

| Field | Meaning |
|---|---|
| `type` | Always `Service` |
| `service_id` | `SVC-<AREA>-<NNN>`, equal to the filename uppercased |
| `title`, `description` | Plain-language name and one-sentence summary |
| `owner` | The department responsible |
| `audience` | List such as `residents`, `businesses`, `contractors` |
| `channels` | List such as `web`, `phone`, `in-person`, `mail` |
| `status` | `draft`, `stable` or `deprecated` |

Optional trust fields (`generated`, `verified`, `stale_after`) follow OKF v0.2 and decide whether an assistant may answer from the service. See [AI guardrails](/standards/ai-guardrails.md).

# Required body sections

1. `# What it is`
2. `# Who can use it`
3. `# Steps`
4. `# Documents needed`
5. `# Fees and timing`
6. `# Help and escalation`
7. `# Not covered`

# What gets generated

* The public service page, built from [USWDS](/standards/uswds.md) components.
* The form and the staff queue entry, where the service takes submissions.
* Structured data for search and AI (schema.org `GovernmentService`) and an `llms.txt` entry.
* An MCP tool surface. See [ADR 0007](/decisions/adr-0007-ai-connection-model.md).

# Rules

* Plain language. No jargon that is not in the [glossary](/domain/glossary.md).
* Never state eligibility rules, fees or deadlines that the owning department has not confirmed.
* Examples in this repo are illustrative only and are never marked verified.
