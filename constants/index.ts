export const navLinks = [
  { 
    name: "Africa", 
    path: "/africa",
   },
  { 
   name: "Technology", 
   path: "/technology",
  },
  {
    name: "Business",
    path: "/business",
  },
  {
      
    name: "Game Changers",
    path: "/game-changers",
  },
  { 
    name: "Recommendation", 
    path: "/recommendation",
   }
 
];

export const sideNavLinks = [
  { 
    name: "Africa", 
    path: "/africa",
   },
  { 
    name: "Technology", 
    path: "/technology",
   },
   {
     name: "Business",
     path: "/business",
   },
   {
       
     name: "Game Changers",
     path: "/game-changers",
   },
   { 
    name: "Recommendation", 
    path: "/recommendation",
   },
];
  
// Technology default value
  export const articleDefaultValues = {
    title: '',
    description: '',
    content: '',
    imageUrl: '',
    categoryId: '',
    author:'',
    comment:'',
    path:'/',
    slug:"",
    isFeatured: false, // Default to false
    isRelatedToAfrica: false, // Default to false
    seo: {
      metaTitle: '',
      metaDescription: '',
      keywords: [] // Initialized as an empty array
    },

  }

// Business default value
export const businessPostDefaultValues = {
  title: '',
    description: '',
    content: '',
    imageUrl: '',
    categoryId: '',
    author:'',
    comment:'',
    path:'/',
    slug:"",
    isFeatured: false, // Default to false
    isRelatedToAfrica: false, // Default to false
    seo: {
      metaTitle: '',
      metaDescription: '',
      keywords: [] // Initialized as an empty array
    },

}
// Business default value
export const recommendationPostDefaultValues = {
  title: '',
  description: '',
  content: '',
  imageUrl: '',
  categoryId: '',
  author:'',
  comment:'',
  path:'/',
  slug:"",
  isFeatured: false, // Default to false
  isRelatedToAfrica: false, // Default to false
  seo: {
    metaTitle: '',
    metaDescription: '',
    keywords: [] // Initialized as an empty array
  },

}
// GameChangers default value
export const gameChangersPostDefaultValues = {
  title: '',
  description: '',
  content: '',
  imageUrl: '',
  categoryId: '',
  author:'',
  comment:'',
  path:'/',
  slug:"",
  isFeatured: false, // Default to false
  isRelatedToAfrica: false, // Default to false
  seo: {
    metaTitle: '',
    metaDescription: '',
    keywords: [] // Initialized as an empty array
  },

}

export const QuotesDefaultValues = {
  quote:"",
  author:"",
  title:"",
  viewed:false,
}