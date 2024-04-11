import { IArticle } from '@/lib/database/model/articles.model'
import React from 'react'


type CollectionProps = {
    data: IArticle[],
    emptyTitle: string,
    emptyStateSubtext: string,
    limit: number,
    page: number | string,
    totalPages?: number,
    urlParamName?: string,
    collectionType?: 'Article_Admin' | 'All_Articles',
}

const Collection = (data, emptyTitle, emptyStateSubtext, page, totalPages=0,collectionType, urlParamName):CollectionProps => {
  return (
    <div>Collection</div>
  )
}

export default Collection