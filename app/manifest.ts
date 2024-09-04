import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Future of Science and Technology in Africa Business',
    short_name: 'FUSTIAB',
    description: 'We are technology, entrepreneurship, business and innovation africa based magazine, we focus on analysing and sharing tips from rest of the world founders to Africa founders.',
    start_url: 'https://fustiab.com',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}