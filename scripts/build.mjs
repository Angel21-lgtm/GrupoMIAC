/**
 * Genera el bundle web público. Solo copia recursos que el navegador necesita.
 * El código de funciones y la documentación nunca se publican dentro de dist.
 */
import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, join, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const outputDir = resolve(projectRoot, 'dist');
if (!outputDir.startsWith(projectRoot + sep) || outputDir !== resolve(projectRoot, 'dist')) {
  throw new Error('Refusing to clean an unexpected build output path.');
}
rmSync(outputDir, { recursive: true, force: true });
mkdirSync(outputDir, { recursive: true });
for (const entry of ['index.html', 'style', 'script', 'img', 'robots.txt', 'sitemap.xml', 'googledfc90ebd9d80c5e7.html']) {
  const source = join(projectRoot, entry);
  if (existsSync(source)) cpSync(source, join(outputDir, entry), { recursive: true });
}
console.log('Grupo MIAC public bundle generated in dist/.');
