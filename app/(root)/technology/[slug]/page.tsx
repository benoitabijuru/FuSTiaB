
import { getAllArticles, getArticleBySlug, getRelatedArticleByCategory } from "@/lib/actions/articles.actions"
import { SearchParamsProps } from "@/types"
import Image from "next/image";
import { formatDateTime } from "@/lib/utils";
import SocialLinks from "@/components/shared/SocialLinks";
import type { Metadata, ResolvingMetadata } from 'next'
import Collection from "@/components/shared/Collection";

type Props = {
      params: { slug: string }
      searchParams: { [key: string]: string | string[] | undefined }
}
export async function generateMetadata({ params: { slug }, searchParams}: SearchParamsProps)  {
      // read route params
      // fetch data
            const article = await getArticleBySlug(slug);
      // optionally access and extend (rather than replace) parent metadata
      // const previousImages = (await parent).openGraph?.images || []
     return {
          title: article.title,
          description:article.description,
        
          openGraph: {
         images: [article.imageUrl],
          },
      }
   }

  const technologyPostDetails = async ( { params: { slug }, searchParams}: SearchParamsProps) => {
    const article = await getArticleBySlug(slug);

    const jsonLd = {
      '@context': 'https://fustiab.com/technology',
      '@type': 'Technology News',
      name: article.title,
      image: article.imageUrl,
      description: article.description,
    }




    const relatedArticle = await getRelatedArticleByCategory({
      categoryId: article.category._id,
      articleSlug: article.slug,
      page: searchParams.page as string,
    })

    const page = Number(searchParams?.page) || 1;
    const searchText = (searchParams?.query as string) || '';
    const category = (searchParams?.category as string) || '';

    const techArticles = await getAllArticles({
      query: searchText,
      category,
      page,
      limit: 6
    })
    

    return (
      <>
      <section className="container mx-32 px-10 my-20">
                    {/* Add JSON-LD to your page */}
                  <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                  />
                  {/* ... */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
      <div className="">
      <p className="text-[14px] py-5">Technology | <span className="text-orange-700">{article.category.name}</span></p>
        
        <div className="">
          <h1 className=" h1-bold ">{article.title}</h1>
        </div>
        <div className="">
          <p className="py-10 text-3xl italic">{article.description}</p>
        </div>
        <hr />
        <div className="py-5">
          
          <p className="text-yellow-600  p-medium-14">{formatDateTime(article.createdAt).dateOnly} </p>
          
        </div>
       <div className="pb-5 flex flex-row justify-between">
       <div className=""><p className="text-xl font-semibold bg-slate-600 rounded-sm text-white py-1 px-3 italic">FUSTIAB</p></div>
       <div className="flex flex-row justify-between">
        <p className="font-bold text-blue-500 p-medium-16" >Share <SocialLinks shareUrl='' title=''/></p>
        </div>
       </div>
        <Image
        src={article.imageUrl}
        alt={article.title}
        width={1000}
        height={1000}
        className=" h-[500px] min-h-[300px] object-cover object-center w-full"
        />
        <p className="text-slate-600 italic py-2">{article.imageCaption} </p>
      </div>
      <div className="py-10">
  
      <div dangerouslySetInnerHTML={{ __html: article.content }} className="text-2xl"/>

      </div>      
      <div className="wrapper my-8 flex flex-col gap-8 md:gap-12">
          <h2 className="h2-bold">Read More</h2>

          <Collection 
              data={techArticles?.data  || []}
              emptyTitle="No Tech Article"
              emptyStateSubText="Come back later"
              collectionType="All_TechPost"
              limit={6}
              page={searchParams.page as string}
              totalPages={relatedArticle?.totalPages}

            />
        </div>
     
       {/* EVENTS with the same category */}
       

        
       
       </div>
       {/* <div className="col-span-1 lg:col-span-4">
       <div className="relative lg:sticky top-8">
        <h2 className="h2-bold">Related Events</h2>

        <Collection 
            data={relatedArticle?.data}
            emptyTitle="No Tech Article"
            emptyStateSubText="Come back later"
            collectionType="All_TechPost"
            limit={3}
            page={searchParams.page as string}
            totalPages={relatedArticle?.totalPages}

          />
          </div>
       </div> */}
       </div> 
  </section>
  </>         
    )
  }
  
  export default technologyPostDetails