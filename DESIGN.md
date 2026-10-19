---
name: Idan Akiva
description: The front page of an old broadsheet about Idan Akiva's work, set in ink on aged newsprint.
colors:
  paper: "#e8e2d1"
  paper-deep: "#dbd3bf"
  ink: "#1d1b17"
  ink-soft: "#4d483f"
  ink-lift: "#3a362e"
  hair: "rgb(29 27 23 / 0.32)"
  leader: "rgb(29 27 23 / 0.42)"
  age: "rgb(122 92 40 / 0.13)"
  scrim: "rgb(29 27 23 / 0.72)"
  press: "#a3311f"
typography:
  flag:
    fontFamily: "Grenze Gotisch, Old English Text MT, Georgia, serif"
    fontSize: "clamp(3.4rem, 12.4cqi, 9.5rem)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "0.005em"
  banner:
    fontFamily: "Source Serif 4, Georgia, Times New Roman, serif"
    fontSize: "4.95cqi"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.012em"
  section-title:
    fontFamily: "Imbue, Bodoni 72, Didot, Georgia, serif"
    fontSize: "clamp(3.25rem, 5cqi + 1.4rem, 6rem)"
    fontWeight: 700
    lineHeight: 0.86
    letterSpacing: "0.01em"
  headline:
    fontFamily: "Source Serif 4, Georgia, Times New Roman, serif"
    fontSize: "clamp(2.25rem, 2.6cqi + 1.2rem, 3.6rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.02em"
  deck:
    fontFamily: "Source Serif 4, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.5rem, 1.5cqi + 0.7rem, 2.125rem)"
    fontWeight: 700
    lineHeight: 1.06
    letterSpacing: "-0.01em"
  deck-condensed:
    fontFamily: "Imbue, Bodoni 72, Didot, Georgia, serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.12
  pull-quote:
    fontFamily: "Source Serif 4, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.75rem, 2.4cqi + 0.5rem, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.01em"
  figure:
    fontFamily: "Imbue, Bodoni 72, Didot, Georgia, serif"
    fontSize: "clamp(2.25rem, 1.6cqi + 1.4rem, 3rem)"
    fontWeight: 700
    lineHeight: 0.9
    fontFeature: "\"tnum\", \"lnum\""
  notice-lead:
    fontFamily: "Source Serif 4, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.625rem, 2.4cqi + 0.9rem, 2.75rem)"
    fontWeight: 400
    lineHeight: 1.3
  lede:
    fontFamily: "Source Serif 4, Georgia, Times New Roman, serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.45
  section-deck:
    fontFamily: "Source Serif 4, Georgia, Times New Roman, serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "Source Serif 4, Georgia, Times New Roman, serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label-caps:
    fontFamily: "Libre Franklin, Franklin Gothic Medium, Arial Narrow, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.07em"
  label:
    fontFamily: "Libre Franklin, Franklin Gothic Medium, Arial Narrow, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.01em"
  index:
    fontFamily: "Libre Franklin, Franklin Gothic Medium, Arial Narrow, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 500
    lineHeight: 1.25
  caption:
    fontFamily: "Libre Franklin, Franklin Gothic Medium, Arial Narrow, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.45
rounded:
  none: "0"
  screen-phone: "20px"
  screen-widget: "16px"
  lens: "50%"
spacing:
  gutter: "clamp(16px, 4vw, 56px)"
  rail: "10.5rem"
  rail-tablet: "8.75rem"
  gap: "clamp(24px, 3vw, 48px)"
  col-gap: "clamp(24px, 3vw, 44px)"
  top: "clamp(20px, 3vw, 40px)"
  section: "clamp(56px, 7vw, 104px)"
  story: "clamp(40px, 5vw, 64px)"
  item: "18px"
  list: "10px"
