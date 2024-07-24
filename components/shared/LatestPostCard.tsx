import { IPost } from '@/lib/actions/pipeline.actions'
import { timeAgo } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

type CardProps = {
  allPost: IPost,
  
  
}
const LatestPostCard = ({allPost}:CardProps) => {
  return (
    <div className=" flex  w-full  flex-col overflow-hidden  transition-all  ">
      <p className='py-2'>{timeAgo(allPost.createdAt)}</p>
  <Link 
    href={`/sites/${allPost.slug}`}
    className={`flex  flex-col gap-3  md:gap-4 }`}
  >
    <p className='p-medium-16 md:p-medium-16 line-clamp-2 flex-1 text-black font-bold hover:underline'>{allPost.title}</p>
  </Link>
</div>
  )
}

export default LatestPostCard