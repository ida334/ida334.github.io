// The stairwell lights the floor you are on, and the sun sets every shadow on the building.

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = matchMedia('(hover: hover) and (pointer: fine)');

/* ---------- stairwell: light the current floor ---------- */

const links = [...document.querySelectorAll('.stairwell a')];
const linkFor = new Map(links.map((a) => [a.hash.slice(1), a]));
const strip = document.querySelector('.stairwell ol');

function setCurrent(id) {
  const link = linkFor.get(id);
  if (!link || link.hasAttribute('aria-current')) return;
  for (const a of links) a.removeAttribute('aria-current');
  link.setAttribute('aria-current', 'location');
  // On phones the strip scrolls sideways; keep the lit pane in view without moving the page.
  if (strip.scrollWidth > strip.clientWidth) {
    const left = link.offsetLeft - (strip.clientWidth - link.offsetWidth) / 2;
    strip.scrollTo({ left, behavior: reduceMotion.matches ? 'auto' : 'smooth' });
  }
}

const floors = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) if (entry.isIntersecting) setCurrent(entry.target.id);
  },
  { rootMargin: '-45% 0px -50% 0px' }
);
document.querySelectorAll('[data-floor]').forEach((floor) => floors.observe(floor));

// On desktop the stairwell window starts level with the first balcony, below the roof slab,
// and its panes shrink on short screens so the whole window stays in view.
const stairwell = document.querySelector('.stairwell');
const firstBalcony = document.querySelector('.balconies .balcony');
const desktop = matchMedia('(min-width: 1080px)');
const PANES = 6, GAP = 8, MARGIN = 24, MIN_PANE = 32, MAX_PANE = 62, TOWER_PAD = 16;

function placeStairwell() {
  if (!desktop.matches) {
    for (const prop of ['--stair-top', '--stair-shift', '--pane-h']) stairwell.style.removeProperty(prop);
    return;
  }
  let top = firstBalcony.getBoundingClientRect().top + window.scrollY;
  const room = window.innerHeight - top - MARGIN - (PANES - 1) * GAP - TOWER_PAD;
  let pane = Math.min(MAX_PANE, room / PANES);
  if (pane < MIN_PANE) {
    pane = MIN_PANE;
    top = Math.max(MARGIN, window.innerHeight - MARGIN - (PANES - 1) * GAP - TOWER_PAD - PANES * MIN_PANE);
  }
  stairwell.style.setProperty('--stair-top', `${Math.round(top)}px`);
  stairwell.style.setProperty('--stair-shift', 'none');
  stairwell.style.setProperty('--pane-h', `${Math.floor(pane)}px`);
}
// At the end of the page the window rides up with the building, so it never hangs over the pilotis.
const pilotis = document.querySelector('.pilotis');
let clampFrame = 0;
function clampStairwell() {
  clampFrame = 0;
  if (!desktop.matches) { stairwell.style.translate = ''; return; }
  const limit = pilotis.getBoundingClientRect().top - MARGIN;
  const bottom = parseFloat(stairwell.style.getPropertyValue('--stair-top')) + stairwell.offsetHeight;
  const over = bottom - limit;
  stairwell.style.translate = over > 0 ? `0 ${-Math.round(over)}px` : '';
}
window.addEventListener('scroll', () => { if (!clampFrame) clampFrame = requestAnimationFrame(clampStairwell); }, { passive: true });

placeStairwell();
clampStairwell();
document.fonts.ready.then(() => { placeStairwell(); clampStairwell(); });
desktop.addEventListener('change', () => { placeStairwell(); clampStairwell(); });

/* ---------- the sun ---------- */
// p runs 0 → 1 as the sun crosses from the left of the sky to the right.
// Shadows fall away from it: balcony shadows skew, relief letters throw their shade the other way.

const casts = [...document.querySelectorAll('.cast')];
const reliefs = [...document.querySelectorAll('.relief')];
// Window reveals, enamel plates, stairwell panes and the cornerstone read --sun-x from these.
const sunLit = [...document.querySelectorAll('.glass, .plates, .stairwell, .ground')];
const sun = document.querySelector('.sun');
const sky = document.querySelector('.sky');

const RESTING = 0.3;
let travel = 0;
let current = RESTING;
let target = RESTING;
let frame = 0;

function measure() {
  travel = sky.clientWidth - sun.offsetWidth;
}

function render(p) {
  const skew = 40 - p * 80;
  const dx = 0.09 - p * 0.18;
  const transform = `skewX(${skew.toFixed(2)}deg)`;
  const shade = `${dx.toFixed(3)}em 0.075em 0.012em rgb(85 113 137 / 0.55)`;
  // 1 at the resting afternoon sun, negative once the sun passes overhead to the right
  const sunX = Math.max(-1.5, Math.min(1.5, (1 - 2 * p) / 0.4)).toFixed(3);
  for (const cast of casts) cast.style.transform = transform;
  for (const text of reliefs) text.style.textShadow = shade;
  for (const el of sunLit) el.style.setProperty('--sun-x', sunX);
  sun.style.transform = `translateX(${(p * travel).toFixed(1)}px)`;
}

// A light spring toward the target, so the sun eases after the pointer instead of snapping to it.
function tick() {
  current += (target - current) * 0.1;
  if (Math.abs(target - current) < 0.0005) {
    current = target;
    frame = 0;
  } else {
    frame = requestAnimationFrame(tick);
  }
  render(current);
}

function aim(p) {
  target = Math.min(1, Math.max(0, p));
  if (!frame) frame = requestAnimationFrame(tick);
}

function onPointer(event) {
  aim(event.clientX / window.innerWidth);
}

function onScroll() {
  const room = document.documentElement.scrollHeight - window.innerHeight;
  aim(0.2 + 0.6 * (room > 0 ? window.scrollY / room : 0));
}

function wire() {
  window.removeEventListener('pointermove', onPointer);
  window.removeEventListener('scroll', onScroll);
  if (reduceMotion.matches) {
    cancelAnimationFrame(frame);
    frame = 0;
    current = target = RESTING;
    render(current);
    return;
  }
  if (finePointer.matches) window.addEventListener('pointermove', onPointer, { passive: true });
  else window.addEventListener('scroll', onScroll, { passive: true });
}

measure();
window.addEventListener('resize', () => { measure(); render(current); placeStairwell(); clampStairwell(); }, { passive: true });
reduceMotion.addEventListener('change', wire);
finePointer.addEventListener('change', wire);

if (reduceMotion.matches) {
  render(RESTING);
} else {
  // Sunrise: once, on arrival, the shadows swing from long morning shade to the afternoon.
  current = 0.02;
  render(current);
  aim(RESTING);
}
wire();
