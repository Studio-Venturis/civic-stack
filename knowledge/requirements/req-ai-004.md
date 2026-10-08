---
type: Requirement
title: Human escalation and disclosure
description: Users are told they are talking to an automated assistant and can always reach a person.
req_id: REQ-AI-004
status: draft
verification: planned
modules: [ai-gateway]
tests: [tests/e2e/assistant-escalation.spec.ts]
tags: [requirement, ai]
generated: { by: claude-code/sonnet-5-5, at: 2026-10-08T07:00:00Z }
---

# Statement

Users are told they are talking to an automated assistant and can always reach a person.

# Acceptance criteria

* Disclosure is shown before the first answer
* A contact route to a person is always visible
* The assistant works with keyboard and screen reader

# Related

* [ai-guardrails](/standards/ai-guardrails.md)
* [wcag-section-508](/standards/wcag-section-508.md)
* Module: [ai-gateway](/modules/ai-gateway.md)
