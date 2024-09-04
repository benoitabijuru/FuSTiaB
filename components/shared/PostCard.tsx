import { IArticle } from '@/lib/database/model/TechnologyPost.model';
import Link from 'next/link';
import React from 'react';

type CardProps = {
  article: IArticle,
  
  
}

const PostCard = ({ article }: CardProps) => {
  return (
    <div className="group relative flex min-h-[350px] w-full max-w-[450px] flex-col overflow-hidden rounded- bg-white shadow-md transition-all hover:shadow-2xl md:min-h-[350px] ">
      
        <Link href={`/technology/${article.slug}`}
          style={{ backgroundImage: `url(${article.imageUrl}) ` }}
          className='flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500 hover-effect'
        />
      
      <Link 
        href={`/technology/${article.slug}`}
        className={`flex min-h-[160px] flex-col gap-3 p-5 md:gap-4 }`}
      >
        <p className='p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black hover:underline'>{article.title}</p>
        <p className="text-slate-500 line-clamp-2 flex-1">{article.description}</p>
      </Link>
    </div>
  )
}

export default PostCard;
