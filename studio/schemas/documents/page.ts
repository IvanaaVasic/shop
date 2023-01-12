import {DocumentIcon} from '@sanity/icons'
import {validateSlug} from '../../utils/validateSlug'

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: DocumentIcon,
  groups: [
    {
      name: 'theme',
      title: 'Theme',
    },
    {
      default: true,
      name: 'editorial',
      title: 'Editorial',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    // Title
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    //Main heading
    {
      name: 'mainHeading',
      title: 'Main Heading',
      type: 'mainHeading',
      validation: (Rule) => Rule.required(),
      group: 'editorial',
    },
    // Slug
    {
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      // @ts-ignore - TODO - fix this TS error
      validation: validateSlug,
    },
    //Testimonials Heading
    {
      name: 'testimonialsHeadings',
      title: 'Testimonials Heading',
      type: 'testimonialsHeadings',
      validation: (Rule) => Rule.required(),
      group: 'editorial',
    },
    //Brand List Heading
    {
      name: 'brandHeadings',
      title: 'Brand Heading',
      type: 'brandHeadings',
      validation: (Rule) => Rule.required(),
      group: 'editorial',
    },
    // Body
    {
      name: 'body',
      title: 'Body',
      type: 'body',
      group: 'editorial',
    },
  ],
  preview: {
    select: {
      active: 'active',
      seoImage: 'seo.image',
      title: 'title',
    },
    prepare(selection) {
      const {seoImage, title} = selection

      return {
        media: seoImage,
        title,
      }
    },
  },
}
