import {createClient} from '@sanity/client'

const required = ['NEXT_PUBLIC_SANITY_PROJECT_ID', 'NEXT_PUBLIC_SANITY_DATASET', 'SANITY_API_WRITE_TOKEN']
const missing = required.filter((name) => !process.env[name])

if (missing.length) {
  throw new Error(`Missing environment variable${missing.length > 1 ? 's' : ''}: ${missing.join(', ')}`)
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-08-24',
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
})

const categories = [
  {slug: 'web-development', title: 'Web Development', description: 'Modern tools and practices for building the web.'},
  {slug: 'devops', title: 'DevOps', description: 'Reliable software delivery, infrastructure, and developer workflows.'},
  {slug: 'programming-languages', title: 'Programming Languages', description: 'Practical programming language skills for production software.'},
]

const instructors = [
  {slug: 'maya-patel', name: 'Maya Patel', expertise: 'Frontend architecture', bio: 'Maya is a frontend engineer focused on accessible, high-performance React applications and practical developer education.'},
  {slug: 'jordan-lee', name: 'Jordan Lee', expertise: 'Cloud infrastructure', bio: 'Jordan helps product teams ship dependable services with containers, automation, and clear operational practices.'},
  {slug: 'sam-rivera', name: 'Sam Rivera', expertise: 'Type systems', bio: 'Sam teaches teams how to use TypeScript to make large JavaScript codebases easier to change with confidence.'},
]

