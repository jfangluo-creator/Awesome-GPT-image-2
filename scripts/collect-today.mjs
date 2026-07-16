/**
 * 一键收集 YouMind 今日案例并添加到项目
 *
 * 用法:
 *   node scripts/collect-today.mjs                        # 默认今天、5个
 *   node scripts/collect-today.mjs --date 2026-06-04 --count 10
 *   node scripts/collect-today.mjs --dry-run              # 只预览不写文件
 *   node scripts/collect-today.mjs --no-push              # 写文件但不 git push
 *   node scripts/collect-today.mjs --ci --count 200       # CI 模式（GitHub Actions）
 *
 * --ci 模式说明：
 *   - 日期默认取昨天（北京时间）
 *   - 图片下载走直连（不走代理隧道）
 *   - 跳过 site/public/images/ 拷贝
 *   - git 使用 GitHub Actions bot 身份
 */
import { chromium } from 'playwright';
import { slug } from 'github-slugger';
import fs from 'fs';
import http from 'http';
import https from 'https';
import { execSync } from 'child_process';

// ─── 常量 ───────────────────────────────────────────────
const PROXY = { hostname: '127.0.0.1', port: 7890 };
const YOUmind_LIST_URL = 'https://youmind.com/zh-CN/gpt-image-2-prompts?sortBy=time&sortOrder=desc';

// 自动分类规则（复用 _build_entries.mjs，已验证 70+ 案例）
const CATEGORY_RULES = [
  { key: 'ui',     emoji: '🖥️', label: 'UI',
    re: /UI|界面|网页|App|网站|登录页|仪表盘|博客页|移动端|赛博.*卡牌.*App|Minecraft.*游戏画面|Twitter.*截图|Instagram.*截图|社交媒体.*截图/i },
  { key: 'chart',  emoji: '📊', label: '图表',
    re: /信息图|图解|图表|流程图|时间轴|时间线|百科|可视化|海报模板|日历|课程表|导览|解析图|知识图|指南|影响力人物海报|销售书/i },
  { key: 'poster', emoji: '🎴', label: '海报',
    re: /海报|广告|Campaign|杂志封面|传单|优惠券|塔罗|卡牌|明信片|门票|宣传|节目单|报纸|歌单|包装盒|唱片|广告大片|时尚大片海报|Launch|发布蓝图|Windows.*登录海报|Threads.*归档|卡牌大师肖像/i },
  { key: '3d',     emoji: '🧸', label: '3D',
    re: /3D|体素|黏土|陶瓷|乐高|毛绒|手办|微缩|立体模型|毛毡|盲盒|扭蛋|玩偶|玩具|Q版|微缩村庄|微缩城市|立体透视|东京.*摩天大楼|剪纸立体|Q 版玩偶/i },
  { key: 'comic',  emoji: '🎬', label: '漫画',
    re: /漫画|分镜|故事板|条漫|一格|九格|六格|四格|绘本|漫画书|页框|复古厨房/i },
  { key: 'character', emoji: '🧍', label: '角色',
    re: /角色.*设定|三视图|人设|表情包|姿势集|服装设定|设定板|参考图|角色表|全身像|角色制作|参考图模板|角色一致性|角色变身|游侠.*角色/i },
  { key: 'brand',  emoji: '🏷️', label: '品牌',
    re: /Logo|品牌身份|包装设计|商标|周边|痛车|触点系统|VI|品牌人格|品牌/i },
  { key: 'architecture', emoji: '🏛️', label: '建筑',
    re: /室内设计|建筑外观|客厅|卧室|厨房|浴室|花园|房屋|展厅|店面|店铺|办公室|工作区|家居|建筑|空间|休息室/i },
  { key: 'edit',   emoji: '🔧', label: '编辑',
    re: /重绘|修复|上色|风格迁移|转换|变身|照片转|生成同|重画|改造|局部替换|字体替换|移除|添加|扩展|马卡龙色.*转换|涂鸦.*编辑|老照片修复/i },
  { key: 'photo',  emoji: '📷', label: '摄影',
    re: /街拍|人像|摄影|写真|特写|抓拍|自拍|棚拍|风光|旅游|电影感|胶片|调色|镜头|广告摄影|时尚摄影|Lightroom|35mm|iPhone.*闪光|雨中.*人像|俱乐部.*人像|日系.*街头|山顶|街拍.*人像|樱桃视角|线性素描|肖像|古风.*肖像|古风.*银饰|韩系.*时尚|肖像.*拼贴|网红肖像|摩天大楼|猫咪摩天大楼|超现实.*肖像|宠物.*肖像|天花板|仰望/i },
];
const DEFAULT_CATEGORY = { key: 'illustration', emoji: '🎨', label: '插画' };

