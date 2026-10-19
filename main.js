// The index marks the section you are reading. On phones it is the running head, and opens the full index.

const index = document.querySelector('.index');
const links = [...index.querySelectorAll('.index-list a')];
const linkFor = new Map(links.map((a) => [a.hash.slice(1), a]));
const marker = index.querySelector('.marker');
const now = index.querySelector('.index-now');
const toggle = index.querySelector('.index-toggle');
const phone = matchMedia('(max-width: 767.98px)');

/* ---------- the marker ---------- */

let current = links.find((a) => a.hasAttribute('aria-current')) || links[0];

function placeMarker() {
  const y = current.offsetTop + (current.offsetHeight - marker.offsetHeight) / 2;
  marker.style.setProperty('--marker-y', `${Math.round(y)}px`);
}

function setCurrent(id) {
  const link = linkFor.get(id);
  if (!link || link === current) return;
  current.removeAttribute('aria-current');
  link.setAttribute('aria-current', 'location');
  current = link;
  now.textContent = link.textContent;
  placeMarker();
}

// The section you are reading is the last one whose top has passed a line a third of the way down.
// At the very top that is always the front page, and at the very bottom always the last section,
// however short it is.
const sections = [...document.querySelectorAll('[data-section]')];
let scrollFrame = 0;

function track() {
  scrollFrame = 0;
  const doc = document.documentElement;
  let section = sections[0];
  if (window.scrollY + window.innerHeight >= doc.scrollHeight - 4) {
    section = sections[sections.length - 1];
  } else if (window.scrollY > 4) {
    const line = window.innerHeight / 3;
    for (const s of sections) if (s.getBoundingClientRect().top <= line) section = s;
  }
  setCurrent(section.id);
}
window.addEventListener('scroll', () => { if (!scrollFrame) scrollFrame = requestAnimationFrame(track); }, { passive: true });
track();

// Place the marker without motion first, then let it slide from section to section.
function settle() {
  index.removeAttribute('data-ready');
  placeMarker();
  requestAnimationFrame(() => requestAnimationFrame(() => index.setAttribute('data-ready', '')));
}
settle();
document.fonts.ready.then(settle);
let resizeFrame = 0;
window.addEventListener('resize', () => {
  cancelAnimationFrame(resizeFrame);
  resizeFrame = requestAnimationFrame(() => { track(); settle(); });
}, { passive: true });

/* ---------- phones: the running head opens the index ---------- */

function setOpen(open) {
  if (open) index.setAttribute('data-open', '');
  else index.removeAttribute('data-open');
  toggle.setAttribute('aria-expanded', String(open));
  // The list is hidden while closed; once open, its marker needs measuring.
  if (open) placeMarker();
}

toggle.addEventListener('click', () => setOpen(!index.hasAttribute('data-open')));

for (const a of links) a.addEventListener('click', () => setOpen(false));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && index.hasAttribute('data-open')) {
    setOpen(false);
    toggle.focus();
  }
});

document.addEventListener('pointerdown', (event) => {
  if (index.hasAttribute('data-open') && !index.contains(event.target)) setOpen(false);
});

phone.addEventListener('change', () => { setOpen(false); settle(); });

/* ---------- the banner: each line set to the full measure ---------- */

const bannerLines = [...document.querySelectorAll('.banner-line')];
const banner = document.querySelector('.banner');

function fitBanner() {
  for (const line of bannerLines) line.style.fontSize = '';
  if (!banner || banner.clientWidth < 680) return;
  const width = banner.clientWidth;
  const range = document.createRange();
  for (const line of bannerLines) {
    range.selectNodeContents(line);
    const size = parseFloat(getComputedStyle(line).fontSize);
    line.style.fontSize = `${(size * width / range.getBoundingClientRect().width * 0.997).toFixed(2)}px`;
  }
}

/* ---------- photos: a real halftone, dot size following the tone, and a loupe to read them ---------- */

