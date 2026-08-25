# Add four more LearnHub courses

## Goal

Expand the Sanity catalog with four complete, coherent courses and their related instructors, categories, and lessons.

## Decisions

- Add four new categories, four instructors, four courses, and twelve lessons to `scripts/learnhub-seed.ndjson`.
- Give each course three ordered modules with one matching lesson per module.
- Use realistic web engineering topics and public official documentation resources.
- Preserve all existing records with distinct stable import IDs.

## Acceptance criteria

- The Sanity CLI import succeeds with `npm run seed`.
- The dataset contains 10 categories, 10 instructors, 30 lessons, and 10 courses.
- All ten courses resolve their instructor, category, and three lesson references.
- The expanded NDJSON parses successfully.

## Checks

1. Parse every NDJSON line.
2. Import through the Sanity CLI.
3. Query per-type counts and resolved course references.