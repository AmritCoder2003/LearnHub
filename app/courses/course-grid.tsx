'use client'

import Image from 'next/image'
import Link from 'next/link'
import {useState} from 'react'
import {urlFor} from '@/sanity/lib/image'

export interface CourseCardData {
  _id: string
  title: string
  slug: {current: string}
  summary: string
  level: string
  price?: number
  isPopular?: boolean
  studentCount?: number
  coverImage?: {alt?: string; asset?: {_id: string; url?: string}}
  category?: {title?: string}
  moduleCount?: number
  lessonCount?: number
}

export default function CourseGrid({courses}: {courses: CourseCardData[]}) {
  const categories = ['All', ...new Set(courses.map((course) => course.category?.title).filter(Boolean) as string[])]
  const [selectedCategory, setSelectedCategory] = useState('All')
  const visibleCourses = selectedCategory === 'All' ? courses : courses.filter((course) => course.category?.title === selectedCategory)
  return <><div className="catalog-filters" aria-label="Course categories">{categories.map((category) => <button className={selectedCategory === category ? 'selected' : ''} key={category} type="button" onClick={() => setSelectedCategory(category)}>{category}</button>)}</div><div className="catalog-grid">{visibleCourses.map((course) => { const imageUrl = course.coverImage?.asset?.url ? urlFor(course.coverImage).width(900).url() : undefined; return <Link className="catalog-card" href={`/courses/${course.slug.current}`} key={course._id}><div className="catalog-card-image">{imageUrl ? <Image src={imageUrl} alt={course.coverImage?.alt || `${course.title} cover`} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" unoptimized /> : <strong>{course.title.slice(0, 2).toUpperCase()}</strong>}{course.isPopular && <span className="catalog-popular">Popular</span>}</div><div className="catalog-card-body"><span className="catalog-category">{course.category?.title || 'LearnHub'}</span><h2>{course.title}</h2><p>{course.summary}</p><footer><span>{course.level}</span><span>{course.moduleCount || 0} modules</span><span>{(course.studentCount || 0).toLocaleString()} students</span><b>{course.price ? `$${course.price}` : 'Free'}</b></footer></div></Link>})}</div>{visibleCourses.length === 0 && <p className="catalog-empty">No courses in this category yet.</p>}</>
}