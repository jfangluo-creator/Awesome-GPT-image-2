/**
 * generate-thumbs.mjs — 构建时生成缩略图、展示图和 blur 占位
 *
 * 输入: site/src/data/cases.json（由 parse-cases.mjs 生成）
 * 输出:
 *   - site/public/thumbs/{name}.webp   (400px 网格缩略图)
 *   - site/public/display/{name}.webp  (1200px 弹窗展示图)
 *   - cases.json 中每个 case 增加 thumb/blur/display/width/height 字段
 */
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_ROOT = path.resolve(__dirname, '..');
const DATA_FILE = path.join(SITE_ROOT, 'src/data/cases.json');
const THUMB_DIR = path.join(SITE_ROOT, 'public/thumbs');
const DISPLAY_DIR = path.join(SITE_ROOT, 'public/display');

// 从 cases.json 的 image 路径解析到实际文件位置
// image 格式: "images/xxx.jpg" → 实际在 site/public/images/xxx.jpg
function resolveImagePath(imagePath) {
  return path.join(SITE_ROOT, 'public', imagePath);
}

async function main() {
  console.log('🖼️  Generating thumbnails...\n');

  // 读取 cases.json
  if (!fs.existsSync(DATA_FILE)) {
    console.error('❌ cases.json not found. Run parse-cases.mjs first.');
    process.exit(1);
  }
  const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
  const cases = data.cases;

  // 创建输出目录
  fs.mkdirSync(THUMB_DIR, { recursive: true });
  fs.mkdirSync(DISPLAY_DIR, { recursive: true });

  let generated = 0;
  let skipped = 0;
  let failed = 0;

  for (const c of cases) {
    const srcPath = resolveImagePath(c.image);
    const stem = path.basename(c.image, path.extname(c.image));
    const thumbPath = path.join(THUMB_DIR, `${stem}.webp`);
    const displayPath = path.join(DISPLAY_DIR, `${stem}.webp`);

    // 检查源文件是否存在
    if (!fs.existsSync(srcPath)) {
      console.warn(`  ⚠️  #${c.id} source not found: ${srcPath}`);
      failed++;
      continue;
    }

    // 增量构建：缩略图已存在且比源文件新则跳过
    const srcMtime = fs.statSync(srcPath).mtimeMs;
    const thumbExists = fs.existsSync(thumbPath) && fs.statSync(thumbPath).mtimeMs > srcMtime;
    const displayExists = fs.existsSync(displayPath) && fs.statSync(displayPath).mtimeMs > srcMtime;

    try {
      // 获取原图尺寸
      const meta = await sharp(srcPath).metadata();
      c.width = meta.width;
      c.height = meta.height;

      if (!thumbExists) {
        // 生成网格缩略图 (400px wide)
        await sharp(srcPath)
          .resize(400, 400, { fit: 'inside', withoutEnlargement: true })
          .webp({ quality: 60 })
          .toFile(thumbPath);
      }

      if (!displayExists) {
        // 生成弹窗展示图 (1200px wide)
        await sharp(srcPath)
          .resize(1200, 1200, { fit: 'inside', withoutEnlargement: true })
          .webp({ quality: 75 })
          .toFile(displayPath);
      }

      // 生成 blur 占位 (20px, base64 内联) — 这个很小，每次都重新生成
      const blurBuf = await sharp(srcPath)
        .resize(20, 20, { fit: 'inside' })
        .webp({ quality: 20 })
        .toBuffer();
      c.blur = `data:image/webp;base64,${blurBuf.toString('base64')}`;

      // 更新路径字段
      c.thumb = `thumbs/${stem}.webp`;
      c.display = `display/${stem}.webp`;

      if (thumbExists && displayExists) {
        skipped++;
      } else {
        generated++;
        if (generated % 50 === 0) {
          console.log(`  ...${generated} generated`);
        }
      }
    } catch (err) {
      console.warn(`  ❌ #${c.id} "${c.title}": ${err.message}`);
      // 降级：保留原图路径
      c.thumb = c.image;
      c.display = c.image;
      c.blur = '';
      failed++;
    }
  }

  // 写回 cases.json
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');

  // 统计
  const thumbSize = fs.readdirSync(THUMB_DIR).length;
  const displaySize = fs.readdirSync(DISPLAY_DIR).length;
  const thumbBytes = fs.readdirSync(THUMB_DIR).reduce((sum, f) => sum + fs.statSync(path.join(THUMB_DIR, f)).size, 0);
  const displayBytes = fs.readdirSync(DISPLAY_DIR).reduce((sum, f) => sum + fs.statSync(path.join(DISPLAY_DIR, f)).size, 0);

  console.log(`\n✅ Done!`);
  console.log(`   Generated: ${generated} new`);
  console.log(`   Skipped:   ${skipped} (up to date)`);
  console.log(`   Failed:    ${failed}`);
  console.log(`   Thumbs:    ${thumbSize} files, ${(thumbBytes / 1024 / 1024).toFixed(1)} MB (avg ${(thumbBytes / thumbSize / 1024).toFixed(0)} KB)`);
  console.log(`   Display:   ${displaySize} files, ${(displayBytes / 1024 / 1024).toFixed(1)} MB (avg ${(displayBytes / displaySize / 1024).toFixed(0)} KB)`);
}

main().catch(e => { console.error('Fatal:', e); process.exit(1); });
