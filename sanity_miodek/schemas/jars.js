import {defineField, defineType} from 'sanity'

export default {
  name: 'jars',
  title: 'Jars',
  type: 'document',
  fields: [
    defineField({
      name: 'jar',
      title: 'jar',
      type: 'number',
    }),
  ],
}
