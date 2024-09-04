import Search from '@/components/shared/Search';
import TechCollection from '@/components/shared/Collection';
import { getAllArticles } from '@/lib/actions/articles.actions';
import { SearchParamsProps } from '@/types';
import { Metadata } from 'next'
import Pagination from '@/components/shared/pagination';

export const metadata: Metadata = {
  title:"Technology",
  description:"Explore Magic of technology",
  keywords:["Technology","Innovation","AI","Computation","Emerging Technologies"],
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    type:"website",
    title:"FUSTIAB",
    url:"/technology",
    description:"Discover the Magic of Technology and Dive Deep into the World of Entrepreneurship. Be Prepared for Future Trends by exploring the cutting-edge world of technology and unleashing your entrepreneurial spirit. Stay ahead of the curve by understanding and preparing for future trends in the industry.",
    siteName:"FUSTIAB"
  },
};

export default async function Technology({ searchParams }: SearchParamsProps){
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || '';
  const category = (searchParams?.category as string) || '';

  const techArticles = await getAllArticles({
    query: searchText,
    category,
    page,
    limit: 12
  });

  return (
    <div className="mx-5 sm:mx-10 md:mx-20">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold border-b-2 mt-10 sm:mt-15 md:mt-20 px-5 border-slate-600 hover:border-b-yellow-700">
        Technology
      </h1>
      <div className="mt-10 sm:mt-15 md:mt-20 flex justify-center">
        <div className="bg-slate-700 p-5 sm:p-6 md:p-8 rounded-lg shadow-lg">
          <p className="text-sm sm:text-lg md:text-xl font-semibold italic text-white">
            Explore the magic of technology, tech news, and analysis focusing on future technology and their impact on the universe.
          </p>
        </div>
      </div>
      <div className="py-5">
        <TechCollection
          data={techArticles?.data || []} 
          emptyTitle="No Tech Article"
          emptyStateSubText="Come back later"
          collectionType="All_TechPost"
          limit={12}
          page={page}
          totalPages={techArticles?.totalPages}
        />
      </div>
      <div className="flex justify-center my-10 sm:my-15 md:my-20">
        <Pagination
          page={searchParams?.page ? +searchParams.page : 1}
          totalPages={techArticles?.totalPages ?? 1}
        /> 
      </div>
    </div>
  );
}
