import {localePrepare} from '../../utils/locale-prepare'

export const productListBlock = {
  name: 'productListBlock',
  title: 'Product list block',
  type: 'object',
  groups: [
    {name: 'content', title: 'Content', default: true},
    {name: 'settings', title: 'Settings'},
  ],
  fields: [
    {
      name: 'items',
      title: 'Products',
      type: 'array',
      initialValue: [],
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'productSneakers',
            },
          ],
        },
      ],
      group: 'content',
    },
    {
      name: 'showInSwiper',
      title: 'Show in swiper',
      type: 'boolean',
      initialValue: true,
      group: 'settings',
    },
  ],
  preview: {
    select: {
      title: `name`,
    },
    prepare: localePrepare,
  },
  options: {
    collapsible: true,
    collapsed: false,
  },
}
