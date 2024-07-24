import React from 'react'
import { getCombinedPostBySlug } from '@/lib/actions/pipeline.actions'
import Image from 'next/image'
import { SearchParamsProps } from '@/types';
import SocialLinks from '@/components/shared/SocialLinks';


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
const sitePost = await getCombinedPostBySlug(slug);
// optionally access and extend (rather than replace) parent metadata
const previousImages = (await parent).openGraph?.images || []
return {
title: sitePost.title,
description:sitePost.description,
openGraph: {
images: [sitePost.imageUrl],
},
}
}




const sitePostDetails = async( { params: { slug }}: SearchParamsProps) => {
    const sitePost = await getCombinedPostBySlug(slug);
    

  return (
    <section className="justify-center mx-60">
      <div className="">
          <p className="text-[14px] py-3">FUSTIAB | <span className="text-orange-700">{sitePost.type}</span></p>
        
        <div className="">
          <h1 className=" h1-bold ">{sitePost.title}</h1>
        </div>
        <div className="">
          <p className="py-10 text-3xl italic">{sitePost.description}</p>
        </div>
        <hr />
        <div className="py-5 ">
        <p className="text-yellow-600  p-medium-14"><span className="text-slate-600">Created: </span> {sitePost.createdAt}</p>
          
        </div>
       <div className="pb-5 flex flex-row justify-between">
       <div className=""><p className="text-xl font-semibold bg-slate-600 rounded-sm text-white py-1 px-3 italic">FUSTIAB</p></div>
       <div className="flex flex-row justify-between">
        <p className="font-bold text-blue-500 p-medium-16 items-center justify-center" >Share <span></span></p>
        <div className=""><SocialLinks title={sitePost.title} shareUrl="https:www.fustiab.com/"/></div>
        </div>
       </div>
        <Image
        src={sitePost.imageUrl}
        alt={sitePost.title}
        width={1000}
        height={1000}
        className=" h-[500px] min-h-[300px] object-cover object-center w-full"
        />
        <p className="text-slate-600 italic py-2">{sitePost.title} </p>
      </div>
      <div className="py-10">
  
      <div dangerouslySetInnerHTML={{ __html: sitePost.content }} className="text-2xl"/>
      </div>
      
        
      
      </section>
  )
}

export default sitePostDetails