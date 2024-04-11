export type CreateArticleParams = {
    userId:string
    article:{
        title:string
        description:string
        imageUrl:string
        categoryId:string
        content:string 
        author:string
    }
   
    path:string


}

export type UpdateArticleParams = {
    userId:string
    article:{
        _id:string
        title:string
        description:string
        imageUrl:string
        categoryId:string
        author:string
    }
    path:string
    
}

export type DeleteArticleParams = {
    articleId:string
    path:string
}

export type GetAllArticlesParams = {
    query:string
    category:string
    limit:number
    page:number
}

export type GetArticlesByCategoryParams = {
    categoryId:string
    name:string
    articleId:string
    limit?:number
    page:number | string

}


export type Article = {
    _id:string
    title:string
    description:string
    body:string
    image:string
    createAt:string
    updatedAt:string
    category: {_id:string, name:string, url:string}
    subcategory: {_id:string, name:string, url:string}
    author: {_id:string, fullname:string}
    pagination: string
    url:string



}
 // Creating category params
export type CreateCategoryParams = {

    categoryName:string
    
}

// Creating user params
export type CreateUserParams = {
    clerkId:string
    firstName:string
    lastName:string
    username:string
    email:string
    photo:string
    

}

// updating user

export type UpdateUserParams = {
    firstName:string
    lastName:string
    username:string
    photo:string

}


// url query params

export type UrlQueryParams = {
    params:string
    key:string
    value:string | null
}

export type RemoveUrlQueryParams = {
    params: string
    keysToRemove: string[]
}

export type SearchParamsProps = {
    params:{id:string}
    searchParams:{[key:string]:string | string[] | undefined}
}