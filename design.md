# Design Brief — AI Engineer Portfolio (LLM / GenAI Agents)

## 0. Grounding

**Who:** An AI engineer specializing in LLM applications and autonomous agents —
prompt orchestration, tool-calling, multi-step reasoning systems, RAG pipelines,
evals.

**Audience:** Recruiters, hiring managers, and technical collaborators who
decide credibility in under a minute. They want to see systems-thinking,
real shipped work with measurable impact, and technical fluency — not a
generic "full-stack developer" template.

**Primary job of the page:** Prove, in one scroll, that this person can design
and ship reliable AI systems — then make it trivial to reach out.

**What we're avoiding:** the AI-generated-page tells — cream + terracotta,
near-black + neon accent, SaaS rounded-card kit with identical shadows,
tracked-out ALL-CAPS eyebrows, "→" on every button, middle-dot meta strings.
None of that is specific to this person's work.

**The one true idea:** an agent's *reasoning trace* — the visible chain of
"thought → tool call → observation → answer" — is the most characteristic
artifact in this person's world. The whole page borrows that structural
logic: quiet, sequential, evidence-based, nothing decorative that isn't also
informational. The hero doesn't say "I build AI agents," it shows one
thinking.

---

## 1. Color

Editorial, light, confident — paper rather than SaaS-dashboard white, ink
rather than pure black, one deliberate accent used sparingly as a signal
color (borrowed from the idea of a highlighted token/trace in a model's
output, not from any decorative gradient).

| Token | Hex | Role |
|---|---|---|
| `--paper` | `#FBFAF7` | Page background — warm-neutral off-white, not cream |
| `--ink` | `#181615` | Primary text — soft black, warm undertone |
| `--ink-muted` | `#5B5652` | Secondary text, captions, metadata |
| `--rule` | `#E4E0D8` | Hairline borders/dividers |
| `--signal` | `#2451FF` | The single accent — "trace" blue, used only for live/active states, links, the one hero highlight |
| `--signal-dim` | `#EEF1FF` | Signal tint for backgrounds behind active/selected trace steps |
| `--accent-warm` | `#B65C34` | Secondary, sparing accent for numerals/small marks only — a muted clay, kept far from the cliché terracotta by using it only as thin text/rule color, never as a fill or background |

Usage rule: `--signal` may only touch three things — hyperlinks, the hero's
"live" trace cursor, and the current-step marker in the timeline. It never
becomes a button fill or a card background. This scarcity is what makes it
feel intentional instead of decorative.

## 2. Type

Two families, doing clearly different jobs — an editorial serif for
narrative/identity, a technical mono for anything that is literally output
from a system (labels, code, the trace itself), and the serif's own sans
counterpart for UI chrome.

- **Display / headline — "Fraunces"** (variable serif, warm, slightly
  eccentric optical sizing). Used for the name, section titles, and pull
  statements. This carries the "editorial" personality — confident, a little
  literary, not a typical tech-startup grotesk.
- **Body / UI — "General Sans"** (or "Inter" as fallback if unavailable via
  CDN) for paragraphs, nav, buttons. Neutral so it doesn't compete with the
  serif.
- **Trace / data — "IBM Plex Mono"** for anything that represents literal
  system output: the hero reasoning trace, stack tags, dates in the
  timeline, metric numbers. This is a content decision, not a decoration —
  it marks "this text came from a machine or a log," which is true of that
  content.

Type scale (base 18px, ratio ~1.25):
`14 / 16 / 18 / 23 / 29 / 36 / 45 / 56 / 72` — headline sizes only used at
the two top tiers (72 hero, 45 section titles). Line length capped at ~68ch
for serif body copy, ~60ch for mono trace lines.

No ALL-CAPS labels. No single-word-in-italic accents. Section titles are
sentence case.

## 3. Layout

Left-aligned, single-column editorial rhythm on a 12-col grid (max-width
1120px), generous vertical whitespace between sections (~9–11rem), one
asymmetric moment in the hero where the trace panel breaks right against the
text's left alignment.

```
┌─────────────────────────────────────────────┐
│  name·nav (thin, left)      email / résumé → │  <- 72px header, hairline bottom rule
├─────────────────────────────────────────────┤
│  HERO                                        │
│  Big serif statement, left, ~9 cols          │
│  [live reasoning-trace panel, right, mono,   │
│   signal-blue cursor, 3 cols, offset down]   │
├─────────────────────────────────────────────┤
│  ABOUT — short serif pull-quote + 2 short    │
│  paragraphs, left col only (7/12), rest empty│
│  (empty space is intentional, not a bug)     │
├─────────────────────────────────────────────┤
│  WORK — vertical sequence (this IS a         │
│  sequence: shipped systems over time), each  │
│  row: mono date · serif project name ·       │
│  1-line outcome metric · sans description    │
│  divided by hairlines, no cards, no shadows  │
├─────────────────────────────────────────────┤
│  STACK — inline wrapped mono tags grouped by │
│  category (Models / Orchestration / Infra),  │
│  plain text, not pill-badges                 │
├─────────────────────────────────────────────┤
│  PRINCIPLES — 3 short statements on how this │
│  person approaches building agents, serif    │
│  lede + sans supporting line each            │
├─────────────────────────────────────────────┤
│  CONTACT — serif statement + mono email,     │
│  left aligned, generous bottom whitespace    │
└─────────────────────────────────────────────┘
```

Numbered markers (01/02/03) are used **only** in Work, because that content
genuinely is a sequence (projects shipped over time) — not in Principles or
Stack, which aren't sequences.

## 4. Motion

One orchestrated moment: on load, the hero's reasoning trace types itself in
line by line (thought → tool call → observation → answer), ending with the
cursor settling as a blinking `--signal` caret. This is the single spend of
motion budget. Everywhere else: hairline-only hover states (underline
extends, or a rule brightens) and `prefers-reduced-motion` disables the
trace animation in favor of showing it fully rendered immediately.

No fade-slide-up on scroll for every section. No hover-lift on cards (there
are no cards).

## 5. Principles for this build

1. **Show, don't label.** The hero proves the skill (a working trace) rather
   than a headline claiming it.
2. **Every visual device carries information.** Hairlines mark section
   boundaries and nothing else; mono type marks machine-originated content;
   numbering appears only where there's a real sequence; the accent color
   marks "active/live" and nothing else.
3. **Scarcity over decoration.** One accent color, one moment of motion, no
   card/shadow system, no gradients. Confidence comes from restraint and
   real content (metrics, specifics), not visual noise.
4. **Content is real, not placeholder-shaped.** Work entries need an actual
   system name, a one-line outcome with a number, and a short plain-English
   description — matching how hiring managers actually evaluate AI
   engineers (impact stated in metrics, not adjectives).

## 6. Open items before content is finalized

Placeholder copy will be used for name, project names, and metrics unless
real details are provided — flagged clearly in the HTML with `<!-- TODO -->`
comments so they're easy to find and swap.
