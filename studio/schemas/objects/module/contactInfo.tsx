import {InfoOutlineIcon, BlockElementIcon} from '@sanity/icons'
import pluralize from 'pluralize-esm'
import blocksToText from '../../../utils/blocksToText'

export default {
  name: 'module.contact',
  title: 'Contact',
  type: 'object',
  icon: InfoOutlineIcon,
  fields: [
    // Groups
    {
      name: 'contact',
      title: 'Contact',
      type: 'array',
      of: [
        {
          name: 'group',
          title: 'Group',
          type: 'object',
          icon: InfoOutlineIcon,
          fields: [
            {
              name: 'heading',
              title: 'Heading',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'info',
              title: 'Info',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
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
            select: {
              title: 'heading',
              subtitle: 'info',
            },
            prepare(selection) {
              const {title, subtitle} = selection
              return {
                subtitle: subtitle && blocksToText(subtitle),
                title: title,
              }
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      contact: 'contact',
      url: 'url',
    },
    prepare(selection) {
      const {contact} = selection
      return {
        subtitle: 'Contact',
        title: contact.length > 0 ? pluralize('group', contact.length, true) : 'No groups',
      }
    },
  },
}
