import fs from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const nextRequire = createRequire(require.resolve('next/package.json'));
const sharp = nextRequire('sharp');

const root = process.cwd();
const progressPath = path.join(root, 'references/image-generation/chatgpt-progress.json');
const manifestPath = path.join(root, 'references/image-generation/chatgpt-manifest.json');
let records;
try { records = JSON.parse(await fs.readFile(progressPath, 'utf8')); }
catch (error) {
  if (error.code !== 'ENOENT') throw error;
  records = JSON.parse(await fs.readFile(manifestPath, 'utf8'));
}
const imageMap = JSON.parse(await fs.readFile('app/menu-images.json', 'utf8'));
await fs.mkdir('public/images/menu', { recursive: true });
let imported = 0;
for (const record of records) {
  if (record.status !== 'completed' || !record.source) continue;
  const destination = `public/images/menu/${record.id}.webp`;
  const available = await fs.stat(destination).then(() => true, () => false);
  if (!available) {
    await sharp(record.source).resize({ width: 960, withoutEnlargement: true }).webp({ quality: 86 }).toFile(destination);
    imported++;
  }
  imageMap[record.id] = `/images/menu/${record.id}.webp`;
}
await fs.writeFile('app/menu-images.json', JSON.stringify(imageMap, null, 2) + '\n');
console.log(JSON.stringify({ imported, total: Object.keys(imageMap).length }));
