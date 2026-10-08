---
type: Learning
title: Inspect the schema before writing queries
description: Agents that guess column names produce plausible, wrong code; read the real schema first.
tags: [learning, database]
status: draft
generated: { by: claude-code/sonnet-5-5, at: 2026-10-08T06:40:00Z }
---

# Failure

Code referenced column names that were close but wrong, causing a regression that tests did not catch at the time.

# Rule it became

Before writing any query or migration, read the current schema. Migrations are committed files, applied through the CLI, never ad hoc.

# Where it is enforced

Planned: a CI check that regenerated database types match the committed schema.
