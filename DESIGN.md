---
name: Idan Akiva
description: One Tel Aviv White City building in hard afternoon sun; each section a floor, each project a balcony, the stairwell window the navigation.
colors:
  sky: "#2b7fc4"
  plaster: "#f5f7f6"
  wall: "#e4ebef"
  shadow: "#557189"
  ink: "#18222a"
  ink-muted: "#4a5862"
  ink-on-glass: "#b9c7d1"
  shutter: "#2c7a69"
  shutter-deep: "#1f5c4f"
  glass: "#20323f"
  glass-hover: "#2d4455"
  lit: "#f3d58a"
  enamel: "#2466a8"
  terrazzo: "#d8dcd9"
typography:
  sign-name:
    fontFamily: "Josefin Sans, Rubik, system-ui, sans-serif"
    fontSize: "clamp(3.4rem, 9.6vw + 0.5rem, 9rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "0.06em"
  sign-floor:
    fontFamily: "Josefin Sans, Rubik, system-ui, sans-serif"
    fontSize: "clamp(3rem, 4.2vw + 1rem, 5.5rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.05em"
  heading-project:
    fontFamily: "Rubik, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 1.2vw + 1.2rem, 2.5rem)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.012em"
  body-lead:
    fontFamily: "Rubik, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 0.9vw + 0.95rem, 1.75rem)"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "-0.005em"
  body-text:
    fontFamily: "Rubik, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  body-small:
    fontFamily: "Rubik, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.4
  label-nav:
    fontFamily: "Rubik, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.02em"
  label-button:
    fontFamily: "Rubik, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.01em"
rounded:
  shutter: "3px"
  nameplate: "4px"
  letterbox: "6px"
  enamel: "14px"
  balcony-end: "4rem"
  balcony-end-phone: "2.5rem"
spacing:
  gutter: "clamp(12px, 6.67vw, 96px)"
  inset: "clamp(20px, 2.8vw, 40px)"
  building-max: "1248px"
  stair-column: "15rem"
  shutter-gap: "12px"
  pane-gap: "8px"
  slab: "22px"
  slab-shade: "10px"
components:
  shutter:
    backgroundColor: "{colors.shutter}"
    textColor: "{colors.plaster}"
    typography: "{typography.label-button}"
    rounded: "{rounded.shutter}"
    padding: "0 1.55em"
    height: "52px"
  shutter-hover:
    backgroundColor: "{colors.shutter-deep}"
    textColor: "{colors.plaster}"
  balcony:
    backgroundColor: "{colors.plaster}"
    textColor: "{colors.ink}"
    rounded: "{rounded.balcony-end}"
  cast:
    backgroundColor: "{colors.shadow}"
  stair-pane:
    backgroundColor: "{colors.glass}"
    height: "62px"
  stair-pane-hover:
    backgroundColor: "{colors.glass-hover}"
  stair-pane-current:
    backgroundColor: "{colors.lit}"
  stair-link:
    textColor: "{colors.shutter-deep}"
    typography: "{typography.label-nav}"
  stair-link-current:
    textColor: "{colors.ink}"
  ribbon:
    backgroundColor: "{colors.glass}"
    textColor: "{colors.plaster}"
  enamel-plate:
    backgroundColor: "{colors.enamel}"
    textColor: "{colors.plaster}"
    rounded: "{rounded.enamel}"
  nameplate:
    backgroundColor: "{colors.lit}"
    textColor: "{colors.ink}"
    rounded: "{rounded.nameplate}"
  plaque:
    backgroundColor: "{colors.plaster}"
    textColor: "{colors.ink}"
    rounded: "{rounded.shutter}"
    padding: "8px 14px 7px"
---

# Design System: Idan Akiva

## Overview

**Creative North Star: "The White City"**

The site is one Tel Aviv Bauhaus apartment block standing in hard afternoon sun. A committed sky blue owns the top of the page and the margins; the building is a column of cool lime-plaster wall rising out of it. Each section is a floor that begins at a plaster slab with its shade beneath, each project is a balcony with a rounded end and a hard cast shadow, and the stairwell window on the right is the navigation, its current pane lit warm. Nothing floats in a card; everything is a piece of the building.

