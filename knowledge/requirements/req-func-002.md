---
type: Requirement
title: Online forms
description: Resident-facing online forms that route submissions to staff.
req_id: REQ-FUNC-002
status: draft
verification: planned
modules: [forms]
tests: [tests/e2e/forms.spec.ts]
tags: [requirement, func]
generated: { by: claude-code/sonnet-5-5, at: 2026-10-08T06:40:00Z }
---

# Statement

Resident-facing online forms that route submissions to staff.

# Acceptance criteria

* Each field is labeled and errors are explained accessibly
* Personal-data fields are marked in the definition
* Submissions route to a department queue

# Related

* [wcag-section-508](/standards/wcag-section-508.md)
* [public-records-privacy](/standards/public-records-privacy.md)
* Module: [forms](/modules/forms.md)
