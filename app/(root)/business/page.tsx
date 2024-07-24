import Hero from '@/components/hero/Hero';
import RouteHero from '@/components/hero/RouteHero';
import BusinessCollection from '@/components/shared/BusinessCollection';
import Search from '@/components/shared/Search';
import { getAllBusinessPost } from '@/lib/actions/businessPost.action';
import { SearchParamsProps } from '@/types';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title:"Business",
  description:"",
};
export default async function BusinessPage ({ searchParams }: SearchParamsProps){
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || '';
  const category = (searchParams?.category as string) || '';

  const businessArticles = await getAllBusinessPost({
    query: searchText,
    category: '',
    page: 1,
    limit: 20
  })
  return (
    <div className="mx-20">
        <div >
        <RouteHero/>
        <div className="mx-20">
        <Search />
        </div>
        <BusinessCollection
          data={businessArticles?.data} 
          emptyTitle="No Business Article"
          emptyStateSubText="Come back later"
          collectionType="All_BusinessPost"
          limit={20}
          page={1}
          totalPages={2}
        />
      </div>
    </div>
  )
}

