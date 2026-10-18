---
name: Idan Akiva
description: One edition of an old newspaper about Idan Akiva's work, set in ink on newsprint.
colors:
  paper: "#e8e2d1"
  paper-deep: "#dbd3bf"
  ink: "#1d1b17"
  ink-soft: "#4d483f"
  ink-lift: "#3a362e"
  hair: "rgb(29 27 23 / 0.32)"
  leader: "rgb(29 27 23 / 0.42)"
  press: "#a3311f"
typography:
  display:
    fontFamily: "Imbue, Bodoni 72, Didot, Georgia, serif"
    fontSize: "30cqi"
    fontWeight: 700
    lineHeight: 0.82
    letterSpacing: "0.012em"
  section-title:
    fontFamily: "Imbue, Bodoni 72, Didot, Georgia, serif"
    fontSize: "clamp(3.25rem, 5cqi + 1.4rem, 6rem)"
    fontWeight: 700
    lineHeight: 0.86
    letterSpacing: "0.01em"
  headline:
    fontFamily: "Imbue, Bodoni 72, Didot, Georgia, serif"
    fontSize: "clamp(2.5rem, 3.6cqi + 1rem, 4.25rem)"
    fontWeight: 600
    lineHeight: 0.94
    letterSpacing: "-0.005em"
  figure:
    fontFamily: "Imbue, Bodoni 72, Didot, Georgia, serif"
    fontSize: "clamp(2.25rem, 1.6cqi + 1.4rem, 3rem)"
    fontWeight: 700
    lineHeight: 0.9
    fontFeature: "\"tnum\", \"lnum\""
  lead:
    fontFamily: "Source Serif 4, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.375rem, 1vw + 1.05rem, 2rem)"
    fontWeight: 400
    lineHeight: 1.3
  lede:
    fontFamily: "Source Serif 4, Georgia, Times New Roman, serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.45
  deck:
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
    lineHeight: 1.4
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
spacing:
  gutter: "clamp(16px, 4vw, 56px)"
  rail: "10.5rem"
  rail-tablet: "8.75rem"
  gap: "clamp(24px, 3vw, 48px)"
  col-gap: "clamp(24px, 3vw, 44px)"
  top: "clamp(20px, 3vw, 44px)"
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
  folio:
    textColor: "{colors.ink}"
    typography: "{typography.label-caps}"
    padding: "10px 0 15px"
  byline:
    textColor: "{colors.ink}"
    typography: "{typography.label-caps}"
    padding: "8px 0 9px"
  news-brief:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "clamp(20px, 2.4vw, 32px)"
  notice:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "clamp(28px, 5cqi, 64px) clamp(20px, 4cqi, 56px)"
  plate-dark:
    backgroundColor: "{colors.paper-deep}"
    rounded: "{rounded.none}"
  caption:
    textColor: "{colors.ink-soft}"
    typography: "{typography.caption}"
---

# Design System: Idan Akiva

## Overview

**Creative North Star: "The Morning Edition"**

The site is one edition of an old newspaper about one person's work. Everything is printed: warm ink-black type on aged newsprint with a faint fibre grain, hairline column rules between columns, thick-and-thin rules over every section, and photographs that print in ink until a pointer brings them up in colour. The reader moves through it like a front page: masthead, folio, standfirst, then section after section of lead stories, reports, a results table, listings and a boxed notice.

Density is a broadsheet's, not a brochure's: real columns with real rules, condensed headlines that carry the page, and reading text set at a comfortable book size. Ornament comes only from the press itself (rules, dot leaders, a double-ruled box, dateline run-ins); nothing is decorated that a compositor could not have set in metal. One spot colour, a muted press red, is reserved for "you are here".

The world is editorial, not a costume: labels, numbers and links stay plain and legible, and the newspaper devices are used because they organise the content, not to stage nostalgia.

**Key Characteristics:**
- Newsprint ground with an authored fibre-and-mottle grain tile, warm ink type, no white anywhere.
- Three faces with fixed jobs: a condensed Didone for the flag and heads, a text serif for reading, a working sans for everything set small.
- Rules do the structural work: thin, thick-and-thin (Oxford), double, hairline column rules and dot leaders.
- Square corners on every surface the paper prints; only device screenshots keep their own rounded screens.
- One accent, the press red, used for the index marker and text selection and nothing else.
- Photos print grayscale multiplied into the paper; colour is a pointer reward, not the resting state.

