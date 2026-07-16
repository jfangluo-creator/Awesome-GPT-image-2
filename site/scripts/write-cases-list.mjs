/**
 * 写出画廊用轻量列表（无 prompt），供前端 fetch，避免塞进 HTML props 导致水合失败
 */
import fs from 'fs';
import path from 'path';

export function toSlimCase(c) {
  const row = {
    id: c.id,
    title: c.title,
    category: c.category,
    image: c.image,
    tags: (c.tags || []).map((t) => (typeof t === 'string' ? t : t.slug)),
  };
  if (c.titleEn) row.titleEn = c.titleEn;
  if (c.thumb) row.thumb = c.thumb;
  if (c.display) row.display = c.display;
  if (c.blur) row.blur = c.blur;
  if (c.width) row.width = c.width;
  if (c.height) row.height = c.height;
  if (c.sourceLabel) row.sourceLabel = c.sourceLabel;
  if (c.sourceUrl) row.sourceUrl = c.sourceUrl;
  if (c.date) row.date = c.date;
  return row;
}

export function writeCasesList(siteRoot, cases) {
  const outDir = path.join(siteRoot, 'public/data');
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, 'cases-list.json');
  const payload = { cases: cases.map(toSlimCase) };
  fs.writeFileSync(outPath, JSON.stringify(payload), 'utf-8');
  const mb = (Buffer.byteLength(JSON.stringify(payload)) / 1e6).toFixed(2);
  console.log(`  ✅ cases-list.json → ${path.relative(siteRoot, outPath)} (${payload.cases.length} cases, ${mb} MB)`);
  return outPath;
}
