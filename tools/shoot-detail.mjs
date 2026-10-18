// Detail captures for review: index states, keyboard focus, the phone running head, and the page bottom.
// Usage: node tools/shoot-detail.mjs [baseUrl]   (default http://127.0.0.1:4173/)
import { chromium } from 'playwright';

const BASE = process.argv[2] || 'http://127.0.0.1:4173/';
const OUT = '.impeccable/review';
const browser = await chromium.launch();

async function open(width, height, mobile = false) {
  const ctx = await browser.newContext({ viewport: { width, height }, isMobile: mobile, hasTouch: mobile });
  const page = await ctx.newPage();
  await page.goto(BASE, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(async () => {
    for (const img of document.querySelectorAll('img[loading="lazy"]')) img.loading = 'eager';
    await Promise.all([...document.images].map((i) => i.complete ? null : new Promise((r) => { i.onload = i.onerror = r; })));
  });
  return page;
}
const current = (page) => page.evaluate(() => document.querySelector('.index-list a[aria-current]').textContent);

// Desktop: jump to Experience from the index, hover Study, then tab to the first index link.
let page = await open(1440, 900);
await page.click('.index-list a[href="#experience"]');
await page.waitForTimeout(1200);
const afterJump = await current(page);
await page.hover('.index-list a[href="#study"]');
await page.hover('#wc-title').catch(() => {});
await page.hover('.index-list a[href="#study"]');
await page.waitForTimeout(300);
await page.screenshot({ path: `${OUT}/states-desktop.png` });
await page.keyboard.press('Tab');
const focused = await page.evaluate(() => document.activeElement?.textContent?.trim());

// Phone: the running head closed, then open, then the section it lands on.
page = await open(390, 844, true);
await page.evaluate(() => scrollTo(0, document.querySelector('#study').offsetTop));
await page.waitForTimeout(500);
await page.screenshot({ path: `${OUT}/m-study.png` });
await page.tap('.index-toggle');
await page.waitForTimeout(300);
await page.screenshot({ path: `${OUT}/m-index-open.png` });
await page.tap('.index-list a[href="#contact"]');
await page.waitForTimeout(1200);
const phoneLanded = await current(page);
await page.screenshot({ path: `${OUT}/m-contact.png` });

// Page bottom at both widths: the index must read Contact.
const bottoms = {};
for (const [w, h, m] of [[390, 844, true], [1440, 900, false]]) {
  page = await open(w, h, m);
  await page.evaluate(() => scrollTo(0, document.documentElement.scrollHeight));
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${OUT}/bottom-${w}.png` });
  bottoms[w] = await current(page);
}

console.log(JSON.stringify({ afterJump, focused, phoneLanded, bottoms }, null, 1));
await browser.close();
