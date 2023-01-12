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
}
