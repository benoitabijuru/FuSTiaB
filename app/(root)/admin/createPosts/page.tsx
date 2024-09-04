import Link from 'next/link'
import React from 'react'

const CreatePostPage = () => {
  return (
    <div className='flex flex-row space-x-20'>
        <div className="bg-green-800 text-white rounded-full"><Link href="/admin/createPosts/createTechPost" ><p className="p-3 justify-center">Publish Technology Post</p></Link></div>
         <div className="bg-green-800 text-white rounded-full"><Link href="/admin/createPosts/createBusinessPost" ><p className="p-3 justify-center">Publish Business Post</p></Link></div>
         <div className="bg-green-800 text-white rounded-full"><Link href="/admin/createPosts/createRecPosts" ><p className="p-3 justify-center">Publish  Recommendation Post</p></Link></div>
         <div className="bg-green-800 text-white rounded-full"><Link href="/admin/createPosts/createChangersPosts" ><p className="p-3 justify-center">Publish Game Changers Post</p></Link></div>
    </div>
  )
}

export default CreatePostPage