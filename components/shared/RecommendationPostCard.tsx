import { IRecommendationPost } from '@/lib/database/model/recomendationPost.model'
import Link from 'next/link'
import React from 'react'

type RecommendationCardProps={
    recommendationPost:IRecommendationPost
  }
const RecommendationPostCard = ({recommendationPost}:RecommendationCardProps) => {
  return (
    <div className="group relative flex min-h-[350px] w-full max-w-[400px] flex-col overflow-hidden rounded- bg-white shadow-md transition-all hover:shadow-2xl md:min-h-[350px] ">
    <Link href={`/recommendation/${recommendationPost.slug}`}
    style={{backgroundImage:`url(${recommendationPost.imageUrl})`}}
    className='flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500'
    />
     {/* Is Article AUthor for edit */}
     <Link 
     href={`/recommendation/${recommendationPost.slug}`}
     className='flex min-h-[160px] flex-col gap-3 p-5 md:gap-4 '

     >
     
     <p className='p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black hover:text-blue-600'>{recommendationPost.title}</p>
     <p className="text-slate-500 line-clamp-2 flex-1">{recommendationPost.description}</p>
     </Link>
   </div>
  )
}

export default RecommendationPostCard