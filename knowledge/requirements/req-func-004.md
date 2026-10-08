---
type: Requirement
title: News and notices
description: Publish news items and public notices by department.
req_id: REQ-FUNC-004
status: draft
verification: planned
modules: [news-notices]
tests: [tests/e2e/news-notices.spec.ts]
tags: [requirement, func]
generated: { by: claude-code/sonnet-5-5, at: 2026-10-08T06:40:00Z }
---

# Statement

Publish news items and public notices by department.

# Acceptance criteria

* Notices support start and expiry dates
* Each item belongs to a department
* Archived items remain reachable at stable URLs

# Related

* [public-records-privacy](/standards/public-records-privacy.md)
* Module: [news-notices](/modules/news-notices.md)
