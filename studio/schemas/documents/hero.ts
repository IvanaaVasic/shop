import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'heroImages',
  title: 'Hero Images',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'image',
        maxLength: 96,
      },
    }),
  ],
})
