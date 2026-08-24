# Change the LearnHub logo mark to LH

## Goal

Replace the current single-letter `V` logo mark with `LH` in the LearnHub design-system page.

## Context inspected

- `AGENTS.md`
- `app/page.tsx` logo mark helper.
- `app/globals.css` logo mark styling.

## Files to change

- `app/page.tsx` — change the mark’s accessible label and visible text.
- `app/globals.css` — adjust logo-mark sizing and letter spacing so the two-letter mark remains balanced.

## Requirements and assumptions

- Keep the orange accent, placement, and existing design-system layout unchanged.
- Apply the mark consistently in both introduction and navigation specimens through the shared helper.

## Security considerations

- A presentation-only text and CSS adjustment; no data or external resource impact.

## Acceptance criteria

- Both LearnHub logo placements show `LH`.
- The mark remains readable and aligned without clipping on desktop and mobile.

## Checks and manual test

1. Run `npx tsc --noEmit` and `npm run lint`.
2. Visit `/` and verify both orange logo marks say LH.
