export default {
  name:'gallery',
  title:'gallery',
  type: 'document',
  fields:[
      { 
          name:'name',
          title:'Name',
          type: 'string'
      },
  
      {
          name:'imgurl',
          title:'ImgUrl',
          type: 'image',
          options: {
            hotspot: true,
          },
      },  
   
  ]
}