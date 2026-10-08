---
type: Process
title: Reading order for engineers and agents
description: What to read, in order, before starting work on this repo or a deployment.
tags: [process, onboarding]
status: draft
generated: { by: claude-code/sonnet-5-5, at: 2026-10-08T06:40:00Z }
---

# Day 0: understand the context before any code

1. `AGENTS.md` for non-negotiables and commands, then [the problem](/domain/problem.md).
2. [Decisions](/decisions/adr-0001-stack.md) to see why the stack is what it is.
3. [Standards](/standards/uswds.md), then [accessibility](/standards/wcag-section-508.md) and [security](/standards/security-hosting.md).
4. [Entity model](/domain/municipal-entities.md) and [glossary](/domain/glossary.md).
5. The [requirements](/requirements/req-cms-001.md) and the [modules](/modules/cms-core.md) they map to.
6. The [context checklist](/process/context-checklist.md) before the first agent run on a new deployment.

# Day 1: build the first slice

Start with the module the deployment needs first. Each change updates the requirement, the test and the log.
