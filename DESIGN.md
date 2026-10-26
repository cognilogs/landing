---
name: cognilogs
description: End-to-end support automation for any ticketing system
colors:
  paper: "#f7f8f8"
  paper-deep: "#eef1ef"
  surface: "#ffffff"
  surface-muted: "#f1f3f2"
  ink: "#0a0a0b"
  ink-soft: "#252629"
  muted: "#5f6570"
  muted-strong: "#444951"
  line: "#e3e6e5"
  accent: "#f97316"
  accent-wordmark: "#e2660a"
  accent-strong: "#c2410c"
  accent-soft: "#fff1e7"
  accent-ink: "#3b1805"
  green: "#0a9767"
  green-strong: "#06714e"
  green-soft: "#e7f7f0"
  blue: "#377fe6"
  blue-strong: "#1f5fbf"
  blue-soft: "#eaf1ff"
  pink: "#d84f8b"
  pink-strong: "#a62b63"
  pink-soft: "#fdeef5"
  console: "#090b0e"
  console-2: "#101419"
  console-green: "#4fe3a3"
typography:
  display:
    fontFamily: "Inter Variable, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(52px, 6.7vw, 92px)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.055em"
  headline:
    fontFamily: "Inter Variable, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(38px, 4.9vw, 68px)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.048em"
  title:
    fontFamily: "Inter Variable, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(30px, 3.3vw, 44px)"
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: "-0.038em"
  body:
    fontFamily: "Inter Variable, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0em"
  label:
    fontFamily: "Inter Variable, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0em"
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0em"
rounded:
  sm: "10px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
  4xl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    rounded: "{rounded.full}"
    height: "44px"
    padding: "0 20px"
  button-primary-hover:
    backgroundColor: "{colors.ink-soft}"
    textColor: "{colors.surface}"
  button-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    rounded: "{rounded.full}"
    height: "44px"
    padding: "0 20px"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    height: "44px"
    padding: "0 20px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    height: "52px"
    padding: "0 20px"
  chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted-strong}"
    rounded: "{rounded.full}"
    padding: "6px 12px"
---

# Design System: cognilogs

## Overview

**Creative North Star: "The Visible Loop"**

cognilogs looks like an operations notebook that has been edited into a public argument: cool paper, black ink, orange signal, and real interface fragments. The system borrows the scale and confidence of editorial poster design, but every large gesture resolves into a support artifact. A ticket, a run, an evidence card, and an SLA watch are the vocabulary. The visitor should be able to see the loop close, not just read a promise that it does.

The visual world is paper-light and deliberately flat. White sheets sit on a cool paper ground, separated by hairlines and tonal tints rather than shadows. Orange appears as a signal: the wordmark, an active dot, a focus ring, the waitlist surface. Blue, green, and pink carry meaning about work types and confidence states. A near-black console is the one dark room, used where the product performs machine work. Nothing floats decoratively.

The tone is confident, operational, and honest. Diagrams are built from HTML interface fragments and custom inline SVG line work. The page never pretends to show a production screenshot, a customer logo, or a benchmark. The reference grammar is MausBot's editorial structure, never its mascots, assets, or copy.

Local deployment is part of the visual argument, not a badge row. The site shows a network boundary, the work that stays inside it, and the local model you choose. Compliance copy describes control and review scope; certification work is presented as in progress.

**Key Characteristics:**
- Cool paper ground and white sheets, with hairline separators.
- Oversized Inter display type against dense, readable interface fragments.
- Orange as a scarce signal color, not a decorative wash.
- Colored nodes and dotted paths that explain support work.
- One near-black console for machine output and evidence.
- Rounded sheets, pills, and ticket cards with no ornamental shadows.
- A deployment boundary that shows what stays inside the customer's network.
- Motion that demonstrates state, then gets out of the way.

## Colors

The palette is a cool neutral field with one warm signal and three semantic work colors. Color earns its place by carrying state or identity.

### Primary
- **Signal Orange** (`#f97316`): The cognilogs signal. Used for active navigation dots, the waitlist hero surface, selected states, and confidence thresholds. Its scarcity is what makes it read as a signal.
- **Wordmark Orange** (`#e2660a`): The deeper orange used for the oversized hero wordmark so the 92px mark clears large-text contrast on cool paper. It is a text-only variant, not a second brand color.
- **Burnt Orange** (`#c2410c`): The accessible text and focus counterpart. Used for links on light surfaces, focus outlines, and labels that need more contrast than the signal orange can carry.
- **Orange Wash** (`#fff1e7`): A tinted product surface for intake and threshold explanations. It is a sheet tint, not a gradient.
- **Orange Ink** (`#3b1805`): Type and icons placed directly on the orange hero.

