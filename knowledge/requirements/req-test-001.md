---
type: Requirement
title: "Browser, device, accessibility, performance and acceptance testing"
description: Testing across browsers and devices, plus accessibility, performance and user acceptance testing.
req_id: REQ-TEST-001
status: draft
verification: planned
modules: [compliance-ci]
tests: [tests/e2e/smoke.spec.ts]
tags: [requirement, test]
generated: { by: claude-code/sonnet-5-5, at: 2026-10-08T06:40:00Z }
---

# Statement

Testing across browsers and devices, plus accessibility, performance and user acceptance testing.

# Acceptance criteria

* A browser and device matrix is defined
* Performance budgets are checked in CI
* A UAT script template exists

# Related

* [wcag-section-508](/standards/wcag-section-508.md)
* Module: [compliance-ci](/modules/compliance-ci.md)
