import React from 'react'
import { getArticleById } from '@/lib/actions/articles.actions'


const ArticleDetails = async ({params:{id}}:SearchParamsProps) =>{
    const article = await getArticleById(id);
}

const BusinessDetails = () => {
  return (
    <section>
        <div className="">
            <Image
            alt="hero image"
            width={1000}
            height={1000}

            />
        </div>
        <div className="">
            <div className="">
                <h2>{article.title}</h2>
            </div>
            <div className="">
                by{''}
                <span>{article.author.username}</span>
            </div>
        </div>
        
    </section>
  )
}

export default BusinessDetails