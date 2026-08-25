import { type SchemaTypeDefinition } from 'sanity'
import {course} from './documents/course'
import {instructor} from './documents/instructor'
import {lesson} from './documents/lesson'
import {category} from './documents/category'
import {learningOutcome} from './objects/learningOutcome'
import {moduleSchema} from './objects/module'
import {resource} from './objects/resource'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [course, moduleSchema, lesson, instructor, category, learningOutcome, resource],
}
