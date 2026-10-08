---
type: Learning
title: Presentation changes must not change logic
description: UI refactors are strictly visual; mixing logic and design changes hides regressions.
tags: [learning, refactoring]
status: draft
generated: { by: claude-code/sonnet-5-5, at: 2026-10-08T06:40:00Z }
---

# Rule

When the task is a design-system migration or layout change, logic stays byte-for-byte equivalent. If logic must change, make it a separate change with its own test.

# Why

Combined changes make agent output impossible to review and let behavior regressions hide inside styling diffs.
