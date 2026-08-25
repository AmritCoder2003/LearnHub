'use client'

import {useState} from 'react'
import type {CourseData} from './course-types'

export default function CourseContent({course, actionOnly = false}: {course: CourseData; actionOnly?: boolean}) {
  const [expanded, setExpanded] = useState(false)
  const [bookmarked, setBookmarked] = useState(false)
  if (actionOnly) return <button type="button" className={`bookmark-button ${bookmarked ? 'is-bookmarked' : ''}`} onClick={() => setBookmarked(!bookmarked)} aria-pressed={bookmarked}>♡ <span>{bookmarked ? 'Bookmarked' : 'Bookmark'}</span></button>
  const lessons = course.modules?.flatMap((module, moduleIndex) => module.lessons?.map((lesson, lessonIndex) => ({lesson, module, number: moduleIndex * 3 + lessonIndex + 1})) || []) || []
  const visibleLessons = expanded ? lessons : lessons.slice(0, 6)
  return <div className="lesson-list">{visibleLessons.map(({lesson, module, number}) => <a className="lesson-row" href={`/lessons/${lesson.slug.current}`} key={lesson._id}><span className="lesson-number">{number}</span><span className="lesson-copy"><b>{lesson.title}</b><small>{module.title}</small></span><time>{lesson.duration}m</time><span className="lesson-chevron">⌄</span></a>)}{lessons.length > 6 && <button className="show-lessons" type="button" onClick={() => setExpanded(!expanded)}>{expanded ? 'Show fewer lessons' : `Show all ${lessons.length} lessons`} <span>⌄</span></button>}</div>
}