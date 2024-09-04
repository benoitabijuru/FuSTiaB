import { Metadata } from 'next'
import GameChangersCollection from "@/components/shared/GameChangersCollection";
import { getAllGameChangersPost } from "@/lib/actions/gameChangersPost.action";
import Search from '@/components/shared/Search';
import { SearchParamsProps } from '@/types';
import Pagination from '@/components/shared/pagination';



 
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
    page,
    limit: 12
  })
  return (
    <div className='mx-20'>
      
      <h1 className=' text-3xl font-semibold border-b-2 mt-20 mx-10 px-5 border-slate-600 hover:border-b-yellow-700'>Game Changers</h1>
        <div className="m-10 flex justify-center">
          <div className="bg-slate-700 p-8 rounded-lg shadow-3xl">
            <p className="text-xl font-semibold italic text-white">
            Learn from Game Changers, Inventors, Innovators, Founders, Pionners. Get tips and motivation from their journey and altitude.
            </p>
          </div>
        </div>
      <div className="py-5">
        <GameChangersCollection
         data={gameChangersArticles?.data || []} 
         emptyTitle="No gameChangers Article"
         emptyStateSubText="Come back later"
         collectionType="All_GameChangersPost"
         limit={12}
         page={page}
         totalPages={gameChangersArticles?.totalPages}
        />
      </div>
      <div className="flex justify-center my-20">
            <Pagination
            page={searchParams?.page ? +searchParams.page : 1}
            totalPages={gameChangersArticles?.totalPages ?? 1}
            /> 
        </div>
    </div>
  )
}

