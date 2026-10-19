// Writes assets/img/og.jpg, the link-preview image: the page's own first viewport at 1200x630.
// Usage: node tools/make-og.mjs [baseUrl]   (default http://127.0.0.1:4173/)
import { chromium } from 'playwright';

const BASE = process.argv[2] || 'http://127.0.0.1:4173/';
const browser = await chromium.launch();
// reduced motion skips the arrival animation, so the capture is the settled page
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, reducedMotion: 'reduce' });
await page.goto(BASE, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(400);
await page.screenshot({ path: 'assets/img/og.jpg', type: 'jpeg', quality: 86 });
await browser.close();
console.log('wrote assets/img/og.jpg');
