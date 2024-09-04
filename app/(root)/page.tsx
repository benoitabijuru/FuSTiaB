
import Qoute from '@/components/qoute/Qoute'
import Link from 'next/link'
import FeaturedPost from '@/components/shared/FeaturedPost'
import Collection from '@/components/shared/Collection'
import BusinessCollection from '@/components/shared/BusinessCollection'
import RecommendationCollection from '@/components/shared/RecommendationCollection'
import GameChangersCollection from '@/components/shared/GameChangersCollection'
import { getAllArticles } from '@/lib/actions/articles.actions'
import { getAllBusinessPost } from '@/lib/actions/businessPost.action'
import { getAllRecommendationPost } from '@/lib/actions/recommendation.action'
import { getAllGameChangersPost } from '@/lib/actions/gameChangersPost.action'
import LatestPostCollection from '@/components/shared/LatestPostCollection'
import { Metadata } from 'next'
import { getCombinedAfricaPosts, getCombinedPosts, getFeaturedPosts } from '@/lib/actions/pipeline.actions'
import AfricanPostCollection from '@/components/shared/AfricanPostCollection'

export const metadata: Metadata = {
  title:{
        absolute:"FUSTIAB"
  },
  description: "Discover the Magic of Technology and Dive Deep into the World of Entrepreneurship. Be Prepared for Future Trends by explore the cutting-edge world of technology and unleash your entrepreneurial spirit. Stay ahead of the curve by understanding and preparing for future trends in the industry.",
  // metadataBase:new URL('/'),
  keywords:["Africa","Technology","Business","Recommendation","Game Changers"],
 alternates: {
        canonical: '/',
        languages: {
          'en-US': '/en-US',
        },
},
openGraph: {
        type:"website",
        title:"FUSTIAB",
        url:"/",
        description:"Discover the Magic of Technology and Dive Deep into the World of Entrepreneurship. Be Prepared for Future Trends by explore the cutting-edge world of technology and unleash your entrepreneurial spirit. Stay ahead of the curve by understanding and preparing for future trends in the industry.",
        siteName:"FUSTIAB"
  
},
twitter: {
  title:"FUSTIAB",
  description:"Discover the Magic of Technology and Dive Deep into the World of Entrepreneurship. Be Prepared for Future Trends by explore the cutting-edge world of technology and unleash your entrepreneurial spirit. Stay ahead of the curve by understanding and preparing for future trends in the industry.",
},
}


export default async function Home() {
  const techArticles = await getAllArticles({
    query: '',
    category: '',
    page: 1,
    limit: 12
  })
  const businessArticles = await getAllBusinessPost({
    query: '',
    category: '',
    page: 1,
    limit: 12
  })
  const recommendationArticles = await getAllRecommendationPost({
    query: '',
    category: '',
    page: 1,
    limit: 12
  })
  const gameChangersArticles= await getAllGameChangersPost({
    query: '',
    category: '',
    page: 1,
    limit: 12
  })
  
  const getAllCombinedPosts = await getCombinedPosts({
    query: '',
    category: '',
    page: 1,
    limit: 20
  })
  const getAfricaPosts = await getCombinedAfricaPosts({
    query: '',
    category: '',
    page: 1,
    limit: 12
  })
  const FeaturedPosts = await getFeaturedPosts({
    query: '',
    category: '',
    page: 1,
    limit: 12
  })
  return (
    <div>
     <div className="hidden md:block">
        <LatestPostCollection
          data={getAllCombinedPosts?.data}  
          emptyTitle="No Tech Article"
          emptyStateSubText="Come back later"
          collectionType="All_LatestPost"
          limit={20}
          page={1}
          totalPages={2}
        />
      </div>
    
        <h1 className=' text-xl font-semibold italic border-b-2 mt-10 mx-10 px-5 border-slate-600 hover:border-b-yellow-700'><Link href="/africa">Africa</Link></h1>
        <div className="py-10 mx-10">
            <AfricanPostCollection
            data={getAfricaPosts?.data}  
            emptyTitle="No Tech Article"
            emptyStateSubText="Come back later"
            collectionType="All_AfricaPost"
            limit={12}
            page={1}
            totalPages={2}
            />
          </div>
      <Qoute/>
      <h1 className=' text-2xl font-semibold italic  border-t-4 border-b-2 p-5 mx-10 border-slate-600'>Featured</h1>
      <div className="py-10 mx-10">
      <FeaturedPost
        data={FeaturedPosts?.data} 
        emptyTitle="No Featured Article"
        emptyStateSubText="Come back later"
        collectionType="All_FeaturedPost"
        limit={12}
        page={1}
        totalPages={2}
      />
      </div>
      
      <h1 className=' text-2xl font-semibold italic  border-t-4 border-b-2 p-5 mx-10 border-slate-600 hover:border-b-yellow-700'><Link href="/technology">Technology</Link></h1>
      <div className="py-10 mx-10">
      <Collection 
        data={techArticles?.data}  
        emptyTitle="No Tech Article"
        emptyStateSubText="Come back later"
        collectionType="All_TechPost"
        limit={12}
        page={1}
        totalPages={2}
      />
      </div>
      <h1 className='text-2xl font-semibold italic text-black border-t-4 border-b-2 p-5 mx-10 border-slate-600'><Link href="/business">Business</Link></h1>
      <div className="py-10 m-10">
        <BusinessCollection
          data={businessArticles?.data} 
          emptyTitle="No Business Article"
          emptyStateSubText="Come back later"
          collectionType="All_BusinessPost"
          limit={12}
          page={1}
          totalPages={2}
        />
      </div>
     <h1 className=' text-2xl font-semibold italic hover:text-blue-700  border-t-4 border-b-2 p-5 mx-10 border-slate-600'> <Link href="/recommendation">Recommendation</Link></h1>
      <div className="py-10 m-10">
        <RecommendationCollection
        data={recommendationArticles?.data} 
        emptyTitle="No Recommendation Article"
        emptyStateSubText="Come back later"
        collectionType="All_RecommendationPost"
        limit={12}
        page={1}
        totalPages={2}
        />
      </div>
      <h1 className=' text-2xl font-semibold italic hover:text-green-700  border-t-4 border-b-2 p-5 mx-10 border-slate-600'><Link href="/game-changers">Game Changers</Link></h1>
      <div className="py-10 m-10">
        <GameChangersCollection
         data={gameChangersArticles?.data} 
         emptyTitle="No gameChangers Article"
         emptyStateSubText="Come back later"
         collectionType="All_GameChangersPost"
         limit={12}
         page={1}
         totalPages={2}
        />
      </div>
      
    </div>
  )
}


