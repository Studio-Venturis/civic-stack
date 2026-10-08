---
type: Decision
title: "ADR 0007: How AI connects to government services"
description: Services are exposed to AI through MCP tools, structured data and a grounded assistant that answers only from reviewed content.
resource: https://modelcontextprotocol.io/
tags: [adr, ai, mcp]
status: draft
generated: { by: claude-code/sonnet-5-5, at: 2026-10-08T07:00:00Z }
---

# Decision

Three interfaces, all generated from [service definitions](/specs/service-definition.md):

1. **MCP server.** Read-only tools such as `search_services`, `get_service` and `list_required_documents`. Any write-style tool (for example starting a request) hands the user to the form and never submits on their behalf.
2. **Machine-readable pages.** schema.org `GovernmentService` structured data and an `llms.txt` file, so external assistants can read services without custom integration.
3. **Citizen assistant.** Optional and off by default. It answers only from answerable services, cites the page it used, and hands off to a person when unsure.

# Answerable gate

A service is answerable only if its trust tier is human-reviewed, its status is stable and it is not past `stale_after`. `npm run okf:answerable` lists the current state. Everything in `knowledge/services/` is an unverified example, so none is answerable.

# Model choice

Model-agnostic. A provider adapter lets each deployment choose its model and data region. No model is bundled.

# Boundaries

* The assistant never decides eligibility, gives legal advice or takes payments.
* Behaviour rules live in [AI guardrails](/standards/ai-guardrails.md).

# Open

* Confirm MCP and schema.org conventions are current before the first implementation.
* Counsel must decide retention and disclosure of assistant conversations; see [public records](/standards/public-records-privacy.md).
