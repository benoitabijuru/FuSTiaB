import AfricanPostCollection from '@/components/shared/AfricanPostCollection'
import SocialLinks from '@/components/shared/SocialLinks'
import { getAfricanPostsBySlug, getCombinedAfricaPosts } from '@/lib/actions/pipeline.actions'
import { formatDateTime } from '@/lib/utils'
import { SearchParamsProps } from '@/types'
import { Metadata, ResolvingMetadata } from 'next'
import Image from 'next/image'
import React from 'react'


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
      const africaPost = await getAfricanPostsBySlug(slug);
      // optionally access and extend (rather than replace) parent metadata
      const previousImages = (await parent).openGraph?.images || []
      return {
      title: africaPost.title,
      description:africaPost.description,
      openGraph: {
          title: africaPost.title,
          description:africaPost.description,
          images: [africaPost.imageUrl, ...previousImages],
      },
      }
  }

  const AfricaPostDetails = async ( { params: { slug }}: SearchParamsProps) => {
    
    const africaPost = await getAfricanPostsBySlug(slug);

    const getAfricaPosts = await getCombinedAfricaPosts({
      query: '',
      category: '',
      page: 1,
      limit: 6
    })

    return (
      <section className="container mx-32 px-10 my-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="col-span-1 lg:col-span-8">

        <div className="">
                    
              <p className="text-[14px] py-3">Africa</p>
                
                <div className="">
                  <h1 className=" h1-bold ">{africaPost.title}</h1>
                </div>
              <div className="">
                <p className="py-10 text-3xl italic">{africaPost.description}</p>
              </div>
                   <hr />
              <div className="py-5 ">
                <p className="text-yellow-600  p-medium-14">{formatDateTime(africaPost.createdAt).dateOnly}</p>
              </div>
              
              <div className="pb-5 flex flex-row justify-between">
                <div className=""><p className="text-xl font-semibold bg-slate-600 rounded-sm text-white py-1 px-3 italic">FUSTIAB</p></div>
                  <div className="flex flex-row justify-between">
                    <p className="font-bold text-blue-500 p-medium-16" >Share</p>
                    <div className=""> <SocialLinks shareUrl='' title=''/></div>
                  </div>
                </div>
                  <Image
                  src={africaPost.imageUrl}
                  alt={africaPost.title}
                  width={1000}
                  height={1000}
                  className=" h-[500px] min-h-[300px] object-cover object-center w-full"
                  />
                <p className="text-slate-600 italic py-2">{africaPost.title} </p>
              </div>
                 <div className="py-10">
          
                  <div dangerouslySetInnerHTML={{ __html: africaPost.content }} className="text-2xl"/>
                </div>
                <div className="wrapper my-8 flex flex-col gap-8 md:gap-12">
                <h2 className="h2-bold">Read More</h2>
                      <AfricanPostCollection
                          data={getAfricaPosts?.data || []}  
                          emptyTitle="No Tech Article"
                          emptyStateSubText="Come back later"
                          collectionType="All_AfricaPost"
                          limit={6}
                          page={1}
                          totalPages={2}
                  />
                </div>
              
        </div>
        {/* <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
            <h2 className="h2-bold">Read More</h2>  
    </div>
    </div> */}
    </div>
      
  </section>
    )
  }
  
  export default AfricaPostDetails
  
                    
              