components:
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 1.25em"
    height: "48px"
  button-ink-hover:
    backgroundColor: "{colors.ink-lift}"
    textColor: "{colors.paper}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 1.25em"
    height: "48px"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-reveal:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 14px"
    height: "40px"
  button-reveal-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  index-link:
    textColor: "{colors.ink-soft}"
    typography: "{typography.index}"
    padding: "11px 0 10px 18px"
  index-link-current:
    textColor: "{colors.ink}"
  index-marker:
    backgroundColor: "{colors.press}"
    rounded: "{rounded.none}"
    size: "8px"
  ear:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "8px 11px 9px"
    width: "14.5rem"
  ear-edition:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "12px 16px"
  folio:
    textColor: "{colors.ink}"
    padding: "7px 0 13px"
  byline:
    textColor: "{colors.ink}"
    typography: "{typography.label-caps}"
    padding: "8px 0 9px"
  news-brief:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "clamp(20px, 2.4vw, 32px)"
  pull:
    textColor: "{colors.ink}"
    typography: "{typography.pull-quote}"
    padding: "26px 8px 22px"
  notice:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "clamp(28px, 5cqi, 64px) clamp(20px, 4cqi, 56px)"
  plate-crop:
    backgroundColor: "{colors.paper-deep}"
    rounded: "{rounded.none}"
  loupe:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.lens}"
    size: "176px"
  viewer-sheet:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "clamp(16px, 3vw, 32px)"
  viewer-close:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    size: "44px"
  caption:
    textColor: "{colors.ink-soft}"
    typography: "{typography.caption}"
---

# Design System: Idan Akiva

## Overview

**Creative North Star: "The Morning Edition"**

The site is the front page of an old broadsheet about one person's work, modelled on a 1927 New York Herald Tribune front page. Everything is printed: warm ink-black type on aged newsprint with a fibre grain and edges yellowed with age, a blackletter nameplate between two ears, a two-line banner set to the full measure, three ruled columns under it, and photographs that print as real halftone dots until the reader asks for the original. Behind the front page come the inside pages: section after section of stories, reports, a results table, listings and a boxed notice.

Density is a broadsheet's, not a brochure's: real columns with real rules, heavy serif headlines that carry the page, stacked decks under short centred rules, and reading text set at a comfortable book size. Ornament comes only from the press itself (rules, dot leaders, double-ruled boxes, ears, a drop cap, a pull quote, dateline run-ins, the halftone screen); nothing is decorated that a compositor could not have set in metal or a platemaker could not have screened. One spot colour, a muted press red, is reserved for "you are here".

The world is editorial, not a costume: labels, numbers and links stay plain and legible, and the newspaper devices are used because they organise the content. The page prints itself once on arrival, and the photos reward a closer look (a loupe, a tap, a full view), but nothing moves for its own sake after that.

**Key Characteristics:**
- Newsprint ground with an authored fibre-and-mottle grain tile, yellowed toward the edges, warm ink type, no white anywhere.
- Four faces with fixed jobs: blackletter for the nameplate only, a heavy text serif for the banner, headlines, decks and reading, a condensed Didone for secondary decks, section titles and grades, a working sans for everything set small.
- Rules do the structural work: thin, thick-and-thin (Oxford), double, short centred rules between decks, hairline column rules and dot leaders.
- Square corners on every surface the paper prints; only device screenshots keep their own rounded screens, and the loupe is a round lens.
- One accent, the press red, used for the index marker and text selection and nothing else.
- Photos rest as halftone prints in ink; colour is shown on request (loupe, tap, full view), never as the resting state.

## Colors

A two-tone press: warm ink on warm, ageing newsprint, with a single spot of red.

### Primary
- **Press Red** (press): the one spot colour. It fills the 8px square index marker that slides to the section in view and the `::selection` background (with paper text). It never colours text, links, buttons, rules or headings. The favicon repeats it as the same small square beside the index lines.

### Neutral
- **Newsprint** (paper): the page ground everywhere, always under the authored `newsprint.svg` grain tile (320px); also the viewer sheet, the running head, the phone index sheet, the loupe ground and the reveal and close buttons. Reversed text on ink buttons and selection, and the browser `theme-color`.
- **Deep Newsprint** (paper-deep): the backing of the cropped dashboard plate while it has not yet printed (no script, image still loading); it drops away once the halftone is drawn.
- **Press Ink** (ink): all headings, body text, solid rules, ear and box borders, the ink button fill, list squares, the focus outline and the halftone dots (printed at 0.94 opacity).
- **Faded Ink** (ink-soft): secondary text: section decks, photo credits and captions, the pull-quote note, the stack line, source notes, the colophon and inactive index entries.
- **Lifted Ink** (ink-lift): the hover state of the ink button only.
- **Column Hair** (hair): hairline column rules between columns (front page, stories, reports, results, listings, index), byline rules, results-row rules, index-entry separators, the jump-line rule, the viewer caption rule and the rule beside a section deck.
- **Leader Ink** (leader): the 2px dotted leaders that run from a course name to its grade.
- **Yellowed Edge** (age): the outer stop of the fixed radial vignette laid over the whole sheet (transparent to 62%, then this tone at the edge), so the paper reads as aged toward its margins. It is a property of the paper, never a fill on a component.
- **Press Scrim** (scrim): the backdrop behind the open photo viewer.

