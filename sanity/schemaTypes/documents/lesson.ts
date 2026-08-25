import {DocumentTextIcon} from '@sanity/icons/DocumentText'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const lesson = defineType({
  name: 'lesson',
  title: 'Lesson',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'slug', title: 'Slug', type: 'slug', options: {source: 'title'}, validation: (rule) => rule.required()}),
    defineField({name: 'videoUrl', title: 'Video URL', type: 'url', validation: (rule) => rule.required()}),
    defineField({name: 'posterImage', title: 'Poster image', type: 'image', options: {hotspot: true}}),
    defineField({name: 'duration', title: 'Duration in minutes', type: 'number', validation: (rule) => rule.required().positive()}),
    defineField({name: 'isFreePreview', title: 'Free preview', type: 'boolean', initialValue: false}),
    defineField({name: 'studentCount', title: 'Student count', type: 'number', validation: (rule) => rule.integer().min(0)}),
    defineField({
      name: 'notes',
      title: 'Notes',
      type: 'array',
      of: [defineArrayMember({type: 'block'})],
    }),
    defineField({
      name: 'keyPoints',
      title: 'Key points',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      validation: (rule) => rule.max(8),
    }),
    defineField({name: 'proTip', title: 'Pro tip', type: 'text', rows: 4}),
    defineField({
      name: 'resources',
      title: 'Resources',
      type: 'array',
      of: [defineArrayMember({type: 'resource'})],
    }),
  ],
})
