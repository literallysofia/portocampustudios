/**
 * Prints the salt + hash for the WIP gate in src/config.ts.
 * Usage: node scripts/gate-hash.mjs "the password"
 * Uses the same PBKDF2-SHA256 settings as the browser check in SiteGate.astro.
 */
import { pbkdf2Sync, randomBytes } from 'node:crypto';

const password = process.argv[2];
if (!password) {
  console.error('Usage: node scripts/gate-hash.mjs "the password"');
  process.exit(1);
}

const iterations = 210000;
const salt = randomBytes(16).toString('hex');
const hash = pbkdf2Sync(password, Buffer.from(salt, 'hex'), iterations, 32, 'sha256').toString('hex');
console.log(`salt: '${salt}',\nhash: '${hash}',\niterations: ${iterations},`);
