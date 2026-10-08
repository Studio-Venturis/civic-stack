---
type: Decision
title: "ADR 0005: Apache License 2.0"
description: The repo is licensed Apache 2.0 so governments, vendors and contributors get explicit patent and contribution terms.
tags: [adr, license]
status: stable
generated: { by: claude-code/sonnet-5-5, at: 2026-10-08T06:50:00Z }
verified: { by: human:uche, at: 2026-10-08T06:50:00Z }
---

# Decision

The project is licensed under Apache License 2.0. The copyright holder is Studio Venturis, Inc.

# Why

* Permissive, so government counsel and vendors can adopt, modify and build on it without copyleft obligations.
* Includes an explicit patent grant from every contributor and a patent-retaliation clause, which MIT lacks.
* Contributions are licensed under the same terms by default.
* Does not grant trademark rights.

# Implications

* `LICENSE` is the unmodified Apache 2.0 text. `NOTICE` carries the copyright line and must be preserved by redistributors.
* Revenue comes from implementation, hosting, support and SLAs, not from the code.
* Check any client contract for IP ownership before reusing client-derived patterns in this repo.
* Satisfies the ownership and portability expectations in [REQ-OWN-001](/requirements/req-own-001.md).
