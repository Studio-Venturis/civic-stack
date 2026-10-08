---
type: DomainModel
title: Municipal content entities
description: The core entities a county or city website manages and how they relate.
tags: [domain, data-model]
status: draft
generated: { by: claude-code/sonnet-5-5, at: 2026-10-08T06:40:00Z }
---

# Entities

| Entity | Purpose | Key relations |
|---|---|---|
| Department | An office or agency of the government | Has staff, services, documents, news |
| Official | An elected or appointed person | Belongs to a body (commission, council) |
| Body | A governing or advisory group | Holds meetings, has members |
| Meeting | A scheduled session | Has agenda, minutes, notices, a body |
| Notice | A public notice or alert | Belongs to a department, has an expiry |
| News item | A press release or announcement | Belongs to a department |
| Document | A file with a retention class | Attached to meetings, departments, notices |
| Form | A resident-facing submission | Owned by a department, routes to a staff queue |
| Service | A task residents do (pay, apply, report) | Owned by a department, may link to a form or external system |

# Rules

* Every public entity has an owner (department) and a last-reviewed date.
* Documents carry a retention class from [public records rules](/standards/public-records-privacy.md).
* Terms are defined in the [glossary](/domain/glossary.md).
