
import React from 'react'
import FeaturedPostCard from './FeaturedPostCard'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { IPost } from '@/lib/actions/pipeline.actions'


type CollectionProps ={
  data:IPost[],
  emptyTitle:string,
  emptyStateSubText:string,
  limit:number,
  page: number | string,
  totalPages?: number,
  urlParamName?:string,
  collectionType?:"All_FeaturedPost"| "Latest_Featured_Post" | "My_FeaturedPost"
}
const FeaturedPost = ({
  data,
  emptyTitle,
  emptyStateSubText,
  page,
  totalPages=0,
  collectionType,
  urlParamName,
}:CollectionProps) => {
  return (
    <div className="mx-5">
    <Carousel className="flex flex-row w-full">
      <CarouselContent className="-ml-1">
        {data.map((featuredPost) => (
          <CarouselItem key={featuredPost._id} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                <FeaturedPostCard featuredPost={featuredPost} />
                </CardContent>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='bg-green-100  hover:bg-green-500'/>
      <CarouselNext className='bg-green-100 hover:bg-green-500' />
    </Carousel>
    </div>
  )
}

export default FeaturedPost