### Named Rules
**The Spot Colour Rule.** Press red marks only where the reader is (the index marker) and what the reader has selected. If a new element wants red, it does not get it.

**The No-White Rule.** The page is newsprint, not white. Surfaces, plates, the viewer and overlays carry the paper colour and its grain; pure white appears only in the print stylesheet.

## Typography

**Nameplate Font:** Grenze Gotisch (variable weight, with Old English Text MT, Georgia)
**Headline and Body Font:** Source Serif 4 (optical-size variable, roman and italic, with Georgia, Times New Roman)
**Condensed Font:** Imbue (optical-size variable, with Bodoni 72, Didot, Georgia)
**Label Font:** Libre Franklin (variable weight, with Franklin Gothic Medium, Arial Narrow, Arial)

**Character:** A blackletter nameplate gives the paper its title; a heavy optical-size text serif sets the banner and headlines the way the broadsheets did, and in bold italic it sets the decks; a tall condensed Didone carries the secondary decks, section names and figures; a Franklin gothic, the classic newspaper working sans, sets every small functional line.

### Hierarchy
- **Flag** (Grenze Gotisch 700, clamp(3.4rem, 12.4cqi, 9.5rem), 0.9, one line; 21cqi when the paper is 700px or narrower): the nameplate "Idan Akiva" only.
- **Banner** (Source Serif 4 800, 1.04, -0.012em): the two-line banner under the folio. CSS sets the lines at 4.05cqi and 4.95cqi on one line each; the script then fits each line to the full column width whenever the banner is 680px or wider. On narrower papers both lines wrap, balanced, at clamp(1.75rem, 7.6cqi, 2.6rem).
- **Section Title** (Imbue 700, clamp(3.25rem, 5cqi + 1.4rem, 6rem), 0.86, uppercase; clamp(2.75rem, 13cqi, 3.5rem) on phones): the name of each section on its section head.
- **Headline** (Source Serif 4 800, clamp(2.25rem, 2.6cqi + 1.2rem, 3.6rem), 1, -0.02em, title case): story headlines. Smaller steps for experience reports (clamp(1.75rem, 1.5cqi + 1rem, 2.5rem)) and the news brief (clamp(1.75rem, 1.4cqi + 1rem, 2.4rem)).
- **Deck** (Source Serif 4 bold italic 700, clamp(1.5rem, 1.5cqi + 0.7rem, 2.125rem), 1.06, centred): the head of each front-page column. The photo headline is the same voice smaller (italic 700, clamp(1.125rem, 0.8cqi + 0.8rem, 1.5rem), 1.2).
- **Condensed Deck** (Imbue 700, 1.25rem, 1.12, centred): the second deck under a front-page column head.
- **Pull Quote** (Source Serif 4 italic 700, clamp(1.75rem, 2.4cqi + 0.5rem, 2.75rem), 1.12, centred).
- **Figure** (Imbue 700, clamp(2.25rem, 1.6cqi + 1.4rem, 3rem), 0.9, tabular lining figures): grades in the results table.
- **Notice Lead** (Source Serif 4 400, clamp(1.625rem, 2.4cqi + 0.9rem, 2.75rem), 1.3, max 24ch): the contact notice.
- **Lede / Section Deck** (Source Serif 4 400, 1.25rem/1.45 and 1.125rem/1.45, section deck max 56ch in faded ink): the opening paragraph of a story; the line beside a section title.
- **Body** (Source Serif 4 400, 1.0625rem, 1.6; 1.55 in the front columns): reading text, facts and points lists, listings. The front page's intro opens on a three-line drop cap (Source Serif 4 800, 3.35em).
- **Label Caps** (Libre Franklin 600-800, 0.72-0.8125rem, 0.06-0.12em tracking, uppercase): folio, ear titles, bylines, dateline run-ins, jump lines, listing heads, the index title and the phone running head.
- **Label** (Libre Franklin 600, 0.9375rem, 1.2, 0.01em): buttons and source links. The reveal button is Franklin 700 0.75rem uppercase at 0.08em. Index entries are Franklin 500 0.9375rem (0.875rem on tablet, 1rem on phones), 700 when current.
- **Caption** (Libre Franklin 400, 0.8125rem, 1.45, faded ink): photo credits; source notes and the viewer caption use the same face at 0.875rem.

