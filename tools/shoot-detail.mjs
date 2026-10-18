// Detail captures for review: interaction states, phone section close-ups, and the page bottom.
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
    for (let y = 0; y < document.documentElement.scrollHeight; y += innerHeight * 0.8) { scrollTo(0, y); await new Promise((r) => setTimeout(r, 100)); }
    scrollTo(0, 0);
  });
  await page.waitForTimeout(1600);
  return page;
}

// Desktop states: late sun (pointer at the right), keyboard focus on the first shutter, hover on a floor.
let page = await open(1440, 900);
await page.mouse.move(1380, 300);
await page.waitForTimeout(1500);
for (let i = 0; i < 8; i++) await page.keyboard.press('Tab');
const focused = await page.evaluate(() => document.activeElement?.textContent?.trim());
const pane = await page.locator('.stairwell a[href="#experience"]').boundingBox();
await page.mouse.move(pane.x + pane.width - 20, pane.y + pane.height / 2);
await page.waitForTimeout(400);
await page.screenshot({ path: `${OUT}/states-desktop.png` });
// Same sun on the Study floor: plates must throw shade the same way as the balconies.
await page.locator('#study').scrollIntoViewIfNeeded();
await page.mouse.move(1380, 500);
await page.waitForTimeout(1200);
await page.screenshot({ path: `${OUT}/states-study-late-sun.png` });

// Phone close-ups.
page = await open(390, 844, true);
for (const [name, sel] of [['m-work1', '#work .project'], ['m-work2', '#work .project.mirror'], ['m-exp', '#experience'], ['m-study', '#study'], ['m-contact', '#contact']]) {
  const el = page.locator(sel).first();
  await el.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await el.screenshot({ path: `${OUT}/${name}.png` });
}

// Page bottom at both widths.
for (const [w, h, m] of [[390, 844, true], [1440, 900, false]]) {
  page = await open(w, h, m);
  await page.evaluate(() => scrollTo(0, document.documentElement.scrollHeight));
  await page.waitForTimeout(900);
  await page.screenshot({ path: `${OUT}/bottom-${w}.png` });
  if (!m) console.log('page end: stairwell bottom vs pilotis top', await page.evaluate(() => [Math.round(document.querySelector('.stairwell').getBoundingClientRect().bottom), Math.round(document.querySelector('.pilotis').getBoundingClientRect().top)]));
}

// Where the stairwell sits relative to the roof slab, at three desktop sizes.
const placements = [];
for (const [w, h] of [[1440, 900], [1280, 800], [1100, 800], [1366, 640]]) {
  page = await open(w, h);
  placements.push(await page.evaluate(([w, h]) => {
    const nav = document.querySelector('.stairwell').getBoundingClientRect();
    const parapet = document.querySelector('.parapet').getBoundingClientRect();
    const firstBalcony = document.querySelector('.balconies .balcony').getBoundingClientRect();
    return { size: `${w}x${h}`, navTop: Math.round(nav.top), navBottom: Math.round(nav.bottom), slabBottom: Math.round(parapet.bottom + 14), viewport: h, wallBetweenBalconyAndTower: Math.round(nav.left - firstBalcony.right) };
  }, [w, h]));
}
console.log(JSON.stringify({ focused, placements }, null, 1));
await browser.close();
