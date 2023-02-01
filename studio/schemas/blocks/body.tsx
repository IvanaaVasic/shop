import React from 'react'

export default {
  name: 'body',
  title: 'Body',
  type: 'array',
  of: [
    {
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'},
      ],
      marks: {
        decorators: [
          {
            title: 'Italic',
            value: 'em',
          },
          {
            title: 'Strong',
            value: 'strong',
          },
        ],
      },
      // Paragraphs
      type: 'block',
    },
    // Custom blocks
    {
      name: 'blockTestimonials',
      type: 'module.testimonials',
    },
    {
      name: 'blockBrandImages',
      type: 'module.brand',
    },
    {
      name: 'blockContact',
      type: 'module.contact',
    },
  ],
  options: {
    collapsible: true,
    collapsed: false,
  },
}
