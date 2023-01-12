import {ImagesIcon, BlockElementIcon} from '@sanity/icons'
import pluralize from 'pluralize-esm'
import {defineField} from 'sanity'

export default defineField({
  name: 'module.brand',
  title: 'Brand',
  type: 'object',
  icon: ImagesIcon,
  fields: [
    // Groups
    defineField({
      name: 'brandImages',
      title: 'Brand Images',
      type: 'array',
      of: [
        {
          name: 'group',
          title: 'Group',
          type: 'object',
          icon: BlockElementIcon,
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
          ],
          preview: {
            prepare() {
              return {
                title: 'Brand Images',
                subtitle: 'Brand list',
              }
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      brand: 'brandImages',
      url: 'url',
    },
    prepare(selection) {
      const {brand} = selection
      return {
        subtitle: 'Brand Images',
        title: brand.length > 0 ? pluralize('group', brand.length, true) : 'No groups',
      }
    },
  },
})
