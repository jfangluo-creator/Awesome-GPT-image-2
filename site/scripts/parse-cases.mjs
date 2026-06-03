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

// Tag rules: title-only matching, designed for maximum coverage
const TAG_RULES = [
  // --- 形式 (Format) ---
  { slug: 'grid', name: '网格/拼图', nameEn: 'Grid', group: 'format',
    patterns: [/网格|宫格|grid|九宫格|四格|三联|四宫|拼图|蒙太奇|montage/i] },
  { slug: 'reference', name: '参考图/设定', nameEn: 'Reference', group: 'format',
    patterns: [/参考|设定|资料|spec|reference|sheet|卡片|checklist|提案|prop|档案|板|board/i] },
  { slug: 'storyboard', name: '分镜/多格', nameEn: 'Storyboard', group: 'format',
    patterns: [/分镜|storyboard|漫画页|panel|格漫画|多格|项目表/i] },
  { slug: 'exploded', name: '拆解/爆炸图', nameEn: 'Exploded', group: 'format',
    patterns: [/拆解|爆炸图|exploded|解剖|透视|剖面/i] },
  { slug: 'infographic', name: '信息图/教程', nameEn: 'Infographic', group: 'format',
    patterns: [/信息图|infographic|指南|guide|教程|tutorial|流程|recipe|食谱|步骤|绘本|课件/i] },
  { slug: 'comparison', name: '对比/转换', nameEn: 'Comparison', group: 'format',
    patterns: [/对比|比较|before|after|vs|转换|改造|变迁|演变|进化|重绘|restore|修复/i] },
  { slug: 'map', name: '地图', nameEn: 'Map', group: 'format',
    patterns: [/地图|map|鸟瞰|全景/i] },

  // --- 风格 (Style) ---
  { slug: 'cyberpunk', name: '赛博朋克', nameEn: 'Cyberpunk', group: 'style',
    patterns: [/赛博朋克|cyberpunk/i] },
  { slug: 'anime', name: '动漫风', nameEn: 'Anime', group: 'style',
    patterns: [/动漫|anime/i] },
  { slug: 'retro', name: '复古', nameEn: 'Retro', group: 'style',
    patterns: [/复古|retro|vintage|怀旧|90年代|80年代|70年代/i] },
  { slug: 'minimalist', name: '极简', nameEn: 'Minimalist', group: 'style',
    patterns: [/极简|minimalist|minimalism/i] },
  { slug: 'chinese-trad', name: '国风', nameEn: 'Chinese', group: 'style',
    patterns: [/国风|国潮|中国风|新中式|古风|红楼梦|京剧|昆曲|唐风|琳派|古典诗词/i] },
  { slug: 'korean', name: '韩系', nameEn: 'Korean', group: 'style',
    patterns: [/韩系|韩风|韩式|korean\s*style/i] },
  { slug: 'gothic', name: '哥特', nameEn: 'Gothic', group: 'style',
    patterns: [/哥特|gothic/i] },
  { slug: '3d', name: '3D', nameEn: '3D', group: 'style',
    patterns: [/3D|三维/i] },
  { slug: 'watercolor', name: '水彩', nameEn: 'Watercolor', group: 'style',
    patterns: [/水彩|watercolor/i] },
  { slug: 'ink', name: '水墨/素描', nameEn: 'Ink/Sketch', group: 'style',
    patterns: [/水墨|素描|sketch|粉笔/i] },
  { slug: 'paper-craft', name: '纸艺', nameEn: 'Paper Craft', group: 'style',
    patterns: [/剪纸|纸艺|paper\s*cut|paper\s*craft|纸雕|折纸/i] },
  { slug: 'collage', name: '拼贴', nameEn: 'Collage', group: 'style',
    patterns: [/拼贴|collage/i] },
  { slug: 'doodle', name: '涂鸦/手绘', nameEn: 'Doodle', group: 'style',
    patterns: [/涂鸦|doodle|graffiti|手绘|hand[\s-]?drawn|手写/i] },
  { slug: 'cinematic', name: '电影感', nameEn: 'Cinematic', group: 'style',
    patterns: [/电影感|cinematic|电影级/i] },
  { slug: 'dreamy', name: '梦幻', nameEn: 'Dreamy', group: 'style',
    patterns: [/梦幻|dreamy|梦境|仙境|童话/i] },
  { slug: 'luxury', name: '奢华', nameEn: 'Luxury', group: 'style',
    patterns: [/奢华|luxury|luxurious|高端|高级感/i] },
  { slug: 'fashion', name: '时尚', nameEn: 'Fashion', group: 'style',
    patterns: [/时尚|fashion|杂志|magazine|editorial|vogue/i] },
  { slug: 'cute', name: '可爱', nameEn: 'Cute', group: 'style',
    patterns: [/Q\s*版|chibi|cute|kawaii|可爱|卡哇伊|毛绒|吉祥物/i] },
  { slug: 'neon', name: '霓虹', nameEn: 'Neon', group: 'style',
    patterns: [/霓虹|neon/i] },

  // --- 内容 (Content) ---
  { slug: 'portrait', name: '人像', nameEn: 'Portrait', group: 'content',
    patterns: [/肖像|人像|portrait|头像|自拍|selfie|少女|美女|帅哥/i] },
  { slug: 'street', name: '街头/城市', nameEn: 'Street', group: 'content',
    patterns: [/街拍|街头|城市|urban|street|弄堂|胡同|石库门|夜市|道路/i] },
  { slug: 'product', name: '广告/商业', nameEn: 'Commercial', group: 'content',
    patterns: [/产品|product|商品|包装|packaging|广告|campaign|KV|营销|marketing|商业|commercial|海报|poster/i] },
  { slug: 'food', name: '美食', nameEn: 'Food', group: 'content',
    patterns: [/美食|burger|cake|甜点|料理|饮品|饮料|咖啡|茶|酒|寿司|披萨|汉堡|冰淇淋|巧克力|拿铁|松饼|抹茶/i] },
  { slug: 'toy', name: '手办/玩具', nameEn: 'Toy/Figure', group: 'content',
    patterns: [/玩具|toy|手办|collectible|盲盒|乐高|lego|高达|扭蛋/i] },
  { slug: 'costume', name: '服装/穿搭', nameEn: 'Costume', group: 'content',
    patterns: [/服装|穿搭|look|outfit|服饰|礼服|裙子|潮牌|球鞋|运动鞋|汉服|旗袍|和服|襦裙|cosplay/i] },
  { slug: 'interior', name: '室内/空间', nameEn: 'Interior', group: 'content',
    patterns: [/室内|interior|装修|decoration|家居|客厅|卧室|厨房|浴室|餐厅/i] },
  { slug: 'character', name: '角色', nameEn: 'Character', group: 'content',
    patterns: [/角色|character|人物|figure|勇士|骑士|法师|忍者|武士|警官|侦探|公主|女王|海盗|精灵|机器人/i] },
  { slug: 'landscape', name: '风景', nameEn: 'Landscape', group: 'content',
    patterns: [/风景|landscape|自然风光|山水|湖|海|山|日出|日落|日出|sunrise|sunset/i] },
  { slug: 'sports', name: '体育', nameEn: 'Sports', group: 'content',
    patterns: [/体育|运动|sport|足球|篮球|网球|棒球|马拉松|球迷|世界杯|FIFA|湖人|网球|球场|stadium/i] },
  { slug: 'game', name: '游戏', nameEn: 'Game', group: 'content',
    patterns: [/游戏|game|gaming|RPG|掌机|主机|minecraft/i] },
];

