# idan akiva · personal site

The site linked from my CV: who I am, what I have built, and how to reach me.

It is set as one edition of an old newspaper: a masthead, column rules, datelines and photos printed in ink on newsprint. The index column on the left marks the section you are reading; on phones it becomes the running head at the top of the page.

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
| `main.js` | Marks the section you are reading in the index, and opens the index on phones |
| `assets/fonts/` | Imbue, Source Serif 4 and Libre Franklin, self-hosted (SIL Open Font License, via Fontsource) |
| `assets/img/` | Screenshots of my own projects, the newsprint grain and the link-preview image |
| `tools/` | Playwright scripts: capture the World Cup dashboard, take review screenshots, check contrast |

## Tools

```bash
npm install
npx playwright install chromium
node tools/capture-worldcup.mjs   # refresh the dashboard screenshot
node tools/shoot.mjs              # desktop, tablet and phone screenshots into .impeccable/review/
```

Designed in Figma, built with Claude Code.
