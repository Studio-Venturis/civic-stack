---
type: Standard
title: AI guardrails for government services
description: Rules every AI feature in a deployment must follow before it reaches residents.
tags: [ai, safety, standard]
status: draft
generated: { by: claude-code/sonnet-5-5, at: 2026-10-08T07:00:00Z }
stale_after: 2027-01-08T00:00:00Z
---

# Rules

1. **Grounded.** Answer only from answerable services (see [ADR 0007](/decisions/adr-0007-ai-connection-model.md)). If nothing matches, say so and offer a person.
2. **Cited.** Every answer links to the service page it came from.
3. **No decisions.** The assistant does not decide eligibility, approve anything, give legal advice or take payment.
4. **Human hand-off.** Always show how to reach a person. Escalate when the user is distressed, asks for something outside scope, or the assistant is unsure.
5. **Disclosed.** Tell users they are talking to an automated assistant.
6. **Accessible.** Output is plain language and works with screen readers and keyboard only. See [accessibility](/standards/wcag-section-508.md).
7. **Logged.** Record each interaction with the service content version used, under a retention class. See [public records](/standards/public-records-privacy.md).
8. **Minimal data.** Redact personal data before logging. Do not send personal data to a model provider unless the deployment has approved that provider.
9. **Translations reviewed.** Translated service content is its own concept and needs human review before it is answerable.

# Open items

* Counsel must decide how assistant logs are treated under open-records law.
* A qualified reviewer should sign off on the escalation criteria before this is marked stable.
