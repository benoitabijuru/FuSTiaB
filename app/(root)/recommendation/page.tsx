
import Link from 'next/link'
import { Metadata } from 'next'
import RecommendationCollection from '@/components/shared/RecommendationCollection';
import { getAllRecommendationPost } from '@/lib/actions/recommendation.action';
import Search from '@/components/shared/Search';
import { SearchParamsProps } from '@/types';
import Pagination from '@/components/shared/pagination';



 
export const metadata: Metadata = {
  title:"Recommendation",
  description:"",
};



export default async function Recommendation({ searchParams }: SearchParamsProps){
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || '';
  const category = (searchParams?.category as string) || '';

  const recommendationArticles = await getAllRecommendationPost({
    query: searchText,
    category,
    page,
    limit: 12
  })
  return (
    <> 
    <div className="mx-20">
     {/* <p className="text-center wrapper text-[14px] "> When you buy through our links, we earn commission, No additional cost for you.<span><Link href="/about-fustiab/recommendation" className="text-blue-500 font-semibold underline ">Learn more.</Link></span> </p> */}
     
     <h1 className=' text-3xl font-semibold border-b-2 mt-20 mx-10 px-5 border-slate-600 hover:border-b-yellow-700'> Recommendation</h1>
        <div className="m-10 flex justify-center">
          <div className="bg-slate-700 p-8 rounded-lg shadow-3xl">
            <p className="text-xl font-semibold italic text-white">
             We independently review and explore everything we recommend here.
            </p>
          </div>
        </div>
        <div className="">
        <RecommendationCollection
            data={recommendationArticles?.data} 
            emptyTitle="No Recommendation Article"
            emptyStateSubText="Come back later"
            collectionType="All_RecommendationPost"
            limit={12}
            page={page}
            totalPages={recommendationArticles?.totalPages}
          />
        </div>
      
    </div>
    <div className="flex justify-center my-20">
            <Pagination
            page={searchParams?.page ? +searchParams.page : 1}
            totalPages={recommendationArticles?.totalPages}
            /> 
    </div>
    </>
    
  )
}

