---
type: Requirement
title: Grounded and cited assistant answers
description: The assistant answers only from answerable services and cites the page it used.
req_id: REQ-AI-001
status: draft
verification: planned
modules: [ai-gateway]
tests: [tests/unit/answerable-gate.spec.ts]
tags: [requirement, ai]
generated: { by: claude-code/sonnet-5-5, at: 2026-10-08T07:00:00Z }
---

# Statement

The assistant answers only from answerable services and cites the page it used.

# Acceptance criteria

* Services that are unverified, draft or stale are never used to answer
* Every answer includes a link to its source service
* Out-of-scope questions get a hand-off, not a guess

# Related

* [ai-guardrails](/standards/ai-guardrails.md)
* [adr-0007-ai-connection-model](/decisions/adr-0007-ai-connection-model.md)
* Module: [ai-gateway](/modules/ai-gateway.md)
