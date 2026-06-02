/**
 * parse-cases.mjs
 * 解析 Markdown 案例文件 → src/data/cases.json
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');
const OUT_DIR = path.resolve(__dirname, '../src/data');

// Emoji codepoint → category mapping
const emojiMap = {
  '1f4f7': { slug: 'photo', name: '摄影与写实', nameEn: 'Photography & Realism' },
  '1f4ca': { slug: 'chart', name: '图表与信息图', nameEn: 'Charts & Infographics' },
  '1f3b4': { slug: 'poster', name: '海报与排版', nameEn: 'Posters & Typography' },
  '1f3a8': { slug: 'illustration', name: '插画与艺术', nameEn: 'Illustration & Art' },
  '1f9cd': { slug: 'character', name: '角色与人物', nameEn: 'Characters & People' },
  '1f9f8': { slug: '3d', name: '3D 与微缩模型', nameEn: '3D & Miniatures' },
  '1f3db': { slug: 'architecture', name: '建筑与空间', nameEn: 'Architecture & Spaces' },
  '1f3ac': { slug: 'comic', name: '漫画与分镜', nameEn: 'Comics & Storyboards' },
  '1f3f7': { slug: 'brand', name: '品牌与包装', nameEn: 'Brand & Packaging' },
  '1f527': { slug: 'edit', name: '图片编辑', nameEn: 'Image Editing' },
  '1f9ea': { slug: 'fun', name: '创意实验', nameEn: 'Creative Experiments' },
  '1f5a5': { slug: 'ui', name: 'UI 与数字界面', nameEn: 'UI & Digital Interfaces' },
};

// Emoji character for each category
const emojiChars = {
  photo: '📷', chart: '📊', poster: '🎴', illustration: '🎨',
  character: '🧍', '3d': '🧸', architecture: '🏛️', comic: '🎬',
  brand: '🏷️', edit: '🔧', fun: '🧪', ui: '🖥️',
};

const MD_FILES = [
  { file: 'docs/cases-001-100.md', headingLevel: '##' },
  { file: 'docs/cases-101-200.md', headingLevel: '###' },
  { file: 'docs/cases-201-300.md', headingLevel: '###' },
];

function extractCategory(headerLine) {
  const chars = [...headerLine];
  for (const ch of chars) {
    const cp = ch.codePointAt(0).toString(16);
    if (emojiMap[cp]) return emojiMap[cp];
  }
  return null;
}

function splitPrompt(raw) {
  if (!raw) return { prompt: '', promptZh: '', promptEn: '' };
  // Try to split [中文] and [English] sections
  const zhMatch = raw.match(/\[中文\]\s*\n([\s\S]*?)(?=\[English\]|$)/);
  const enMatch = raw.match(/\[English\]\s*\n([\s\S]*?)$/);

  if (zhMatch || enMatch) {
    return {
      prompt: raw.trim(),
      promptZh: zhMatch ? zhMatch[1].trim() : '',
      promptEn: enMatch ? enMatch[1].trim() : '',
    };
  }
  return { prompt: raw.trim(), promptZh: '', promptEn: '' };
}

function parseAllCases() {
  const cases = [];

  for (const { file } of MD_FILES) {
    const filePath = path.join(ROOT, file);
    if (!fs.existsSync(filePath)) {
      console.warn(`  ⚠ File not found: ${file}`);
      continue;
    }
    const md = fs.readFileSync(filePath, 'utf-8');

    // Split by section headers (## or ### followed by emoji + 例 N)
    const sectionRegex = /^(#{2,3}) .+ 例 \d+[：:].+$/gm;
    const indices = [];
    let m;
    while ((m = sectionRegex.exec(md)) !== null) {
      indices.push(m.index);
    }

    for (let i = 0; i < indices.length; i++) {
      const start = indices[i];
      const end = i + 1 < indices.length ? indices[i + 1] : md.length;
      const block = md.substring(start, end);

      // First line = header
      const firstNewline = block.indexOf('\n');
      const headerLine = block.substring(0, firstNewline).trim();

      const cat = extractCategory(headerLine);
      const numMatch = headerLine.match(/例 (\d+)/);
      const titleMatch = headerLine.match(/例 \d+[：:]\s*(.+)/);

      if (!numMatch || !cat) continue;

      const num = parseInt(numMatch[1]);
      let title = titleMatch ? titleMatch[1].trim() : '';

      // Extract English title from parentheses if present
      let titleEn = '';
      const enTitleMatch = title.match(/[（(]([^）)]+)[）)]\s*$/);
      if (enTitleMatch) {
        titleEn = enTitleMatch[1].trim();
        title = title.replace(/[（(][^）)]+[）)]\s*$/, '').trim();
      }

      // Extract image - match up to .jpg/.webp/.png closing paren
      // Filenames may contain parentheses, so match by file extension
      const imgMatch = block.match(/!\[[^\]]*\]\((.+?\.(?:jpg|jpeg|webp|png))\)/i);
      const imageRaw = imgMatch ? imgMatch[1].replace('../', '') : '';

      // Fully decode URL-encoded image path (handles %20, %22, %28, etc.)
      let image = decodeURIComponent(imageRaw);

      // Fallback: verify image file exists, try fuzzy match if not
      const strippedImage = image.replace('images/', '');
      if (imageRaw && !fs.existsSync(path.join(ROOT, 'images', strippedImage))) {
        // Normalize quotes for matching: " " → "
        const normalize = s => s.replace(/[“”]/g, '"').replace(/[‘’]/g, "'");
        const normalizedImage = normalize(strippedImage);
        const imgDir = path.join(ROOT, 'images');
        const allFiles = fs.readdirSync(imgDir);

        // Try exact match with normalized filename
        const normMatch = allFiles.find(f => normalize(f) === normalizedImage);
        if (normMatch) {
          image = 'images/' + normMatch;
        } else {
          // Try fuzzy by title substring
          const titleNorm = normalize(title).replace(/[（）()\-]/g, '').substring(0, 6);
          const fuzzyMatch = allFiles.find(f => normalize(f).includes(titleNorm));
          if (fuzzyMatch) {
            image = 'images/' + fuzzyMatch;
          }
        }
      }

      // Extract prompt
      const promptMatch = block.match(/```text\r?\n([\s\S]*?)```/);
      const rawPrompt = promptMatch ? promptMatch[1] : '';
      const { prompt, promptZh, promptEn } = splitPrompt(rawPrompt);

      // Extract source
      const srcMatch = block.match(/\*\*来源[：:]\*\*\s*\[@?([^\]]+)\]\(([^)]+)\)\s*\|\s*(\S+)/);

      cases.push({
        id: num,
        title,
        titleEn,
        category: cat.slug,
        categoryName: cat.name,
        categoryNameEn: cat.nameEn,
        emoji: emojiChars[cat.slug],
        image: image,
        prompt,
        promptZh,
        promptEn,
        sourceLabel: srcMatch ? srcMatch[1] : '',
        sourceUrl: srcMatch ? srcMatch[2] : '',
        date: srcMatch ? srcMatch[3] : '',
      });
    }
  }

  return cases;
}

function main() {
  console.log('📦 Parsing Markdown cases...\n');

  const cases = parseAllCases();

  // Build category stats
  const catCounts = {};
  for (const c of cases) {
    catCounts[c.category] = (catCounts[c.category] || 0) + 1;
  }

  const categories = Object.entries(emojiMap).map(([, cat]) => ({
    slug: cat.slug,
    name: cat.name,
    nameEn: cat.nameEn,
    emoji: emojiChars[cat.slug],
    count: catCounts[cat.slug] || 0,
  })).filter(c => c.count > 0);

  const result = {
    totalCases: cases.length,
    categories,
    cases: cases.sort((a, b) => a.id - b.id),
  };

  // Ensure output directory exists
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  const outPath = path.join(OUT_DIR, 'cases.json');
  fs.writeFileSync(outPath, JSON.stringify(result, null, 2), 'utf-8');

  console.log(`  ✅ Parsed ${cases.length} cases`);
  console.log(`  ✅ ${categories.length} categories`);
  console.log(`  ✅ Written to ${path.relative(ROOT, outPath)}\n`);

  // Print category summary
  for (const cat of categories) {
    console.log(`     ${cat.emoji} ${cat.name}: ${cat.count}`);
  }
}

main();
