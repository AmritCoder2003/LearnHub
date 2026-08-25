# Link homepage course cards

## Goal

Make each homepage course card open its corresponding Sanity-backed course detail page.

## Change

- Add the seeded course slug to each homepage card model.
- Replace the shared `#courses` card target with `/courses/<slug>`.

## Acceptance criteria

- Next.js for Production opens `/courses/next-js-production`.
- Docker Essentials opens `/courses/docker-for-developers`.
- TypeScript Deep Dive opens `/courses/typescript-deep-dive`.
- TypeScript and targeted lint pass.