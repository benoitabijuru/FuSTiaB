import { getArticleBySlug } from '@/lib/actions/articles.actions'
import { SearchParamsProps } from '@/types'
import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'About Acme'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
 
export default async function Image({ params: { slug }}: SearchParamsProps) {
    const article = await getArticleBySlug(slug);

 
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {article.title}
      </div>
    ),
    {
      
      width: 1200,
      height: 600,
    }
  )
}