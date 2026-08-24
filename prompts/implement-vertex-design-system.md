# Implement the Vertex-inspired LearnHub design system

## Goal

Replace the default Next.js starter screen with a responsive, static LearnHub design-system specimen page that accurately reproduces `design/vertext-designsystem.png`.

## Guidance and context reviewed

- `AGENTS.md` in the web workspace.
- Next.js 16 local App Router guidance for layouts/pages, server and client component boundaries, global CSS/Tailwind, and fonts.
- Existing `app/page.tsx`, `app/layout.tsx`, `app/globals.css`, and `package.json`.
- The supplied desktop reference image at `design/vertext-designsystem.png`.

## Decisions and assumptions

- This repository contains only the default Next starter; no existing LearnHub components, content model, or assets are present to reuse.
- Implement the supplied design-system sheet as the home route rather than inventing an unrelated application screen.
- Use inline SVG icon components for the visual icon specimen and logo mark. Do not add an icon dependency or external assets.
- Keep the page a Server Component because no behavior in the reference needs client-side state. Controls are visually faithful, static specimens.
- Use the installed Geist font (Inter-like) and a Georgia serif fallback for display typography, avoiding a new network dependency.
- The target covers the full reference: colors, typography, scale table, spacing, radii/shadows, icons, buttons, inputs, tags, statuses, progress, card variants, navigation, and principles. At narrower widths, cards and token rows wrap or stack cleanly.

## Files expected to change

- `app/page.tsx` — design-system page markup and compact SVG icon helpers.
- `app/globals.css` — visual tokens and responsive component/specimen styling.
- `app/layout.tsx` — app metadata and the global font treatment, only if required by the final page.

## Requirements

- Match the warm off-white background, thin warm-gray borders, orange primary scale, dark neutral scale, whitespace, compact labels, and card geometry of the reference.
- Reproduce all numbered design-system sections 01–14 with realistic LearnHub/Vertex specimen content.
- Make the layout usable from desktop down to mobile without horizontal overflow.
- Use semantic landmarks and accessible text labels for icon-only specimens.
- Preserve the supplied reference file and avoid adding unnecessary dependencies.

## Security considerations

- This is a presentational-only implementation: no user data, server requests, tokens, auth, or client-side persistence are introduced.
- Icon markup is local and static; no externally loaded third-party scripts or images are needed.

## Acceptance criteria

- `/` no longer shows the Next.js starter.
- At a desktop viewport, the page closely mirrors the visual hierarchy and sections of `design/vertext-designsystem.png`.
- At mobile widths, content stacks without clipping or a horizontal scrollbar.
- TypeScript and ESLint complete successfully.

## Checks to run

1. `npx tsc --noEmit`
2. `npm run lint`
3. `npm run build` (the route and root layout/style modules change)

## Manual test steps

1. Run `npm run dev` from `learnhub`.
2. Visit `http://localhost:3000` and compare the desktop page with `design/vertext-designsystem.png`.
3. Reduce the browser to a mobile width and confirm cards, tables, color swatches, and buttons wrap without overflow.
4. Tab through interactive specimens to confirm visible focus rings and readable labels.
