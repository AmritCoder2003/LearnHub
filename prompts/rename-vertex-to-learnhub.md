# Rename Vertex brand to LearnHub

## Goal

Change all user-facing product branding in the implemented design-system page from Vertex to LearnHub.

## Context inspected

- `AGENTS.md`
- `app/page.tsx`
- `app/layout.tsx`
- The previously approved Vertex-inspired implementation prompt.

## Files to change

- `app/page.tsx` — brand labels in the introduction, product description, and navigation specimen.
- `app/layout.tsx` — document title metadata.

## Requirements and assumptions

- Preserve the visual layout, orange logo mark, design-system content, and all behavior.
- Replace only visible brand naming and metadata; do not rename the provided reference asset or historical implementation prompt.

## Security considerations

- This is copy-only; it introduces no data handling, requests, or dependencies.

## Acceptance criteria

- The header and navigation say LearnHub.
- The introductory description identifies LearnHub as the learning platform.
- Browser metadata title says LearnHub Design System.

## Checks and manual test

1. Run `npx tsc --noEmit` and `npm run lint`.
2. Load `/` and confirm no visible Vertex product naming remains.
