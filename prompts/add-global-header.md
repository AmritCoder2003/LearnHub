# Add a global LearnHub header

## Goal

Show the same LearnHub header on every application page, matching the supplied navigation reference.

## Decisions

- Create a shared `SiteHeader` component with LearnHub branding, Courses and My Learning links, notification control, and Clerk auth controls.
- Render it from the root layout so it appears on home, catalog, course detail, and future pages.
- Remove the homepage-only header to avoid duplicate navigation.
- Preserve existing header classes and visual styling.

## Acceptance criteria

- The header appears exactly once on `/`, `/courses`, and `/courses/[slug]`.
- Courses links to `/courses` from every page.
- Clerk signed-out and signed-in controls continue to render.
- TypeScript and targeted lint pass.