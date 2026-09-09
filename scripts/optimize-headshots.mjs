import sharp from "sharp";
import { readdir, stat } from "node:fs/promises";
import path from "node:path";

const dir = "public/headshots";
const files = (await readdir(dir)).filter((f) => /\.jpe?g$/i.test(f)).sort();
for (const f of files) {
  const src = path.join(dir, f);
  const out = path.join(dir, f.replace(/\.jpe?g$/i, ".webp"));
  await sharp(src)
    .rotate() // honour EXIF orientation
    .resize({ width: 1200, height: 1600, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 82, effort: 6 })
    .toFile(out);
  const [a, b, meta] = await Promise.all([stat(src), stat(out), sharp(out).metadata()]);
  console.log(`${f} ${(a.size / 1e6).toFixed(2)}MB -> ${path.basename(out)} ${(b.size / 1e3).toFixed(0)}KB ${meta.width}x${meta.height}`);
}
