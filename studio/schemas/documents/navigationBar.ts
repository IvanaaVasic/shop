export default {
  name: 'navigationBar',
  title: 'Navigation Bar',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'text',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
  ],
  preview: {
    select: {
      name: 'name',
    },
    prepare(selection) {
      const {name} = selection
      return {
        title: name,
        subtitle: 'Navigation',
      }
    },
  },
}
