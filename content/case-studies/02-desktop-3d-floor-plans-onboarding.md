<!--
  CASE STUDY 2 — FLOOR PLAN ONBOARDING — REVISED SKELETON (refinement pass)
  Approved structure applied. Existing deck text re-slotted, NOT rewritten/polished.
  Four-stage spine: Orient → Create → Add items → Review.
  Approach principles dissolved and woven as [PRINCIPLE → woven here] framing.
  Placeholders: H, Q, C, L = your words (empty). B1, W = drafted from existing (approve/edit).
  See README "Annotation legend".
-->

# From first step to confident planning

**One-line summary:** Helping first-time users learn the workspace through guided practice.
<!-- slides 24, 4 -->

<!-- hook: your words -->
3D Floor Plans offered a powerful set of tools, but for a first-time user, the blank workspace made it difficult to know where to begin. Onboarding mattered because users needed more than an introduction to individual features — they needed a clear path to completing a first plan and enough confidence to continue working on their own.

## Overview

- **Role:** Product Designer
- **Scope:** Concept exploration, task sequencing, interaction design, and detailed states. <!-- slide 24 -->
- **Platform:** Desktop web.

## Context & problem

<!-- slide 25 — context + problem merged -->
The desktop canvas gave pros powerful tools to create and refine floor plans.

**Powerful tools, no clear path through them.** First-time users could see the tools, but didn't know which action to start with, how the tools connected, or whether they were using them correctly.

## Goal

<!-- slide 25 -->
**Build confidence through guided practice.** Help users learn the core workflow by doing, without separating the tutorial from the product itself.

## Reframing the challenge

<!-- slide 26 — owns the "sequence, not feature discovery" insight -->
**The challenge wasn't finding a tool — it was knowing what came next.** In first-time use, the main friction wasn't individual feature discovery. Users needed help understanding the sequence: where to begin, what to do next, and whether they were on the right track.

## Where onboarding should live

<!-- slide 27 — strongest "how I think" material; keep at full length -->
**Exploring where onboarding should live.** I explored four approaches with the team, evaluating each against three needs: keeping users in context, supporting hands-on practice, and working across both 2D and 3D.

- **Product Walkthrough (tooltip)** — fast to ship using existing components, but better for feature discovery than workflow learning.
- **Wizard (modal flow)** — familiar, structured progression, but separates instruction from the canvas and front-loads too much; doesn't translate well to 3D.
- **One Pager (help / guide page)** — can preserve progress across sessions, but pulls users away from the work.
- **Sidebar (selected direction)** — keeps guidance beside the action, lets users practice directly on the canvas, supports progressive task-based learning, and works across 2D and 3D. The tradeoff: it adds persistent UI to an already dense workspace and took more investment.

**The core tradeoff:** the lighter options shipped faster but pulled users away from the canvas. The sidebar took more investment, but kept learning in context — users could apply each instruction directly on the canvas instead of translating guidance from a separate surface into the workspace.

> [ASSET] Export original — the four-approaches comparison (from Figma/source).

<!-- bridge B1: approved -->
With the sidebar chosen, the question shifted from *where* guidance should live to *how* the practice itself should unfold — what users would do first, and in what order.

## The design: a guided practice space

<!-- slides 29 + 28 merged -->
**A guided practice space.** The selected direction became a guided practice environment inside the real workspace — low-risk enough for experimentation, but close enough to the product to build transferable skills. Rather than opening onto the full workspace at once, it gave users one obvious first action to start from.

**The onboarding at a glance:** Orient → Create → Add items → Review. Navigate the canvas and select objects; draw a room point to point; add structures, placeholders, and real products; view in 3D, then finish.

## The four stages

<!-- sequence rationale Q: your words, lightly shaped -->
The sequence was designed to build confidence one layer at a time. Users first needed to understand how to move around the workspace, select objects, and recover if they got lost — only then did it make sense to ask them to create a room.