const lessonSets = [
  {
    courseSlug: 'next-js-production',
    lessons: [
      {slug: 'next-app-router-foundations', title: 'App Router foundations', videoUrl: 'https://www.youtube.com/watch?v=wm5gMKuwSYk', duration: 42, isFreePreview: true, studentCount: 18420, keyPoints: ['Route layouts and nested UI', 'Server and client component boundaries', 'Loading and error states'], proTip: 'Keep data fetching close to the route segment that owns the UI.', resources: [{type: 'article', title: 'Next.js App Router documentation', description: 'Official routing and layouts reference.', url: 'https://nextjs.org/docs/app'}]},
      {slug: 'next-data-fetching-caching', title: 'Data fetching and caching', videoUrl: 'https://www.youtube.com/watch?v=vwSlYG7hFk0', duration: 51, studentCount: 16380, keyPoints: ['Fetch data in server components', 'Understand request memoization', 'Choose revalidation intentionally'], proTip: 'Start with the simplest cache behavior and add revalidation when the product needs it.', resources: [{type: 'article', title: 'Caching and revalidating', description: 'Official guidance for Next.js data caching.', url: 'https://nextjs.org/docs/app/building-your-application/data-fetching/caching'}]},
      {slug: 'next-production-performance', title: 'Production performance', videoUrl: 'https://www.youtube.com/watch?v=Q5wJqYf8Y3k', duration: 37, studentCount: 14900, keyPoints: ['Optimize images and fonts', 'Measure Core Web Vitals', 'Reduce client-side JavaScript'], proTip: 'Measure the shipped experience before optimizing an abstraction.', resources: [{type: 'tool', title: 'Web Vitals', description: 'Chrome documentation for user-centric performance metrics.', url: 'https://web.dev/articles/vitals'}]},
    ],
  },
  {
    courseSlug: 'docker-for-developers',
    lessons: [
      {slug: 'docker-images-and-containers', title: 'Images and containers', videoUrl: 'https://www.youtube.com/watch?v=pg19Z8LL06w', duration: 44, isFreePreview: true, studentCount: 22100, keyPoints: ['Build an image from a Dockerfile', 'Run and inspect a container', 'Map ports and volumes'], proTip: 'Treat containers as replaceable processes and keep durable state outside them.', resources: [{type: 'article', title: 'Docker Get Started', description: 'Official beginner guide to containers and images.', url: 'https://docs.docker.com/get-started/'}]},
      {slug: 'docker-compose-local-development', title: 'Compose for local development', videoUrl: 'https://www.youtube.com/watch?v=HG6yIjZapSA', duration: 48, studentCount: 19850, keyPoints: ['Define multi-service applications', 'Configure environment variables', 'Create repeatable local environments'], proTip: 'Name services after their role so logs remain readable as the stack grows.', resources: [{type: 'article', title: 'Docker Compose file reference', description: 'Reference for defining services and networks.', url: 'https://docs.docker.com/reference/compose-file/'}]},
      {slug: 'docker-image-security', title: 'Smaller and safer images', videoUrl: 'https://www.youtube.com/watch?v=8vXoMqjA3lE', duration: 35, studentCount: 17600, keyPoints: ['Use multi-stage builds', 'Run as a non-root user', 'Scan dependencies and layers'], proTip: 'A smaller image is easier to inspect, transfer, and patch.', resources: [{type: 'tool', title: 'Docker Scout', description: 'Docker tooling for image recommendations and vulnerabilities.', url: 'https://docs.docker.com/scout/'}]},
    ],
  },
  {
    courseSlug: 'typescript-deep-dive',
    lessons: [
      {slug: 'typescript-types-you-use-daily', title: 'Types you use every day', videoUrl: 'https://www.youtube.com/watch?v=30LWjhZzg50', duration: 46, isFreePreview: true, studentCount: 28700, keyPoints: ['Unions and intersections', 'Narrowing unknown values', 'Model optional data precisely'], proTip: 'Prefer narrowing at the boundary over spreading type assertions through the application.', resources: [{type: 'article', title: 'TypeScript Handbook', description: 'The official language handbook and reference.', url: 'https://www.typescriptlang.org/docs/handbook/intro.html'}]},
      {slug: 'typescript-generics-and-utility-types', title: 'Generics and utility types', videoUrl: 'https://www.youtube.com/watch?v=9i38Oe3A2xE', duration: 53, studentCount: 23900, keyPoints: ['Write reusable generic functions', 'Constrain type parameters', 'Compose built-in utility types'], proTip: 'Add a generic when it preserves a relationship between inputs and outputs, not just to avoid repetition.', resources: [{type: 'article', title: 'TypeScript Utility Types', description: 'Official reference for built-in type transformations.', url: 'https://www.typescriptlang.org/docs/handbook/utility-types.html'}]},
      {slug: 'typescript-safe-api-boundaries', title: 'Safe API boundaries', videoUrl: 'https://www.youtube.com/watch?v=U1s8gB7J9NQ', duration: 41, studentCount: 21400, keyPoints: ['Separate transport and domain types', 'Validate untrusted input', 'Keep API changes discoverable'], proTip: 'Types disappear at runtime, so validate data exactly where it enters your system.', resources: [{type: 'article', title: 'TypeScript JSON module', description: 'Official guidance for integrating TypeScript into applications.', url: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html'}]},
    ],
  },
]

const courses = [
  {slug: 'next-js-production', title: 'Next.js for Production', summary: 'Build fast, resilient web applications with the Next.js App Router, server rendering, and production performance practices.', level: 'intermediate', price: 89, isPopular: true, studentCount: 18420, categorySlug: 'web-development', instructorSlug: 'maya-patel', outcomes: [{icon: 'layers', title: 'Structure route-driven UI', description: 'Compose layouts, loading states, and errors around real product flows.'}, {icon: 'database', title: 'Fetch and cache data', description: 'Choose server-side data patterns that keep pages fast and current.'}, {icon: 'gauge', title: 'Ship with confidence', description: 'Measure and improve the performance of a production Next.js app.'}], moduleTitles: ['App Router foundations', 'Data fetching and caching', 'Production performance']},
  {slug: 'docker-for-developers', title: 'Docker Essentials', summary: 'Containerize applications and create consistent development environments without losing sight of security or operability.', level: 'beginner', price: 59, isPopular: true, studentCount: 22100, categorySlug: 'devops', instructorSlug: 'jordan-lee', outcomes: [{icon: 'box', title: 'Understand containers', description: 'Build, run, inspect, and troubleshoot images and containers.'}, {icon: 'workflow', title: 'Compose local stacks', description: 'Coordinate application services with repeatable configuration.'}, {icon: 'shield', title: 'Harden images', description: 'Reduce image size and improve the security of shipped artifacts.'}], moduleTitles: ['Images and containers', 'Compose for local development', 'Smaller and safer images']},
  {slug: 'typescript-deep-dive', title: 'TypeScript Deep Dive', summary: 'Use TypeScript to model real application boundaries, write expressive generics, and make evolving JavaScript systems safer.', level: 'intermediate', price: 74, isPopular: false, studentCount: 28700, categorySlug: 'programming-languages', instructorSlug: 'sam-rivera', outcomes: [{icon: 'braces', title: 'Model real data', description: 'Represent optional, unknown, and changing values without guesswork.'}, {icon: 'repeat', title: 'Compose reusable types', description: 'Use generics and utility types to preserve useful relationships.'}, {icon: 'check', title: 'Validate boundaries', description: 'Pair static types with runtime validation where data enters your app.'}], moduleTitles: ['Types you use every day', 'Generics and utility types', 'Safe API boundaries']},
]

async function upsertDocument(type, slug, fields) {
  const existing = await client.fetch(`*[_type == $type && slug.current == $slug][0]{_id}`, {type, slug})
  const documentFields = {...fields, slug: {current: slug}}
  if (existing?._id) {
    await client.patch(existing._id).set(documentFields).commit()
    return existing._id
  }
  const created = await client.create({_type: type, ...documentFields})
  return created._id
}

const categoryIds = new Map()
for (const category of categories) categoryIds.set(category.slug, await upsertDocument('category', category.slug, category))

const instructorIds = new Map()
for (const instructor of instructors) instructorIds.set(instructor.slug, await upsertDocument('instructor', instructor.slug, instructor))

const lessonIds = new Map()
for (const set of lessonSets) {
  for (const lesson of set.lessons) {
    const {slug, ...fields} = lesson
    lessonIds.set(slug, await upsertDocument('lesson', slug, fields))
  }
}

for (const course of courses) {
  const set = lessonSets.find((item) => item.courseSlug === course.slug)
  const {slug, categorySlug, instructorSlug, outcomes, moduleTitles, ...fields} = course
  const modules = moduleTitles.map((title) => ({
    _type: 'module',
    title,
    summary: `Practical lessons for ${title.toLowerCase()}.`,
    lessons: [{_type: 'reference', _ref: lessonIds.get(set.lessons.find((lesson) => lesson.title === title).slug)}],
  }))
  await upsertDocument('course', slug, {
    ...fields,
    learningOutcomes: outcomes,
    instructor: {_type: 'reference', _ref: instructorIds.get(instructorSlug)},
    category: {_type: 'reference', _ref: categoryIds.get(categorySlug)},
    modules,
  })
}

console.log(`Seeded ${categories.length} categories, ${instructors.length} instructors, ${lessonIds.size} lessons, and ${courses.length} courses.`)