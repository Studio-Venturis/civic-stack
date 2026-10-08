---
type: Requirement
title: Emergency alerts
description: Prominent alerts for emergencies and urgent notices.
req_id: REQ-FUNC-005
status: draft
verification: planned
modules: [alerts]
tests: [tests/e2e/alerts.spec.ts]
tags: [requirement, func]
generated: { by: claude-code/sonnet-5-5, at: 2026-10-08T06:40:00Z }
---

# Statement

Prominent alerts for emergencies and urgent notices.

# Acceptance criteria

* Alert banner appears on every page
* Alerts have an approval path and an expiry
* Alert text is announced to assistive technology

# Related

* [wcag-section-508](/standards/wcag-section-508.md)
* Module: [alerts](/modules/alerts.md)
