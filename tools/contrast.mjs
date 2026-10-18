// Contrast audit: every element with its own text, against the nearest painted background.
// Usage: node tools/contrast.mjs [baseUrl]
import { chromium } from 'playwright';
const BASE = process.argv[2] || 'http://127.0.0.1:4173/';
const b = await chromium.launch();
for (const [w, h] of [[1440, 900], [390, 844]]) {
  const p = await (await b.newContext({ viewport: { width: w, height: h } })).newPage();
  await p.goto(BASE, { waitUntil: 'networkidle' });
  const rows = await p.evaluate(() => {
    const parse = (c) => { const m = c.match(/[\d.]+/g).map(Number); return { r: m[0], g: m[1], b: m[2], a: m.length > 3 ? m[3] : 1 }; };
    const lum = ({ r, g, b }) => { const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; }; return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b); };
    const out = [];
    for (const el of document.querySelectorAll('body *')) {
      if (![...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim())) continue;
      const cs = getComputedStyle(el);
      if (cs.visibility === 'hidden' || cs.display === 'none') continue;
      let bg = null, n = el;
      while (n && n !== document.documentElement) { const c = parse(getComputedStyle(n).backgroundColor); if (c.a > 0.5) { bg = c; break; } n = n.parentElement; }
      bg = bg || parse(getComputedStyle(document.body).backgroundColor);
      const fg = parse(cs.color);
      const L1 = lum(fg), L2 = lum(bg);
      const ratio = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
      const size = parseFloat(cs.fontSize), bold = parseInt(cs.fontWeight) >= 600;
      const need = size >= 24 || (bold && size >= 18.66) ? 3 : 4.5;
      if (ratio < need) out.push({ text: el.textContent.trim().slice(0, 40), cls: el.className, ratio: ratio.toFixed(2), need, fg: cs.color, bg: n ? n.className || n.tagName : 'body' });
    }
    return out;
  });
  console.log(w, rows.length ? JSON.stringify(rows, null, 1) : 'all text passes WCAG AA');
}
await b.close();
