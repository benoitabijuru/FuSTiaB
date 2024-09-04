import { IPost } from '@/lib/actions/pipeline.actions'
import Link from 'next/link'
import React from 'react'

type CardProps = {
    allPost: IPost,
    
  }
const AfricaPostCard = ({allPost}:CardProps) => {
  return (
    <div className="group relative flex min-h-[350px] w-full max-w-[400px] flex-col overflow-hidden rounded- bg-white shadow-md transition-all hover:shadow-2xl md:min-h-[350px] ">
    <Link href={`/africa/${allPost.slug}`}
    style={{backgroundImage:`url(${allPost.imageUrl})`}}
    className='flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500 hover-effect'
    />
     {/* Is Article AUthor for edit */}
     <Link 
     href={`/africa/${allPost.slug}`}
     className='flex min-h-[160px] flex-col gap-3 p-5 md:gap-4 '
     >
     
     <p className='p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black hover:underline'>{allPost.title}</p>
     <p className="text-slate-500 line-clamp-2 flex-1">{allPost.description}</p>
     </Link>
   </div>
  )
}

export default AfricaPostCard

