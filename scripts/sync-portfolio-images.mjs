import { mkdir, readFile, writeFile, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const manifestPath = path.join(rootDir, 'lib', 'portfolioImageManifest.json');
const publicPortfolioDir = path.join(rootDir, 'public', 'portfolio');
const force = process.argv.includes('--force');

async function fileExists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function downloadImage(source, destination) {
  const response = await fetch(source, {
    headers: {
      'user-agent': 'saytup-portfolio-sync/1.0',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to download ${source}: ${response.status} ${response.statusText}`);
  }

  const contentType = response.headers.get('content-type') ?? '';

  if (!contentType.startsWith('image/')) {
    throw new Error(`Unexpected content type for ${source}: ${contentType || 'unknown'}`);
  }

  const arrayBuffer = await response.arrayBuffer();
  await writeFile(destination, Buffer.from(arrayBuffer));
}

async function main() {
  const rawManifest = await readFile(manifestPath, 'utf8');
  const manifest = JSON.parse(rawManifest);

  await mkdir(publicPortfolioDir, { recursive: true });

  let downloaded = 0;
  let skipped = 0;

  for (const [slug, entry] of Object.entries(manifest)) {
    const slugDir = path.join(publicPortfolioDir, slug);
    await mkdir(slugDir, { recursive: true });

    const files = [entry.cover, ...entry.gallery];

    for (const asset of files) {
      const destination = path.join(slugDir, asset.file);
      const exists = await fileExists(destination);

      if (exists && !force) {
        skipped += 1;
        console.log(`skip  ${path.relative(rootDir, destination)}`);
        continue;
      }

      await downloadImage(asset.source, destination);
      downloaded += 1;
      console.log(`saved ${path.relative(rootDir, destination)}`);
    }
  }

  console.log(`done  downloaded=${downloaded} skipped=${skipped}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
