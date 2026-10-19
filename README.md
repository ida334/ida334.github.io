# idan akiva · personal site

The site linked from my CV: who I am, what I have built, and how to reach me.

It is set as the front page of an old broadsheet, after the New York Herald Tribune: a blackletter nameplate between two ears, a two-line banner headline, ruled columns with decks and a drop cap, and the project screenshots printed as real halftones. On arrival the page prints itself once (the nameplate stamps in, the banner inks across). Move the pointer over a printed photo to read it under a loupe, or tap it on a phone to see it in colour; every photo also has a "View full photo" button that opens the original, uncropped. The index column on the left marks the section you are reading; on phones it becomes the running head at the top of the page.

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
| `main.js` | The index, the banner fitted to the full measure, the halftone prints, the loupe and the full-photo viewer |
| `assets/fonts/` | Grenze Gotisch, Imbue, Source Serif 4 and Libre Franklin, self-hosted (SIL Open Font License, via Fontsource) |
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
