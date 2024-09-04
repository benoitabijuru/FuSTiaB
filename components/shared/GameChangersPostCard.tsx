import { IGameChangersPost } from '@/lib/database/model/gamechangerPost.model'
import Link from 'next/link'
import React from 'react'

type GameChangersCardProps={
    gameChangersPost:IGameChangersPost
  }

const GameChangersPostCard = ({gameChangersPost}:GameChangersCardProps) => {
  return (
    <div className="group relative flex min-h-[350px] w-full max-w-[400px] flex-col overflow-hidden rounded- bg-white shadow-md transition-all hover:shadow-2xl md:min-h-[350px] ">
    <Link href={`/game-changers/${gameChangersPost.slug}`}
    style={{backgroundImage:`url(${gameChangersPost.imageUrl})`}}
    className='flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500 hover-effect'
    />
     {/* Is Article AUthor for edit */}
     <Link 
     href={`/game-changers/${gameChangersPost.slug}`}
     className='flex min-h-[160px] flex-col gap-3 p-5 md:gap-4 '

     >
     
     <p className='p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black hover:underline'>{gameChangersPost.title}</p>
     <p className="text-slate-500 line-clamp-2 flex-1">{gameChangersPost.description}</p>
     </Link>
   </div>
  )
}

export default GameChangersPostCard