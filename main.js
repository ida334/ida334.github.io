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