// ─── Step 1: 解析 CLI 参数 ─────────────────────────────
function parseArgs() {
  const args = process.argv.slice(2);
  const dateIdx = args.indexOf('--date');
  const countIdx = args.indexOf('--count');
  const ci = args.includes('--ci');

  // CI 模式默认取昨天（北京时间）
  let dateStr;
  if (dateIdx >= 0) {
    dateStr = args[dateIdx + 1];
  } else if (ci) {
    // 用 Asia/Shanghai 计算 yesterday
    const now = new Date();
    const shanghai = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Shanghai' }));
    shanghai.setDate(shanghai.getDate() - 1);
    dateStr = shanghai.toISOString().split('T')[0];
  } else {
    dateStr = new Date().toISOString().split('T')[0];
  }

  return {
    dateStr,
    count: countIdx >= 0 ? parseInt(args[countIdx + 1]) : (ci ? 200 : 5),
    dryRun: args.includes('--dry-run'),
    noPush: args.includes('--no-push'),
    ci,
  };
}

// ─── Step 2: Playwright 调 YouMind API ─────────────────
async function fetchFromAPI() {
  console.log('🔍 正在从 YouMind API 抓取数据...');
  const browser = await chromium.launch({ headless: true, args: ['--disable-ipv6'] });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 }, locale: 'zh-CN' });

  await page.goto(YOUmind_LIST_URL, { waitUntil: 'domcontentloaded', timeout: 90000 });
  await page.waitForTimeout(5000);

  const allPrompts = [];
  for (let p = 1; p <= 5; p++) {
    const data = await page.evaluate(async (pageNum) => {
      const resp = await fetch('https://youmind.com/youmarketing-api/prompts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'gpt-image-2', page: pageNum, limit: 30, locale: 'zh-CN',
          campaign: 'gpt-image-2-prompts', filterMode: 'imageCategories',
          sortBy: 'time', sortOrder: 'desc'
        })
      });
      return resp.json();
    }, p);
    if (!data?.prompts?.length) break;
    allPrompts.push(...data.prompts);
    console.log(`  Page ${p}: ${data.prompts.length} 条`);
    if (p >= (data.totalPages || 999)) break;
  }
  await browser.close();

  // 标准化
  return allPrompts.map(p => ({
    id: p.id,
    title: p.title,
    sourceLink: p.sourceLink || '',
    sourcePublishedAt: p.sourcePublishedAt || '',
    author: p.author?.name || '',
    authorLink: p.author?.link || '',
    content: p.content || '',
    translatedContent: p.translatedContent || '',
    images: (p.media || []).map(m => typeof m === 'string' ? m : (m.url || m.src || '')).filter(u => typeof u === 'string' && u.startsWith('http')),
  }));
}

// ─── Step 3: 按日期过滤 ────────────────────────────────
function filterByDate(cases, dateStr) {
  return cases.filter(c => (c.sourcePublishedAt || '').startsWith(dateStr));
}

// ─── Step 4: 去重 ──────────────────────────────────────
function loadExistingSourceLinks() {
  const links = new Set();
  const files = fs.readdirSync('docs/cases').filter(f => f.startsWith('cases-') && f.endsWith('.md'));
  for (const f of files) {
    const content = fs.readFileSync(`docs/cases/${f}`, 'utf-8');
    for (const m of content.matchAll(/https:\/\/x\.com\/\S+\/status\/\d+/g)) {
      links.add(m[0]);
    }
  }
  return links;
}

function deduplicate(cases) {
  const existing = loadExistingSourceLinks();
  const seenTitles = new Set();
  return cases.filter(c => {
    if (c.sourceLink && existing.has(c.sourceLink)) return false;
    const key = c.title.replace(/\s+/g, '');
    if (seenTitles.has(key)) return false;
    seenTitles.add(key);
    return true;
  });
}

// ─── Step 6: 自动分类 ─────────────────────────────────
function categorize(c) {
  const text = `${c.title} ${c.content.slice(0, 300)} ${(c.translatedContent || '').slice(0, 200)}`;
  const scores = CATEGORY_RULES
    .filter(r => r.re)
    .map(cat => {
      const matches = text.match(new RegExp(cat.re.source, 'gi'));
      return { cat, count: matches ? matches.length : 0 };
    });
  scores.sort((a, b) => b.count - a.count);
  return scores[0]?.count > 0 ? scores[0].cat : DEFAULT_CATEGORY;
}