## Colors

A two-tone press: warm ink on warm newsprint, with a single spot of red.

### Primary
- **Press Red** (press): the one spot colour. It fills the 8px square index marker that slides to the section in view and the `::selection` background (with paper text). It never colours text, links, buttons, rules or headings. The favicon repeats it as the same small square beside the index lines.

### Neutral
- **Newsprint** (paper): the page ground everywhere, always under the authored `newsprint.svg` grain tile (320px). Also the reversed text colour on ink buttons and selection, and the browser `theme-color`.
- **Deep Newsprint** (paper-deep): one job only, the backing of the cropped dashboard plate so a dark screenshot prints as lifted ink on a slightly darker sheet.
- **Press Ink** (ink): all headings, body text, solid rules (thin, thick-and-thin, the brief box, the double-ruled notice), the ink button fill, list squares and the focus outline.
- **Faded Ink** (ink-soft): secondary text: section decks, captions, the stack line, source notes, the colophon and inactive index entries.
- **Lifted Ink** (ink-lift): the hover state of the ink button only.
- **Column Hair** (hair): hairline column rules between columns, byline rules, results-row rules, index-entry separators and the rule beside the standfirst actions and section deck.
- **Leader Ink** (leader): the 2px dotted leaders that run from a course name to its grade.

### Named Rules
**The Spot Colour Rule.** Press red marks only where the reader is (the index marker) and what the reader has selected. If a new element wants red, it does not get it.

**The No-White Rule.** The page is newsprint, not white. Surfaces, plates and overlays carry the paper colour and its grain; pure white appears only in the print stylesheet.

## Typography

**Display Font:** Imbue (optical-size variable, with Bodoni 72, Didot, Georgia)
**Body Font:** Source Serif 4 (optical-size variable, with Georgia, Times New Roman)
**Label Font:** Libre Franklin (variable weight, with Franklin Gothic Medium, Arial Narrow, Arial)

**Character:** A tall condensed Didone gives the page its headline voice and its masthead; a sturdy optical-size text serif makes the long passages read like good newsprint; a Franklin gothic, the classic newspaper working sans, sets every small functional line.

### Hierarchy
- **Display** (Imbue 700, 30cqi, line-height 0.82, uppercase): the masthead flag only. Sized in container units so the name spans the paper column edge to edge at every width, on one line.
- **Section Title** (Imbue 700, clamp(3.25rem, 5cqi + 1.4rem, 6rem), 0.86, uppercase; clamp(2.75rem, 13cqi, 3.5rem) on phones): the name of each section, set large on the section head.
- **Headline** (Imbue 600, clamp(2.5rem, 3.6cqi + 1rem, 4.25rem), 0.94, sentence case): story headlines. Smaller steps for experience reports (clamp(2rem, 1.8cqi + 1.1rem, 3rem)) and the news brief (clamp(2rem, 1.6cqi + 1.1rem, 2.75rem)).
- **Figure** (Imbue 700, clamp(2.25rem, 1.6cqi + 1.4rem, 3rem), 0.9, tabular lining figures): grades in the results table.
- **Lead** (Source Serif 4 400, clamp(1.375rem, 1vw + 1.05rem, 2rem), 1.3, max 44ch): the standfirst and the contact notice.
- **Lede / Deck** (Source Serif 4 400, 1.25rem/1.45 and 1.125rem/1.45, deck max 56ch in faded ink): the opening paragraph of a story; the line beside a section title.
- **Body** (Source Serif 4 400, 1.0625rem, 1.6): reading text, facts and points lists, listings.
- **Label Caps** (Libre Franklin 600-700, 0.75-0.8125rem, 0.06-0.1em tracking, uppercase): folio, bylines, dateline run-ins, listing heads, the index title and the phone running head.
- **Label** (Libre Franklin 600, 0.9375rem, 1.2, 0.01em): buttons and source links. Index entries are Franklin 500 0.9375rem (0.875rem on tablet, 1rem on phones), 700 when current.
- **Caption** (Libre Franklin 400, 0.8125rem, 1.45, faded ink): figure captions; source notes use the same face at 0.875rem.

