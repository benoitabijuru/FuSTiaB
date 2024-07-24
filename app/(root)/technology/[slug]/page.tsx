
import { getArticleBySlug } from "@/lib/actions/articles.actions"
import { SearchParamsProps } from "@/types"
import Image from "next/image";
import { formatDateTime } from "@/lib/utils";
import SocialLinks from "@/components/shared/SocialLinks";
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
      const article = await getArticleBySlug(slug);
// optionally access and extend (rather than replace) parent metadata
      const previousImages = (await parent).openGraph?.images || []
     return {
          title: article.title,
          description:article.description,
          openGraph: {
         images: [article.imageUrl],
          },
      }
   }

  const technologyPostDetails = async ( { params: { slug }}: SearchParamsProps) => {
    const article = await getArticleBySlug(slug);

    return (
      <section className="justify-center wrapper px-10 mx-20">
      <div className="">
          <p className="text-[14px] py-3">Technology | <span className="text-orange-700">{article.category.name}</span></p>
        
        <div className="">
          <h1 className=" h1-bold ">{article.title}</h1>
        </div>
        <div className="">
          <p className="py-10 text-3xl italic">{article.description}</p>
        </div>
        <hr />
        <div className="py-5 ">
        <p className="text-yellow-600  p-medium-14"><span className="text-slate-600">Created At:  </span>{formatDateTime(article.createdAt).dateOnly} </p>
          
        </div>
       <div className="pb-5 flex flex-row justify-between">
       <div className=""><p className="text-xl font-semibold bg-slate-600 rounded-sm text-white py-1 px-3 italic">FUSTIAB</p></div>
       <div className="flex flex-row justify-between">
        <p className="font-bold text-blue-500 p-medium-16" >Share <SocialLinks/></p>
        <div className="">Social networks</div>
        </div>
       </div>
        <Image
        src={article.imageUrl}
        alt={article.title}
        width={1000}
        height={1000}
        className=" h-[500px] min-h-[300px] object-cover object-center w-full"
        />
        <p className="text-slate-600 italic py-2">{article.title} </p>
      </div>
      <div className="py-10">
  
      <div dangerouslySetInnerHTML={{ __html: article.content }} className="text-2xl"/>
      </div>
      
        
      
      </section>
    )
  }
  
  export default technologyPostDetails