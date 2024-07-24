import React from 'react'
import BusinessPostCard from './BusinessPostCard'
import { IBusinessPost } from '@/lib/database/model/businessPost.model'

type CollectionProps ={
  data:IBusinessPost[],
  emptyTitle:string,
  emptyStateSubText:string,
  limit:number,
  page: number | string,
  totalPages?: number,
  urlParamName?:string,
  collectionType?:"All_BusinessPost"| "Latest_Business_Post" | "My_BusinessPost"
}

const BusinessCollection = ({
  data,
  emptyTitle,
  emptyStateSubText,
  page,
  totalPages=0,
  collectionType,
  urlParamName,
}:CollectionProps) => {
  return (
    <>
    {data.length > 0 ? (
        <div className="flex flex-col">
            <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
                {data.map((businessPost) => {
                    return(
                        <li key={businessPost._id} className="flex justify-center">
                             <BusinessPostCard businessPost={businessPost} />
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

export default BusinessCollection