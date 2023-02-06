// import {defineField, defineType} from 'sanity'

export default ({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
  {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
   {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
   {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },  
  {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    // defineField({
    //   name: 'body',
    //   title: 'Body',
    //   type: 'block',
    // }),
 {
      name: 'body',
      title: 'Body',
      type: 'array',
      of:[{type:'block'}]
    },
  ],

  // preview: {
  //   select: {
  //     title: 'title',
  //     author: 'author.name',
  //     media: 'mainImage',
  //   },
  //   prepare(selection) {
  //     const {author} = selection
  //     return {...selection, subtitle: author && `by ${author}`}
  //   },
  // },
})
