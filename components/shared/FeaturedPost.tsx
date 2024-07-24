import { IRecommendationPost } from '@/lib/database/model/recomendationPost.model'
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


type CollectionProps ={
  data:IRecommendationPost[],
  emptyTitle:string,
  emptyStateSubText:string,
  limit:number,
  page: number | string,
  totalPages?: number,
  urlParamName?:string,
  collectionType?:"All_RecommendationPost"| "Latest_Recommendation_Post" | "My_RecommendationPost"
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
        {data.map((recommendationPost) => (
          <CarouselItem key={recommendationPost._id} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                <FeaturedPostCard recommendationPost={recommendationPost} />
                </CardContent>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious/>
      <CarouselNext />
    </Carousel>
    </div>
  )
}

export default FeaturedPost