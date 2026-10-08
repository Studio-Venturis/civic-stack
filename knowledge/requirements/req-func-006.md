---
type: Requirement
title: Document management
description: Upload, categorize and publish documents.
req_id: REQ-FUNC-006
status: draft
verification: planned
modules: [document-center]
tests: [tests/e2e/documents.spec.ts]
tags: [requirement, func]
generated: { by: claude-code/sonnet-5-5, at: 2026-10-08T06:40:00Z }
---

# Statement

Upload, categorize and publish documents.

# Acceptance criteria

* Each document has a retention class
* Upload flow prompts for an accessibility check
* Documents are searchable and have stable URLs

# Related

* [wcag-section-508](/standards/wcag-section-508.md)
* [public-records-privacy](/standards/public-records-privacy.md)
* Module: [document-center](/modules/document-center.md)
