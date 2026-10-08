# civic-stack

An open foundation for city and county web services. Clone it, configure it for your government, and stand up accessible, portable, citizen-facing sites without starting from a blank page.

The aim: the open foundation for the AI era of local government. Define a service once, publish it accessibly, and expose it safely to AI assistants and to residents.

Local governments need the same few capabilities: information pages, notices, forms, documents, directories and meeting records. civic-stack is the shared base for those, built on [USWDS](https://designsystem.digital.gov/), a headless CMS and Postgres. See [the problem](knowledge/domain/problem.md).

It also shows how an agent-driven team gives a project context from day 1. The knowledge base is an [Open Knowledge Format](https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md) (v0.2) bundle, and `AGENTS.md` is a thin router into it.

## Status: v0.1, Day 0 context pack

This release contains the context system, not the application. No Next.js app exists yet.

* `knowledge/` is the OKF bundle: problem statement, standards, domain model, decisions, skills, process, learnings, 24 capability requirements, 14 planned modules, a service definition format with three example services, and AI guardrails.
* `docs/compliance-matrix.md` is generated from the requirements.
* `scripts/` validates the bundle and regenerates indexes and the matrix.
* `deployments/_template/` is the overlay a government copies. Real overlays stay private.

## Use it

```
npm ci
npm run check
```

After adding or renaming concepts: `npm run okf:index && npm run docs:matrix`.

Start reading at `knowledge/process/reading-order.md`.

## For engineers: how this repo is scaffolded

This repo is also a worked example of preparing a project so AI agents can work on it. Start with `knowledge/process/scaffolding-method.md`.

## How it fits together

Requirements link to the standards they imply and the modules that implement them, and list the tests that prove them. The compliance matrix is generated from that one source, so nothing is written twice.

## Important caveats

* All knowledge is agent-drafted and unverified. Legal and compliance files are marked `draft` and need review by qualified counsel before anyone relies on them.
* OKF is an early spec. This repo pins v0.2 and layers stricter checks on top of the spec's permissive rules.

## Planned

Next.js, USWDS and Payload application scaffold; golden tasks that prove agents can extend the project; accessibility CI against real pages.

## Licence

Apache License 2.0. See `LICENSE` and `NOTICE`. Rationale in `knowledge/decisions/adr-0005-license.md`.
