# Link course breadcrumb

## Goal

Make the course detail page breadcrumb return users to the all courses catalog.

## Change

- Change the `All Courses` breadcrumb target in `app/courses/[slug]/page.tsx` from `/` to `/courses`.

## Acceptance criteria

- Clicking `All Courses` from any course detail page opens `/courses`.
- TypeScript and targeted lint pass.