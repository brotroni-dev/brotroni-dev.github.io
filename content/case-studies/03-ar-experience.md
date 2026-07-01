<!--
  CASE STUDY 3 - AR WALKTHROUGH - REVISED SKELETON (refinement pass)
  Approved structure applied. Existing deck text re-slotted; H, B1, N1, Learnings = approved wording.
  Core tradeoff repositioned as "The central tension" before the walkthrough.
  See README "Annotation legend".
-->

# When the proposal enters the room

**One-line summary:** Turning proposals into a spatial experience clients can stand inside.
<!-- slides 38, 4 -->

<!-- hook H: your words -->
A proposal can be clear on paper and still be difficult to understand at full scale. Plans and renders showed clients the design, but still required them to translate a flat representation into the experience of standing inside the finished space. AR brought the proposal into the real room, giving pros and clients a shared spatial view they could react to together.

## Overview

- **Role:** Product Designer
- **Scope:** AR setup and alignment flow, interaction design, prototyping, and on-device validation. <!-- slide 38 -->
- **Platform:** Mobile / AR.

## Context & problem

<!-- slide 39 - context + problem merged -->
**Clients still had to imagine the design.** Plans and renders could show the proposal, but not how it would feel to be inside it.

## Goal

<!-- slide 39 -->
**Make the proposal feel real.** Help pros present designs in context, so clients could understand, discuss, and trust the proposal faster - and reduce back-and-forth.

## Why AR

<!-- slide 40 - repeated opening sentence trimmed -->
As AR became more accessible and competitors brought it into planning workflows, we saw an opportunity to make Houzz Pro's floor plans more tangible and useful on site.

1. **Meet market expectations** - AR was becoming a more common part of spatial planning tools.
2. **Bring plans into context** - users could view the design inside the actual room, not only as a flat plan or render.
3. **Support on-site conversations** - pros could work through design decisions with clients on location.

## The central tension

<!-- slide 45 - moved up; frames the walkthrough that follows -->
**Believable, without becoming cumbersome.** Precise alignment made the proposal feel credible, but every additional setup step pulled the pro away from the client conversation.

The experience had to feel spatially convincing without turning setup into a calibration task.

## The design / walkthrough

<!-- bridge B1: approved -->
Turning that opportunity into a usable feature came down to one flow: getting the digital plan to line up with the real room - convincingly, and in as few steps as possible.

<!-- slide 41 -->
**The AR flow connected the plan to the room.** Pros launched AR from the floor plan list, chose a starting point, aligned the digital plan with the real space, and previewed the design in AR. *(Launch from list → Choose starting point → Scan the room → Fit the virtual walls → See the proposal in space.)*
> [ASSET] / [MOTION] Export original - the five-step AR flow strip; the AR preview is the highest-value motion asset in the portfolio (from Figma/source/recording).
> [HOMEPAGE CANDIDATE] The AR preview ("proposal in the room") is the portfolio's strongest visual - recorded as a homepage candidate; decide after reviewing the original assets.

<!-- N1 connective: approved -->
Getting the design to sit correctly in the room was the central challenge of the flow. The model below is how I approached it: anchoring to where the user stood and which way they faced, then rotating the plan to match.

<!-- slide 42 -->
**Aligning the floor plan with the real space.** I designed the alignment model around a fixed user position, allowing the digital plan to rotate until it matched the user's real-world view. Geolocation helped establish the broader context, while the position marker and viewing direction supported more precise alignment.
- **Viewing direction** - where the user is facing.
- **User position** - fixed anchor in the real space.
- **Plan rotation** - matches the layout to the room.
> [ASSET] Export original - the alignment-model diagram (from Figma/source).

<!-- slide 43 -->
**Fitting the virtual room to the physical space.** Once the starting point was aligned, users scanned the room and adjusted the virtual walls to match the physical space. *(Set starting point → Scan the room → Fit virtual walls → Preview in AR.)*
> [MOTION] Export original - fitting virtual walls to the room (from Figma/source/recording).

## Validation

<!-- slide 44 - your real evidence; keep prominent -->
**Validation.** Because scale, alignment, and spatial trust are difficult to evaluate in static prototypes, we tested the experience on-device and in real rooms throughout development.

1. **On-device tests** - orientation, alignment, and recovery issues that static screens couldn't reveal.
2. **User sessions** - checked whether people understood the setup and trusted the spatial result.
3. **Client demos** - observed whether AR supported the conversation instead of interrupting it.
4. **Post-launch monitoring** - tracked whether the feature was being adopted in real project work.

> This is your real evidence - use it instead of a generic research section (per your instruction).

## Outcome

<!-- slide 46 - qualitative; your approved wording -->
**The proposal became a shared spatial reference** that pros and clients could discuss together in the room.

## Learnings

<!-- Q1: your words -->
AR reinforced that spatial experiences depend on a careful balance: the result has to feel aligned enough to be believable, but the setup cannot become the experience itself. The goal was to ask for only the input needed to place the proposal convincingly, then get out of the way so the conversation could remain focused on the design.

---

**Next project:** Multi-Room Scan