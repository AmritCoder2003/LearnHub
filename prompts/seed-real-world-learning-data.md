# Seed real-world learning data

## Goal

Populate the LearnHub Sanity dataset with a coherent starter catalog based on real-world web development topics, so the course, instructor, category, and lesson queries have usable content.

## Context inspected

- `sanity/schemaTypes/documents/category.ts`, `instructor.ts`, `course.ts`, and `lesson.ts`
- `sanity/schemaTypes/objects/module.ts`, `learningOutcome.ts`, and `resource.ts`
- `sanity/queries.ts` and `sanity/lib/server-client.ts`
- `package.json` and `README.md`

## Decisions and assumptions

- Add a Node ESM seed script that uses the Sanity write API and is safe to run repeatedly by matching documents on their type and slug.
- Seed realistic, editorially authored metadata for current technologies: Next.js App Router, Docker, and TypeScript. Use public YouTube lesson URLs and official documentation resources.
- Create categories, instructors, and lessons before courses so course module references resolve correctly.
- Keep credentials server-side through `SANITY_API_WRITE_TOKEN`; require `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, and the write token at runtime.
- Do not add images through remote URLs because Sanity image fields require assets; the seeded catalog remains valid without optional images.
- Add setup and execution instructions to the README and a `seed` package script.

## Files expected to change

- `scripts/seed.mjs` - create or update the related Sanity documents.
- `package.json` and `package-lock.json` - expose the seed command and Sanity client dependency.
- `.env.example` - document the required Sanity variables without secrets.
- `README.md` - document token permissions and the seed command.

## Security considerations

- Never commit a token or embed it in browser code.
- Fail early when required environment variables are missing.
- Use only public lesson and documentation URLs in content.

## Acceptance criteria

- `npm run seed` is available and fails with a clear message when Sanity credentials are absent.
- With valid credentials, the script creates or updates categories, instructors, lessons, and courses with valid references and coherent module contents.
- A second run updates the same records instead of duplicating them.
- TypeScript and lint checks remain clean.

## Checks to run

1. `npm run seed` without credentials and confirm the documented validation error.
2. `npx tsc --noEmit`
3. `npm run lint`

## Manual test steps

1. Copy `.env.example` to `.env.local` and provide a Sanity project, dataset, and write token with dataset write access.
2. Run `npm run seed` and inspect the records in `/studio`.
3. Run `npm run seed` again and confirm document counts do not increase.
4. Open the course query in Sanity Vision and confirm instructor, category, module, and lesson references resolve.