Once the basic structure existed, adding items had a clear context rather than feeling like another disconnected tool to learn. The tutorial ended in 3D because Review was both validation and payoff: users could see that the actions they'd just learned had produced a coherent, spatial result.

Introducing creation or furnishing too early would have added complexity before users had the basic control to understand or correct what they were doing. Each stage prepared them for the next — from control, to creation, to detail, and finally to understanding the complete plan.

### Orient — establish control

<!-- slides 30, 31 -->
**Establishing control before creation.** Before asking users to build anything, we gave them a low-risk way to understand movement, zoom, and orientation, then selecting and moving an existing object — so users understood how the workspace behaved before creating anything new.

Orient came first by design: these actions were reversible and low-risk, giving users room to get comfortable navigating and selecting before they were asked to create or change the plan.
> [ASSET] Export original — tutorial canvas screens (navigation, selection) from Figma/source.

### Create — draw a room

<!-- slide 32 -->
**Increasing commitment gradually.** Once users could navigate and manipulate the canvas, the tutorial introduced the pen tool and asked them to create a room point by point. *(Design principle: control first, creation second.)*
> [MOTION] Export original — pen-tool "draw a room" interaction (from Figma/source).

### Add items — structures, products, source

<!-- slide 33 -->
**Layering complexity without blocking progress.** The side menu was introduced in a deliberate sequence: Structures for the architectural shell, Products for quick placeholders, and Source for real marketplace items. Inline feedback corrected mistakes while keeping the next step available — feedback, not failure states (a misplaced item suggested a correction without preventing the user from continuing).
> [ASSET] Export original — side-menu sequence + the "almost there" inline-feedback state (from Figma/source).

### Review — see it in 3D

<!-- slide 34 -->
**From 2D actions to spatial understanding.** After users learned the core planning actions, the tutorial introduced Dollhouse mode — turning the plan from a flat workspace into a spatial environment they could inspect and refine. *(Design principle: reveal the payoff after users understand the fundamentals.)*
> [MOTION] Export original — flat plan → Dollhouse 3D transition (from Figma/source).
> [HOMEPAGE CANDIDATE] The Dollhouse 3D moment is *one possible* homepage visual for this case study — recorded as a candidate only, not the final pick. Decide after reviewing the original assets.

## Built for real working sessions

<!-- bridge W: your words -->
Because onboarding had to fit around real work, users needed to be able to pause, return, and complete it without losing their progress — then move naturally from practice into the actual product.

<!-- slide 35 -->
**Stop-and-resume.** Users didn't always complete the tutorial in one session, so progress was saved automatically and surfaced again when they returned — they could leave without losing progress and resume from their exact spot.

<!-- slide 36 -->
**Completing the onboarding.** The final step reinforced completion while keeping momentum: users could either start a new floor plan or continue practicing in the same workspace.

## Outcome

<!-- slide 37 — QUALITATIVE, no number -->
The onboarding made the canvas feel learnable: the tutorial taught a workflow, not a list of features — gain control, create, add detail, and review the result in 3D.

<!-- outcome result C: your words; causation-safe, qualitative -->
Following the rollout, more first-time users reached a completed floor plan. The result suggested that the onboarding experience was supporting users through the early learning curve by giving them a structured path to practice the core workflow before applying it in their own work.
> [GAP] Directional only — no number, per your instruction. Do not estimate.

## Learnings

<!-- reflective learning L: your words, lightly shaped -->
I came away believing that onboarding a complex tool shouldn't begin with explaining everything it can do — it should give users a clear sequence of actions that leads to one meaningful result.

People build confidence by doing the work in context, seeing the effect of each action, and understanding how one step prepares them for the next. Good onboarding teaches the shape of the workflow, not just the location of the tools — so by the time the guidance ends, users have already experienced enough of the product to keep working without the tutorial.

---

**Next project:** AR Walkthrough