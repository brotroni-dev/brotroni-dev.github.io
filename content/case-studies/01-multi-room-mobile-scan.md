<!--
  CASE STUDY 1 - MULTI-ROOM SCAN - REVISED SKELETON (refinement pass)
  Approved structure applied. Existing deck text slotted in VERBATIM, not rewritten.
  Placeholders to fill are marked > ✍️ [CONNECT - X] and > [GAP].
  We'll fill these one at a time. See README "Annotation legend".
-->

# Expanding mobile scanning beyond one room

**One-line summary:** Extending capture from one room to a whole connected plan.
<!-- slides 9, 4 -->

<!-- hook: your words, lightly shaped -->
Mobile scanning worked well for a single room - but real projects rarely stop there. Multi-room mattered because it removed the one-room limit and made mobile capture useful for complete, connected floor plans: a more continuous on-site workflow for pros, and a step toward completing full floor plans on mobile rather than treating mobile as a single-room capture tool.

## Overview

- **Role:** Product Designer
- **Scope:** Multi-room flow, in-scan interactions, prototyping, and on-device validation. <!-- slide 9 -->
- **Platform:** Mobile.

## Context & problem

<!-- slide 10 - context line + problem, merged into one beat -->
Mobile scan brought floor plan creation into the space itself: pros could capture walls, corners, and openings on site.

**The scan stopped at one room.** For connected layouts, pros had to move back to desktop and manually assemble rooms into one plan.

## Goal

<!-- slide 10 -->
**Keep the scan moving across rooms.** Enable pros to continue from room to room on site, while building one connected plan without losing momentum or orientation.

## Why it was hard

<!-- Reframe (slides 13, 17) + Constraints (slides 14, 15, 16) merged under one heading -->

**The challenge wasn't scanning rooms - it was connecting them.** Real renovation projects rarely happen one room at a time. To support full spaces, the product needed a way to connect separate scans within one shared spatial map. But introducing connected scans also meant introducing more guidance, decisions, and recovery moments throughout the flow. <!-- slide 13 -->

That shifted the design problem from teaching the feature to making the flow resilient. <!-- slide 17 -->

The three real obstacles:

- **Death by dialogs** - guidance that was helpful alone became heavy together, forcing users to stop, read, confirm, and repeat. <!-- slide 14 -->
- **Gaps in the map** - geolocation was meant to give each room a shared spatial reference, but in practice it drifted or broke, making alignment, rotation, and stitching unreliable. <!-- slides 13, 15 -->
- **The flow had to work even when the map didn't** - when that happened, a tutorial could explain how to connect rooms but couldn't remove the underlying uncertainty. The experience needed to help users adjust, recover, and continue. <!-- slide 16 -->

## The "before" state

<!-- slide 12 -->
**Original mobile scan flow (before the redesign).** The flow was optimized for capturing one closed room quickly and accurately.
> [ASSET] Export original - a representative still of the original one-room flow (from Figma/source, not the PDF).
<!-- transition: your words, lightly shaped -->
Once we saw where the original flow broke down, it was clear this wasn't a tutorial problem - users didn't need more explanation; they needed the flow itself to hold up as they moved. Rather than teaching them to work around the friction, I redesigned the interaction around the way they naturally moved through a space.

## The approach: three moves

<!-- Approach principles (slide 17) PAIRED with the solution that delivered each (slides 18/19/20) -->

### Move 1 - Guidance within the flow

*Principle: instead of stopping users with separate instruction screens.* <!-- slide 17 -->

<!-- slide 18 -->
The new flow replaced a single "Point" action with a persistent bottom action bar. The guidance line evolved from a simple white dashed edge into a richer turquoise line system, making edges, corners, and room continuity easier to understand during capture.

<!-- rationale: your words, lightly shaped -->
The old instruction screens explained the process before the user performed it, then disappeared exactly when the guidance mattered most. Moving guidance into the capture screen let me support users in context: the action bar clarified what they could do next, and the line system showed the room connecting as they moved - replacing memorized instructions with immediate feedback, so users stayed oriented and kept momentum.
> [MOTION] Export original - scan guidance line, before → after (white dashed → turquoise system). Essential.

### Move 2 - Adjust without leaving

*Principle: instead of sending users out of the capture flow.* <!-- slide 17 -->

<!-- slide 19 -->
Users could place doors and windows, fine-tune their position, and adjust their dimensions on the spot - without interrupting the scan.

<!-- rationale: your words, lightly shaped -->
Capturing first and fixing later was technically simpler, but it pushed uncertainty downstream. In-place refinement let users resolve mistakes while the real-world reference was still visible - before those mistakes affected the next room. It protected accuracy and trust in the plan as it grew, while keeping the workflow continuous on site.
> [MOTION] Export original - refine-in-place: add → position → adjust window. Essential.

### Move 3 - Separate continue from finish

*Principle: instead of making one "Next" button carry two decisions.* <!-- slide 17 -->

<!-- slide 20 -->
The redesigned flow clarified two different decisions: continue building the plan by scanning another room, or finish the full capture and move to preview.

<!-- rationale: your words, lightly shaped -->
"Next" was too ambiguous for a high-stakes moment in the flow: users couldn't tell whether it meant moving to the next room or completing the scan, which created hesitation and risked a premature exit. Splitting "Continue scanning" from "Finish" made the outcome of each action clear and kept users in control of when the plan was actually complete.
> [ASSET] Export original - continue-vs-finish decision state (a still is enough).

## The resulting flow

<!-- slide 21 -->
Together, these changes kept users inside the capture experience: scan the room, build the plan, continue to the next room, or finish and move to preview.
> [MOTION] Export original - end-to-end resulting flow (Scan → Build → Continue/Finish → Preview). The single most valuable asset.

## Impact

<!-- slide 22 - feature-specific stats lead; 10× framed as context. Metrics corrected. -->

<!-- impact lead-in: your words + deck line, merged; causation-safe -->
After launch, connected capture moved from an edge case to a regular part of mobile floor plan creation - adoption that suggested the redesigned flow was helping users move beyond single-room capture and build connected plans on mobile.

- **22%** - share of **mobile scans** using the multi-room capability **at its peak**.
  > [METRIC] Not "22% of all floor plans." Keep "of mobile scans" and "at its peak" - both load-bearing.
- **~230 / day** - multi-room **continuation events** (triggered when a user chose to continue a scan into another room).
- **10×** - monthly active user growth of **3D Floor Plans** over four years.
  > [METRIC] Product-wide context, shown last on purpose. Frame as the backdrop the feature shipped into - never as growth multi-room caused.

## Learnings

<!-- slide 23 - trimmed to one reflective takeaway; your wording -->
Scanning more rooms wasn't the hard part. The real challenge was making the flow resilient enough to handle uncertainty without forcing users to stop or start over. Guidance, correction, and recovery needed to happen inside the task, so the plan could keep evolving without feeling fragile.

---

**Next project:** Floor Plan Onboarding