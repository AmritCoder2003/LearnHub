# Link courses navigation

## Goal

Make the homepage Courses navigation and View all courses action open the Sanity-backed `/courses` catalog page.

## Change

- Replace homepage anchor targets for the Courses nav link and View all courses link with `/courses`.
- Preserve the homepage course section and existing styling.

## Acceptance criteria

- Clicking Courses opens `/courses`.
- Clicking View all courses opens `/courses`.
- TypeScript and targeted lint pass.