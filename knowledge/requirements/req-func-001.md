---
type: Requirement
title: Site search
description: Site-wide search across pages, news, notices and documents.
req_id: REQ-FUNC-001
status: draft
verification: planned
modules: [search]
tests: [tests/e2e/search.spec.ts]
tags: [requirement, func]
generated: { by: claude-code/sonnet-5-5, at: 2026-10-08T06:40:00Z }
---

# Statement

Site-wide search across pages, news, notices and documents.

# Acceptance criteria

* Search covers all four content kinds
* Results are keyboard and screen-reader usable
* Unpublished content never appears

# Related

* [wcag-section-508](/standards/wcag-section-508.md)
* Module: [search](/modules/search.md)
