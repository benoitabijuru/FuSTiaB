import AfricanPostCollection from '@/components/shared/AfricanPostCollection'
import Pagination from '@/components/shared/pagination';
import { getCombinedAfricaPosts} from '@/lib/actions/pipeline.actions'
import { SearchParamsProps } from '@/types'
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title:"Africa",
  description:"Get all news and Insight about technology, Business, entrepreneurship and Game changers in Africa technology and entrepreneurship.",
  // metadataBase:new URL('/technology'),
  keywords:["Africa Technology","Africa Business","Africa StartUp","AI","Computation","Africa Founders"],
 alternates: {
        canonical: '/',
        languages: {
          'en-US': '/en-US',
        },
},
openGraph: {
        type:"website",
        title:"Africa",
        url:"/Africa",
        description:"Get all news and Insight about technology, Business, entrepreneurship and Game changers in Africa technology and entrepreneurship.",
        siteName:"FUSTIAB"
  
},
};

export default async function Africa({ searchParams }: SearchParamsProps){

  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || '';
  const category = (searchParams?.category as string) || '';

  const getAfricaPosts = await getCombinedAfricaPosts({
    query: searchText,
    category,
    page,
    limit: 12
  })
  return (
    <>
       <div className="mx-20">
          <h1 className='text-3xl font-semibold border-b-2 mt-20 mx-10 px-5 border-slate-600 hover:border-b-yellow-700'>Africa</h1>
          <div className="m-10 flex justify-center">
          <div className="bg-slate-700 p-8 rounded-lg shadow-3xl">
            <p className="text-xl font-semibold italic text-white">
              Africa technology, Business, game changers and recommendation news.
              </p>
          </div>
        </div>
          <AfricanPostCollection
            data={getAfricaPosts?.data} 
            emptyTitle="No Tech Article"
            emptyStateSubText="Come back later"
            collectionType="All_AfricaPost"
            limit={12}
            page={page}
            totalPages={getAfricaPosts?.totalPages}
          />
        </div>
        <div className="flex justify-center my-20">
            <Pagination
            page={searchParams?.page ? +searchParams.page : 1}
            totalPages={getAfricaPosts?.totalPages}
            /> 
        </div>
    </>
    
  )
}

