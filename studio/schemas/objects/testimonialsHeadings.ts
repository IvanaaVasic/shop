import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonialsHeadings',
  title: 'Testimonials Heading',
  type: 'object',
  fields: [
    defineField({
      name: 'header',
      title: 'Header',
      type: 'text',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})
