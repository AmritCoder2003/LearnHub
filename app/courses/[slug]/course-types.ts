export interface CourseLesson {
  _id: string
  title: string
  slug: {current: string}
  duration?: number
}

export interface CourseModule {
  _key: string
  title: string
  summary?: string
  lessons?: CourseLesson[]
}

export interface CourseData {
  _id: string
  title: string
  slug: {current: string}
  summary: string
  level: string
  price?: number
  isPopular?: boolean
  studentCount?: number
  coverImage?: {alt?: string; asset?: {_id: string; url?: string}}
  learningOutcomes?: {_key: string; icon: string; title: string; description: string}[]
  modules?: CourseModule[]
}