function categorizeEach(cases) {
  for (const c of cases) {
    c._cat = categorize(c);
  }
}

// ─── Step 7: 下载图片 ──────────────────────────────────
// 通过代理隧道下载（本地模式）
function downloadOneProxy(imgUrl, savePath) {
  return new Promise((resolve, reject) => {
    const url = new URL(imgUrl);
    const req = http.request({
      hostname: PROXY.hostname, port: PROXY.port,
      method: 'CONNECT', path: url.hostname + ':443'
    });
    req.on('connect', (res, socket) => {
      const agent = new https.Agent({ socket, rejectUnauthorized: false });
      https.get(url.href, { agent }, (resp) => {
        if (resp.statusCode >= 300 && resp.statusCode < 400 && resp.headers.location) {
          downloadOne(resp.headers.location, savePath).then(resolve).catch(reject);
          return;
        }
        const chunks = [];
        resp.on('data', c => chunks.push(c));
        resp.on('end', () => {
          const buf = Buffer.concat(chunks);
          fs.writeFileSync(savePath, buf);
          resolve(buf.length);
        });
      }).on('error', reject);
    });
    req.on('error', reject);
    req.setTimeout(30000, () => { req.destroy(); reject(new Error('timeout')); });
    req.end();
  });
}

// 直连下载（CI 模式，无需代理）
function downloadOneDirect(imgUrl, savePath) {
  return new Promise((resolve, reject) => {
    const url = new URL(imgUrl);
    https.get({
      hostname: url.hostname,
      path: url.pathname + url.search,
      headers: { 'User-Agent': 'Mozilla/5.0' },
    }, (resp) => {
      if (resp.statusCode >= 300 && resp.statusCode < 400 && resp.headers.location) {
        downloadOneDirect(resp.headers.location, savePath).then(resolve).catch(reject);
        return;
      }
      if (resp.statusCode !== 200) {
        reject(new Error(`HTTP ${resp.statusCode}`));
        return;
      }
      const chunks = [];
      resp.on('data', c => chunks.push(c));
      resp.on('end', () => {
        const buf = Buffer.concat(chunks);
        fs.writeFileSync(savePath, buf);
        resolve(buf.length);
      });
    }).on('error', reject);
  });
}