### Named Rules
**The Four Jobs Rule.** Grenze Gotisch sets the nameplate and nothing else; Source Serif 4 sets the banner, headlines, decks, pull quote and anything meant to be read; Imbue sets condensed decks, section titles and figures; Libre Franklin sets anything meant to be scanned (labels, folio, ears, datelines, bylines, index, buttons, captions). A face never takes another face's job.

**The Full Measure Rule.** Each banner line fills the column edge to edge on one line wherever the banner is 680px or wider; below that it wraps and balances rather than shrinking past legibility.

**The Run-In Dateline Rule.** A story's status leads its first paragraph as a Franklin uppercase run-in ending in an em dash ("Live demo —"), inside the paragraph, never as a separate label above the headline.

## Layout

The page is a grid of two columns inside a 1440px maximum: an index rail (10.5rem; 8.75rem below 1200px) and the paper column, separated by a gap of clamp(24px, 3vw, 48px) with a hairline column rule drawn in its middle. Side gutters are clamp(16px, 4vw, 56px). The paper is an inline-size container, so every content breakpoint is a container query that already accounts for the rail.

The front page stacks: the nameplate (left ear, flag, right ear on a 1fr/auto/1fr grid), the folio, the banner closed by a 1px ink rule, then the front in three columns at 3fr/6fr/3fr with hairline column rules either side of the centre: the intro column, the lead photo, and the Experience teaser. At a paper of 980px the photo moves on top across the full width (closed by an ink rule) and the two text columns sit side by side under it; at 700px the front is one column (intro, photo, teaser), the ears drop under the flag side by side, the folio centres onto stacked lines and the contact buttons return to a row. Front-column text is justified (with hyphenation) only when the paper is 821px or wider.

Inside, stories alternate a 5:7 and 7:5 split of text and photo under a full-width headline, with a hairline column rule between; a story without a photo sets its text at 7:5 beside a pull quote. The brief sits head-beside-text at 5:7 in a box. Experience is a 4:8 pair of reports; the study results are a two-column table filled top to bottom; skills are four ruled listing columns. Column gap is clamp(24px, 3vw, 44px) throughout. Sections open clamp(56px, 7vw, 104px) apart; stories are separated by a solid ink rule; inner rhythm is 18px between story parts and 10px between list items. At 980px experience reports stack and listings drop to two columns; at 820px section heads, stories and the brief collapse to one column (headline, photo, text); at 640px the results table becomes one column and the long report's points drop to one column.

Below 768px the page becomes a single paper column and the rail turns into a sticky 52px running head across the top; section anchors scroll to just under it.

## Elevation & Depth

The paper is flat. Depth comes from print devices, never from lifting surfaces: weight of rule (hairline, 1px ink, 3px ink, double), tone of ink, and the age of the sheet itself (a fixed radial vignette yellowing the edges, laid over everything with no pointer events). Shadows exist only on the two instruments that sit above the paper: the phone index sheet and the loupe. The photo viewer is a modal sheet over a dark scrim, edged by a double rule rather than a shadow.

### Shadow Vocabulary
- **Overlay sheet** (`box-shadow: 0 14px 24px -12px rgb(29 27 23 / 0.35)`): the open phone index only, together with its 3px ink bottom rule.
- **Loupe lift** (`box-shadow: inset 0 0 0 5px rgb(232 226 209 / 0.85), inset 0 0 0 6px var(--ink), 0 14px 28px -10px rgb(29 27 23 / 0.55)`): the lens, with its inner paper ring and ink hairline.

### Named Rules
**The Flat Press Rule.** Nothing printed on the paper casts a shadow. Separation is a rule, a box or a change of ink, the way a compositor would do it; only instruments held over the paper (the index sheet, the loupe) lift.

## Shapes

Every edge the paper prints is square: buttons, ears, the brief box, the double-ruled notice, the viewer sheet and its close button, plates, list bullets (7px ink squares) and the index marker (8px press-red square). Rules are drawn rather than bordered where they combine: the folio carries a thin rule above and a thin-over-thick rule below; section heads and the colophon open on a thick-and-thin (3px over 1px) Oxford rule, both painted with stacked background gradients; the index title closes on a thick-over-thin pair. Front-page decks are separated by short centred 1px ink rules (3.5rem). The left ear is a 1px ink box with a ruled title; the right ear is a 3px double-ruled box and the pull quote sits between 3px double rules; the contact notice and the viewer sheet are 4px double rules. Column rules are 1px hairlines drawn as pseudo-elements centred in the column gap. The only rounded shapes are the What2Wear device screenshots (20px phone, 16px widget; 14px and 10px when the paper is under 640px, and the same 20px/16px in the viewer), because they are pictures of rounded screens, and the loupe, which is a round lens (50%).

