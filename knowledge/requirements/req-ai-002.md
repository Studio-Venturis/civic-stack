---
type: Requirement
title: Machine-readable service interface
description: Services are exposed to AI through MCP tools, structured data and an llms.txt file.
req_id: REQ-AI-002
status: draft
verification: planned
modules: [ai-gateway, service-catalog]
tests: [tests/integration/mcp-tools.spec.ts]
tags: [requirement, ai]
generated: { by: claude-code/sonnet-5-5, at: 2026-10-08T07:00:00Z }
---

# Statement

Services are exposed to AI through MCP tools, structured data and an llms.txt file.

# Acceptance criteria

* MCP tools are read-only by default
* Each service page carries structured data
* An llms.txt file lists answerable services

# Related

* [adr-0007-ai-connection-model](/decisions/adr-0007-ai-connection-model.md)
* Module: [ai-gateway](/modules/ai-gateway.md)
* Module: [service-catalog](/modules/service-catalog.md)