Depth comes from one sun. A single input (pointer x on fine pointers, scroll position on touch) sets the sun's place in the sky, and every shadow on the building answers it: balcony casts skew, relief lettering throws its shade the other way, and window reveals, enamel plates, stairwell panes and the footer plaque shift their offset. The sun rises once on arrival and holds still under reduced motion. Density is generous: wide floor padding, large relief signs, body text in a rounded workhorse sans at comfortable measure.

The world rejects the category default of name hero, card grid and timeline. Projects are balconies, roles are dark ribbon windows, grades are enamel house-number plates, contact is a lobby letterbox above the pilotis, and the footer is the terrazzo ground.

**Key Characteristics:**
- Sky blue page, plaster building, one blue-grey shade hue for every shadow.
- Hard-edged, sun-driven shadows; no ambient or decorative blur.
- Relief lettering in Josefin Sans for the name, floor signs and numerals; Rubik for everything read.
- Shutter green appears only on things you can click.
- Rounded ends on balconies only; everything else is square or barely eased.

## Colors

A sunlit Mediterranean palette: one saturated sky, chalky cool whites, one blue-grey shade, dark glass, and two small accents that each carry a single meaning.

### Primary
- **Mediterranean Sky** (sky): the page background above and around the building, and the browser theme colour. It owns the first viewport's top band and every gutter; it is never used inside the building.

### Secondary
- **Louvre Green** (shutter): the fill of every clickable shutter button, overlaid with the authored louvre slat pattern. **Deep Louvre** (shutter-deep) is its hover state and the text colour for inline links (README sources) and stairwell floor names.

### Tertiary
- **Lit Window Yellow** (lit): the sun disc, the current stairwell pane, the years on the experience ribbons, the letterbox nameplate, and text selection. It means "here" or "light".
- **Enamel Blue** (enamel): only the grade plates on the Study floor, edged with a plaster keyline.

### Neutral
- **Lime Plaster** (plaster): parapet, slab bands, balconies, stairwell tower, letterbox, footer plaque, and text on dark glass or green.
- **Shaded Wall** (wall): the building's face behind the floors.
- **Afternoon Shade** (shadow): every cast shadow, slab underside, the building's return wall, the undercroft between the pilotis, sign separators and the scrollbar thumb.
- **Window Glass** (glass): project image wells, experience ribbons, the letterbox slot and stairwell panes. **Glass Hover** (glass-hover) lifts an unlit pane on hover.
- **Ink** (ink): text, focus rings, status line endings and list dashes. **Muted Ink** (ink-muted): floor notes, degree line, captions, stacks, source notes. **Ink on Glass** (ink-on-glass): secondary text on the dark ribbons.
- **Terrazzo** (terrazzo): base under the authored terrazzo chip pattern on the footer ground.

### Named Rules
**The Shutter Rule.** Shutter green is reserved for clickable actions. If it is not a link or button, it is not green, and every primary action is a green shutter.

**The One Shade Rule.** Every shadow is the shade hue #557189: solid for casts, slab bands, the return wall and the undercroft; the same hue at partial alpha (rgb(85 113 137 / 0.5 to 0.8)) for relief text, window reveals, plates and the plaque. No black or neutral grey shadows.

**The Lit Pane Rule.** Lit yellow marks presence and light (the sun, the current floor, the years, the nameplate). It is never a button fill.

## Typography

**Display Font:** Josefin Sans (with Rubik, system-ui fallback), self-hosted variable woff2
**Body Font:** Rubik (with system-ui, sans-serif fallback), self-hosted variable woff2

**Character:** Josefin Sans is the building's lettering: geometric, wide-tracked, set bold like raised signage on a Bauhaus facade. Rubik's softly rounded corners carry everything a visitor reads.

