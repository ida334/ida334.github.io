// Captures review screenshots into .impeccable/review/ and reports layout problems.
// Usage: node tools/shoot.mjs [baseUrl]   (default http://127.0.0.1:4173/)
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

const BASE = process.argv[2] || 'http://127.0.0.1:4173/';
const OUT = '.impeccable/review';
mkdirSync(OUT, { recursive: true });

const shots = [
  { name: 'desktop', width: 1440, height: 900, full: true },
  { name: 'desktop-1280', width: 1280, height: 800, full: false },
  { name: 'desktop-1100', width: 1100, height: 800, full: false },
  { name: 'tablet', width: 820, height: 1180, full: true },
  { name: 'mobile', width: 390, height: 844, full: true, mobile: true },
];

const browser = await chromium.launch();
const report = [];
for (const s of shots) {
  const ctx = await browser.newContext({
    viewport: { width: s.width, height: s.height },
    deviceScaleFactor: s.mobile ? 2 : 1,
    isMobile: !!s.mobile, hasTouch: !!s.mobile,
  });
  const page = await ctx.newPage();
  const errors = [];
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('pageerror', (e) => errors.push(e.message));
  await page.goto(BASE, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  // load every lazy image before a full-page capture
  await page.evaluate(async () => {
    for (const img of document.querySelectorAll('img[loading="lazy"]')) img.loading = 'eager';
    await Promise.all([...document.images].map((i) => i.complete ? null : new Promise((r) => { i.onload = i.onerror = r; })));
  });
  // walk the page once so lazy images render, then return to the top
  await page.evaluate(async () => {
    for (let y = 0; y < document.documentElement.scrollHeight; y += innerHeight * 0.8) { scrollTo(0, y); await new Promise((r) => setTimeout(r, 120)); }
    scrollTo(0, 0);
  });
  await page.waitForTimeout(1800); // let the sunrise settle
  await page.screenshot({ path: `${OUT}/${s.name}.png`, fullPage: s.full });
  if (s.full) await page.screenshot({ path: `${OUT}/${s.name}-first.png` });
  const layout = await page.evaluate(() => {
    const doc = document.documentElement;
    const overflowX = doc.scrollWidth > doc.clientWidth ? doc.scrollWidth - doc.clientWidth : 0;
    const clipped = [];
    for (const el of document.querySelectorAll('h1,h2,h3,p,li,a,figcaption,.nameplate')) {
      if (el.scrollWidth > el.clientWidth + 1 && getComputedStyle(el).overflow !== 'visible') clipped.push(el.textContent.trim().slice(0, 40));
    }
    const fonts = [...document.fonts].filter((f) => f.status === 'loaded').map((f) => `${f.family} ${f.weight}`);
    const nav = document.querySelector('.stairwell').getBoundingClientRect();
    const firstShutter = document.querySelector('.roof .shutter').getBoundingClientRect();
    return { overflowX, clipped, fonts, nav: [Math.round(nav.left), Math.round(nav.top), Math.round(nav.width), Math.round(nav.height)], contactInFirstViewport: firstShutter.bottom <= innerHeight, pageHeight: doc.scrollHeight };
  });
  report.push({ shot: s.name, errors, ...layout });
  await ctx.close();
}
await browser.close();
console.log(JSON.stringify(report, null, 2));
