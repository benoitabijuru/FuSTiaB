

import RouteHero from '@/components/hero/RouteHero';
import CategoryFilter from '@/components/shared/CategoryFilter';
import Search from '@/components/shared/Search';
import TechCollection from '@/components/shared/TechCollection';
import { getAllArticles } from '@/lib/actions/articles.actions';
import { SearchParamsProps } from '@/types';
import { Metadata } from 'next'



 
export const metadata: Metadata = {
  title:"Technology",
  description:"",
};


export default async function Technology({ searchParams }: SearchParamsProps){

  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || '';
  const category = (searchParams?.category as string) || '';

  const techArticles = await getAllArticles({
    query: searchText,
    category,
    page,
    limit: 20
  })
  return (
      <div className="mx-20">
        <RouteHero/>
        <div className="mx-20 pt-10">
        <Search />
        </div>
        <div className="py-5">
          <TechCollection
            data={techArticles?.data} 
            emptyTitle="No Tech Article"
            emptyStateSubText="Come back later"
            collectionType="All_TechPost"
            limit={20}
            page={1}
            totalPages={2}
          />
        </div>
        
      </div>
  )
}

