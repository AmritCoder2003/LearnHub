# Implement the LearnHub course page

## Goal

Build a dynamic course detail page matching `design/vertex-course.png`, wired to the seeded Sanity course content.

## Context inspected

- `design/vertex-course.png`
- `sanity/queries.ts` and `sanity/lib/data.ts`
- Course, lesson, module, instructor, and category schemas
- Existing homepage styling in `app/page.tsx` and `app/globals.css`

## Decisions

- Add `/courses/[slug]` using the existing `courseBySlugQuery` and `getCourseBySlug` data helper.
- Render the Sanity cover image with the existing image projection, falling back to a styled course mark when absent.
- Render seeded learning outcomes and modules; show the first six lesson rows to match the reference density, with a client-side expand control for all remaining lessons.
- Add a small client component for module expansion/bookmark visual state and use lesson links for the continue action.
- Keep course pages public and do not add progress persistence or payment behavior in this task.

## Files expected to change

- `app/courses/[slug]/page.tsx` - server-rendered dynamic course page and metadata.
- `app/courses/[slug]/course-content.tsx` - interactive module list and bookmark control.
- `app/globals.css` - course detail layout, cards, responsive behavior, and progress footer.

## Acceptance criteria

- `/courses/next-js-production` renders data from Sanity rather than hard-coded course copy.
- Course title, summary, level, price, student count, cover image, instructor, outcomes, modules, and lessons are populated from the query.
- The layout matches the supplied reference hierarchy and remains usable on mobile without horizontal overflow.
- Missing or invalid slugs return a 404.
- TypeScript, targeted lint, and production build pass.

## Manual test

1. Run the dev server and open `/courses/next-js-production`.
2. Confirm the cover image, seeded title, outcomes, and module lesson rows render.
3. Use the module expand controls and bookmark control.
4. Open an invalid course slug and confirm the not-found page.