// 文件名清理：去掉换行、冒号、引号等非法字符
function sanitizeFilename(name) {
  return name.replace(/[\r\n]+/g, ' ').replace(/[:*"<>?|\\/]/g, ' ').replace(/\s+/g, ' ').trim();
}

async function downloadImages(cases, ci) {
  const downloadOne = ci ? downloadOneDirect : downloadOneProxy;
  console.log(`\n📥 下载图片（${ci ? '直连' : '代理'}模式）...`);
  for (const c of cases) {
    const imgUrl = c.images[0];
    if (!imgUrl) { c._imgStatus = 'skip'; console.log(`  SKIP: ${c.title} (无图片)`); continue; }
    const safeTitle = sanitizeFilename(c.title);
    const filename = safeTitle + '.jpg';
    try {
      const bytes = await downloadOne(imgUrl, `images/${filename}`);
      // CI 模式跳过 site/public/images/ 拷贝（部署 workflow 会单独处理）
      if (!ci) {
        fs.copyFileSync(`images/${filename}`, `site/public/images/${filename}`);
      }
      c._imgStatus = 'ok';
      console.log(`  ✅ ${c.title}: ${(bytes / 1024).toFixed(0)}KB`);
    } catch (e) {
      c._imgStatus = `fail: ${e.message}`;
      console.error(`  ❌ ${c.title}: ${e.message}`);
    }
  }
}

// ─── Step 8: 获取最大案例编号 ──────────────────────────
function getMaxCaseNumber() {
  let max = 0;
  const files = fs.readdirSync('docs/cases').filter(f => /^cases-\d+-\d+\.md$/.test(f));
  for (const f of files) {
    const content = fs.readFileSync(`docs/cases/${f}`, 'utf-8');
    for (const m of content.matchAll(/^### .* 例 (\d+)/gm)) {
      max = Math.max(max, parseInt(m[1]));
    }
  }
  return max;
}

// ─── Step 9: 生成 Markdown 条目 ────────────────────────
function buildEntries(cases, maxNum) {
  let num = maxNum + 1;
  const entries = [];
  for (const c of cases) {
    const catInfo = c._cat;
    const heading = `${catInfo.emoji} 例 ${num}：${c.title}`;
    const anchor = slug(heading);
    const encodedImg = encodeURIComponent(sanitizeFilename(c.title) + '.jpg');
    const date = (c.sourcePublishedAt || '').split('T')[0];
    const authorName = c.author || 'Unknown';
    const sourceLink = c.sourceLink ? c.sourceLink.split('#')[0] : '';

    // Prompt 块：智能检测双语
    const zh = c.translatedContent;
    const en = c.content;
    const zhIsChinese = /[一-鿿]/.test((zh || '').substring(0, 50));
    const enIsChinese = /[一-鿿]/.test((en || '').substring(0, 50));
    let promptBlock;
    if (zh && en && !enIsChinese && zhIsChinese) {
      promptBlock = `[中文]\n${zh}\n\n[English]\n${en}`;
    } else {
      promptBlock = en || zh || '';
    }

    const md = `### ${heading}

![${c.title}](../../images/${encodedImg})

**Prompt:**

\`\`\`text
${promptBlock}
\`\`\`

**来源：** [@${authorName}](${sourceLink}) | ${date}

---

`;

    // cases 在 docs/cases/ → ../../images/；cat 在 docs/ → ../images/
    const mdCat = md.replace('](../../images/', '](../images/');
    entries.push({ num, caseData: c, catInfo, heading, anchor, md, mdCat });
    num++;
  }
  return entries;
}

// ─── Step 10: 写入文件 ────────────────────────────────

// 新增百位范围时，自动更新四个文件的导航链接
function updateNavLinks(start, end) {
  const padded = String(start).padStart(3, '0') + '-' + String(end).padStart(3, '0');
  const casesFile = `cases-${padded}.md`;

  const targets = [
    { file: 'README.md', link: `[案例 ${start}-${end}](docs/cases/${casesFile})` },
    { file: 'README_en.md', link: `[Cases ${start}-${end}](docs/cases/${casesFile})` },
    { file: 'docs/categories.md', link: `[案例 ${start}-${end}](cases/${casesFile})` },
    { file: 'docs/categories_en.md', link: `[Cases ${start}-${end}](cases/${casesFile})` },
  ];

  for (const { file, link } of targets) {
    if (!fs.existsSync(file)) continue;
    let content = fs.readFileSync(file, 'utf-8');
    // 已存在则跳过
    if (content.includes(casesFile)) continue;

    // 找到导航行（第一个包含 cases-001 的行），提取整行，重建完整有序链接
    const lines = content.split('\n');
    const navLineIdx = lines.findIndex(l => l.includes('cases-001-100.md'));
    if (navLineIdx < 0) continue;

    // 扫描 docs/cases/ 目录获取所有 cases-NNN-NNN.md 文件，按编号排序
    const casesFiles = fs.readdirSync('docs/cases')
      .filter(f => /^cases-\d{3}-\d{3}\.md$/.test(f))
      .sort();
    const isEn = file.includes('_en');
    const prefix = file.startsWith('docs/') ? 'cases/' : 'docs/cases/';
    const sep = ' · ';
    const navLinks = casesFiles.map(f => {
      const m = f.match(/cases-(\d{3})-(\d{3})\.md/);
      const s = parseInt(m[1]), e = parseInt(m[2]);
      return isEn
        ? `[Cases ${s}-${e}](${prefix}${f})`
        : `[案例 ${s}-${e}](${prefix}${f})`;
    }).join(sep);

    // 保留行首的"返回首页"链接（如果有）
    const origLine = lines[navLineIdx];
    const homeLink = origLine.match(/^\[([^\]]+)\]\([^)]+\)( · )?/)?.[0] || '';
    lines[navLineIdx] = homeLink + navLinks;
    content = lines.join('\n');
    fs.writeFileSync(file, content, 'utf-8');
    console.log(`  Updated nav in ${file} (+${start}-${end})`);
  }
}

function getCasesFilePath(num) {
  const start = Math.floor((num - 1) / 100) * 100 + 1;
  const end = start + 99;
  const base = `docs/cases/cases-${String(start).padStart(3, '0')}-${String(end).padStart(3, '0')}.md`;
  if (!fs.existsSync(base)) {
    // 创建新文件，含标准 header
    const prevStart = start - 100;
    const prevEnd = end - 100;
    const prevFile = `cases-${String(prevStart).padStart(3, '0')}-${String(prevEnd).padStart(3, '0')}.md`;
    const header = `# 案例 ${start} - ${end}\n\n[返回首页](../../README.md) · [案例 ${prevStart}-${prevEnd}](${prevFile})\n\n---\n\n`;
    fs.writeFileSync(base, header, 'utf-8');
    console.log(`  Created ${base}`);
    // 自动更新导航链接
    updateNavLinks(start, end);
  }
  return base;
}

function appendToCasesFiles(entries) {
  const groups = {};
  for (const e of entries) {
    const f = getCasesFilePath(e.num);
    (groups[f] ||= []).push(e);
  }
  for (const [file, group] of Object.entries(groups)) {
    let content = fs.readFileSync(file, 'utf-8').trimEnd() + '\n\n';
    for (const e of group) content += e.md;
    fs.writeFileSync(file, content, 'utf-8');
    console.log(`  Updated ${file} (+${group.length})`);
  }
}

function appendToCategoryFiles(entries) {
  const groups = {};
  for (const e of entries) {
    (groups[e.catInfo.key] ||= []).push(e);
  }
  for (const [cat, group] of Object.entries(groups)) {
    const file = `docs/cat-${cat}.md`;
    let content = fs.readFileSync(file, 'utf-8').trimEnd() + '\n\n';
    for (const e of group) content += e.mdCat;
    fs.writeFileSync(file, content, 'utf-8');
    console.log(`  Updated ${file} (+${group.length})`);
  }
}

function updateCategoriesIndex(entries, lang) {
  const file = lang === 'en' ? 'docs/categories_en.md' : 'docs/categories.md';
  let content = fs.readFileSync(file, 'utf-8');

  // 统计每个分类增加几个
  const countUpdates = {};
  for (const e of entries) {
    countUpdates[e.catInfo.key] = (countUpdates[e.catInfo.key] || 0) + 1;
  }

  // 更新计数
  for (const [cat, addCount] of Object.entries(countUpdates)) {
    if (lang === 'en') {
      // 英文格式: "cat-photo.md) (111)"
      const re = new RegExp(`(cat-${cat}\\.md\\) \\()(\\d+)`, 'g');
      content = content.replace(re, (m, prefix, old) => prefix + (parseInt(old) + addCount));
    } else {
      // 中文格式: "cat-photo.md）（100）"
      const re = new RegExp(`(cat-${cat}\\.md）（)(\\d+)`, 'g');
      content = content.replace(re, (m, prefix, old) => prefix + (parseInt(old) + addCount));
    }
  }

  // 追加链接到对应 section
  for (const e of entries) {
    const cat = e.catInfo.key;
    const anchor = e.anchor;
    let linkLine;
    if (lang === 'en') {
      linkLine = `- [Case ${e.num}: ${e.caseData.title}](cat-${cat}.md#${anchor})`;
    } else {
      linkLine = `- [例 ${e.num}：${e.caseData.title}](cat-${cat}.md#${anchor})`;
    }

    const lines = content.split('\n');
    let sectionStart = -1, sectionEnd = -1;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes(`cat-${cat}.md`)) sectionStart = i;
      if (sectionStart > 0 && lines[i].trim() === '---' && i > sectionStart) {
        sectionEnd = i;
        break;
      }
    }
    if (sectionStart >= 0 && sectionEnd >= 0) {
      lines.splice(sectionEnd, 0, '', linkLine);
      content = lines.join('\n');
    } else {
      console.error(`  WARNING: section for cat-${cat} not found in ${file}`);
    }
  }

  fs.writeFileSync(file, content, 'utf-8');
  console.log(`  Updated ${file}`);
}

