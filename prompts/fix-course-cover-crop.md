# Fix course cover cropping

## Goal

Show the full generated course cover artwork on the course page instead of cropping its landscape composition into the square cover frame.

## Decision

- Remove the Sanity image URL `fit('crop')` transform from the course page.
- Use `object-fit: contain` with a matching dark background so the complete artwork remains visible and the cover frame stays stable.

## Acceptance criteria

- The complete course cover is visible at `/courses/next-js-production`.
- The cover remains contained and responsive on mobile.
- TypeScript and targeted lint pass.