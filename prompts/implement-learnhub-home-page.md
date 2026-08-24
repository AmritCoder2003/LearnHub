# Implement the LearnHub home page

## Goal

Replace the current design-system specimen at `/` with the LearnHub home page shown in `design/vertex-home.png`, adapting all visible product naming from Vertex to LearnHub.

## Context inspected

- `AGENTS.md`
- `app/page.tsx`, `app/globals.css`, and `app/layout.tsx`
- `design/vertex-home.png` desktop UI reference.
- Existing project dependencies: Next.js, React, Tailwind CSS; no external icon/image packages.

## Decisions and assumptions

- The supplied image is the sole visual source of truth; reproduce its centered desktop canvas, warm off-white palette, hairline borders, serif hero and card headings, orange primary action, search field, three course cards, and decorative lower motif.
- Use LearnHub in all customer-facing copy, including the header brand and hero paragraph.
- Build this as a static, presentational home page. Navigation links, notification control, profile avatar, course cards, and search field have accessible markup but do not require backend implementation in this task.
- Use CSS and inline SVG/local graphical treatment rather than add external dependencies. Use lettermark course tiles and CSS illustration accents to keep the build self-contained.
- Make the desktop reference exact in hierarchy and sensible at mobile widths: collapse the header and cards, scale hero type, and keep search input usable.

## Files expected to change

- `app/page.tsx` — replace the current design-system specimen with home-page markup and compact local SVG helpers.
- `app/globals.css` — replace specimen styles with the home page’s responsive visual system.
- `app/layout.tsx` — update metadata only if needed for the home page.

## Requirements

- Preserve the provided `design/vertex-home.png` asset without modification.
- Reproduce header, hero, search keyboard hint, course grid, course metadata, new-content callout, and bottom decorative gradient pillars.
- Apply visual focus states to interactive controls.
- Do not introduce API calls, auth, third-party scripts, tokens, or dependencies.

## Security considerations

- The implementation is fully presentational. It handles no user input beyond an uncontrolled visual search field and sends no data anywhere.

## Acceptance criteria

- `/` presents the LearnHub home page rather than the design-system sheet.
- Desktop layout closely matches the supplied reference in spacing, color, typography, and component geometry.
- The page remains responsive and has no horizontal overflow on narrow screens.
- TypeScript, lint, and a production build pass.

## Checks to run

1. `npx tsc --noEmit`
2. `npm run lint`
3. `npm run build`

## Manual test steps

1. Run `npm run dev` and visit `http://localhost:3000`.
2. Compare the desktop layout with `design/vertex-home.png`.
3. Reduce the viewport to mobile width and confirm header, search, and course cards remain readable and do not overflow.
4. Tab through navigation, button, search, and cards to confirm focus states are visible.