### Named Rules
**The Three Jobs Rule.** Imbue sets the flag, section titles, headlines and figures; Source Serif 4 sets anything meant to be read; Libre Franklin sets anything meant to be scanned (labels, folio, datelines, bylines, index, buttons, captions). A face never takes another face's job.

**The Run-In Dateline Rule.** A story's status leads its first paragraph as a Franklin uppercase run-in ending in an em dash ("Live demo —"), inside the paragraph, never as a separate label above the headline.

## Layout

The page is a grid of two columns inside a 1440px maximum: an index rail (10.5rem; 8.75rem below 1200px) and the paper column, separated by a gap of clamp(24px, 3vw, 48px) with a hairline column rule drawn in its middle. Side gutters are clamp(16px, 4vw, 56px). The paper is an inline-size container, so every content breakpoint is a container query that already accounts for the rail: at 980px experience reports stack and the listings drop from four columns to two; at 820px the standfirst, section heads and stories collapse to a single column (headline, photo, text); at 700px the folio breaks onto two lines; at 640px the results table becomes one column and the last report's points drop to one column.

Stories alternate a 5:7 and 7:5 split of text and photo with a hairline column rule between them; the brief sits head-beside-text at 5:7 in a box. Experience is a 4:8 pair of reports; the study results are a two-column table filled top to bottom; skills are four ruled listing columns. Column gap is clamp(24px, 3vw, 44px) throughout. Sections open clamp(56px, 7vw, 104px) apart (the first, under the masthead, at clamp(28px, 3.4vw, 52px)); stories are separated by a solid ink rule; inner rhythm is 18px between story parts and 10px between list items.

Below 768px the page becomes a single paper column and the rail turns into a sticky 52px running head across the top; section anchors scroll to just under it.

## Elevation & Depth

The paper is flat. Depth comes from print devices, never from lifting surfaces: weight of rule (hairline, 1px ink, 3px ink, double), tone of ink (ink versus faded ink) and the darker sheet behind the dashboard plate. The single exception is functional: the phone index dropdown, which overlays the page, casts one soft downward shadow so it reads as a sheet lying over the paper.

### Shadow Vocabulary
- **Overlay sheet** (`box-shadow: 0 14px 24px -12px rgb(29 27 23 / 0.35)`): the open phone index only, together with its 3px ink bottom rule.

### Named Rules
**The Flat Press Rule.** Nothing on the paper casts a shadow. Separation is a rule, a box or a change of ink, the way a compositor would do it.

## Shapes

Every edge the paper prints is square: buttons, the brief box, the double-ruled notice, plates, list bullets (7px ink squares) and the index marker (8px press-red square). Rules are drawn rather than bordered where they combine: the folio carries a thin rule above and a thin-over-thick rule below; section heads and the colophon open on a thick-and-thin (3px over 1px) Oxford rule, both painted with stacked background gradients; the index title closes on a thick-over-thin pair. Column rules are 1px hairlines drawn as pseudo-elements centred in the column gap. The contact notice is a 4px double rule. The only rounded corners are the What2Wear device screenshots (20px phone, 16px widget; 14px and 10px when the paper is under 640px), because they are pictures of rounded screens, not shapes of the paper.

## Components

### Buttons
Set in ink, square, like a reversed-out slug.
- **Shape:** square corners (0), 1.5px ink border, minimum height 48px, padding 0 1.25em.
- **Ink (primary):** ink fill with paper text in Franklin 600 0.9375rem. One per group, for the main action (email, live demo, README).
- **Outline (secondary):** transparent with ink text and border; it fills with ink and reverses to paper on hover.
- **Hover / Focus / Press:** the ink button lifts to Lifted Ink on hover (fine pointers only); colour changes run 160ms ease. Pressing scales to 0.97 with cubic-bezier(0.23, 1, 0.32, 1). Focus is the global 2px ink outline at 3px offset.

