import { IArticle } from '@/lib/database/model/TechnologyPost.model';
import React from 'react';
import PostCard from './PostCard';

type CollectionProps = {
  data: IArticle[],
  emptyTitle: string,
  emptyStateSubText: string,
  limit: number,
  page: number | string,
  totalPages?: number,
  urlParamName?: string,
  collectionType?: "All_TechPost" | "Latest_Tech_Post" | "My_TechPost"
}

const Collection = ({
  data,
  emptyTitle,
  emptyStateSubText,
  page,
  totalPages = 0,
  collectionType,
  urlParamName,
}: CollectionProps) => {

  return (
    <>
    {data.length > 0 ? (
        <div className="flex flex-col">
            <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
                {data.map((article, index) => {
                    return(
                        <li key={article._id} className="flex justify-center" >
                             <PostCard article={article} />
                        </li>
                    )
                })}
            </ul>
        </div>
    ):(
        <div className="flex-center wrapper min-h-[200px] w-full flex-col gap-3 rounded-[14px] bg-grey-50 py-28 text-center">
            <h3 className='p-bold md:h5-bold'>{emptyTitle}</h3>
            <p className='p-regular-14'>{emptyStateSubText}</p>
        </div>
    )}
    
    </>
  )
}

export default Collection;
