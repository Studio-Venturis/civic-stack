---
type: Decision
title: "ADR 0006: Services are defined once, as OKF concepts"
description: Each government service is a single typed concept file that generates pages, forms, queues, structured data and AI tools.
tags: [adr, services]
status: draft
generated: { by: claude-code/sonnet-5-5, at: 2026-10-08T07:00:00Z }
---

# Context

Government sites describe the same service in several places: a web page, a PDF, a form, a phone script, a staff checklist. They drift apart, and an AI assistant trained on them repeats the drift.

# Decision

* A service is one `type: Service` concept following the [service definition format](/specs/service-definition.md).
* Pages, forms, queue entries, structured data and AI tools are generated from it.
* The same trust metadata used elsewhere in the bundle (generated, verified, stale_after) applies to services.

# Alternatives rejected

* Free-form CMS pages only: no structure for forms, queues or AI.
* A separate JSON schema beside the pages: creates a second source of truth that drifts.

# Consequences

* Changing a fee or step happens in one file, reviewed by the owning department.
* The CMS still manages general content; services are the structured layer on top. See [ADR 0003](/decisions/adr-0003-no-custom-cms.md).
