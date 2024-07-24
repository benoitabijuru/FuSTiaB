'use server'

import RecommendationPost from "../database/model/recomendationPost.model";
import { connectToDatabase } from "../database";
import Category from "../database/model/category.model";
import {  UpdateBusinessPostParams, DeleteBusinessPostParams, GetAllBusinessPostParams, GetBusinessPostByCategoryParams, CreateRecommendationPostParams, UpdateRecommendationPostParams, DeleteRecommendationPostParams, GetAllRecommendationPostParams, GetRecommendationPostByCategoryParams } from "@/types";
import { revalidatePath } from "next/cache";
import { handleError } from "../utils";
import User from "../database/model/user.model";

const getCategoryByName = async (name:string) =>{
    return Category.findOne({name:{$regex:name, $options:'i'}})
}

const populateRecommendationPost = async (query:any) =>{
    return query
        .populate({path:'author', model:User, select:'_id firstName lastName'})
        .populate({path:'category', model:Category, select:'_id name'})
}

// Create a new article
export async function createRecommendationPost({ userId, recommendationPost, path }: CreateRecommendationPostParams) {
    try { 
        // connect to database
        await connectToDatabase();
        
        // admin
        const author = await User.findById(userId);

        if(!author){
            throw new Error("No author for this article")
        }

        // create a new post in database 
        const newRecommendationPost = await RecommendationPost.create({
             ...recommendationPost, 
             category:recommendationPost.categoryId, 
             author:userId
            });
        revalidatePath(path)
        
        return JSON.parse(JSON.stringify(newRecommendationPost))
        
    } catch (error) {
        handleError(error);
    }
}

// Get one recommendation post by slug

export async function getRecommendationBySlug(recommendationPostSlug: string) {
    try {
        await connectToDatabase()

            // Find the article by its slug field
            const recommendationPostQuery = RecommendationPost.findOne({ slug: recommendationPostSlug });
            const recommendationPost = await populateRecommendationPost(recommendationPostQuery);
            if (!recommendationPost) throw new Error('Recommendation Post not found');
        
            return JSON.parse(JSON.stringify(recommendationPost));

    } catch (error) {
        handleError(error);
    }
}


// Update Article
export async function updateRecommendationPost({ adminId, recommendationPost, path }: UpdateRecommendationPostParams) {
    try {
        await connectToDatabase()

        const recommendationPostToUpdate = await RecommendationPost.findById(recommendationPost._id)
        
        if(!recommendationPostToUpdate || recommendationPostToUpdate.admin.toHexString() !== adminId){
            throw new Error('Unauthorized or Event not found')
        }

        const updatedRecommendationPost = await RecommendationPost.findByIdAndUpdate(
            recommendationPost._id,
            {...recommendationPost, category:recommendationPost.categoryId},
            {new:true}
        )
        revalidatePath(path)

        return JSON.parse(JSON.stringify(updatedRecommendationPost))
    } catch (error) {
        handleError(error);
    }
}

// Delete article
export async function deleteRecommendationPost({ recommendationPostId, path }: DeleteRecommendationPostParams) {
    try {
        await connectToDatabase()

        const deletedRecommendationPost = await RecommendationPost.findByIdAndDelete(recommendationPostId);
        if (deletedRecommendationPost) revalidatePath(path);
    } catch (error) {
        handleError(error);
    }
}

// Get all articles
export async function getAllRecommendationPost({ query, limit = 6, page, category}: GetAllRecommendationPostParams) {
    try {
        await connectToDatabase()
        
        const titleCondition = query ? { title: { $regex: query, $options: 'i' } } : {};
        const categoryCondition = category ? await getCategoryByName(category) : null;
        const conditions = {
            ...titleCondition,
            ...(categoryCondition && { category: categoryCondition._id })
        };
        const skipAmount = (Number(page) - 1) * limit;
        const recommendationPostQuery = await RecommendationPost.find(conditions)
            .populate('category', '_id name url')
            .populate('author', '_id fullname')
            .sort({ createdAt: 'desc' })
            .skip(skipAmount)
            .limit(limit);
        const recommendationPostCount = await RecommendationPost.countDocuments(conditions);
        
        return {
            data: recommendationPostQuery.map(recommendationPostQuery => recommendationPostQuery.toJSON()),
            totalPages: Math.ceil( recommendationPostCount / limit),
        };
    } catch (error) {
        handleError(error);
    }
}

// Get articles by category
export async function getRecommendationPostByCategory({ categoryId, recommendationPostId, limit = 6, page = 1 }: GetRecommendationPostByCategoryParams) {
    try {
        await connectToDatabase()

        const skipAmount = (Number(page) - 1) * limit;
        const conditions = { $and: [{ category: categoryId }, { recommendationPostId: { $ne: recommendationPostId } }] };
        const recommendationPost= await RecommendationPost.find(conditions)
            .populate('category', '_id name url')
            .populate('author', '_id fullname')
            .sort({ createdAt: 'desc' })
            .skip(skipAmount)
            .limit(limit);
        const recommendationPostCount = await RecommendationPost.countDocuments(conditions);
        return {
            data: recommendationPost.map(recommendationPost => recommendationPost.toJSON()),
            totalPages: Math.ceil(recommendationPostCount / limit),
        };
    } catch (error) {
        handleError(error);
    }
}
