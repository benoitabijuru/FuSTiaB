import { Metadata } from 'next'
import GameChangersCollection from "@/components/shared/GameChangersCollection";
import { getAllGameChangersPost } from "@/lib/actions/gameChangersPost.action";
import Hero from '@/components/hero/Hero';
import RouteHero from '@/components/hero/RouteHero';
import Search from '@/components/shared/Search';
import { SearchParamsProps } from '@/types';



 
export const metadata: Metadata = {
  title:"Game Changers",
  description:"",
};
export default async function GameChangersPage({ searchParams }: SearchParamsProps){
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || '';
  const category = (searchParams?.category as string) || '';

  const gameChangersArticles= await getAllGameChangersPost({
    query: searchText,
    category,
    page: 1,
    limit: 20
  })
  return (
    <div className='mx-20'>
      <p>Game Changers, We consider those Inventors who invented new field and new technology those who pushed humanity forward, may be scientists or engineers. Indeed, we consider founders, those who founded game changing venture which lead the innovation, we also consider those upcomming solving a big future problem. Finaly we consider those who changed investment field and invest in future of technology.</p>
      
      <div className="">
      <RouteHero/>
        <div className="mx-20">
          <Search />
        </div>
        <GameChangersCollection
         data={gameChangersArticles?.data} 
         emptyTitle="No gameChangers Article"
         emptyStateSubText="Come back later"
         collectionType="All_GameChangersPost"
         limit={20}
         page={1}
         totalPages={2}
        />
      </div>
    </div>
  )
}

