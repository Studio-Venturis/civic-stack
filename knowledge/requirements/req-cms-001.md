---
type: Requirement
title: "Staff-friendly CMS with roles, approvals and versions"
description: Role-based permissions, approval workflows, reusable components and version control for nontechnical staff.
req_id: REQ-CMS-001
status: draft
verification: planned
modules: [cms-core]
tests: [tests/e2e/cms-workflow.spec.ts]
tags: [requirement, cms]
generated: { by: claude-code/sonnet-5-5, at: 2026-10-08T06:40:00Z }
---

# Statement

Role-based permissions, approval workflows, reusable components and version control for nontechnical staff.

# Acceptance criteria

* Editor, approver and admin roles are separate
* Nothing publishes without the configured approval
* Any page can be restored to a prior version
* Editors can build pages from reusable components

# Related

* [security-hosting](/standards/security-hosting.md)
* [adr-0003-no-custom-cms](/decisions/adr-0003-no-custom-cms.md)
* Module: [cms-core](/modules/cms-core.md)
