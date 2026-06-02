import { chromium } from 'playwright';
import fs from 'fs';

const MAX_CASES = 20;
const LIST_URL = 'https://youmind.com/zh-CN/gpt-image-2-prompts?sortBy=time&sortOrder=desc';
const BASE = 'https://youmind.com';
const sleep = ms => new Promise(r => setTimeout(r, ms));

async function main() {
  console.log('Launching browser...');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 }, locale: 'zh-CN' });

  // Step 1: Collect all detail page URLs
  console.log('Loading listing page...');
  await page.goto(LIST_URL, { waitUntil: 'domcontentloaded', timeout: 90000 });
  await sleep(5000);
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await sleep(2000);

  const urls = await page.evaluate(() => {
    const spans = Array.from(document.querySelectorAll('*')).filter(el =>
      el.textContent.trim() === '查看完整提示词' && el.children.length === 0
    );
    return spans.map(el => {
      const link = el.closest('a');
      return link ? link.getAttribute('href') : '';
    }).filter(h => h);
  });
  console.log(`Found ${urls.length} detail URLs`);

  const toScrape = urls.slice(0, MAX_CASES);
  const results = [];

  // Step 2: Visit each detail page, click "翻译前", extract original prompt
  for (let i = 0; i < toScrape.length; i++) {
    const href = toScrape[i];
    const fullUrl = href.startsWith('http') ? href : BASE + href;
    console.log(`\n--- #${i + 1} ---`);

    await page.goto(fullUrl, { waitUntil: 'domcontentloaded', timeout: 60000 }).catch(() => null);
    await sleep(2000);

    // Click "翻译前" to get original English prompt
    const translateBtn = await page.$('button:has-text("翻译前")');
    if (translateBtn) {
      await translateBtn.click();
      await sleep(1500);
    }

    // Extract data
    const data = await page.evaluate(() => {
      const preWrap = document.querySelector('[class*="whitespace-pre-wrap"]');
      const prompt = preWrap ? preWrap.innerText.trim() : '';

      // Source URL
      const links = Array.from(document.querySelectorAll('a[href*="x.com"], a[href*="twitter.com"]'));
      const srcLink = links.map(a => a.getAttribute('href')).find(h => h && /status\/\d+/.test(h)) || '';

      // Title from h1
      const h1 = document.querySelector('h1');
      const title = h1 ? h1.innerText.trim() : '';

      // Author
      const atMention = document.body.innerText.match(/@(\S+)/);
      const author = atMention ? atMention[1] : '';

      return { title, prompt, sourceUrl: srcLink, author };
    });

    if (data.prompt.length > 80) {
      results.push({
        title: data.title,
        prompt: data.prompt,
        sourceUrl: data.sourceUrl,
        author: data.author,
        url: fullUrl,
      });
      console.log(`  ${data.title} | ${data.prompt.length} chars | src: ${data.sourceUrl ? 'yes' : 'no'} | @${data.author}`);
    } else {
      console.log(`  SKIP: ${data.prompt.length} chars`);
    }
  }

  await browser.close();

  fs.writeFileSync('_youmind_cases.json', JSON.stringify(results, null, 2), 'utf-8');
  console.log(`\nSaved ${results.length} cases to _youmind_cases.json`);
}

main().catch(e => { console.error('Fatal:', e.message); process.exit(1); });
