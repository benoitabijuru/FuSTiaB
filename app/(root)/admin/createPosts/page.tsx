import Link from 'next/link'
import React from 'react'

const CreatePostPage = () => {
  return (
    <div className='flex flex-row space-x-20'>
        <div className="bg-green-800 text-white rounded-full"><Link href="/technology/create-technology-post" ><p className="p-3 justify-center">Publish Technology Post</p></Link></div>
         <div className="bg-green-800 text-white rounded-full"><Link href="/business/create-business-post" ><p className="p-3 justify-center">Publish Business Post</p></Link></div>
         <div className="bg-green-800 text-white rounded-full"><Link href="/recommendation/create-recommendation-post" ><p className="p-3 justify-center">Publish  Recommendation Post</p></Link></div>
         <div className="bg-green-800 text-white rounded-full"><Link href="/game-changers/create-changers-post" ><p className="p-3 justify-center">Publish Game Changers Post</p></Link></div>
    </div>
  )
}

export default CreatePostPage