const INK = [29, 27, 23];
const fine = matchMedia('(hover: hover) and (pointer: fine)');

// Where the image actually sits inside its box (the dashboard is cropped like object-fit: cover, top aligned).
function placement(print, img) {
  const w = print.clientWidth, h = print.clientHeight;
  if (!print.closest('.plate-crop')) return { w, h, dw: w, dh: h, ox: 0, oy: 0 };
  const scale = Math.max(w / img.naturalWidth, h / img.naturalHeight);
  const dw = img.naturalWidth * scale, dh = img.naturalHeight * scale;
  return { w, h, dw, dh, ox: (w - dw) / 2, oy: 0 };
}

function printHalftone(print) {
  const img = print.querySelector('img');
  if (!img.complete || !img.naturalWidth || !print.clientWidth) return;
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  const { w, h, dw, dh, ox, oy } = placement(print, img);
  const cw = Math.round(w * dpr), ch = Math.round(h * dpr);

  // the image as the plate shows it, at canvas resolution
  const src = document.createElement('canvas');
  src.width = cw; src.height = ch;
  const sctx = src.getContext('2d', { willReadFrequently: true });
  sctx.drawImage(img, ox * dpr, oy * dpr, dw * dpr, dh * dpr);
  const px = sctx.getImageData(0, 0, cw, ch).data;

  let canvas = print.querySelector('canvas');
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.setAttribute('aria-hidden', 'true');
    print.append(canvas);
  }
  canvas.width = cw; canvas.height = ch;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, cw, ch);
  ctx.fillStyle = `rgb(${INK.join(' ')} / 0.94)`;
  ctx.beginPath();

  // a 45-degree screen; ink coverage follows darkness, levels stretched so a dark screen still reads
  const crop = !!print.closest('.plate-crop');
  const cell = (crop ? 3.6 : 4) * dpr;
  const [lo, hi, max] = crop ? [0.1, 0.62, 0.7] : [0.04, 0.96, 0.84];
  const cos = Math.SQRT1_2, sin = Math.SQRT1_2;
  const span = Math.hypot(cw, ch) / 2 + cell;
  const cx = cw / 2, cy = ch / 2;
  for (let u = -span; u <= span; u += cell) {
    for (let v = -span; v <= span; v += cell) {
      const x = cx + u * cos - v * sin;
      const y = cy + u * sin + v * cos;
      if (x < -cell || y < -cell || x > cw + cell || y > ch + cell) continue;
      const sx = Math.min(cw - 1, Math.max(0, x | 0)), sy = Math.min(ch - 1, Math.max(0, y | 0));
      const i = (sy * cw + sx) * 4;
      if (px[i + 3] < 20) continue;
      const lum = (0.2126 * px[i] + 0.7152 * px[i + 1] + 0.0722 * px[i + 2]) / 255;
      const level = Math.min(1, Math.max(0, (lum - lo) / (hi - lo)));
      const cover = 0.04 + max * Math.pow(1 - level, 1.2);
      const r = cell * Math.sqrt(cover / Math.PI);
      if (r < 0.35 * dpr) continue;
      ctx.moveTo(x + r, y);
      ctx.arc(x, y, r, 0, Math.PI * 2);
    }
  }
  ctx.fill();
  print.classList.add('is-printed');
  print.closest('.plate').classList.add('is-printed');
}

const prints = [...document.querySelectorAll('.print')];
function printAll() { for (const p of prints) printHalftone(p); }
for (const p of prints) {
  const img = p.querySelector('img');
  if (img.complete) printHalftone(p);
  else img.addEventListener('load', () => printHalftone(p), { once: true });
}

// The loupe: a lens over the print that shows the screenshot itself, in colour, at twice the size.
const ZOOM = 2.2;
function wireLoupes() {
  for (const plate of document.querySelectorAll('.plate')) {
    plate.removeAttribute('data-loupe');
    plate.removeAttribute('data-tap');
    plate.classList.remove('is-developed');
  }
  const hint = fine.matches
    ? 'Move the pointer over the print to read it under a loupe.'
    : 'Tap the print to see it in colour.';
  for (const el of document.querySelectorAll('.loupe-hint')) el.textContent = hint;
  for (const plate of document.querySelectorAll('.plate')) plate.setAttribute(fine.matches ? 'data-loupe' : 'data-tap', '');
}

