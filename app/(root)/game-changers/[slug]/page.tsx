

import SocialLinks from "@/components/shared/SocialLinks";
import { getAllGameChangersPost, getGameChangersPostBySlug } from "@/lib/actions/gameChangersPost.action";
import { SearchParamsProps } from "@/types"
import Image from "next/image";
import type { Metadata, ResolvingMetadata } from 'next'
import { formatDateTime } from "@/lib/utils";
import GameChangersCollection from "@/components/shared/GameChangersCollection";

type Props = {
params: { slug: string }
searchParams: { [key: string]: string | string[] | undefined }
}
export async function generateMetadata(
{ params, searchParams }: Props,
parent: ResolvingMetadata
): Promise<Metadata> {
// read route params
const slug = params.slug
// fetch data
const gameChangersPost = await getGameChangersPostBySlug(slug);
// optionally access and extend (rather than replace) parent metadata
const previousImages = (await parent).openGraph?.images || []
return {
title: gameChangersPost.title,
description:gameChangersPost.description,
openGraph: {
images: [gameChangersPost.imageUrl],
},
}
}
  const gameChangerPostDetails = async ( { params: { slug },searchParams}: SearchParamsProps) => {
    const gameChangersPost = await getGameChangersPostBySlug(slug);

    const page = Number(searchParams?.page) || 1;
    const searchText = (searchParams?.query as string) || '';
    const category = (searchParams?.category as string) || '';

    const gameChangersArticles= await getAllGameChangersPost({
      query: searchText,
      category,
      page: 1,
      limit: 6
    })

    return (
      <>
      <section className="container mx-32 px-10 my-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
      <div className="">
          <p className="text-[14px] py-3">Game Changers | <span className="text-orange-700">{gameChangersPost.category.name}</span></p>
        
        <div className="">
          <h1 className=" h1-bold ">{gameChangersPost.title}</h1>
        </div>
        <div className="">
          <p className="py-10 text-3xl italic">{gameChangersPost.description}</p>
        </div>
        <hr />
        <div className="py-5 ">
        <p className="text-yellow-600  p-medium-14">{formatDateTime(gameChangersPost.createdAt).dateOnly}</p>
          
        </div>
       <div className="pb-5 flex flex-row justify-between">
       <div className=""><p className="text-xl font-semibold bg-slate-600 rounded-sm text-white py-1 px-3 italic">FUSTIAB</p></div>
       <div className="flex flex-row justify-between">
        <p className="font-bold text-blue-500 p-medium-16" >Share</p>
        <div className=""> <SocialLinks shareUrl='' title=''/></div>
        </div>
       </div>
        <Image
        src={gameChangersPost.imageUrl}
        alt={gameChangersPost.title}
        width={1000}
        height={1000}
        className=" h-[500px] min-h-[300px] object-cover object-center w-full"
        />
        <p className="text-slate-600 italic py-2">{gameChangersPost.title} </p>
      </div>
      <div className="py-10">
  
      <div dangerouslySetInnerHTML={{ __html: gameChangersPost.content }} className="text-2xl"/>
      </div>
      <div className="wrapper my-8 flex flex-col gap-8 md:gap-12">
<h2 className="h2-bold">Read More</h2>

<GameChangersCollection
    data={gameChangersArticles?.data  || []}
    emptyTitle="No Tech Article"
    emptyStateSubText="Come back later"
    collectionType="All_GameChangersPost"
    limit={3}
    page={searchParams.page as string}
    totalPages={gameChangersArticles?.totalPages}

  />
</div>
      
     </div> 
  {/* <div className="col-span-1 lg:col-span-4">
    <div className="relative lg:sticky top-8">
      <h2 className="h2-bold">Read More</h2>
      <GameChangersCollection
      data={gameChangersArticles?.data}
      emptyTitle="No Tech Article"
      emptyStateSubText="Come back later"
      collectionType="All_GameChangersPost"
      limit={3}
      page={searchParams.page as string}
      totalPages={gameChangersArticles?.totalPages}

    />
    </div>
    </div> */}
     </div>  
      
      </section>


</>
    )
  }
  
  export default gameChangerPostDetails