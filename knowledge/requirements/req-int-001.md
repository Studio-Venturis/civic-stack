---
type: Requirement
title: Third-party integrations
description: Integration with existing systems identified during discovery, with assumptions and extra costs stated.
req_id: REQ-INT-001
status: draft
verification: planned
modules: [integrations]
tests: [tests/integration/adapters.spec.ts]
tags: [requirement, int]
generated: { by: claude-code/sonnet-5-5, at: 2026-10-08T06:40:00Z }
---

# Statement

Integration with existing systems identified during discovery, with assumptions and extra costs stated.

# Acceptance criteria

* Each integration is an adapter with documented assumptions
* Failures degrade gracefully without breaking pages

# Related

* [security-hosting](/standards/security-hosting.md)
* Module: [integrations](/modules/integrations.md)
