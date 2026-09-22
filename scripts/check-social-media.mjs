import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const root = new URL('../', import.meta.url);
const config = JSON.parse(readFileSync(new URL('social-media.config.json', root), 'utf8'));
const bundled = config.prefixes.filter((prefix) =>
  existsSync(fileURLToPath(new URL(`public/${prefix}`, root)))
);
if (bundled.length) {
  console.error(`Social media must be published to the separate media origin, not bundled: ${bundled.join(', ')}`);
  process.exit(1);
}
console.log('Social-media separation check passed.');
