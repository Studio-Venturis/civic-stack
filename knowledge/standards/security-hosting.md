---
type: Standard
title: Security and hosting baseline
description: Minimum security, hosting, backup and recovery controls every deployment must document.
tags: [security, hosting, operations]
status: draft
generated: { by: claude-code/sonnet-5-5, at: 2026-10-08T06:40:00Z }
stale_after: 2027-01-08T00:00:00Z
---

# Baseline controls

* Encryption in transit (TLS) and at rest for all stores.
* Role-based access control with least privilege; editor, approver and admin roles are separate.
* Tenant isolation enforced in the database, not only in application code.
* Automated backups with a tested restore. RPO and RTO are set per deployment in the [deployment overlay](/process/deployment-overlay.md) and published with the deployment.
* Patching cadence and monitoring documented, with incident-response contacts and steps.
* Secrets only in the host's secret store. No secrets in the repo, ever.
* US hosting regions by default for US public-sector deployments.

# Open items

* Confirm which hosting authorizations a given municipality requires before naming a provider.
* Have a qualified security reviewer sign off before this file is marked stable.
