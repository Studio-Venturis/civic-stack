---
type: Problem Statement
title: The problem civic-stack addresses
description: Why public-sector web services are costly, inaccessible and hard to leave, and what this project changes.
tags: [domain, problem]
status: draft
generated: { by: claude-code/sonnet-5-5, at: 2026-10-08T06:50:00Z }
---

# Problem

Local governments need the same few web capabilities: information pages, notices, forms, documents, directories and meeting records. Most rebuild or rebuy them from scratch.

* **Cost**: each site is a fresh custom build, so common features are paid for repeatedly.
* **Quality**: interfaces are inconsistent and accessibility is often an afterthought, though it is a legal and ethical requirement.
* **Lock-in**: content, code and data are hard to move when the relationship with a vendor ends.
* **Staff burden**: nontechnical staff struggle with tools that lack clear roles, approvals and version history.

# Approach

* A shared, open foundation any IT department can clone: [stack](/decisions/adr-0001-stack.md).
* Accessible by default: [USWDS](/standards/uswds.md) and [WCAG 2.1 AA](/standards/wcag-section-508.md).
* Portable by design: open licence, documented export, exit plan templates.
* Context for agents and engineers from day 1, so a small team can extend it quickly: [reading order](/process/reading-order.md).

# Who it is for

City and county IT departments, small vendors and civic technologists building citizen-facing services. Requirements describe capabilities common to this work, not any single buyer.
