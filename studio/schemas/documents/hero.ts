export default {
  name: 'heroImages',
  title: 'Hero Images',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'image',
        maxLength: 96,
      },
    },
  ],
  preview: {
    select: {
      image: 'image',
    },
    prepare(selection) {
      const {image} = selection
      return {
        title: 'Hero image',
        subtitle: 'Slider image',
        media: image,
      }
    },
  },
}