for (const plate of document.querySelectorAll('.plate')) {
  const loupe = document.createElement('div');
  loupe.className = 'loupe';
  loupe.setAttribute('aria-hidden', 'true');
  plate.append(loupe);

  plate.addEventListener('pointermove', (event) => {
    if (!fine.matches || event.pointerType !== 'mouse') return;
    const print = event.target.closest('.print');
    if (!print) { loupe.classList.remove('is-on'); return; }
    const img = print.querySelector('img');
    const box = print.getBoundingClientRect();
    const host = plate.getBoundingClientRect();
    const { dw, dh, ox, oy } = placement(print, img);
    const R = loupe.offsetWidth / 2;
    const x = event.clientX - box.left, y = event.clientY - box.top;
    loupe.style.backgroundImage = `url("${img.currentSrc || img.src}")`;
    loupe.style.backgroundSize = `${dw * ZOOM}px ${dh * ZOOM}px`;
    loupe.style.backgroundPosition = `${R - (x - ox) * ZOOM}px ${R - (y - oy) * ZOOM}px`;
    loupe.style.translate = `${event.clientX - host.left - R}px ${event.clientY - host.top - R}px`;
    loupe.classList.add('is-on');
  });
  plate.addEventListener('pointerleave', () => loupe.classList.remove('is-on'));
  plate.addEventListener('click', () => {
    if (plate.hasAttribute('data-tap')) plate.classList.toggle('is-developed');
  });
}
wireLoupes();
fine.addEventListener('change', wireLoupes);

let printFrame = 0;
function relayout() {
  cancelAnimationFrame(printFrame);
  printFrame = requestAnimationFrame(() => { fitBanner(); printAll(); });
}
window.addEventListener('resize', relayout, { passive: true });
document.fonts.ready.then(fitBanner);
fitBanner();

/* ---------- the full photo: every print opens the original screenshot, in colour and uncropped ---------- */

const viewer = document.querySelector('.viewer');
const viewerImages = viewer.querySelector('.viewer-images');
const viewerCaption = viewer.querySelector('.viewer-caption');
let opener = null;

function openViewer(figure, button) {
  viewerImages.replaceChildren();
  const imgs = [...figure.querySelectorAll('.print img')];
  viewerImages.classList.toggle('is-pair', imgs.length > 1);
  for (const img of imgs) {
    const full = new Image();
    full.src = img.currentSrc || img.src;
    full.alt = img.alt;
    full.width = img.naturalWidth || img.width;
    full.height = img.naturalHeight || img.height;
    viewerImages.append(full);
  }
  const credit = figure.querySelector('.photo-credit');
  const hint = credit.querySelector('.loupe-hint');
  viewerCaption.textContent = credit.textContent.replace(hint ? hint.textContent : '', '').trim();
  opener = button;
  viewer.showModal();
}

viewer.addEventListener('close', () => { if (opener) opener.focus(); });
viewer.querySelector('.viewer-close').addEventListener('click', () => viewer.close());
// a click on the dimmed page around the sheet closes it
viewer.addEventListener('click', (event) => { if (event.target === viewer) viewer.close(); });

for (const plate of document.querySelectorAll('.plate')) {
  const figure = plate.closest('figure');
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'reveal';
  button.innerHTML = '<svg viewBox="0 0 14 14" aria-hidden="true"><path d="M8.5 1.5h4v4M12.5 1.5 8 6M5.5 12.5h-4v-4M1.5 12.5 6 8"/></svg>View full photo';
  button.addEventListener('click', (event) => {
    event.stopPropagation();
    openViewer(figure, button);
  });
  plate.append(button);
}
