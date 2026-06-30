# Roni — Portfolio (content workspace)

This folder holds the **content and assets** for your portfolio website.
No website code lives here yet — that comes after your material is filled in.

You only need to do two things:

1. **Fill in the templates** inside `content/` (replace anything in `[brackets]`).
2. **Drop your exported images/videos** into the matching folders inside `assets/`.

When both are done, the site gets built around them.

---

## Folder map

```
roni-portfolio/
├── README.md                ← you are here
│
├── content/                 ← all the WORDS (fill these in)
│   ├── site.md              ← name, title, homepage hero line, footer links
│   ├── about.md             ← your full About page bio
│   └── case-studies/
│       ├── 01-multi-room-mobile-scan.md
│       ├── 02-desktop-3d-floor-plans-onboarding.md
│       └── 03-ar-experience.md
│
└── assets/                  ← all the IMAGES & VIDEOS (drop files here)
    ├── home/                ← the 3 homepage card images
    ├── about/              ← optional photo, later
    └── case-studies/
        ├── multi-room-scan/
        ├── desktop-3d-floor-plans/
        └── ar-experience/
```

---

## How the templates work

- Anything in `[square brackets]` is a **placeholder** — replace it with your real text, then delete the brackets.
- Lines starting with `<!--` are **hints just for you**. They won't appear on the site. Leave them or delete them.
- You don't need to know Markdown deeply. A few basics:
  - `#` = big heading, `##` = smaller heading
  - `-` at the start of a line = a bullet point
  - `**word**` = **bold**
  - Blank line = new paragraph

## Annotation legend (used inside the content files)

The case-study files are **source material from your deck, not final web copy**. Body text is your wording. Wherever a decision or fix is needed, there's a flagged callout (a `>` blockquote starting with a TAG). Provenance is in `<!-- slide N -->` comments. Tags:

- `[NARRATION]` — this slide relied on you presenting live; add 1–2 sentences so it reads on its own.
- `[CONNECT]` — a connective sentence is missing for self-guided reading.
- `[REPEAT]` — this material also appears elsewhere; consolidate later.
- `[ADAPT]` — wording may need shortening/adapting for web.
- `[ASSET]` — an original still image should be exported from Figma (don't use the PDF).
- `[MOTION]` — an original motion asset (MP4/GIF) is needed here.
- `[GAP]` — missing info to confirm; left blank, not invented.
- `[METRIC]` — a figure corrected per your instructions; verify the wording.

## Expanded case-study structure

Flexible — include a section only where the project actually has that content:

1. Title + one-line summary
2. Overview bar — Role · Scope · Platform
3. Product context (short, project-specific)
4. Problem
5. Goal
6. Reframing the challenge
7. Constraints
8. Approach principles
9. Key decisions & walkthrough
10. Outcome / impact
11. Learnings / key takeaways
12. Next project

## How to name your asset files

Keep names lowercase with hyphens, and number sequences. Examples:

- `assets/home/scan-card.jpg`
- `assets/case-studies/multi-room-scan/hero.mp4`
- `assets/case-studies/multi-room-scan/research-board-01.jpg`
- `assets/case-studies/ar-experience/demo-01.mp4`

When you reference an asset in a template, just write its filename where asked.

## Asset policy

- Case studies **should** show the real Houzz product UI, flows, diagrams, prototypes, and motion — this work belongs on the site.
- **Do not extract final assets from the presentation PDF** — its screenshots are low-resolution / flattened. Use the PDF only as a **content source** and a **reference for which visuals exist**.
- Export clean, high-quality **originals from Figma or the relevant source files** later.
- **Homepage** visuals may use an original, art-directed spatial treatment.
- The visual world should **frame and support** the product work, not replace it.
- `[ASSET]` / `[MOTION]` placeholders mark which originals to export later — each reads "export original from Figma/source," never "reuse from presentation."

## Format reminders

- Photos / UI screens → `.jpg` (or `.png` if transparent), ~2000px wide max
- Looping animations → `.mp4` preferred (smaller, smoother) or `.gif`
- Video demos → `.mp4`
