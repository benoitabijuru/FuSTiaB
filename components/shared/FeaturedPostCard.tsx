import { IRecommendationPost } from '@/lib/database/model/recomendationPost.model'
import Link from 'next/link'
import React from 'react'

type RecommendationCardProps={
    recommendationPost:IRecommendationPost
  }
const FeaturedPostCard = ({recommendationPost}:RecommendationCardProps) => {
  return (
    <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden   transition-all  md:min-h-[380px] ">
    <Link href={`/recommendation/${recommendationPost._id}`}
    style={{backgroundImage:`url(${recommendationPost.imageUrl})`}}
     className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500 hover-effect"
    />
     {/* Is Article AUthor for edit */}
     <Link 
     href={`/recommendation/${recommendationPost._id}`}
     className='flex min-h-[50px] flex-col gap-3 p-5 md:gap-4 '

     >
     
     <p className='p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black hover:text-blue-600'>{recommendationPost.title}</p>
     </Link>
   </div>
  )
}

export default FeaturedPostCard