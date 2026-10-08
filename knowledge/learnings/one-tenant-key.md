---
type: Learning
title: One tenant key drives all access control
description: Mixed per-user and per-organization checks caused silent data-access failures.
tags: [learning, security, tenancy]
status: draft
generated: { by: claude-code/sonnet-5-5, at: 2026-10-08T06:40:00Z }
---

# Failure

Access policies that mixed per-user and per-organization checks silently returned no data for valid users.

# Rule it became

Choose one tenant key and use it in every policy, query and notification route. Debug policy problems by broadening queries step by step to separate "no data" from "filtered by policy".

# Where it is enforced

Planned: policy tests per tenant-scoped table. See [security baseline](/standards/security-hosting.md).
