---
type: Requirement
title: Content strategy and migration
description: Content inventory, cleanup recommendations, migration from the old site, a redirect plan and quality assurance.
req_id: REQ-CONTENT-001
status: draft
verification: planned
modules: [delivery-kit, cms-core]
tests: [tests/e2e/redirects.spec.ts]
tags: [requirement, content]
generated: { by: claude-code/sonnet-5-5, at: 2026-10-08T06:40:00Z }
---

# Statement

Content inventory, cleanup recommendations, migration from the old site, a redirect plan and quality assurance.

# Acceptance criteria

* A content inventory template exists
* A redirect map is generated and checked for broken targets
* Migrated pages pass the accessibility checks

# Related

* [public-records-privacy](/standards/public-records-privacy.md)
* Module: [delivery-kit](/modules/delivery-kit.md)
* Module: [cms-core](/modules/cms-core.md)
