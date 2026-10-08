---
type: Skill
title: Add a CMS content type
description: Run when a new kind of municipal content needs editing, approval and a public template.
tags: [skill, cms]
status: draft
generated: { by: claude-code/sonnet-5-5, at: 2026-10-08T06:40:00Z }
---

# When this applies

You are adding content such as a notice type, service page or board profile.

# Steps

1. Confirm the entity exists in the [entity model](/domain/municipal-entities.md); add it there first if not.
2. Define fields, roles allowed to edit and approve, and the retention class.
3. Build the public template from USWDS components only.
4. Add alt-text and accessibility prompts to the editor fields.
5. Add an accessibility test and link it from the requirement it satisfies.
6. Update [cms-core](/modules/cms-core.md) and log the change.