function writeFiles(entries) {
  console.log('\n📝 写入文件...');
  appendToCasesFiles(entries);
  appendToCategoryFiles(entries);
  updateCategoriesIndex(entries, 'zh');
  updateCategoriesIndex(entries, 'en');
}

// ─── Step 11: 验证锚点 ────────────────────────────────
function verifyAnchors(ci) {
  if (ci) {
    // CI 模式跳过锚点验证（_fix_anchors.mjs 未纳入仓库）
    console.log('\n🔗 CI 模式跳过锚点验证');
    return;
  }
  console.log('\n🔗 验证锚点...');
  try {
    execSync('node _fix_anchors.mjs', { stdio: 'inherit', cwd: process.cwd() });
  } catch (e) {
    console.error('⚠️  锚点验证有错误，请运行 node _fix_anchors.mjs --fix');
  }
}

// ─── Step 12: Git 提交推送 ─────────────────────────────
function gitCommitPush(entries, dateStr, noPush, ci) {
  const first = entries[0].num;
  const last = entries[entries.length - 1].num;
  const msg = `feat: 添加 ${entries.length} 个今日案例（例 ${first}-${last}，YouMind ${dateStr}）`;
  console.log(`\n🚀 Git 提交...`);

  if (ci) {
    execSync('git config user.name "github-actions[bot]"', { stdio: 'inherit' });
    execSync('git config user.email "github-actions[bot]@users.noreply.github.com"', { stdio: 'inherit' });
  }

  execSync('git add docs/ images/', { stdio: 'inherit' });
  execSync(`git commit -m "${msg}"`, { stdio: 'inherit' });
  if (!noPush) {
    execSync('git push', { stdio: 'inherit' });
    console.log(`✅ 已推送: ${msg}`);
  } else {
    console.log(`✅ 已提交（未推送）: ${msg}`);
  }
}

