# Implement the all courses page

## Goal

Build a Sanity-backed `/courses` catalog page for all seeded LearnHub courses.

## Decisions

- Use `getCourses()` and the existing `coursesQuery`; do not duplicate course content in the page.
- Render cover images, popular labels, category, title, summary, level, duration, modules, students, and price.
- Add a lightweight client-side category filter for scanning the seeded catalog.
- Link every course card to `/courses/[slug]`.
- Reuse the existing warm visual system and keep the layout responsive.

## Files expected to change

- `app/courses/page.tsx` - server data loading and page structure.
- `app/courses/course-grid.tsx` - interactive filtering and course cards.
- `app/globals.css` - catalog page styles.

## Acceptance criteria

- `/courses` displays all 10 seeded courses from Sanity.
- Course cards use Sanity cover images and link to their dynamic detail pages.
- Category filtering updates visible cards without a page reload.
- Missing images have a graceful fallback and the page has no horizontal overflow on mobile.
- TypeScript, targeted lint, and production build pass.