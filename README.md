# idan akiva · personal site

The site linked from my CV: who I am, what I have built, and how to reach me.

It is drawn as one Tel Aviv "White City" building in afternoon sun. Each section is a floor, each project a balcony, and the tall stairwell window on the right is the navigation. Move the pointer and the sun moves with it; every shadow on the building follows.

## Run it locally

No build step. Serve the folder and open it:

```bash
python -m http.server 4173 --bind 127.0.0.1
```

Then visit http://127.0.0.1:4173/.

## Files

| Path | What it is |
| --- | --- |
| `index.html` | The whole page |
| `styles.css` | Layout, type and the building's materials |
| `main.js` | Lights the current floor in the stairwell and moves the sun |
| `assets/fonts/` | Rubik and Josefin Sans, self-hosted (SIL Open Font License, via Fontsource) |
| `assets/img/` | Screenshots of my own projects, the terrazzo texture and the link-preview image |
| `tools/` | Playwright scripts: capture the World Cup dashboard, take review screenshots, generate the terrazzo tile |

## Tools

```bash
npm install
npx playwright install chromium
node tools/capture-worldcup.mjs   # refresh the dashboard screenshot
node tools/shoot.mjs              # desktop, tablet and phone screenshots into .impeccable/review/
```

Designed in Figma, built with Claude Code.