const TAG_GROUPS = [
  { slug: 'format', name: '形式', nameEn: 'Format' },
  { slug: 'style', name: '风格', nameEn: 'Style' },
  { slug: 'content', name: '内容', nameEn: 'Content' },
];

function extractTags(title, titleEn) {
  const titleText = `${title} ${titleEn}`;

  const matched = [];
  for (const rule of TAG_RULES) {
    for (const pat of rule.patterns) {
      if (pat.test(titleText)) {
        matched.push({ slug: rule.slug, name: rule.name, nameEn: rule.nameEn, group: rule.group });
        break;
      }
    }
    for (const pat of rule.patterns) pat.lastIndex = 0;
  }

  return matched;
}

const MD_FILES = [
  { file: 'docs/cases-001-100.md', headingLevel: '##' },
  { file: 'docs/cases-101-200.md', headingLevel: '###' },
  { file: 'docs/cases-201-300.md', headingLevel: '###' },
  { file: 'docs/cases-301-400.md', headingLevel: '###' },
  { file: 'docs/cases-401-500.md', headingLevel: '###' },
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

      const firstNewline = block.indexOf('\n');
      const headerLine = block.substring(0, firstNewline).trim();

      const cat = extractCategory(headerLine);
      const numMatch = headerLine.match(/例 (\d+)/);
      const titleMatch = headerLine.match(/例 \d+[：:]\s*(.+)/);

      if (!numMatch || !cat) continue;

      const num = parseInt(numMatch[1]);
      let title = titleMatch ? titleMatch[1].trim() : '';

      let titleEn = '';
      const enTitleMatch = title.match(/[（(]([^）)]+)[）)]\s*$/);
      if (enTitleMatch) {
        titleEn = enTitleMatch[1].trim();
        title = title.replace(/[（(][^）)]+[）)]\s*$/, '').trim();
      }

      const imgMatch = block.match(/!\[[^\]]*\]\((.+?\.(?:jpg|jpeg|webp|png))\)/i);
      const imageRaw = imgMatch ? imgMatch[1].replace('../', '') : '';

      let image = decodeURIComponent(imageRaw);

      const strippedImage = image.replace('images/', '');
      if (imageRaw && !fs.existsSync(path.join(ROOT, 'images', strippedImage))) {
        const normalize = s => s.replace(/[""]/g, '"').replace(/['']/g, "'");
        const normalizedImage = normalize(strippedImage);
        const imgDir = path.join(ROOT, 'images');
        const allFiles = fs.readdirSync(imgDir);

        const normMatch = allFiles.find(f => normalize(f) === normalizedImage);
        if (normMatch) {
          image = 'images/' + normMatch;
        } else {
          const titleNorm = normalize(title).replace(/[（）()\-]/g, '').substring(0, 6);
          const fuzzyMatch = allFiles.find(f => normalize(f).includes(titleNorm));
          if (fuzzyMatch) {
            image = 'images/' + fuzzyMatch;
          }
        }
      }

      const promptMatch = block.match(/```text\r?\n([\s\S]*?)```/);
      const rawPrompt = promptMatch ? promptMatch[1] : '';
      const { prompt, promptZh, promptEn } = splitPrompt(rawPrompt);

      const srcMatch = block.match(/\*\*来源[：:]\*\*\s*\[@?([^\]]+)\]\(([^)]+)\)\s*\|\s*(\S+)/);

      const tags = extractTags(title, titleEn);

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
        tags,
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

  const tagCounts = {};
  for (const c of cases) {
    for (const t of c.tags) {
      tagCounts[t.slug] = (tagCounts[t.slug] || 0) + 1;
    }
  }

  const tagGroups = TAG_GROUPS.map(group => ({
    slug: group.slug,
    name: group.name,
    nameEn: group.nameEn,
    tags: TAG_RULES
      .filter(r => r.group === group.slug)
      .map(r => ({
        slug: r.slug,
        name: r.name,
        nameEn: r.nameEn,
        count: tagCounts[r.slug] || 0,
      }))
      .filter(t => t.count > 0),
  })).filter(g => g.tags.length > 0);

  const totalTagTypes = tagGroups.reduce((sum, g) => sum + g.tags.length, 0);
  const taggedCount = cases.filter(c => c.tags.length > 0).length;

  const result = {
    totalCases: cases.length,
    categories,
    tagGroups,
    cases: cases.sort((a, b) => a.id - b.id),
  };

  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  const outPath = path.join(OUT_DIR, 'cases.json');
  fs.writeFileSync(outPath, JSON.stringify(result, null, 2), 'utf-8');

  console.log(`  ✅ Parsed ${cases.length} cases`);
  console.log(`  ✅ ${taggedCount}/${cases.length} cases have tags (${Math.round(taggedCount/cases.length*100)}%)`);
  console.log(`  ✅ ${categories.length} categories, ${totalTagTypes} tags in ${tagGroups.length} groups`);
  console.log(`  ✅ Written to ${path.relative(ROOT, outPath)}\n`);

  for (const cat of categories) {
    console.log(`     ${cat.emoji} ${cat.name}: ${cat.count}`);
  }
  console.log('');
  for (const g of tagGroups) {
    console.log(`  ${g.name}:`);
    for (const t of g.tags) {
      console.log(`     ${t.name}: ${t.count}`);
    }
  }
}

main();