## Components

### Buttons
Set in ink, square, like a reversed-out slug.
- **Shape:** square corners (0), 1.5px ink border, minimum height 48px, padding 0 1.25em.
- **Ink (primary):** ink fill with paper text in Franklin 600 0.9375rem. One per group, for the main action (email, live demo, README).
- **Outline (secondary):** transparent with ink text and border; it fills with ink and reverses to paper on hover.
- **Front column:** in the intro column the three buttons stack full width with centred labels; at a 700px paper they return to a row.
- **Hover / Focus / Press:** the ink button lifts to Lifted Ink on hover (fine pointers only); colour changes run 160ms ease. Pressing scales to 0.97 with cubic-bezier(0.23, 1, 0.32, 1). Focus is the global 2px ink outline at 3px offset.

### Links
Inline links inherit the text colour with a 1px underline offset 0.2em that thickens to 2px on hover. Source links are Franklin 600 with a small drawn outbound arrow (stroked SVG, current colour). The folio's "Price: one email" is a mailto link without an underline until hover.

### Nameplate
The blackletter flag sits centred between two ears. Over the flag, one spaced line names the trade (Source Serif 4 600 uppercase at 0.42em tracking); it belongs to the nameplate alone and is not a pattern for labels elsewhere. The left ear, "The Forecast", is a 1px ink box (max 14.5rem) with a centred Franklin 800 caps title over a 1px rule and a short Franklin 500 0.78rem item; the right ear is a 3px double-ruled box holding "Class of 2026 Edition" in centred Franklin 800 caps. Ears narrow to 11.5rem at a 980px paper and drop under the flag at 700px.

### Folio
Under the nameplate, between a thin rule and a thin-over-thick rule: degree, university and year, and "Price: one email", in Franklin 600 0.75rem caps at 0.08em, spread across the measure as a row; stacked and centred at a 700px paper.

### Banner
Two lines of Source Serif 4 800 closed by a 1px ink rule, each fitted to the full column width (see the Full Measure Rule).

### Front Columns
Each text column opens on a bold italic deck, then an Imbue condensed deck, then the text, each separated by a short centred ink rule. The intro opens on a drop cap and ends on the stacked contact buttons. The teaser ends on a jump line ("Continued in Experience", Franklin 700 caps over a hairline). The centre column is the lead photo under its italic photo headline, with a credit beneath.

### Section Head
Opens on the thick-and-thin rule and closes on a 1px ink rule. The uppercase Imbue title sits beside a faded-ink deck, divided by a hairline; they stack at an 820px paper.

### Stories
A heavy serif headline across the full width, then text and a printed photo side by side under a hairline column rule; alternate stories mirror. The lede opens with its dateline run-in; facts are a list with 7px ink squares; then the source link, the stack line in faded Franklin, and the buttons.

### Pull Quote
For a story without a photo: a centred bold italic quote with a small faded Franklin note, between 3px double rules top and bottom, vertically centred beside the text and separated from it by a hairline column rule. It moves under the text at an 820px paper.

### Printed Photos
The signature component. The script prints each photo to a canvas as a real halftone: a 45-degree screen of ink dots whose area follows the darkness of the image (4px cells; 3.6px with stretched levels for the dark dashboard), over the paper. The dashboard sits in a cropped 5:4 plate, top-aligned. Without the script, or before printing, the image shows in grayscale multiplied into the paper (`grayscale(1) contrast(1.1)`; the dark dashboard lifted to `contrast(0.9) brightness(1.1)` on Deep Newsprint). Credits are Franklin in faded ink, followed by an italic hint that matches the input.
- **Loupe (fine pointer, mouse):** a 176px round lens with a 2px ink border follows the pointer and shows the colour original at 2.2x. It fades in over 160ms and grows from 0.92 over 200ms (ease-out); under reduced motion it only fades (120ms linear).
- **Develop (touch):** a tap toggles the plate to the colour original (the halftone fades out over 320ms).
- **View full photo:** every plate carries a square paper button (Franklin 700 0.75rem caps, 40px tall, ink border, a drawn expand icon) in its bottom-right corner; it reverses to ink on hover.