### Secondary
- **Evidence Blue** (`#377fe6`, strong `#1f5fbf`, soft `#eaf1ff`): Intent, understanding, and source material.
- **Loop Green** (`#0a9767`, strong `#06714e`, soft `#e7f7f0`): Confident resolution, evidence, and "In the loop" status.
- **Handoff Pink** (`#d84f8b`, strong `#a62b63`, soft `#fdeef5`): Human review, confidence gates, and close-the-loop states.

### Neutral
- **Cool Paper** (`#f7f8f8`): The page ground. It should read as paper, not gray chrome.
- **Deep Paper** (`#eef1ef`): Secondary bands and quiet section breaks.
- **Sheet White** (`#ffffff`): Cards, panels, inputs, and mobile menu surfaces.
- **Muted Sheet** (`#f1f3f2`): Inactive chips, secondary panels, and hover fills.
- **Ink** (`#0a0a0b`): Headlines, primary buttons, and body text on light surfaces.
- **Soft Ink** (`#252629`): Primary button hover and near-black secondary text.
- **Muted Ink** (`#5f6570`) and **Strong Muted Ink** (`#444951`): Supporting copy and metadata. Body copy uses the stronger value.
- **Hairline** (`#e3e6e5`): One-pixel separators, card borders, and table rules.

### Console
- **Console Black** (`#090b0e`) and **Console Layer** (`#101419`): The product's machine room. Used for the hero console, run panels, and evidence surfaces.
- **Console Green** (`#4fe3a3`): Evidence and success signals on dark surfaces.

### Named Rules
**The Signal Orange Rule.** Orange is a signal, not a background. Outside the waitlist hero and small tinted sheets, it should appear in dots, words, focus rings, and single actions. If orange covers a large surface, that surface must be the commitment itself.

**The One Meaning Per Color Rule.** Blue, green, and pink always describe work type or confidence state. Never use them as decorative variety in the same diagram.

**The No Decorative Gradient Rule.** Gradients and glows are not part of the visual world. The marquee fade is a functional edge mask, not decoration.

## Typography

**Display Font:** Inter Variable (with Inter, ui-sans-serif, system-ui, sans-serif)  
**Body Font:** Inter Variable (same stack)  
**Label/Mono Font:** JetBrains Mono (with ui-monospace, SFMono-Regular, Menlo, monospace)

**Character:** A Swiss operational voice with editorial scale. Inter keeps dense interface fragments readable at 13px and above. JetBrains Mono appears only where the product would show machine output: ticket IDs, terminal lines, and run metadata.

### Hierarchy
- **Display** (600, `clamp(52px, 6.7vw, 92px)`, 0.98, -0.055em): Hero headlines and the giant wordmark echo. Never use it for section headings or card titles.
- **Headline** (600, `clamp(38px, 4.9vw, 68px)`, 1, -0.048em): Major section H2s. Keep most headlines to one or two lines; the mobile minimum is 38px.
- **Title** (600, `clamp(30px, 3.3vw, 44px)`, 1.06, -0.038em): Deep-dive headings and large card titles.
- **Body** (400, 16px, 1.6): Default reading size. Marketing ledes rise to 17-20px; docs body stays at 16px. Docs prose is capped at 600px, not 68ch, because Inter's `ch` unit is wider than expected.
- **Label** (500, 13px, 1.5): Navigation, footer, trust strip, legal metadata, and fine print. Thirteen pixels is the floor for shared chrome and body-adjacent microcopy.
- **Mono** (400/500, 11-13px, 1.6): Ticket IDs, terminal output, and run metadata only.

### Named Rules
**The Two-Font Rule.** Inter runs the interface and the argument. JetBrains Mono is a costume for machine output, not a second brand voice.

**The 13px Floor Rule.** Shared chrome, legal fine print, and body-adjacent labels do not go below 13px. Smaller type is allowed only inside data-dense interface fragments and SVG microtype, where it is part of the artifact.

**The 600px Prose Rule.** Docs paragraphs and legal articles both max out at 600px. Do not use `ch` units for these measures with Inter.

**The Unlayered Display Rule.** `.display-1`, `.display-2`, and `.display-3` are intentionally unlayered. Do not try to override them with arbitrary Tailwind font-size utilities; choose the right display class or add a scoped rule.

## Layout

The site uses a 1200px maximum shell with 20px gutters at 320px, 28px from 640px, and 36px from 1024px. Marketing pages are built from full-width bands separated by 64-120px of vertical air. Editorial two-column sections use a 5/7 or 4/8 split, with the headline on the left and the supporting argument or artifact on the right.

