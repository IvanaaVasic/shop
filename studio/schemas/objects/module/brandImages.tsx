import {ImagesIcon, BlockElementIcon} from '@sanity/icons'
import pluralize from 'pluralize-esm'

export default {
  name: 'module.brand',
  title: 'Brand',
  type: 'object',
  icon: ImagesIcon,
  fields: [
    // Groups
    {
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
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
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
    },
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
}
