---
type: Requirement
title: Services defined once and generated everywhere
description: Each service is described in one definition file that generates its page, form, queue entry and structured data.
req_id: REQ-SVC-001
status: draft
verification: planned
modules: [service-catalog]
tests: [tests/unit/service-definition.spec.ts]
tags: [requirement, svc]
generated: { by: claude-code/sonnet-5-5, at: 2026-10-08T07:00:00Z }
---

# Statement

Each service is described in one definition file that generates its page, form, queue entry and structured data.

# Acceptance criteria

* A service definition validates against the required fields and sections
* Changing a fact in the definition changes every generated output
* Generated pages use USWDS components only

# Related

* [service-definition](/specs/service-definition.md)
* [adr-0006-service-definition](/decisions/adr-0006-service-definition.md)
* [uswds](/standards/uswds.md)
* Module: [service-catalog](/modules/service-catalog.md)