The homepage hero is intentionally tall: a giant orange wordmark, a two- or three-line display headline, a short promise, two actions, and the top of the dark support console. The console continues below the fold rather than being reduced to a decorative thumbnail. On mobile, the hero stacks, the two actions become full-width buttons, and the console still appears as a real interface fragment.

Features uses a four-stage horizontal map on desktop and a vertical stage list on mobile. Docs uses a 220px sticky sidebar plus a 600px prose column on desktop, and a collapsible "On this page" details control on mobile. Legal pages use a 220px sticky sidebar plus a 600px article, with the sidebar replaced by two mobile pills. Waitlist uses a 5/7 split on desktop and puts the form before the supporting benefits on mobile. About uses a 5/7 status section, a loop rail, and a single evidence card.

The system is designed to 320px. Page roots do not use `overflow-hidden`; `body` uses `overflow-x: clip` so sticky sidebars can rest at 112px below the header without creating a horizontal scrollbar.

**The 320px Rule.** Every route must survive 320px with no horizontal scroll. Decorative wordmark echoes and diagram paths are clipped by their own containers, not by the page root.

**The Sidebar Rest Rule.** Desktop docs and legal sidebars rest at 112px below the viewport top and stick there. Their columns must remain tall enough to scroll through the full article.

**The Form First Rule.** On mobile, the waitlist form comes before the supporting benefits. The primary action should be reachable in the first viewport whenever the copy allows it.

## Elevation & Depth

The system is flat by default. Depth comes from tonal layering, not shadows: white sheets on cool paper, tinted cards inside white sheets, and a near-black console against both. One-pixel hairlines do the separating work that shadows would do in a softer system.

The only shadow token is the mobile navigation menu, where a dropdown needs to separate from the page beneath it. Cards, buttons, inputs, and dark panels do not use drop shadows. There are no glows, inner shadows, or blurred color halos.

### Shadow Vocabulary
- **Menu Lift** (`0 24px 64px -24px rgba(10, 10, 11, 0.22)`): The mobile navigation dropdown only.

### Named Rules
**The Flat-By-Default Rule.** If a surface needs separation, use a hairline, a tint, or a dark panel. Do not reach for a shadow.

**The One Dark Room Rule.** The near-black console is the only large dark surface. Use it for machine work and evidence, not for arbitrary emphasis.

## Shapes

The form language is rounded and sheet-like. Cards use 16-26px radii; major panels use 32px; pills and buttons are fully rounded. Borders are one pixel and low contrast. Ticket fragments and console panels use smaller 10-16px radii to read as tools rather than marketing cards.

Diagrams use dotted or dashed paths, small colored nodes, and CSS chevrons. They do not use decorative arrows, stage numbers, or icon medallions. The geometry is drafted, not clip-arty: straight runs, right-angle turns, and small circular nodes.

**The Sheet, Not Card Rule.** A container should feel like a sheet of paper laid on the page, not a floating app card. Keep the radius generous, the border quiet, and the shadow absent.

**The Diagram Is an Interface Rule.** Every diagram must contain a real support object: a ticket, a source, a confidence score, a run log, a child ticket, or an SLA clock. If it could be replaced by a generic icon, it is not a cognilogs diagram.

## Components

### Buttons
- **Shape:** Fully rounded pills. Heights are 36px (small), 44px (medium), and 52px (large).
- **Primary:** Ink background, white text, 13-15px medium label, optional arrow that shifts 2px on hover.
- **Hover / Focus:** Primary shifts to soft ink; secondary shifts from white to muted sheet and strengthens its border. Focus is a 2px burnt-orange outline with 3px offset.
- **Secondary:** White surface, hairline border, ink text. Used for the second action, never as a competing primary.
- **Accent:** Orange fill with orange-ink text, reserved for commitment surfaces and the waitlist.

### Chips
- **Style:** Fully rounded, 13px medium label, white or muted sheet fill, quiet border. Active tabs invert to ink with white text.
- **State:** Use colored dots for semantic identity, not decorative icons. On mobile, use short labels such as "Question", "Issue", and "Feature".

### Cards / Containers
- **Corner Style:** 16-26px for content cards, 32px for major panels and the orange CTA.
- **Background:** White sheets, semantic soft tints, or console black. No gradients.
- **Shadow Strategy:** None. See Elevation & Depth.
- **Border:** One-pixel hairline where a sheet needs an edge.
- **Internal Padding:** 16-28px on marketing cards; 20-24px on dense interface fragments.

### Inputs / Fields
- **Style:** 52px fully rounded white field with a hairline border and 15px text.
- **Focus:** Border shifts to burnt orange plus a 2px focus ring. The label is visually hidden but present for assistive technology.
- **Error / Disabled:** Error text is 13px red with `role="alert"`; disabled buttons reduce opacity and show a wait cursor while loading.

