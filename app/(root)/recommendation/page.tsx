
import Link from 'next/link'
import { Metadata } from 'next'
import RecommendationCollection from '@/components/shared/RecommendationCollection';
import { getAllRecommendationPost } from '@/lib/actions/recommendation.action';
import RouteHero from '@/components/hero/RouteHero';
import Search from '@/components/shared/Search';
import { SearchParamsProps } from '@/types';



 
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
    page: 1,
    limit: 20
  })
  return (
    <> 
    <div className="mx-20">
     <RouteHero/>
     <p className="text-center wrapper text-[14px] ">We independently review everything we recommend here. When you buy through our links, we earn commission, No additional cost for you.<span><Link href="/about-fustiab/recommendation" className="text-blue-500 font-semibold underline ">Learn more.</Link></span> </p>
     <div className="mx-20">
        <Search />
      </div>
      <RecommendationCollection
        data={recommendationArticles?.data} 
        emptyTitle="No Recommendation Article"
        emptyStateSubText="Come back later"
        collectionType="All_RecommendationPost"
        limit={20}
        page={1}
        totalPages={2}
      />
    </div>
    </>
    
  )
}

