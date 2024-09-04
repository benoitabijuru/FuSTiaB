'use server'
import BusinessPost from "../database/model/businessPost.model";
import { connectToDatabase } from "../database";
import Category from "../database/model/category.model";
import { CreateBusinessPostParams, UpdateBusinessPostParams, DeleteBusinessPostParams, GetAllBusinessPostParams, GetBusinessPostByCategoryParams } from "@/types";
import { revalidatePath } from "next/cache";
import { handleError } from "../utils";
import User from "../database/model/user.model";

const getCategoryByName = async (name:string) =>{
    return Category.findOne({name:{$regex:name, $options:'i'}})
}

const populateBusinessPost = async (query:any) =>{
    return query
        .populate({path:'author', model:User, select:'_id firstName lastName'})
        .populate({path:'category', model:Category, select:'_id name'})
}

// Create a new article
export async function createBusinessPost({ userId, businessPost, path }: CreateBusinessPostParams) {
    try { 
        // connect to database
        await connectToDatabase();
        
        // admin
        const author = await User.findById(userId);

        if(!author){
            throw new Error("No author for this article")
        }

        // create a new post in database 
        const newBusinessPost = await BusinessPost.create({
             ...businessPost, 
             category:businessPost.categoryId, 
             author:userId
            });
        revalidatePath(path)
        
        return JSON.parse(JSON.stringify(newBusinessPost))
        
    } catch (error) {
        handleError(error);
    }
}

// Get one business by Slug
export async function getBusinessPostBySlug(businessPostSlug: string) {
    try {
        await connectToDatabase()

            // Find the article by its slug field
            const businessPostQuery = BusinessPost.findOne({ slug: businessPostSlug});
            const businessPost = await populateBusinessPost(businessPostQuery);
            if (!businessPost) throw new Error('businessPost not found');
        
            return JSON.parse(JSON.stringify(businessPost));

    } catch (error) {
        handleError(error);
    }
}


// Update Article
export async function updateBusinessPost({ adminId, businessPost, path }: UpdateBusinessPostParams) {
    try {
        await connectToDatabase()

        const businessPostToUpdate = await BusinessPost.findById(businessPost._id)
        
        if(!businessPostToUpdate || businessPostToUpdate.admin.toHexString() !== adminId){
            throw new Error('Unauthorized or Event not found')
        }

        const updatedBusinessPost = await BusinessPost.findByIdAndUpdate(
            businessPost._id,
            {...businessPost, category:businessPost.categoryId},
            {new:true}
        )
        revalidatePath(path)

        return JSON.parse(JSON.stringify(updatedBusinessPost))
    } catch (error) {
        handleError(error);
    }
}

// Delete article
export async function deleteBusinessPost({ businessPostId, path }: DeleteBusinessPostParams) {
    try {
        await connectToDatabase()

        const deletedBusinessPost = await BusinessPost.findByIdAndDelete(businessPostId);
        if (deletedBusinessPost) revalidatePath(path);
    } catch (error) {
        handleError(error);
    }
}

// Get all articles
export async function getAllBusinessPost({ query, limit = 9, page, category}: GetAllBusinessPostParams) {
    try {
        await connectToDatabase()
        
        const titleCondition = query ? { title: { $regex: query, $options: 'i' } } : {};
        const categoryCondition = category ? await getCategoryByName(category) : null;
        const conditions = {
            ...titleCondition,
            ...(categoryCondition && { category: categoryCondition._id })
        };
        const skipAmount = (Number(page) - 1) * limit;
        const businessPostQuery = await BusinessPost.find(conditions)
            .populate('category', '_id name url')
            .populate('author', '_id fullname')
            .sort({ createdAt: 'desc' })
            .skip(skipAmount)
            .limit(limit);
        const businessPostCount = await BusinessPost.countDocuments(conditions);
        
        return {
            data: businessPostQuery.map(businessPostQuery => businessPostQuery.toJSON()),
            totalPages: Math.ceil( businessPostCount / limit),
        };
    } catch (error) {
        handleError(error);
    }
}

// Get articles by category
export async function getBusinessPostByCategory({ categoryId, businessPostId, limit = 6, page = 1 }: GetBusinessPostByCategoryParams) {
    try {
        await connectToDatabase()
        const skipAmount = (Number(page) - 1) * limit;
        const conditions = { $and: [{ category: categoryId }, { businessPostId: { $ne: businessPostId } }] };
        const businessPost= await BusinessPost.find(conditions)
            .populate('category', '_id name url')
            .populate('author', '_id fullname')
            .sort({ createdAt: 'desc' })
            .skip(skipAmount)
            .limit(limit);
        const businessPostCount = await BusinessPost.countDocuments(conditions);
        return {
            data: businessPost.map(businessPost => businessPost.toJSON()),
            totalPages: Math.ceil(businessPostCount / limit),
        };
    } catch (error) {
        handleError(error);
    }
}
