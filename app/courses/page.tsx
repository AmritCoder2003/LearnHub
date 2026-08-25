import {getCourses} from '@/sanity/lib/data'
import CourseGrid from './course-grid'
import type {CourseCardData} from './course-grid'

export const metadata = {
  title: 'All Courses | LearnHub',
  description: 'Explore practical courses for modern software teams.',
}

export default async function CoursesPage() {
  const courses = (await getCourses()) as CourseCardData[]
  return <main className="catalog-page"><header className="catalog-header"><div><p className="catalog-eyebrow">LEARNHUB CATALOG</p><h1>All Courses</h1><p>Build useful skills with focused lessons from people who practice them.</p></div><span className="catalog-count">{courses.length} courses</span></header><CourseGrid courses={courses} /></main>
}