import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'navigationBar',
  title: 'Navigation Bar',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'text',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
  ],
})
