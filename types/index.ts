// Creating Articles


// Technology
export type CreateArticleParams = {
    userId:string
    article:{
        title:string
        description:string
        imageUrl:string
        categoryId:string
        content:string 
        author:string
        slug:string
    }
    path:string


}

//  Business
export type CreateBusinessPostParams = {
    userId:string
    businessPost:{
        title:string
        description:string
        imageUrl:string
        categoryId:string
        content:string 
        author:string
        slug:string
    }
    path:string
}
// Recommendation
export type CreateRecommendationPostParams = {
    userId:string
    recommendationPost:{
        title:string
        description:string
        imageUrl:string
        categoryId:string
        content:string 
        author:string
        slug:string
    }
    path:string
}

// Game changers
export type CreateGameChangersPostParams = {
    userId:string
    gameChangersPost:{
        title:string
        description:string
        imageUrl:string
        categoryId:string
        content:string 
        author:string
        slug:string
    }
    path:string
}


// Updating Post


// Updating technology post
export type UpdateArticleParams = {
    adminId:string
    article:{
        _id:string
        title:string
        description:string
        imageUrl:string
        categoryId:string
        author:string
        slug:string
    }
    path:string
    
}
// updating business Post
export type UpdateBusinessPostParams = {
    adminId:string
    businessPost:{
        _id:string
        title:string
        description:string
        imageUrl:string
        categoryId:string
        author:string
        slug:string
    }
    path:string
}
// updating Game Changers Post
export type UpdateGameChangersPostParams = {
    adminId:string
    gameChangersPost:{
        _id:string
        title:string
        description:string
        imageUrl:string
        categoryId:string
        author:string
        slug:string
    }
    path:string
}

// Updating Recommendation Post

export type UpdateRecommendationPostParams = {
    adminId:string
    recommendationPost:{
        _id:string
        title:string
        description:string
        imageUrl:string
        categoryId:string
        author:string
        slug:string
    }
    path:string
}


// Delete Post

// Delete technology
export type DeleteArticleParams = {
    articleId:string
    path:string
}

// Delete business post
export type DeleteBusinessPostParams = {
    businessPostId:string
    path:string
}
// Delete Game changers Post
export type DeleteGameChangersPostParams = {
    gameChangersPostId:string
    path:string
}

// Delete Recommendation Post
export type DeleteRecommendationPostParams = {
    recommendationPostId:string
    path:string
}
// Getting all articles 

// Getting all Technology Post
export type GetAllArticlesParams = {
    query:string
    category:string
    limit:number
    page:number
}
// Getting all business Post

export type GetAllBusinessPostParams = {
    query:string
    category:string
    limit:number
    page:number
}
// Getting all recommendation 

export type GetAllRecommendationPostParams = {
    query:string
    category:string
    limit:number
    page:number
}
// Getting all game Changers Post
export type GetAllGameChangersPostParams = {
    query:string
    category:string
    limit:number
    page:number
}

// Get Article and post by category params

// Get technology by category params
export type GetArticlesByCategoryParams = {
    categoryId:string
    name:string
    articleId:string
    limit?:number
    page:number | string

}

// Get business by category params 
export type GetBusinessPostByCategoryParams = {
    categoryId:string
    name:string
    businessPostId:string
    limit?:number
    page:number | string

}
// Get recommendation by category params

export type GetRecommendationPostByCategoryParams = {
    categoryId:string
    name:string
    recommendationPostId:string
    limit?:number
    page:number | string

}
// Get Game changers by category params

export type GetGameChangersPostByCategoryParams = {
    categoryId:string
    name:string
    gameChangersPostId:string
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
    slug:string



}
 // Creating category params
export type CreateCategoryParams = {

    categoryName:string
    
}
export type CreateTechCategoryParams = {

    techCategoryName:string
    
}

// Creating user params
export type CreateUserParams = {
    clerkId:string
    firstName:string | null
    lastName:string | null
    username:string 
    email:string
    photo:string
    

}

// updating user

export type UpdateUserParams = {
    firstName:string | null
    lastName:string  | null
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
    params:{slug:string}
    searchParams:{[key:string]:string | string[] | undefined}
}

export type DailyQuoteProps = {
        quote:string
        title:string
        author:string
        viewed:boolean
}
export type DeleteDailyQuoteProps = {
    _id:string
    quote:string
    title:string
    author:string
}

export type GetDailyQuoteById = {
    _id:string
    quote:string
    title:string
    author:string
}

