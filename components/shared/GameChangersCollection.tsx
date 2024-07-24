import { IGameChangersPost } from '@/lib/database/model/gamechangerPost.model'
import GameChangersPostCard from './GameChangersPostCard'


type CollectionProps ={
  data:IGameChangersPost[],
  emptyTitle:string,
  emptyStateSubText:string,
  limit:number,
  page: number | string,
  totalPages?: number,
  urlParamName?:string,
  collectionType?:"All_GameChangersPost"| "Latest_GameChangers_Post" | "My_GameChangersPost"
}
const GameChangersCollection = ({
  data,
  emptyTitle,
  emptyStateSubText,
  page,
  totalPages=0,
  collectionType,
  urlParamName,
}:CollectionProps) => {
  return (
    <>
    {data.length > 0 ? (
        <div className="flex flex-col">
            <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
                {data.map((gameChangersPost) => {
                    return(
                        <li key={gameChangersPost._id} className="flex justify-center">
                             <GameChangersPostCard gameChangersPost={gameChangersPost} />
                        </li>
                    )
                })}
            </ul>
        </div>
    ):(
        <div className="flex-center wrapper min-h-[200px] w-full flex-col gap-3 rounded-[14px] bg-grey-50 py-28 text-center">
            <h3 className='p-bold md:h5-bold'>{emptyTitle}</h3>
            <p className='p-regular-14'>{emptyStateSubText}</p>
        </div>
    )}
    
    </>
  )
}

export default GameChangersCollection