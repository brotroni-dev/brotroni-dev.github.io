<!--
  VISUAL FOUNDATION — the design system for the portfolio.
  Status tags: [LOCKED] = decided; [PROPOSED] = awaiting your confirm; [OPEN] = not yet decided.
  Specimen layouts shown in chat are NOT final page layouts.
-->

# Visual foundation

Provisional art direction: **"Measured Space"** (editorial-architectural) as the foundation,
a tactile **"Workshop"** spatial signature used sparingly, and restrained **"Low Light"**
atmosphere. Warm, crafted, editorial, confident — not corporate, not a SaaS landing page.

## Typography — [LOCKED]

- **Fraunces** — display titles (hero, case-study titles, big numbers). Warm, editorial,
  slightly characterful; carries the personality.
- **Inter** — body copy and interface text. Used **restrained**: readability first for long
  case-study text, comfortable line height (~1.7–1.75), neutral tracking (no tight letter-spacing),
  calm and neutral so the display type and spatial elements carry the character.
- **IBM Plex Mono** — metadata, labels, kickers ("Capture / Learn / Present"), the overview bar
  (Role / Scope / Platform), captions, stat labels, technical details.

All three are free and self-hostable (Google Fonts) — no licensing cost or runtime dependency.

## Palette — [LOCKED direction]

**Warm light / parchment is the base** (reading surface, most of the site). **Near-black is a
reserved expressive device** for specific charged narrative beats where darkness carries meaning —
e.g. "death by dialogs" (friction/heaviness), the AR atmospheric reveal, or a section transition.
Dark is never the default. No light/dark toggle.

### Parchment base (tokens)
| Token | Hex | Use |
|---|---|---|
| `--bg` | `#ECE3D0` | Page background (warm parchment) |
| `--surface` | `#F5EEDF` | Cards / panels |
| `--line` | `#D8CDB6` | Hairlines, rules |
| `--title` | `#241F19` | Display / headings |
| `--text` | `#3A332A` | Body text |
| `--muted` | `#6E6557` | Secondary text, metadata |

### Reserved black moment (tokens)
| Token | Hex | Use |
|---|---|---|
| `--bg` | `#0E0C0A` | Warm near-black background |
| `--title` | `#F1ECE0` | Display / headings |
| `--text` | `#B8AF9F` | Body text |
| `--muted` | `#8C8475` | Secondary text |

## Accent — [LOCKED]

Context-adaptive single accent (used sparingly — kickers, links, one stat highlight; never fields of color):
- **Terracotta `#B0613A`** on parchment (light surfaces).
- **Ochre `#C98A3C`** on near-black (dark moments).

## Spacing, grid & scale — [LOCKED]

- **Spacing scale (4-based):** 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128.
- **Grid:** wide container (~1200px) for full-bleed visuals; **~680px reading column** for prose.
  Editorial asymmetry allowed; navigation stays conventional.
- **Type scale:** body ~17px / line-height ~1.75; titles via Fraunces, large and tight.

## Motion — [LOCKED principles]

- Calm and **precise** — content *settles* into place (fade + 8–16px rise, ~400–600ms, ease-out);
  hairlines/rules may draw in.
- Hover = restraint (e.g. an accent underline); **no bounce or scale-pop**.
- Always respect `prefers-reduced-motion`.

## Spatial signature — [APPROVED DIRECTION] (not a finalized asset system)

A fine-line **isometric room** is the recurring motif. The locked **principle**:
- Clean architectural line-work as the base.
- **One restrained spatial intervention** — only when it carries a project's meaning.
- No decorative furnishing or dollhouse treatment.
- Tactility **supports the story** — it is NOT placed by a fixed quota. (Do not enforce a set
  number of tactile moments — e.g. "exactly four" is explicitly rejected as a rule.)

Per-project (directional, not final):
- **Base "room"** — pure line-work (terracotta plan rising into ink walls). Neutral anchor.
- **Capture (Scan)** — a doorway + continuation line to the next room (multi-room). Approved, strong.
- **Present (AR)** — one wall solidified into a physical plane the virtual line-plan aligns to,
  from a fixed position + direction. Approved, strong.
- **Learn (Onboarding)** — shell drawn point-to-point + one placed object. **PROVISIONAL** — the
  object reads as slightly arbitrary; re-evaluate in a real page whether it communicates
  "create + add items."

Frequency, scale, line weight, isometric angle, and exact details are still to be tested in real
page layouts before finalizing. On black moments the motif inverts to ochre on near-black.

## Still open

- [IN PROGRESS] Page layouts — starting with the **Multi-Room case study** (to test the signature
  against long-form content, product UI, motion, and metrics), then the homepage.
- [PROVISIONAL] The Learn signature object — evaluate in context.
