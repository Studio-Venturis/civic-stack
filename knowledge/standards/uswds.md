---
type: Standard
title: U.S. Web Design System (USWDS)
description: Design-system rules every public-facing UI in this repo must follow.
resource: https://designsystem.digital.gov/
tags: [design, ui, uswds]
status: draft
generated: { by: claude-code/sonnet-5-5, at: 2026-10-08T06:40:00Z }
stale_after: 2027-01-08T00:00:00Z
---

# Rule

All public UI is built from USWDS components, utilities and tokens. Do not invent a parallel component set.

# Constraints

* Pin the USWDS version in `package.json` and record it in the changelog when it changes. Verify the current major version before pinning.
* Brand theming happens only through USWDS theme settings (color, type, spacing tokens), never by overriding component CSS.
* Use the USWDS banner and identifier patterns where the deployment is a government site.
* New patterns not in USWDS need a [Decision](/decisions/index.md) record first.
* No emojis in UI, code, logs or copy.

# Verification

Each page template passes the checks in [WCAG and Section 508](/standards/wcag-section-508.md) and uses only USWDS classes in markup.
