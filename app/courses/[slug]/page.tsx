import {notFound} from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import {getCourseBySlug, getCourses} from '@/sanity/lib/data'
import {urlFor} from '@/sanity/lib/image'
import CourseContent from './course-content'
import type {CourseData, CourseLesson} from './course-types'

export async function generateStaticParams() {
  const courses = await getCourses()
  return courses.map((course: CourseData) => ({slug: course.slug.current}))
}

export async function generateMetadata({params}: {params: Promise<{slug: string}>}) {
  const course = await getCourseBySlug((await params).slug)
  return course ? {title: `${course.title} | LearnHub`, description: course.summary} : {title: 'Course not found | LearnHub'}
}

export default async function CoursePage({params}: {params: Promise<{slug: string}>}) {
  const course = await getCourseBySlug((await params).slug)
  if (!course) notFound()

  const coverUrl = course.coverImage?.asset?.url
    ? urlFor(course.coverImage).width(900).url()
    : undefined
  const totalLessons = course.modules?.reduce((total: number, module: NonNullable<CourseData['modules']>[number]) => total + (module.lessons?.length || 0), 0) || 0
  const totalMinutes = course.modules?.reduce(
    (total: number, module: NonNullable<CourseData['modules']>[number]) => total + (module.lessons?.reduce((minutes: number, lesson: CourseLesson) => minutes + (lesson.duration || 0), 0) || 0),
    0,
  ) || 0

  return (
    <main className="course-page">
      <nav className="course-breadcrumb" aria-label="Breadcrumb">
          <Link href="/courses">All Courses</Link><span aria-hidden="true">›</span><span>{course.title}</span>
      </nav>
      <section className="course-hero">
        <div className="course-cover">
          {coverUrl ? <Image src={coverUrl} alt={course.coverImage?.alt || `${course.title} cover`} width={900} height={900} unoptimized /> : <strong>{course.title.slice(0, 2).toUpperCase()}</strong>}
        </div>
        <div className="course-intro">
          {course.isPopular && <span className="course-badge">Popular</span>}
          <h1>{course.title}</h1>
          <p className="course-summary">{course.summary}</p>
          <div className="course-stats" aria-label="Course details">
            <span><b>▥</b>{course.level}</span><span><b>◷</b>{Math.floor(totalMinutes / 60)}h {totalMinutes % 60}m</span><span><b>□</b>{course.modules?.length || 0} modules</span><span><b>♧</b>{(course.studentCount || 0).toLocaleString()} students</span>
          </div>
          <div className="course-actions"><a className="course-primary" href={course.modules?.[0]?.lessons?.[0]?.slug?.current ? `/lessons/${course.modules[0].lessons[0].slug.current}` : '#course-content'}>Continue Learning <span>→</span></a><CourseContent course={course} actionOnly /></div>
        </div>
      </section>
      <section className="outcomes" aria-labelledby="outcomes-title">
        <h2 id="outcomes-title">What you&apos;ll learn</h2>
        <div className="outcome-grid">{course.learningOutcomes?.map((outcome: NonNullable<CourseData['learningOutcomes']>[number]) => <article className="outcome-card" key={outcome._key}><span className="outcome-icon">{outcome.icon.slice(0, 1).toUpperCase()}</span><div><h3>{outcome.title}</h3><p>{outcome.description}</p></div></article>)}</div>
      </section>
      <section className="course-content" id="course-content">
        <div className="content-heading"><h2>Course Content</h2><span>{course.modules?.length || 0} modules&nbsp; · &nbsp;{Math.floor(totalMinutes / 60)}h {totalMinutes % 60}m&nbsp; · &nbsp;{totalLessons} lessons</span></div>
        <CourseContent course={course} />
      </section>
      <div className="course-progress"><div><small>Your Progress</small><strong>0% complete</strong></div><div className="progress-track"><i /></div><a href="#course-content">Continue Learning <span>→</span></a></div>
    </main>
  )
}