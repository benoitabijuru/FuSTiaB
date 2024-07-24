'use server'

import Article from "../database/model/TechnologyPost.model";
import { connectToDatabase } from "../database";
import Category from "../database/model/category.model";
import { CreateArticleParams, UpdateArticleParams, DeleteArticleParams, GetAllArticlesParams, GetArticlesByCategoryParams } from "@/types";
import { revalidatePath } from "next/cache";
import { handleError } from "../utils";
import User from "../database/model/user.model";

const getCategoryByName = async (name:string) =>{
    return Category.findOne({name:{$regex:name, $options:'i'}})
}

const populateArticle = async (query:any) =>{
    return query
        .populate({path:'author', model:User, select:'_id firstName lastName'})
        .populate({path:'category', model:Category, select:'_id name'})
        
}

// Create a new article
export async function createArticle({ userId, article, path }: CreateArticleParams) {
    try { 
        // connect to database
        await connectToDatabase();
        
        // admin
        const author = await User.findById(userId);

        if(!author){
            throw new Error("No author for this article")
        }

        // create a new post in database 
        const newArticle = await Article.create({
             ...article, 
             category:article.categoryId, 
             author:userId
            });
        revalidatePath(path)
        
        return JSON.parse(JSON.stringify(newArticle))
        
    } catch (error) {
        handleError(error);
    }
}

// Get one article by Id
export async function getArticleBySlug(articleSlug: string) {
    try {
        await connectToDatabase()

            // Find the article by its slug field
            const articleQuery = Article.findOne({ slug: articleSlug });
            const article = await populateArticle(articleQuery);
            if (!article) throw new Error('Article not found');
        
            return JSON.parse(JSON.stringify(article));

    } catch (error) {
        handleError(error);
    }
}

// Update Article
export async function updateArticle({ adminId, article, path }: UpdateArticleParams) {
    try {
        await connectToDatabase()

        const articleToUpdate = await Article.findById(article._id)
        
        if(!articleToUpdate || articleToUpdate.admin.toHexString() !== adminId){
            throw new Error('Unauthorized or Event not found')
        }

        const updatedArticle = await Article.findByIdAndUpdate(
            article._id,
            {...article, category:article.categoryId},
            {new:true}
        )
        revalidatePath(path)

        return JSON.parse(JSON.stringify(updatedArticle))
    } catch (error) {
        handleError(error);
    }
}

// Delete article
export async function deleteArticle({ articleId, path }: DeleteArticleParams) {
    try {
        await connectToDatabase()

        const deletedArticle = await Article.findByIdAndDelete(articleId);
        if (deletedArticle) revalidatePath(path);
    } catch (error) {
        handleError(error);
    }
}

// Get all articles
export async function getAllArticles({ query, limit = 9, page, category}: GetAllArticlesParams) {
    try {
        await connectToDatabase()
        
        const titleCondition = query ? { title: { $regex: query, $options: 'i' } } : {};
        const categoryCondition = category ? await getCategoryByName(category) : null;
        const conditions = {
            ...titleCondition,
            ...(categoryCondition && { category: categoryCondition._id })
        };
        const skipAmount = (Number(page) - 1) * limit;
        const articlesQuery = await Article.find(conditions)
            .populate('category', '_id name url')
            .populate('author', '_id fullname')
            .sort({ createdAt: 'desc' })
            .skip(skipAmount)
            .limit(limit);
        const articlesCount = await Article.countDocuments(conditions);
        
        
        return {
            data: articlesQuery.map(articlesQuery => articlesQuery.toJSON()),
            totalPages: Math.ceil(articlesCount / limit),
        };
    } catch (error) {
        handleError(error);
    }
}

// Get articles by category
export async function getArticlesByCategory({ categoryId, articleId, limit = 6, page = 1 }: GetArticlesByCategoryParams) {
    try {
        await connectToDatabase()

        const skipAmount = (Number(page) - 1) * limit;
        const conditions = { $and: [{ category: categoryId }, { articleId: { $ne: articleId } }] };
        const articles = await Article.find(conditions)
            .populate('category', '_id name url')
            .populate('author', '_id fullname')
            .sort({ createdAt: 'desc' })
            .skip(skipAmount)
            .limit(limit);
        const articlesCount = await Article.countDocuments(conditions);
        return {
            data: articles.map(article => article.toJSON()),
            totalPages: Math.ceil(articlesCount / limit),
        };
    } catch (error) {
        handleError(error);
    }
}


// fetchning viewers of the post