### Links
Inline links inherit the text colour with a 1px underline offset 0.2em that thickens to 2px on hover. Source links are Franklin 600 with a small drawn outbound arrow (stroked SVG, current colour).

### Masthead
The flag spans the paper column in uppercase Imbue; under it the folio (degree, university, year in Franklin caps separated by middle dots) sits between a thin rule and a thin-over-thick rule. The standfirst sets the lead beside the contact buttons, split by a hairline.

### Section Head
Opens on the thick-and-thin rule and closes on a 1px ink rule. The uppercase Imbue title sits beside a faded-ink deck, divided by a hairline; they stack on narrow papers.

### Stories
A headline across the full width, then text and a printed photo side by side under a hairline column rule; alternate stories mirror. The lede opens with its dateline run-in; facts are a list with 7px ink squares; then the source link, the stack line in faded Franklin, and the buttons.

### Printed Photos
Plates are `mix-blend-mode: multiply` with `grayscale(1) contrast(1.1)`, so screenshots print into the grain. On fine pointers, hovering the figure removes the filter over 320ms to show colour. Dark screens go in a cropped 6:5 plate on Deep Newsprint with their blacks lifted (`contrast(0.9) brightness(1.1)`). Captions are Franklin in faded ink.

### News Brief
The short item: headline beside its lede, boxed in a 1px ink rule with square corners, no fill.

### Experience Report
A smaller headline, then a byline between two hairlines (organisation and tabular years in Franklin caps, spread to the edges), then a points list. The longer report sets its points in two columns with a hairline column rule.

### Results Table
Course names in Source Serif run into 2px dotted leaders that end at the grade in Imbue figures; rows close on hairlines and the two columns are split by a hairline.

### Listings
Four ruled columns, each headed by Franklin caps on a 1px ink rule, entries in body serif.

### Contact Notice
A centred notice in a 4px double rule: the lead line, then the contact buttons.

### Navigation (the Index)
The signature component. On tablet and desktop it is a sticky full-height column on the left: an "In this edition" title over a thick-and-thin rule, then the six sections separated by hairlines, faded ink at rest, ink and bold when current, underlined on hover. An 8px press-red square slides to the current entry (transform, 280ms cubic-bezier(0.77, 0, 0.175, 1)), placed without motion on load and resize. On phones it becomes a sticky 52px running head on newsprint with the name on the left and the current section as a toggle on the right; the toggle opens the full index as a sheet (opacity and 6px rise, 180ms cubic-bezier(0.23, 1, 0.32, 1); the caret turns over 200ms). Escape, an outside tap or choosing a section closes it.

### Colophon
Centred faded-ink Franklin note under a thick-and-thin rule.

### Motion
Motion is limited to state: the marker slide, the phone index sheet, the caret, button colour and press, and the photo colour fade. Under reduced motion, smooth scrolling, the marker slide and the sheet's rise are removed.

## Do's and Don'ts

### Do:
- **Do** set every surface on newsprint (#e8e2d1 under the grain tile) and every mark in ink (#1d1b17) or faded ink (#4d483f).
- **Do** separate content with rules: hairline column rules between columns, 1px ink between stories, thick-and-thin (3px over 1px) to open a section, a 4px double rule for a notice.
- **Do** keep corners square on everything the paper prints; round only screenshots of rounded device screens.
- **Do** give each face its job: Imbue for flag, titles, headlines and figures; Source Serif 4 for reading; Libre Franklin for labels, datelines, bylines, index, buttons and captions.
- **Do** print photographs grayscale and multiplied into the paper, with colour only on fine-pointer hover.
- **Do** lead a story's status as a run-in dateline inside its first paragraph.
- **Do** use one ink button per group and outline buttons for the rest, 48px tall.

### Don't:
- **Don't** use press red (#a3311f) for anything but the index marker and text selection.
- **Don't** put shadows, colour gradients or tinted fills on the paper's surfaces (gradients exist only to draw solid ink rules); the phone index sheet is the only shadowed element.
- **Don't** round buttons, boxes, plates or markers.
- **Don't** set labels above headlines as separate eyebrows; status belongs in the dateline run-in.
- **Don't** use pure white or a card grid; content sits in ruled columns on the paper.
