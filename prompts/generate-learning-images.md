# Generate learning catalog images

## Goal

Populate the existing Sanity course and instructor records with generated visual assets where their schemas support them.

## Decisions

- Generate deterministic SVG artwork locally for all 10 courses and 10 instructors.
- Use course cover art with topic-specific color palettes and typography, plus illustrated instructor profile images rather than fabricated real-person photographs.
- Upload the SVGs as Sanity image assets through the official Sanity client and patch documents by slug.
- Keep lesson poster images optional because the current lesson content does not require a separate poster for every video.
- Keep all generated source files under `scripts/generated-assets`; do not expose credentials in browser code.

## Files expected to change

- `scripts/generate-learning-assets.mjs` - generate course covers and instructor portraits.
- `scripts/upload-learning-assets.mjs` - upload images and patch Sanity documents.
- `package.json` and `README.md` - add the asset generation/upload command and instructions.

## Acceptance criteria

- The asset command fails clearly without Sanity project, dataset, or write credentials.
- Running it creates 20 deterministic SVG assets and uploads/links them to all 10 courses and 10 instructors.
- A repeat run reuses the same asset files and updates existing document image fields without duplicate document records.
- Sanity queries report 10 courses with cover images and 10 instructors with photos.

## Checks

1. Run the asset generator and validate the SVG files.
2. Upload and patch through Sanity.
3. Query image-reference counts from Sanity.
4. Run TypeScript and targeted lint checks.