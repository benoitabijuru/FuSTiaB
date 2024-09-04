import BusinessCollection from '@/components/shared/BusinessCollection';
import Pagination from '@/components/shared/pagination';
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
    page,
    limit: 12
  })
  return (
    <div className="mx-20">
        <h1 className=' text-3xl font-semibold border-b-2 mt-20 mx-10 px-5 border-slate-600 hover:border-b-yellow-700'>Business</h1>
        <div className="m-10 flex justify-center">
          <div className="bg-slate-700 p-8 rounded-lg shadow-3xl">
            <p className="text-xl font-semibold italic text-white">
              Dive deep into the world of entrepreneurship, get business tips and business news.
              </p>
          </div>
        </div>
        <div className="py-5">
            <BusinessCollection
              data={businessArticles?.data} 
              emptyTitle="No Business Article"
              emptyStateSubText="Come back later"
              collectionType="All_BusinessPost"
              limit={12}
              page={page}
              totalPages={businessArticles?.totalPages}
            />
        </div> 
       <div className="flex justify-center my-20">
            <Pagination
            page={searchParams?.page ? +searchParams.page : 1}
            totalPages={businessArticles?.totalPages}
            /> 
        </div>
    </div>
  )
}

