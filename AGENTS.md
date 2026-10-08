# AGENTS.md

Router for agents and engineers. Keep this under 150 lines; knowledge lives in the OKF bundle at `knowledge/`.

## Mission

Open foundation that a government IT department can clone to build accessible, portable, citizen-facing web services quickly. Stack: Next.js, USWDS, Payload CMS, Postgres (see `knowledge/decisions/adr-0001-stack.md`).

## Where to look first

* Start at `knowledge/index.md`, then drill into the directory you need. Each directory has an `index.md`.
* Reading order for newcomers: `knowledge/process/reading-order.md`.
* Requirements: `knowledge/requirements/`. Mapping to modules and tests: `docs/compliance-matrix.md`.
* Standards (USWDS, WCAG, security, records): `knowledge/standards/`.
* Entities and terms: `knowledge/domain/`.
* Repeatable tasks: `knowledge/skills/`.
* Past failures turned into rules: `knowledge/learnings/`.
* A municipality's specifics: `deployments/<name>/` (never in core).

## Non-negotiables

* Public UI uses USWDS components and tokens only. No parallel component set.
* WCAG 2.1 AA is the floor. Run the accessibility audit skill for any UI change.
* Do not build a custom CMS. Use the chosen open-source CMS.
* No secrets, client names, prices or contacts in this repo. Deployment data stays in overlays that are not committed publicly.
* No emojis anywhere: UI, code, logs, docs.
* Every requirement has an ID, linked standards, a module and planned or real tests.
* Read the real schema before writing a query. Migrations are committed files.
* Presentation changes never change logic.
* Ship the smallest working slice. Functions under 40 lines, files under 400.

## Commands

* `npm run okf:index` regenerate index.md files after adding or renaming concepts.
* `npm run docs:matrix` regenerate `docs/compliance-matrix.md`.
* `npm run check` validate the bundle and confirm the matrix is current. Must pass before commit.

## Working on knowledge

1. Search before creating. Extend an existing concept if it fits.
2. Every concept file needs frontmatter with a `type`. Links are bundle-relative (`/standards/uswds.md`).
3. Mark your own output `generated: { by: <tool>/<version>, at: <ISO time> }`. Never write `verified:` with a `human:` actor unless a person confirmed it.
4. Add a dated line to the nearest `log.md`, newest first.
5. Legal and compliance content stays `status: draft` until a US lawyer or qualified reviewer signs off.

## Boundaries

* Do not put client names, contracts, prices or personal contact details in the bundle.
* Do not assert certifications, compliance dates or prices the bundle does not support.
* Ask before adding dependencies, changing the licence, or altering `knowledge/decisions/`.
