# Expand the LearnHub learning catalog

## Goal

Add more realistic Sanity content to the existing import fixture: categories, instructors, courses, and lessons with valid references.

## Decisions

- Extend `scripts/learnhub-seed.ndjson` with three additional categories, three instructors, three courses, and nine lessons.
- Keep each course internally coherent with three ordered modules and one lesson per module.
- Use public YouTube videos and official documentation resources.
- Preserve existing documents and use new stable import IDs so `--replace` remains additive and repeatable.

## Acceptance criteria

- Sanity CLI import succeeds.
- The dataset contains 6 categories, 6 instructors, 18 lessons, and 6 courses after import.
- All six courses have resolved instructor, category, and lesson references.
- The NDJSON remains valid.

## Checks

1. Parse every NDJSON line.
2. Run `npm run seed`.
3. Query per-type document counts and resolved course references through the Sanity CLI.