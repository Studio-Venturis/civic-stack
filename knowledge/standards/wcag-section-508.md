---
type: Standard
title: WCAG 2.1 AA and Section 508
description: Accessibility target, definition of done and test procedure for every page and component.
resource: https://www.w3.org/TR/WCAG21/
tags: [accessibility, wcag, section-508]
status: draft
generated: { by: claude-code/sonnet-5-5, at: 2026-10-08T06:40:00Z }
stale_after: 2027-01-08T00:00:00Z
sources:
  - id: wcag21
    resource: https://www.w3.org/TR/WCAG21/
    title: Web Content Accessibility Guidelines 2.1
  - id: s508
    resource: https://www.section508.gov/
    title: Section508.gov
---

# Target

WCAG 2.1 Level AA, or the successor standard a given deployment is contractually required to meet.[^wcag21] Section 508 guidance informs documentation such as the accessibility conformance report.[^s508]

# Definition of done for any UI change

1. Automated scan (axe) passes with zero serious or critical issues.
2. Keyboard-only walkthrough completes the primary task.
3. Color contrast meets AA using USWDS tokens only.
4. Every image has alt text or is marked decorative; editors are prompted for alt text.
5. Forms have programmatic labels, error identification and error suggestions.
6. Documents uploaded to the document center are checked for accessibility before publishing.

# Process

Use the [accessibility audit skill](/skills/accessibility-audit.md). Record results in the deployment's conformance report.

[^wcag21]: Web Content Accessibility Guidelines 2.1
[^s508]: Section508.gov
