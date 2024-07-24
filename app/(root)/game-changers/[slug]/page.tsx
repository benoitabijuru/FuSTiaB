

import SocialLinks from "@/components/shared/SocialLinks";
import { getGameChangersPostBySlug } from "@/lib/actions/gameChangersPost.action";
import { SearchParamsProps } from "@/types"
import Image from "next/image";
import type { Metadata, ResolvingMetadata } from 'next'

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
  const gameChangerPostDetails = async ( { params: { slug }}: SearchParamsProps) => {
    const gameChangersPost = await getGameChangersPostBySlug(slug);

    return (
      <section className="justify-center wrapper">
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
        <p className="text-yellow-600  p-medium-14"><span className="text-slate-600">Created: </span> {gameChangersPost.createdAt}</p>
          
        </div>
       <div className="pb-5 flex flex-row justify-between">
       <div className=""><p className="text-xl font-semibold bg-slate-600 rounded-sm text-white py-1 px-3 italic">FUSTIAB</p></div>
       <div className="flex flex-row justify-between">
        <p className="font-bold text-blue-500 p-medium-16" >Share</p>
        <div className=""> <SocialLinks/></div>
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
      
        
      
      </section>
    )
  }
  
  export default gameChangerPostDetails