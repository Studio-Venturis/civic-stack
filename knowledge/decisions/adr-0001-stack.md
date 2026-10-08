---
type: Decision
title: "ADR 0001: Next.js, USWDS, Payload CMS and Postgres"
description: Why the foundation uses a React framework with a headless CMS and USWDS, not Angular or a custom CMS.
tags: [adr, stack]
status: draft
generated: { by: claude-code/sonnet-5-5, at: 2026-10-08T06:40:00Z }
---

# Context

The goal is a foundation any government IT department can clone. Adoption depends on the hiring pool of the people who clone it, and on content editors getting a mature editing experience.

# Decision

* Frontend: Next.js (App Router) with [USWDS](/standards/uswds.md).
* CMS: Payload, inside the same app, on Postgres. Directus and Strapi are the fallbacks.
* Services layer (forms, queues, auth): Postgres, with Row Level Security where tenancy applies.

# Consequences

* Studio Venturis's own Angular tooling is not reused here. Process knowledge (context, handovers, guardrails) transfers; framework code does not.
* The CMS licence terms and USWDS integration approach must be verified before the first release. See [no custom CMS](/decisions/adr-0003-no-custom-cms.md).
