// Validates OKF v0.2 conformance plus this repo's stricter house rules.
// Usage: node scripts/validate-okf.mjs
import fs from 'node:fs';
import path from 'node:path';
import { ROOT, RESERVED, findBundles, walk, parseDoc, extractLinks, isExternal, resolveLink, renderIndex, rel } from './lib/okf.mjs';

const errors = [];
const warnings = [];
const err = (f, m) => errors.push(`${rel(f)}: ${m}`);
const warn = (f, m) => warnings.push(`${rel(f)}: ${m}`);

const ISO = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})$/;
const ACTOR = /^(human:[\w.-]+|process:[\w.-]+|[\w.-]+\/[\w.-]+)$/;
const STATUS = new Set(['draft', 'stable', 'deprecated']);
const REQ_ID = /^REQ-[A-Z0-9]+-\d{3}$/;
const AGENTS_MAX_LINES = 150;
const CONCEPT_WARN_LINES = 200;

const asList = (v) => (v == null ? [] : Array.isArray(v) ? v : [v]);

function checkTime(file, key, v) {
  if (v != null && !(typeof v === 'string' && ISO.test(v))) err(file, `${key} must be ISO 8601 with UTC offset`);
}

function checkTrust(file, fm) {
  if (fm.status != null && !STATUS.has(fm.status)) err(file, `status must be draft|stable|deprecated`);
  checkTime(file, 'stale_after', fm.stale_after);
  if (typeof fm.stale_after === 'string' && ISO.test(fm.stale_after) && Date.parse(fm.stale_after) <= Date.now()) {
    warn(file, `stale since ${fm.stale_after}; re-verify`);
  }
  if (fm.generated) {
    if (!ACTOR.test(String(fm.generated.by ?? ''))) err(file, 'generated.by must follow the actor convention');
    checkTime(file, 'generated.at', fm.generated.at);
  }
  for (const v of asList(fm.verified)) {
    if (!ACTOR.test(String(v?.by ?? ''))) err(file, 'verified[].by must follow the actor convention');
    checkTime(file, 'verified[].at', v?.at);
  }
}

function checkLinks(file, body, bundle) {
  for (const t of extractLinks(body)) {
    if (isExternal(t)) continue;
    const target = resolveLink(t, file, bundle);
    if (target && !fs.existsSync(target)) err(file, `broken link: ${t}`);
  }
}

