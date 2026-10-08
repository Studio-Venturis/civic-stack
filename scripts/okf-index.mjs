// Regenerates index.md in every directory of every bundle.
// Usage: node scripts/okf-index.mjs [--check]
import fs from 'node:fs';
import path from 'node:path';
import { findBundles, walk, renderIndex, rel } from './lib/okf.mjs';

const check = process.argv.includes('--check');
let stale = 0;

for (const bundle of findBundles()) {
  for (const dir of walk(bundle).dirs) {
    const has = walk(dir).files.some((f) => path.basename(f) !== 'index.md' && path.basename(f) !== 'log.md');
    if (!has) continue;
    const file = path.join(dir, 'index.md');
    const next = renderIndex(dir, bundle);
    const cur = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : null;
    if (cur === next) continue;
    stale++;
    if (check) console.log(`stale index: ${rel(file)}`);
    else fs.writeFileSync(file, next);
  }
}

if (check && stale) process.exit(1);
console.log(check ? 'indexes up to date' : `indexes written (${stale} changed)`);
