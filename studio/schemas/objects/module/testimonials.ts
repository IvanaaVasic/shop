import {CommentIcon, BlockElementIcon} from '@sanity/icons'
import pluralize from 'pluralize-esm'
import {defineField} from 'sanity'
import blocksToText from '../../../utils/blocksToText'

export default defineField({
  name: 'module.testimonials',
  title: 'Testimonials',
  type: 'object',
  icon: CommentIcon,
  fields: [
    // Groups
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          name: 'group',
          title: 'Group',
          type: 'object',
          icon: BlockElementIcon,
          fields: [
            defineField({
              name: 'person',
              title: 'Person',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'comment',
              title: 'Comment',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'classBox',
              title: 'ClassBox',
              type: 'string',
            }),
          ],
          preview: {
            select: {
              person: 'person',
              comment: 'comment',
            },
            prepare(selection) {
              const {comment, person} = selection
              return {
                subtitle: comment && blocksToText(comment),
                title: person,
              }
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      testimonials: 'testimonials',
      url: 'url',
    },
    prepare(selection) {
      const {testimonials} = selection
      return {
        subtitle: 'Testimonial',
        title:
          testimonials.length > 0 ? pluralize('group', testimonials.length, true) : 'No groups',
      }
    },
  },
})