### Hierarchy
- **Sign / Name** (Josefin 700, clamp(3.4rem, 9.6vw + 0.5rem, 9rem), 0.95, 0.06em, uppercase): the name on the parapet, in relief.
- **Sign / Floor** (Josefin 700, clamp(3rem, 4.2vw + 1rem, 5.5rem), 1, 0.05em): one per floor, in relief.
- **Heading / Project** (Rubik 600, clamp(1.75rem, 1.2vw + 1.2rem, 2.5rem), 1.12, -0.012em): project titles; ribbon role titles and skill column heads use smaller Rubik 600.
- **Body / Lead** (Rubik 500, clamp(1.25rem, 0.9vw + 0.95rem, 1.75rem), 1.3, max 48ch): the roof statement and the contact line.
- **Body / Text** (Rubik 400, 1.0625rem, 1.55): running text; floor notes at 1.125rem in muted ink, max 46rem.
- **Body / Small** (Rubik 400, 0.9375rem): tech stacks, course names, footer; captions drop to 0.8125rem.
- **Label / Nav** (Rubik 500, 0.9375rem, 1, 0.02em): stairwell floor names; 0.8125rem in the phone strip.
- **Label / Button** (Rubik 500, 1.0625rem, 1.2, 0.01em): shutter labels.

### Named Rules
**The Relief Rule.** Only Josefin signage (the name and floor signs) carries the relief text shadow, and its offset follows the sun. Rubik text is never shadowed.

**The Numeral Rule.** Numbers that are objects (ribbon years, grade plates) are set in Josefin 700 with tabular lining numerals; numbers inside sentences stay in Rubik.

## Layout

The building is a centred column (width min(100% - 2 x gutter, 1248px)) on the sky, starting below a sky band of clamp(40px, 11.6vw, 168px) where the sun travels. A shade-coloured return wall runs down its right edge. Floors stack vertically with clamp(72px, 8vw, 104-112px) padding; each non-roof floor opens with a 22px plaster slab over a 10px shade band. Content sits on a left inset of clamp(20px, 2.8vw, 40px).

Balconies are whole bays anchored to the left wall at set widths (100%, 80%, 70% of the floor; 94/84/76% below 1080px; full minus 18px below 640px). Project balconies are two-column grids (copy and window, about 1 : 1.08) that alternate sides, collapsing to one column with the window first below 900px. Plates run 6 / 3 / 2 columns, skill columns 4 / 2 / 2.

At 1080px and up a 15rem stair column is reserved on the right of every floor for a fixed plaster stair tower of six glass panes, placed level with the first balcony, panes shrinking from 62px to 32px on short screens and riding up so it never overlaps the pilotis. Below 1080px the stairwell becomes a sticky 52px horizontal strip of panes at the top of the viewport that scrolls sideways to keep the lit pane in view. The page ends on pilotis standing in shade, then the terrazzo ground.

## Elevation & Depth

Depth is architectural and lit by one sun. There is no ambient elevation and no hover lift; surfaces sit flat against the wall, and their shade is geometry. Hard parallelogram casts hang beneath each balcony (skewX driven from +40deg to -40deg by the sun, resting at 16deg), slabs carry a solid shade band, and recessed elements (window reveals, the letterbox slot, stairwell panes) take an inset shade on the sun-facing edges. The sun factor --sun-x (1 at the resting afternoon sun, down to -1.5 as it passes right) scales the horizontal offset of every non-cast shadow.

### Shadow Vocabulary
- **Cast** (solid shade parallelogram, `transform: skewX(16deg)` at rest): under every balcony, project and the letterbox.
- **Relief** (`text-shadow: 0.045em 0.075em 0.012em rgb(85 113 137 / 0.55)` as the CSS fallback; the sun sets x to 0.036em at rest, ranging 0.09em to -0.09em): name and floor signs.
- **Window reveal** (`box-shadow: inset calc(var(--sun-x) * 14px) 14px 3px -3px rgb(85 113 137 / 0.75)`): project image wells.
- **Plate** (`box-shadow: inset 0 0 0 3px plaster, calc(var(--sun-x) * 6px) 8px 3px rgb(85 113 137 / 0.6)`): enamel grade plates.
- **Pane reveal** (`box-shadow: inset calc(var(--sun-x) * 6px) 0 1px -1px rgb(85 113 137 / 0.7)`): desktop stairwell panes.
- **Plaque** (`box-shadow: calc(var(--sun-x) * 4px) 5px 2px rgb(85 113 137 / 0.5)`): the footer plaque.

