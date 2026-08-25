import {UserIcon} from '@sanity/icons/User'
import {defineField, defineType} from 'sanity'

export const instructor = defineType({
  name: 'instructor',
  title: 'Instructor',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({name: 'name', title: 'Name', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'slug', title: 'Slug', type: 'slug', options: {source: 'name'}, validation: (rule) => rule.required()}),
    defineField({name: 'photo', title: 'Photo', type: 'image', options: {hotspot: true}}),
    defineField({name: 'expertise', title: 'Expertise', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'bio', title: 'Bio', type: 'text', rows: 6, validation: (rule) => rule.required()}),
  ],
})
