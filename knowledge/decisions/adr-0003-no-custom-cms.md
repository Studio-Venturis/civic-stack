---
type: Decision
title: "ADR 0003: Do not build a custom CMS"
description: Editing, roles, approvals and versioning come from an existing open-source CMS.
tags: [adr, cms]
status: draft
generated: { by: claude-code/sonnet-5-5, at: 2026-10-08T06:40:00Z }
---

# Decision

Role-based permissions, approval workflows, reusable components and version history are the hardest parts of a government CMS to get right. Use an existing open-source CMS. Build only the municipal content model and page templates on top (see [cms-core](/modules/cms-core.md)).

# Revisit when

The chosen CMS cannot meet [REQ-CMS-001](/requirements/req-cms-001.md) after a documented spike.