### Named Rules
**The One Sun Rule.** Every shadow answers the same sun. New shadowed elements read --sun-x or join the cast and relief sets; a shadow that ignores the sun is a defect.

**The Hard Shade Rule.** Shade edges are hard: solid fills or blur of 3px or less. Depth is never a soft ambient glow.

## Shapes

Square by default: walls, slabs, ribbons, glass wells and panes have no radius. The single soft silhouette is the balcony's rounded outer end (0 4rem 4rem 0; 2.5rem on phones), the White City's signature curve. Small objects get small, honest eases: shutters and the plaque 3px, the nameplate 4px, the letterbox 6px, enamel plates 14px like real house-number plates. Lines are drawn, not boxed: status uses an 84px stroke with an ending, list items take a 12 x 2px ink dash, skill heads sit on a 2px ink rule.

## Components

### Buttons (Shutters)
Louvred and solid, like a painted shutter.
- **Shape:** barely eased corners (3px), min-height 52px, horizontal padding 1.55em.
- **Primary:** shutter green fill, plaster label, with the authored louvre slat SVG (8 x 7px, white at 12%) tiled over it.
- **Hover / Focus:** hover deepens to shutter-deep on fine pointers only (160ms); press scales to 0.97; focus is the global 3px ink outline at 3px offset.
- **Groups:** inline rows with a 12px gap; stacked in Contact.

### Balconies
- **Corner Style:** square at the wall, 4rem rounded outer end.
- **Background:** plaster on the shaded wall.
- **Shadow Strategy:** a solid shade cast hangs beneath, skewed by the sun.
- **Internal Padding:** left inset, clamp(40px, 5vw, 72px) on the rounded end.

### Navigation (Stairwell)
- **Desktop (1080px and up):** a fixed plaster tower, 8px padding and gap, six glass panes with right-aligned floor names in shutter-deep Label / Nav. The current floor's pane turns lit yellow and its name goes ink 600. Hover lifts an unlit pane to glass-hover and underlines the name.
- **Below 1080px:** a sticky 52px plaster strip of glass pane links (plaster text, 0.8125rem); the current pane is lit with ink text; focus outline is inset and lit-coloured on glass.

### Project Status
Status is a drawn line with an ending, never a pill: a filled dot for a live demo, a 3px bar for finished, an open ring for no public code. Ink only, 84 x 14px, beside a Rubik 500 label.

### Ribbon Windows (Experience)
A dark glass band with a 12px shade strip along its top edge, Josefin years in lit yellow on the left and the role in plaster Rubik 600 with the organisation in ink-on-glass; role points hang beneath on the wall with ink dashes.

### Enamel Plates (Study)
Enamel blue house-number plates (14px radius, 3px inset plaster keyline) carrying the grade in Josefin 700, with the course name below in muted ink. Their drop shade follows the sun.

### Letterbox and Ground (Contact, footer)
A plaster letterbox with a dark glass slot shaded on its top edge and a lit nameplate; pilotis are plaster columns lit on 70% of their width, standing in solid shade. The footer is terrazzo ground with a small plaster plaque.

## Do's and Don'ts

### Do:
- **Do** paint every clickable action as a shutter (shutter green, plaster label, louvre overlay, 3px radius) and nothing else green.
- **Do** draw every shadow in the shade hue #557189, solid or at partial alpha, and drive its offset or skew from the shared sun.
- **Do** hang new content as whole balconies anchored to the left wall, with a rounded outer end and a cast beneath.
- **Do** start every floor at a slab (22px plaster over 10px shade) with a Josefin relief sign.
- **Do** hold the sun still under prefers-reduced-motion and drive it by scroll on touch.

### Don't:
- **Don't** use cards, boxed panels or bordered containers; content is balcony, ribbon, plate or window.
- **Don't** use soft ambient drop shadows or black/grey shadows; shade is hard-edged and blue-grey.
- **Don't** use shutter green for status, decoration or non-interactive text.
- **Don't** put status in pills or badges; draw it as a line ending.
- **Don't** set running text in Josefin Sans or add relief shadows to Rubik.
