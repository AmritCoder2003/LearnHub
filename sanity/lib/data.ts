import {serverClient} from './server-client'
import {
  categoriesQuery,
  categoryBySlugQuery,
  courseBySlugQuery,
  coursesQuery,
  instructorBySlugQuery,
  lessonBySlugQuery,
} from '../queries'

export function getCourses() {
  return serverClient.fetch(coursesQuery)
}

export function getCourseBySlug(slug: string) {
  return serverClient.fetch(courseBySlugQuery, {slug})
}

export function getLessonBySlug(slug: string) {
  return serverClient.fetch(lessonBySlugQuery, {slug})
}

export function getInstructorBySlug(slug: string) {
  return serverClient.fetch(instructorBySlugQuery, {slug})
}

export function getCategories() {
  return serverClient.fetch(categoriesQuery)
}

export function getCategoryBySlug(slug: string) {
  return serverClient.fetch(categoryBySlugQuery, {slug})
}
