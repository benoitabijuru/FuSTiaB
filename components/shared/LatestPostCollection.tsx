
import { IPost } from '@/lib/actions/pipeline.actions';
import LatestPostCard from './LatestPostCard';
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

type CollectionProps = {
  data: IPost[],
  emptyTitle: string,
  emptyStateSubText: string,
  limit: number,
  page: number | string,
  totalPages?: number,
  urlParamName?: string,
  collectionType?: "All_LatestPost" | "Latest_Post" | "My_Post"
}

const LatestPostCollection = ({
  data,
  emptyTitle,
  emptyStateSubText,
  page,
  totalPages = 0,
  collectionType,
  urlParamName,
}: CollectionProps) => {
 
  return (
    <div className="px-20 pb-5 shadow-xl border-t-2 border-b-2 bg-stone-50">
      <p className='bg-orange-500 p-2 px-5 mt-10 mx-5 w-32 rounded-xl font-bold'>Latest Posts</p>
       
     <Carousel className="flex flex-row w-full ">
      <CarouselContent className="-ml-1 divide-x-2 ">
        {data.map((allPost) => (
          <CarouselItem key={allPost._id} className=" basis-full md:basis-1/3 lg:basis-1/4">  
                <CardContent className="">
                  <LatestPostCard allPost={allPost} />
                </CardContent>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='bg-green-100 hover:bg-green-500'/>
      <CarouselNext className='bg-green-100 hover:bg-green-500' />
    </Carousel>
    </div>
  )
}

export default LatestPostCollection