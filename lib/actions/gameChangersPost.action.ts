'use server'

import GameChangersPost from "../database/model/gamechangerPost.model";
import { connectToDatabase } from "../database";
import Category from "../database/model/category.model";
import { CreateGameChangersPostParams, UpdateGameChangersPostParams, DeleteGameChangersPostParams, GetAllGameChangersPostParams, GetGameChangersPostByCategoryParams } from "@/types";
import { revalidatePath } from "next/cache";
import { handleError } from "../utils";
import User from "../database/model/user.model";

const getCategoryByName = async (name:string) =>{
    return Category.findOne({name:{$regex:name, $options:'i'}})
}

const populateGameChangersPost = async (query:any) =>{
    return query
        .populate({path:'author', model:User, select:'_id firstName lastName'})
        .populate({path:'category', model:Category, select:'_id name'})
}

// Create a new article
export async function createGameChangersPost({ userId, gameChangersPost, path }: CreateGameChangersPostParams) {
    try { 
        // connect to database
        await connectToDatabase();
        
        // admin
        const author = await User.findById(userId);

        if(!author){
            throw new Error("No author for this article")
        }

        // create a new post in database 
        const newGameChangersPost = await GameChangersPost.create({
             ...gameChangersPost, 
             category:gameChangersPost.categoryId, 
             author:userId
            });
        revalidatePath(path)
        
        return JSON.parse(JSON.stringify(newGameChangersPost))
        
    } catch (error) {
        handleError(error);
    }
}

// Get one gamechangers post by slug
export async function getGameChangersPostBySlug(gameChangersPostSlug: string) {
    try {
        await connectToDatabase()
        const gameChangersPostQuery = GameChangersPost.findOne({ slug: gameChangersPostSlug });
        const gameChangersPost = await populateGameChangersPost(gameChangersPostQuery)

        if (!gameChangersPost) throw new Error('Article not found');
        return JSON.parse(JSON.stringify(gameChangersPost))
    } catch (error) {
        handleError(error);
    }
}

// Update Article
export async function updateGameChangersPost({ adminId, gameChangersPost, path }: UpdateGameChangersPostParams) {
    try {
        await connectToDatabase()

        const gameChangersPostToUpdate = await GameChangersPost.findById(gameChangersPost._id)
        
        if(!gameChangersPostToUpdate || gameChangersPostToUpdate.admin.toHexString() !== adminId){
            throw new Error('Unauthorized or Event not found')
        }

        const updatedGameChangersPost = await GameChangersPost.findByIdAndUpdate(
            gameChangersPost._id,
            {...gameChangersPost, category:gameChangersPost.categoryId},
            {new:true}
        )
        revalidatePath(path)

        return JSON.parse(JSON.stringify(updatedGameChangersPost))
    } catch (error) {
        handleError(error);
    }
}

// Delete article
export async function deleteGameChangersPost({ gameChangersPostId, path }: DeleteGameChangersPostParams) {
    try {
        await connectToDatabase()

        const deletedGameChangersPost = await GameChangersPost.findByIdAndDelete(gameChangersPostId);
        if (deletedGameChangersPost) revalidatePath(path);
    } catch (error) {
        handleError(error);
    }
}

// Get all articles
export async function getAllGameChangersPost({ query, limit = 6, page, category}: GetAllGameChangersPostParams) {
    try {
        await connectToDatabase()
        
        const titleCondition = query ? { title: { $regex: query, $options: 'i' } } : {};
        const categoryCondition = category ? await getCategoryByName(category) : null;
        const conditions = {
            ...titleCondition,
            ...(categoryCondition && { category: categoryCondition._id })
        };
        const skipAmount = (Number(page) - 1) * limit;
        const gameChangersPostQuery = await GameChangersPost.find(conditions)
            .populate('category', '_id name url')
            .populate('author', '_id fullname')
            .sort({ createdAt: 'desc' })
            .skip(skipAmount)
            .limit(limit);
        const gameChangersPostCount = await GameChangersPost.countDocuments(conditions);
        
        return {
            data: gameChangersPostQuery.map(gameChangersPostQuery => gameChangersPostQuery.toJSON()),
            totalPages: Math.ceil( gameChangersPostCount / limit),
        };
    } catch (error) {
        handleError(error);
    }
}

// Get articles by category
export async function getGameChangersPostByCategory({ categoryId, gameChangersPostId, limit = 6, page = 1 }: GetGameChangersPostByCategoryParams) {
    try {
        await connectToDatabase()

        const skipAmount = (Number(page) - 1) * limit;
        const conditions = { $and: [{ category: categoryId }, { gameChangersPostId: { $ne: gameChangersPostId } }] };
        const gameChangerPost = await GameChangersPost.find(conditions)
            .populate('category', '_id name url')
            .populate('author', '_id fullname')
            .sort({ createdAt: 'desc' })
            .skip(skipAmount)
            .limit(limit);
        const gameChangersPostCount = await GameChangersPost.countDocuments(conditions);
        return {
            data: gameChangerPost.map(gameChangerPost => gameChangerPost.toJSON()),
            totalPages: Math.ceil(gameChangersPostCount / limit),
        };
    } catch (error) {
        handleError(error);
    }
}
