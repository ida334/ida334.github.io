// Captures the live World Cup 2026 dashboard's Predictions page for the Work floor's window.
// Portrait framing: the page is captured wide enough to keep the sidebar docked,
// then clipped to the main column so the odds fit the window without cropping.
// Usage: node tools/capture-worldcup.mjs
import { chromium } from 'playwright';

const URL = 'https://ida334-worldcup2026.streamlit.app/~/+/predictions';
const OUT = 'assets/img/worldcup-predictions.jpg';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1180, height: 1040 }, deviceScaleFactor: 2 });
await page.goto(URL, { waitUntil: 'domcontentloaded', timeout: 90000 });
await page.waitForSelector('[data-testid="stAppViewContainer"]', { timeout: 120000 });
await page.waitForLoadState('networkidle', { timeout: 60000 }).catch(() => {});
await page.waitForTimeout(6000);
const sidebarRight = await page.evaluate(() => Math.ceil(document.querySelector('[data-testid="stSidebar"]')?.getBoundingClientRect().right || 0));
await page.screenshot({ path: OUT, type: 'jpeg', quality: 82, clip: { x: sidebarRight, y: 0, width: 1180 - sidebarRight, height: 1040 } });
console.log('captured', OUT, 'clipped from x =', sidebarRight, await page.title());
await browser.close();
