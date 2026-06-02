import { chromium } from 'playwright';
import { writeFileSync, existsSync } from 'fs';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 900 }, locale: 'zh-CN' });

const slugs = [
  'blueprint-to-render-house-split-23050',
  'minimalist-interior-design-render-23019',
  'tokyo-diorama-night-map-23071',
  'nocturnal-paris-diorama-map-23070',
  'nocturnal-new-york-map-23069',
  'london-diorama-map-23068',
  'retro-umeda-travel-poster-23085',
];

const authorMap = {
  'blueprint-to-render-house-split-23050': 'PromptLab',
  'minimalist-interior-design-render-23019': '唐华斑竹🦅',
  'tokyo-diorama-night-map-23071': 'Tia',
  'nocturnal-paris-diorama-map-23070': 'Tia',
  'nocturnal-new-york-map-23069': 'Tia',
  'london-diorama-map-23068': 'Tia',
  'retro-umeda-travel-poster-23085': 'サル☆ザル@AIプロンプトクラフター',
};

const sourceMap = {
  'blueprint-to-render-house-split-23050': 'https://x.com/iamaiistudio/status/2060120398973542751',
  'minimalist-interior-design-render-23019': 'https://x.com/uniswap12/status/2059960935712768030',
  'tokyo-diorama-night-map-23071': 'https://x.com/Tiange022/status/2059910858952900608#reversed-3',
  'nocturnal-paris-diorama-map-23070': 'https://x.com/Tiange022/status/2059910858952900608#reversed-2',
  'nocturnal-new-york-map-23069': 'https://x.com/Tiange022/status/2059910858952900608#reversed-1',
  'london-diorama-map-23068': 'https://x.com/Tiange022/status/2059910858952900608#reversed-0',
  'retro-umeda-travel-poster-23085': 'https://x.com/maimi2014/status/2059903072596598819#reversed-0',
};

const cases = [];

for (let i = 0; i < slugs.length; i++) {
  const slug = slugs[i];
  const url = `https://youmind.com/zh-CN/prompts/${slug}`;
  console.log(`[${i + 1}/${slugs.length}] ${slug}`);

  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await new Promise(r => setTimeout(r, 4000));

    // Extract clean data from JSON-LD
    const rawData = await page.evaluate(() => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      for (const s of scripts) {
        try {
          const parsed = JSON.parse(s.textContent);
          if (Array.isArray(parsed['@graph'])) {
            const work = parsed['@graph'].find(item => item['@type'] === 'CreativeWork');
            if (work) {
              return {
                name: work.name || '',
                text: work.text || '',
                description: work.description || '',
                image: work.image || '',
                lang: work.inLanguage || '',
              };
            }
          }
        } catch(e) {}
      }
      return null;
    });

    if (!rawData) {
      console.log('  SKIP: no JSON-LD');
      continue;
    }

    const title = rawData.name;
    const prompt = rawData.text;
    const imgUrl = rawData.image;

    // Download image
    let imgDownloaded = false;
    if (imgUrl) {
      try {
        const safeTitle = title.replace(/[\/\\:*?"<>|]/g, '-').substring(0, 80);
        const imgPath = `images/${safeTitle}.jpg`;
        if (!existsSync(imgPath)) {
          const resp = await page.goto(imgUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
          if (resp) {
            const buf = await resp.body();
            writeFileSync(imgPath, buf);
            console.log(`  IMG: ${buf.length} bytes`);
            imgDownloaded = true;
          }
        } else {
          imgDownloaded = true;
        }
      } catch (e) {
        console.log(`  IMG error: ${e.message.substring(0, 60)}`);
      }
    }

    cases.push({
      title,
      prompt,
      imgUrl,
      slug,
      author: authorMap[slug],
      sourceUrl: sourceMap[slug],
    });

    console.log(`  OK: ${title} | ${prompt.length} chars`);

  } catch (e) {
    console.log(`  ERROR: ${e.message.substring(0, 80)}`);
  }

  await new Promise(r => setTimeout(r, 2000));
}

writeFileSync('_arch_final.json', JSON.stringify(cases, null, 2));
console.log(`\nSaved ${cases.length} cases`);

await browser.close();