// ─── 输出摘要 ─────────────────────────────────────────
function printSummary(entries, dryRun) {
  console.log(`\n${'='.repeat(50)}`);
  console.log(dryRun ? '📋 DRY-RUN 预览（未写入文件）' : '📋 收集完成');
  console.log(`${'='.repeat(50)}`);
  console.log('编号\t分类\t\t作者\t\t标题');
  console.log('----\t----\t\t----\t\t----');
  for (const e of entries) {
    const cat = `${e.catInfo.emoji} ${e.catInfo.label}`.padEnd(10);
    const author = (e.caseData.author || '').slice(0, 10).padEnd(10);
    const title = e.caseData.title.slice(0, 30);
    console.log(`#${e.num}\t${cat}\t${author}\t${title}`);
  }
  console.log(`\n共 ${entries.length} 个案例`);
  if (!dryRun) {
    const imgFails = entries.filter(e => e.caseData._imgStatus?.startsWith('fail'));
    if (imgFails.length) console.log(`⚠️  图片下载失败: ${imgFails.length} 个`);
  }
}

// ─── 主流程 ────────────────────────────────────────────
async function main() {
  const opts = parseArgs();
  console.log(`📅 日期: ${opts.dateStr} | 数量: ${opts.count} | dry-run: ${opts.dryRun} | no-push: ${opts.noPush} | ci: ${opts.ci}`);

  // Step 2: 抓取
  const allPrompts = await fetchFromAPI();
  console.log(`  共 ${allPrompts.length} 条 API 数据`);

  // Step 3: 按日期过滤
  const dateFiltered = filterByDate(allPrompts, opts.dateStr);
  console.log(`  ${opts.dateStr} 的案例: ${dateFiltered.length} 条`);

  if (dateFiltered.length === 0) {
    console.log('⚠️  该日期无案例，退出');
    process.exit(0);
  }

  // Step 4: 去重
  const newCases = deduplicate(dateFiltered);
  console.log(`  去重后新增: ${newCases.length} 条`);

  if (newCases.length === 0) {
    console.log('⚠️  无新增案例（已全部收录），退出');
    process.exit(0);
  }

  // Step 5: 截取
  const selected = newCases.slice(0, opts.count);

  // Step 6: 自动分类
  categorizeEach(selected);

  if (opts.dryRun) {
    const maxNum = getMaxCaseNumber();
    const entries = buildEntries(selected, maxNum);
    printSummary(entries, true);
    return;
  }

  // Step 7: 下载图片
  await downloadImages(selected, opts.ci);

  // Step 8: 获取最大编号
  const maxNum = getMaxCaseNumber();
  console.log(`\n📊 当前最大编号: ${maxNum}，新案例从 ${maxNum + 1} 开始`);

  // Step 9: 生成 Markdown
  const entries = buildEntries(selected, maxNum);

  // Step 10: 写入文件
  writeFiles(entries);

  // Step 11: 验证锚点
  verifyAnchors(opts.ci);

  // Step 12: Git 提交推送
  gitCommitPush(entries, opts.dateStr, opts.noPush, opts.ci);

  // 摘要
  printSummary(entries, false);
}

main().catch(e => { console.error('❌ Fatal:', e.message); process.exit(1); });
