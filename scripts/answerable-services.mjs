// Lists which Service concepts an AI assistant may answer from.
// Rule (ADR 0007, OKF v0.2 sections 5.3 to 5.5): human-reviewed, status stable, not past stale_after.
// Usage: node scripts/answerable-services.mjs [--json]
import path from 'node:path';
import { findBundles, walk, parseDoc, rel } from './lib/okf.mjs';

const asList = (v) => (v == null ? [] : Array.isArray(v) ? v : [v]);

export function trustTier(fm) {
  const v = asList(fm.verified);
  if (!v.length) return 'unverified';
  return v.some((x) => String(x?.by ?? '').startsWith('human:')) ? 'human-reviewed' : 'machine-confirmed';
}

export function assess(fm, now = Date.now()) {
  const tier = trustTier(fm);
  const status = fm.status ?? 'stable';
  const stale = fm.stale_after != null && now >= Date.parse(fm.stale_after);
  const reasons = [];
  if (tier !== 'human-reviewed') reasons.push(`trust: ${tier}`);
  if (status !== 'stable') reasons.push(`status: ${status}`);
  if (stale) reasons.push('stale');
  return { tier, status, stale, answerable: reasons.length === 0, reasons };
}

const rows = [];
for (const bundle of findBundles()) {
  for (const file of walk(bundle).files) {
    if (['index.md', 'log.md'].includes(path.basename(file))) continue;
    const { fm } = parseDoc(file);
    if (fm?.type !== 'Service') continue;
    rows.push({ id: fm.service_id, file: rel(file), ...assess(fm) });
  }
}
rows.sort((a, b) => String(a.id).localeCompare(String(b.id)));

if (process.argv.includes('--json')) {
  console.log(JSON.stringify(rows, null, 2));
} else {
  for (const r of rows) console.log(`${r.answerable ? 'ANSWERABLE ' : 'not answer. '} ${r.id}  ${r.reasons.join(', ') || 'ok'}`);
  console.log(`\n${rows.filter((r) => r.answerable).length} of ${rows.length} services answerable`);
}
