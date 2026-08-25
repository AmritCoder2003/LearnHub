import {defineQuery} from 'next-sanity'

const imageProjection = `{
  asset->{_id, url, metadata {lqip, dimensions}},
  alt,
  hotspot,
  crop
}`

const instructorProjection = `{_id, name, slug, photo ${imageProjection}, expertise, bio}`
const categoryProjection = `{_id, title, slug, description}`
const lessonProjection = `{_id, title, slug, videoUrl, posterImage ${imageProjection}, duration, isFreePreview, studentCount, keyPoints, proTip, resources[]}`

export const coursesQuery = defineQuery(/* groq */ `
  *[_type == "course" && defined(slug.current)] | order(isPopular desc, title asc) {
    _id, title, slug, summary, coverImage ${imageProjection}, level, price, isPopular, studentCount,
    learningOutcomes[]{_key, icon, title, description},
    instructor->${instructorProjection},
    category->${categoryProjection},
    "moduleCount": count(modules),
    "lessonCount": count(modules[].lessons[])
  }
`)

export const courseBySlugQuery = defineQuery(/* groq */ `
  *[_type == "course" && slug.current == $slug][0] {
    _id, title, slug, summary, coverImage ${imageProjection}, level, price, isPopular, studentCount,
    learningOutcomes[]{_key, icon, title, description},
    instructor->${instructorProjection},
    category->${categoryProjection},
    modules[]{_key, title, summary, lessons[]->${lessonProjection}}
  }
`)

export const lessonBySlugQuery = defineQuery(/* groq */ `
  *[_type == "lesson" && slug.current == $slug][0] {
    ${lessonProjection},
    "courses": *[_type == "course" && references(^._id)] {
      _id, title, slug, instructor->${instructorProjection},
      "module": modules[references(^._id)][0] { _key, title, summary }
    }
  }
`)

export const instructorBySlugQuery = defineQuery(/* groq */ `
  *[_type == "instructor" && slug.current == $slug][0] {
    ${instructorProjection},
    "courses": *[_type == "course" && references(^._id)]{_id, title, slug, coverImage ${imageProjection}, level, price, studentCount}
  }
`)

export const categoriesQuery = defineQuery(/* groq */ `
  *[_type == "category" && defined(slug.current)] | order(title asc) ${categoryProjection}
`)

export const categoryBySlugQuery = defineQuery(/* groq */ `
  *[_type == "category" && slug.current == $slug][0] {
    ${categoryProjection},
    "courses": *[_type == "course" && references(^._id)]{_id, title, slug, summary, coverImage ${imageProjection}, level, price, studentCount}
  }
`)