### Navigation
- **Style:** A 40px announcement bar above a floating 62px sticky pill. Wordmark at left, 13px links in a quiet segmented row, and an orange waitlist button that opens an accessible modal. The modal submits to the same Google Sheets webhook as the page form.
- **Mobile:** The header collapses to a wordmark, waitlist action, and menu button. The dropdown is a paper sheet with a menu shadow, scrollable at `calc(100dvh - 120px)`, and closes on link click or Escape.
- **Footer:** Cool paper, 13px links, four columns, and a large filled wordmark with an orange outline. No newsletter form.

### Signature Components

**Confidence Gate.** A dark panel with a fixed evidence score of 0.92 and a 0.50-0.99 threshold slider. The decision card flips between "Auto-reply + resolve" and "Private note + human queue" with `aria-live="polite"`. The slider is the homepage's memorable interaction.

**Trust Strip.** A marquee of official brand marks for ticketing systems, evidence tools, action tools, and local models. It has a pause/play control, an aria-pressed state, and a static wrapping fallback under reduced motion. The duplicate rail is hidden from assistive technology.

**Stage Map.** Four tinted sheets for Intake, Understand, Act, and Close. Each contains real ticket work and a confidence gate. CSS chevrons sit between stages; there are no stage numbers or icon medallions.

**Evidence Card.** A dark ticket fragment with a source, a decision, and a footer of SLA and child-ticket metadata. It is the canonical "show the work" artifact.

**Loop Rail.** Five compact cards from Intake to Watch, with a dark Watch card. The footer names source attachment, human override, and SLA watch.

**Lifecycle Table.** A five-stage table on desktop that becomes stacked definition cards on mobile. Stage labels are 13px sentence case; the table is not a miniature spreadsheet.

**Deployment Boundary.** A dashed local-network boundary containing the cognilogs app, ticket data, the SLA worker, and the local model. A separate ticketing connection sits below it. The adjacent dark card covers security review, audit, and the certification program in progress.

## Do's and Don'ts

### Do:
- **Do** keep the paper ground, white sheets, and orange signal in that order of area.
- **Do** use giant Inter headlines and let interface fragments carry the detail.
- **Do** show the loop with tickets, sources, confidence scores, child tickets, and SLA watches.
- **Do** show official brand marks in the trust rail, not a list of company names.
- **Do** keep shared chrome and legal fine print at 13px or above.
- **Do** use Next `Link` for internal links and serve the static build from the domain root. Do not hard-code a base path.
- **Do** describe local deployment, local models, and data control accurately, and keep the deployment boundary visible on the homepage and pricing page.
- **Do** keep the confidence slider at a fixed 0.92 evidence score; only the threshold moves.
- **Do** provide a static, wrapping trust-strip fallback under reduced motion and hide the pause control there.
- **Do** keep docs prose and legal articles at 600px.
- **Do** use CSS chevrons and colored dots instead of decorative arrow SVGs or icon medallions.
- **Do** preserve the Google Sheets waitlist integration in both the page form and the nav modal.
- **Do** keep how it works, use cases, pricing, and comparison on their own pages, not repeated on the homepage.

### Don't:
- **Don't** use stock photography, raster screenshots, mascots, or AI-generated illustrations.
- **Don't** invent customer testimonials, benchmarks, production claims, or certifications. The ₹10 early-access floor is confirmed; do not invent additional tiers or discounts.
- **Don't** imply that local deployment guarantees compliance. Keep certification language positive and limited to the program in progress.
- **Don't** describe any connector as live unless the deployment confirms it.
- **Don't** use decorative gradients, glows, blurred halos, or ornamental shadows.
- **Don't** put uppercase kickers above every section; the editorial hierarchy should come from scale and position.
- **Don't** add stage numbers, icon medallions, or decorative arrows to the architecture map.
- **Don't** reintroduce page-root `overflow-hidden`; use `overflow-x: clip` and clip decorations locally.
- **Don't** use `68ch` for docs prose; Inter makes it roughly 720px and produces 90-character lines.
- **Don't** use the MausBot palette, mascots, assets, or verbatim copy. The structural grammar is the reference, not the identity.
- **Don't** replace the waitlist webhook with a new backend without an explicit request.

**Detector notes.** The project intentionally waives `tiny-text`, `undersized-ui-text`, `marquee`, and `nested-cards` in `.impeccable/config.json`. The first two are data-dense interface and SVG microtype; the marquee has a pause control and a static reduced-motion fallback; nested cards are intentional interface fragments inside a marketing sheet. The footer watermark is an aria-hidden transparent outline, not live text.
