import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'კატეგორია',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'სახელი',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'აღწერა',
      type: 'text',
    }),
  ],
})