### Photo Viewer
A modal dialog: a newsprint sheet (max 1100px, grain tile, 4px double ink rule) over the press scrim, showing the uncropped colour originals (device screens keep their rounded corners) and the credit as a caption under a hairline. A square 44px close button sits sticky at the top right; Escape, the close button or a click on the scrim closes it, and focus returns to the button that opened it. It opens over 220ms, scaling from 0.96 with a fade (ease-out); under reduced motion it only fades (160ms).

### News Brief
The short item: headline beside its lede, boxed in a 1px ink rule with square corners, no fill.

### Experience Report
A smaller headline, then a byline between two hairlines (organisation and tabular years in Franklin caps, spread to the edges), then a points list. The longer report sets its points in two columns with a hairline column rule.

### Results Table
Course names in Source Serif run into 2px dotted leaders that end at the grade in Imbue figures; rows close on hairlines and the two columns are split by a hairline.

### Listings
Four ruled columns, each headed by Franklin caps on a 1px ink rule, entries in body serif.

### Contact Notice
A centred notice in a 4px double rule: the notice lead, then the contact buttons.

### Navigation (the Index)
On tablet and desktop it is a sticky full-height column on the left: an "In this edition" title over a thick-and-thin rule, then the six sections separated by hairlines, faded ink at rest, ink and bold when current, underlined on hover. An 8px press-red square slides to the current entry (transform, 280ms cubic-bezier(0.77, 0, 0.175, 1)), placed without motion on load and resize. On phones it becomes a sticky 52px running head on newsprint with the name on the left and the current section as a toggle on the right; the toggle opens the full index as a sheet (opacity and 6px rise, 180ms cubic-bezier(0.23, 1, 0.32, 1); the caret turns over 200ms). Escape, an outside tap or choosing a section closes it.

### Colophon
Centred faded-ink Franklin note under a thick-and-thin rule.

### Motion
The front page prints itself once on arrival, only when the visitor has not asked for reduced motion (the `press` class is set before first paint in that case alone): the nameplate stamps in (560ms from scale 1.07 and blur, ease-out, after 60ms); the ears and folio fade in (360ms from 300ms); each banner line inks across left to right (520ms clip wipe, cubic-bezier(0.65, 0, 0.35, 1), starting at 380ms and 520ms); the three front columns settle up 10px (460ms ease-out, at 900, 960 and 1020ms). After arrival, motion is limited to state: the marker slide, the phone index sheet, the caret, button colour and press, the loupe, the develop fade and the viewer opening. Under reduced motion, smooth scrolling, the arrival, the marker slide, the sheet's rise, the loupe's growth and the viewer's scale are removed.

## Do's and Don'ts

### Do:
- **Do** set every surface on newsprint (#e8e2d1 under the grain tile) and every mark in ink (#1d1b17) or faded ink (#4d483f).
- **Do** separate content with rules: hairline column rules between columns, 1px ink between stories, thick-and-thin (3px over 1px) to open a section, short centred rules between decks, double rules for ears, pull quotes, the notice and the viewer.
- **Do** keep corners square on everything the paper prints; round only screenshots of rounded device screens and the loupe lens.
- **Do** give each face its job: Grenze Gotisch for the nameplate only; Source Serif 4 for the banner, headlines, decks and reading; Imbue for condensed decks, section titles and figures; Libre Franklin for labels, datelines, bylines, index, buttons and captions.
- **Do** print photographs as halftone dots in ink, and give every plate a way to see the colour original (loupe on fine pointers, tap on touch, "View full photo" everywhere).
- **Do** fit each banner line to the full measure wherever the banner is 680px or wider.
- **Do** lead a story's status as a run-in dateline inside its first paragraph.
- **Do** use one ink button per group and outline buttons for the rest, 48px tall.
- **Do** let the arrival play once and only without reduced motion; everything after it is a response to the reader.

### Don't:
- **Don't** use press red (#a3311f) for anything but the index marker and text selection.
- **Don't** put shadows, colour gradients or tinted fills on the paper's printed surfaces (gradients draw solid ink rules and the sheet's yellowed edge only); the phone index sheet and the loupe are the only shadowed elements.
- **Don't** round buttons, boxes, plates, ears or markers.
- **Don't** set labels above headlines as separate eyebrows; status belongs in the dateline run-in, and the line over the flag belongs to the nameplate alone.
- **Don't** use Grenze Gotisch for anything but the nameplate.
- **Don't** use pure white or a card grid; content sits in ruled columns on the paper.
