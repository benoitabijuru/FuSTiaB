import { IPost } from '@/lib/actions/pipeline.actions'
import React from 'react'
import AfricaPostCard from './AfricaPostCard'

type CollectionProps ={
  data:IPost[],
  emptyTitle:string,
  emptyStateSubText:string,
  limit:number,
  page: number | string,
  totalPages?: number,
  urlParamName?:string,
  collectionType?:"All_AfricaPost"| "Latest_Africa_Post" | "My_AfricaPost"
}

const AfricanPostCollection = ({
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
                {data.map((allPost) => {
                    return(
                        <li key={allPost._id} className="flex justify-center">
                             <AfricaPostCard  allPost={allPost}/>
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

export default AfricanPostCollection
