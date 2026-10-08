---
type: Requirement
title: Audit and retention of AI interactions
description: Each assistant interaction is logged with the content version used, under a retention class, with personal data redacted.
req_id: REQ-AI-003
status: draft
verification: planned
modules: [ai-gateway]
tests: [tests/unit/ai-audit-log.spec.ts]
tags: [requirement, ai]
generated: { by: claude-code/sonnet-5-5, at: 2026-10-08T07:00:00Z }
---

# Statement

Each assistant interaction is logged with the content version used, under a retention class, with personal data redacted.

# Acceptance criteria

* Logs record the service version used for each answer
* Personal data is redacted before storage
* Retention class is configurable per deployment

# Related

* [ai-guardrails](/standards/ai-guardrails.md)
* [public-records-privacy](/standards/public-records-privacy.md)
* Module: [ai-gateway](/modules/ai-gateway.md)