function checkLog(file) {
  const { text } = parseDoc(file);
  const dates = [...text.matchAll(/^## (.+)$/gm)].map((m) => m[1].trim());
  if (!/^# /m.test(text)) err(file, 'log.md needs a top-level heading');
  for (const d of dates) if (!/^\d{4}-\d{2}-\d{2}$/.test(d)) err(file, `log date heading must be YYYY-MM-DD: "${d}"`);
  const sorted = [...dates].sort().reverse();
  if (dates.join() !== sorted.join()) err(file, 'log entries must be newest first');
}

function checkIndex(file, dir, bundle) {
  const { fm, text } = parseDoc(file);
  if (dir !== bundle) {
    if (/^---\r?\n/.test(text)) err(file, 'index.md must not carry frontmatter (root only, okf_version)');
  } else if (!fm || typeof fm.okf_version !== 'string') {
    err(file, 'root index.md must declare okf_version');
  }
  if (fs.readFileSync(file, 'utf8') !== renderIndex(dir, bundle)) err(file, 'stale index; run `npm run okf:index`');
}

const requirements = new Map();
const moduleNames = new Set();
const referencedModules = new Set();

function checkRequirement(file, fm, body) {
  const stem = path.basename(file, '.md').toUpperCase();
  if (!REQ_ID.test(String(fm.req_id ?? ''))) return err(file, 'req_id must match REQ-<AREA>-<NNN>');
  if (fm.req_id !== stem) err(file, `req_id ${fm.req_id} must equal filename (${stem})`);
  if (requirements.has(fm.req_id)) err(file, `duplicate req_id ${fm.req_id}`);
  requirements.set(fm.req_id, file);
  if (!STATUS.has(fm.status)) err(file, 'requirement needs status');
  if (!asList(fm.modules).length) err(file, 'requirement needs at least one module');
  asList(fm.modules).forEach((m) => referencedModules.add(m));
  if (!['planned', 'automated', 'manual'].includes(fm.verification)) err(file, 'verification must be planned|automated|manual');
  const tests = asList(fm.tests);
  if (fm.verification !== 'planned' && !tests.length) err(file, 'non-planned verification needs tests');
  if (fm.status === 'stable') {
    for (const t of tests) if (!fs.existsSync(path.join(ROOT, t))) err(file, `stable requirement lists missing test: ${t}`);
  }
  if (!/\]\(\/standards\//.test(body) && !/\]\(\/decisions\//.test(body)) warn(file, 'links to no standard or decision');
}

const SERVICE_ID = /^SVC-[A-Z0-9]+-\d{3}$/;
const SERVICE_SECTIONS = ['What it is', 'Who can use it', 'Steps', 'Documents needed', 'Fees and timing', 'Help and escalation', 'Not covered'];
const serviceIds = new Set();

function checkService(file, fm, body) {
  const stem = path.basename(file, '.md').toUpperCase();
  if (!SERVICE_ID.test(String(fm.service_id ?? ''))) return err(file, 'service_id must match SVC-<AREA>-<NNN>');
  if (fm.service_id !== stem) err(file, `service_id ${fm.service_id} must equal filename (${stem})`);
  if (serviceIds.has(fm.service_id)) err(file, `duplicate service_id ${fm.service_id}`);
  serviceIds.add(fm.service_id);
  if (!fm.owner || typeof fm.owner !== 'string') err(file, 'service needs owner');
  if (!asList(fm.audience).length) err(file, 'service needs audience');
  if (!asList(fm.channels).length) err(file, 'service needs channels');
  if (!STATUS.has(fm.status)) err(file, 'service needs status');
  const headings = [...body.matchAll(/^# (.+)$/gm)].map((m) => m[1].trim());
  for (const h of SERVICE_SECTIONS) if (!headings.includes(h)) err(file, `service missing section "# ${h}"`);
}

function checkConcept(file, bundle) {
  const doc = parseDoc(file);
  if (doc.error) return err(file, `unparseable frontmatter: ${doc.error}`);
  if (!doc.fm) return err(file, 'missing frontmatter');
  if (typeof doc.fm.type !== 'string' || !doc.fm.type.trim()) return err(file, 'missing non-empty type');
  checkTrust(file, doc.fm);
  checkLinks(file, doc.body, bundle);
  if (doc.text.split('\n').length > CONCEPT_WARN_LINES) warn(file, `over ${CONCEPT_WARN_LINES} lines; split it`);
  if (doc.fm.type === 'Requirement') checkRequirement(file, doc.fm, doc.body);
  if (doc.fm.type === 'Service') checkService(file, doc.fm, doc.body);
  if (doc.fm.type === 'Module') moduleNames.add(path.basename(file, '.md'));
}

for (const bundle of findBundles()) {
  const { dirs, files } = walk(bundle);
  if (!fs.existsSync(path.join(bundle, 'index.md'))) err(bundle, 'bundle root needs index.md');
  if (!fs.existsSync(path.join(bundle, 'log.md'))) err(bundle, 'bundle root needs log.md');
  for (const f of files) {
    const name = path.basename(f);
    if (name === 'log.md') checkLog(f);
    else if (name !== 'index.md') checkConcept(f, bundle);
  }
  for (const d of dirs) {
    const idx = path.join(d, 'index.md');
    const has = walk(d).files.some((f) => !RESERVED.has(path.basename(f)));
    if (has && fs.existsSync(idx)) checkIndex(idx, d, bundle);
    else if (has) err(d, 'directory needs index.md');
  }
}

// Cross-file rules: requirement modules must exist; modules should be used.
for (const [id, file] of requirements) {
  const fm = parseDoc(file).fm;
  for (const m of asList(fm.modules)) if (!moduleNames.has(m)) err(file, `${id} references unknown module "${m}"`);
}
for (const m of moduleNames) if (!referencedModules.has(m)) warnings.push(`module "${m}" is referenced by no requirement`);

// Router file rules.
const agents = path.join(ROOT, 'AGENTS.md');
if (!fs.existsSync(agents)) err(agents, 'AGENTS.md is required');
else {
  const text = fs.readFileSync(agents, 'utf8');
  if (text.split('\n').length > AGENTS_MAX_LINES) err(agents, `over ${AGENTS_MAX_LINES} lines; it is a router, not a manual`);
  for (const t of extractLinks(text)) {
    if (!isExternal(t) && !fs.existsSync(path.resolve(ROOT, t.split('#')[0]))) err(agents, `broken link: ${t}`);
  }
}

for (const w of warnings) console.warn(`warn  ${w}`);
for (const e of errors) console.error(`error ${e}`);
console.log(`\n${requirements.size} requirements, ${moduleNames.size} modules, ${serviceIds.size} services, ${errors.length} errors, ${warnings.length} warnings`);
process.exit(errors.length ? 1 : 0);
