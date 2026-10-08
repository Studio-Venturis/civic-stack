---
type: Process
title: How we scaffold a project for AI agents
description: The method behind this repo, written for engineers who will use it on their own projects.
tags: [process, scaffolding, agents, method]
status: draft
generated: { by: claude-code/sonnet-5-5, at: 2026-10-08T07:00:00Z }
---

# The idea

Agents do good work when the project tells them what is true, what is allowed and how to check themselves. Most bad agent output is a context failure, not a model failure. This repo is built so the context exists before the code does.

# Ten principles, each visible in this repo

1. **A router, not a manual.** `AGENTS.md` stays under 150 lines and points to knowledge. It states the mission, the non-negotiables, the commands and where to look next. `CLAUDE.md` just imports it.
2. **Knowledge is a bundle.** Everything an agent needs to know lives in `knowledge/` as an [OKF](/decisions/adr-0002-okf-bundle.md) bundle. Each directory has an `index.md`, so an agent reads a short list first and opens only what it needs.
3. **Typed concepts.** Every file declares what it is: Requirement, Standard, Decision, Skill, Module, Service, Learning, Process. Agents route by type.
4. **One source of truth.** Facts are written once. Indexes and the [compliance matrix](../../docs/compliance-matrix.md) are generated from concept files, never edited by hand.
5. **Rules that execute.** If a rule matters, a script enforces it. `npm run check` rejects broken links, stale indexes, duplicate requirement IDs and stable requirements whose tests do not exist. A rule only written in prose will be broken.
6. **Failures become rules.** Each past mistake is a short note in `knowledge/learnings/` that names the rule it created and where that rule is enforced. Context compounds.
7. **Trust is metadata.** Agents mark their output `generated`. Only a person adds `verified` with a `human:` actor. Content past `stale_after` is flagged. Drafts are never presented as settled.
8. **Core and overlay.** Shared knowledge is public and upstream. Each deployment's specifics live in a private overlay that links into core and is never linked back.
9. **Skills are procedures.** A skill says when it applies, then lists steps. Add one when you notice yourself explaining the same task twice.
10. **Small slices, measurable first tasks.** Phase the work. Give agents golden tasks with a pass or fail result. See the [context checklist](/process/context-checklist.md).

# Scaffolding a new project, in order

1. **State the problem** in one page ([example](/domain/problem.md)). Name who it is for and what changes.
2. **Write the router.** Copy `AGENTS.md`, then replace the mission, non-negotiables and commands. Delete anything you cannot enforce.
3. **Record the first decisions** as short ADRs: stack, knowledge format, core versus overlay, licence. Note alternatives rejected.
4. **Write the standards** the work must meet. Link to official sources; summarise, do not copy. Mark legal or compliance content `draft` until a qualified person reviews it.
5. **Model the domain.** Entities and a glossary, in plain language.
6. **Capture requirements** as ID'd concept files, each tied to standards, a module and planned tests.
7. **Add the validator and CI** before writing application code. Test it on purpose: break a copy of the bundle and confirm it fails.
8. **Add skills** for the tasks agents will repeat.
9. **Only then build the first slice**, against one requirement, updating the requirement, tests and log in the same change.

# What to avoid

* Putting everything in one giant instruction file.
* Copying standards text instead of linking to the source.
* Letting an agent mark its own work verified.
* Generated files that people edit by hand.
* Client names, prices or credentials anywhere in a public repo.

# Try it

Read [the service definition format](/specs/service-definition.md) and ask an agent to add a new service. Run `npm run check` and `npm run okf:answerable` to see what a correct result looks like.
