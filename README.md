This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# LearnHub

## Seed Sanity content

Copy `.env.example` to `.env.local` and provide a Sanity project ID and dataset. Sign in with the Sanity CLI using `npx sanity login`, then run:

```bash
npm run seed
```

This imports `scripts/learnhub-seed.ndjson` with replacement enabled, creating or updating a starter catalog of real-world web development courses covering Next.js, Docker, and TypeScript. Keep the import token server-side and never expose it to the browser. To verify the import, run the count query below with the project and dataset from `.env.local`:

```bash
npx sanity documents query '*[defined(_type)] | count'
```

The seeded content should contain 3 categories, 3 instructors, 9 lessons, and 3 courses.

## Generate catalog images

Generate the course covers and illustrated instructor portraits, then upload and link them to the Sanity documents:

```bash
npm run generate:assets
npm run upload:assets
```

The image command requires `SANITY_API_WRITE_TOKEN` in `.env.local`. It reuses existing Sanity assets by filename, so rerunning it does not create duplicate image assets.
