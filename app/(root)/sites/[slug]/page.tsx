import React from 'react'
import { getCombinedPostBySlug } from '@/lib/actions/pipeline.actions'
import Image from 'next/image'
import { SearchParamsProps } from '@/types';
import SocialLinks from '@/components/shared/SocialLinks';

import type { Metadata, ResolvingMetadata } from 'next'
import { formatDateTime } from '@/lib/utils';

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug
  const sitePost = await getCombinedPostBySlug(slug);

  return {
    title: sitePost.title,
    description: sitePost.description,
    openGraph: {
      images: [sitePost.imageUrl],
    },
  }
}

const sitePostDetails = async({ params: { slug }}: SearchParamsProps) => {
  const sitePost = await getCombinedPostBySlug(slug);

  return (
    <section className="max-w-4xl mx-auto p-5 md:p-10 lg:p-20 xl:max-w-6xl 2xl:max-w-7xl">
      <div>
        <p className="text-sm md:text-base lg:text-lg py-3">FUSTIAB | <span className="text-orange-700">{sitePost.type}</span></p>

        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold">{sitePost.title}</h1>
        </div>
        
        <div>
          <p className="py-5 md:py-10 text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl italic">{sitePost.description}</p>
        </div>
        
        <hr />

        <div className="py-5">
          <p className="text-yellow-600 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"><span className="text-slate-600">Created: </span> {formatDateTime(sitePost.createdAt).dateOnly}</p>
        </div>

        <div className="pb-5 flex flex-col md:flex-row md:justify-between">
          <div className="mb-3 md:mb-0">
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold bg-slate-600 rounded-sm text-white py-1 px-3 italic">FUSTIAB</p>
          </div>

          <div className="flex flex-row justify-between">
            <p className="font-bold text-blue-500 flex items-center text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">Share</p>
            <div>
              <SocialLinks title={sitePost.title} shareUrl="https:www.fustiab.com/"/>
            </div>
          </div>
        </div>

        <Image
          src={sitePost.imageUrl}
          alt={sitePost.title}
          width={1000}
          height={1000}
          className="w-full h-auto max-h-[500px] md:max-h-[600px] lg:max-h-[700px] xl:max-h-[800px] 2xl:max-h-[900px] object-cover object-center"
        />

        <p className="text-slate-600 italic py-2">{sitePost.title}</p>
      </div>

      <div className="py-10">
        <div dangerouslySetInnerHTML={{ __html: sitePost.content }} className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"/>
      </div>
    </section>
  )
}

export default sitePostDetails
