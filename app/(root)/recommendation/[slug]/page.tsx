
import SocialLinks from "@/components/shared/SocialLinks";
import { getRecommendationBySlug } from "@/lib/actions/recommendation.action";
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
const recommendationPost = await getRecommendationBySlug(slug);
// optionally access and extend (rather than replace) parent metadata
const previousImages = (await parent).openGraph?.images || []
return {
title: recommendationPost.title,
description:recommendationPost.description,
openGraph: {
images: [recommendationPost.imageUrl],
},
}
}

  const recommendationPostDetails = async ( { params: { slug }}: SearchParamsProps) => {
    const recommendationPost = await getRecommendationBySlug(slug);

    return (
      <section className="justify-center mx-40">
      <div className="">
          <p className="text-[14px] py-3">Recommendation | <span className="text-orange-700">{recommendationPost.category.name}</span></p>
        
        <div className="">
          <h1 className=" h1-bold ">{recommendationPost.title}</h1>
        </div>
        <div className="">
          <p className="py-10 text-3xl italic">{recommendationPost.description}</p>
        </div>
        <hr />
        <div className="py-5 ">
        <p className="text-yellow-600  p-medium-14"><span className="text-slate-600">Created: </span> June 13, 2024</p>
          
        </div>
       <div className="pb-5 flex flex-row justify-between">
       <div className=""><p className="text-xl font-semibold bg-slate-600 rounded-sm text-white py-1 px-3 italic">FUSTIAB</p></div>
       <div className="flex flex-row justify-between">
        <p className="font-bold text-blue-500 p-medium-16" >Share </p>
        <div className=""><SocialLinks/></div>
        </div>
       </div>
        <Image
        src={recommendationPost.imageUrl}
        alt={recommendationPost.title}
        width={1000}
        height={1000}
        className=" h-[500px] min-h-[300px] object-cover object-center w-full"
        />
        <p className="text-slate-600 italic py-2">{recommendationPost.title} </p>
      </div>
      <div className="py-10">
  
      <div dangerouslySetInnerHTML={{ __html: recommendationPost.content }} className="text-2xl"/>
      </div>
      
        
      
      </section>
    )
  }
  
  export default recommendationPostDetails