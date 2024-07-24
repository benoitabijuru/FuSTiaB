import { GetAllArticlesParams } from '@/types';
import { connectToDatabase } from '../database';
import Article from '../database/model/TechnologyPost.model';
import BusinessPost from '../database/model/businessPost.model';
import RecommendationPost from '../database/model/recomendationPost.model';
import GameChangersPost from '../database/model/gamechangerPost.model';
import Category from '../database/model/category.model';
import User from '../database/model/user.model';
import { handleError } from '../utils';
import { Document } from 'mongoose';

// Define a common interface for posts
export interface IPost extends Document {
    title: string;
    description: string;
    content?: string;
    imageUrl?: string;
    category: { _id: string, name: string, url: string };
    author: { _id: string, fullname: string };
    comments: { _id: string, body: string }[];
    createdAt: Date;
    type: string;
    slug:{type:String, required:true, unique:true},
}

// Function to get a category by name
const getCategoryByName = async (name: string) => {
    return Category.findOne({ name: { $regex: name, $options: 'i' } });
}

// Function to populate the author and category fields for an array of posts
const populateCombinedPosts = async (posts: any[]) => {
    try {
        // Collect all author and category IDs from the posts
        const authorIds = posts.map(post => post.author);
        const categoryIds = posts.map(post => post.category);

        // Populate authors
        const authors = await User.find({ _id: { $in: authorIds } }).select('_id firstName lastName');

        // Populate categories
        const categories = await Category.find({ _id: { $in: categoryIds } }).select('_id name');

        // Map authors and categories to their respective posts
        const populatedPosts = posts.map(post => {
            const populatedAuthor = authors.find(author => author._id.equals(post.author));
            const populatedCategory = categories.find(category => category._id.equals(post.category));
            return {
                ...post,
                author: populatedAuthor,
                category: populatedCategory
            };
        });

        return populatedPosts;
    } catch (error) {
        console.error('Error populating combined posts:', error);
        throw error;
    }
};

// Function to fetch combined posts from different collections
export async function getCombinedPosts({ query, limit = 20, page, category }: GetAllArticlesParams) {
    try {
        await connectToDatabase(); // Ensure database connection

        // Aggregate articles
        const articles: IPost[] = await Article.aggregate([
            {
                $project: {
                    title: 1,
                    description: 1,
                    content: 1,
                    imageUrl: 1,
                    category: 1,
                    author: 1,
                    comments: 1,
                    createdAt: 1,
                    slug:1,
                    type: { $literal: "Article" }
                }
            }
        ]);

        // Aggregate business posts
        const businessPosts: IPost[] = await BusinessPost.aggregate([
            {
                $project: {
                    title: 1,
                    description: 1,
                    content: 1,
                    imageUrl: 1,
                    category: 1,
                    author: 1,
                    comments: 1,
                    createdAt: 1,
                    slug:1,
                    type: { $literal: "BusinessPost" }
                }
            }
        ]);

        // Aggregate recommendation posts
        const recommendationPosts: IPost[] = await RecommendationPost.aggregate([
            {
                $project: {
                    title: 1,
                    description: 1,
                    content: 1,
                    imageUrl: 1,
                    category: 1,
                    author: 1,
                    comments: 1,
                    createdAt: 1,
                    slug:1,
                    type: { $literal: "RecommendationPost" }
                }
            }
        ]);

        // Aggregate game changers posts
        const gameChangersPosts: IPost[] = await GameChangersPost.aggregate([
            {
                $project: {
                    title: 1,
                    description: 1,
                    content: 1,
                    imageUrl: 1,
                    category: 1,
                    author: 1,
                    comments: 1,
                    createdAt: 1,
                    slug:1,
                    type: { $literal: "GameChangersPost" }
                }
            }
        ]);

        // Combine all posts into a single array
        const combinedPosts: IPost[] = [...articles, ...businessPosts, ...recommendationPosts, ...gameChangersPosts];

        // Filter posts by title if a query is provided
        const titleCondition = query ? { title: { $regex: query, $options: 'i' } } : {};

        // Find category by name if a category is provided
        const categoryCondition = category ? await getCategoryByName(category) : null;

        // Combine conditions
        const conditions = {
            ...titleCondition,
            ...(categoryCondition && { category: categoryCondition._id })
        };

        // Filter combined posts based on conditions
        const filteredPosts = combinedPosts.filter(post => {
            if (conditions.title && !new RegExp(conditions.title.$regex, 'i').test(post.title)) {
                return false;
            }
            if (conditions.category && post.category._id.toString() !== conditions.category.toString()) {
                return false;
            }
            return true;
        });

        // Sort posts by creation date in descending order
        filteredPosts.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

        // Paginate the sorted posts
        const skipAmount = (Number(page) - 1) * limit;
        const paginatedPosts = filteredPosts.slice(skipAmount, skipAmount + limit);

        // Populate author and category fields for each post
        const populatedPosts = await populateCombinedPosts(paginatedPosts);

        return {
            data: populatedPosts.map(post => ({
                ...post,
                author: post.author ? { ...post.author } : null, // Example of converting author to plain object if needed
                category: post.category ? { ...post.category } : null, // Example of converting category to plain object if needed
            })),
            totalPages: Math.ceil(filteredPosts.length / limit), // Calculate total pages
        };

    } catch (error) {
        handleError(error); // Handle errors
    }
}

export async function getCombinedPostBySlug(postSlug: string) {
    try {
        await connectToDatabase(); // Ensure database connection

        // Aggregate articles
        const articles: IPost[] = await Article.aggregate([
            {
                $project: {
                    title: 1,
                    description: 1,
                    content: 1,
                    imageUrl: 1,
                    category: 1,
                    author: 1,
                    comments: 1,
                    createdAt: 1,
                    slug:1,
                    type: { $literal: "Technology" }
                }
            }
        ]);

        // Aggregate business posts
        const businessPosts: IPost[] = await BusinessPost.aggregate([
            {
                $project: {
                    title: 1,
                    description: 1,
                    content: 1,
                    imageUrl: 1,
                    category: 1,
                    author: 1,
                    comments: 1,
                    createdAt: 1,
                    slug:1,
                    type: { $literal: "Business" }
                }
            }
        ]);

        // Aggregate recommendation posts
        const recommendationPosts: IPost[] = await RecommendationPost.aggregate([
            {
                $project: {
                    title: 1,
                    description: 1,
                    content: 1,
                    imageUrl: 1,
                    category: 1,
                    author: 1,
                    comments: 1,
                    createdAt: 1,
                    slug:1,
                    type: { $literal: "Recommendation" }
                }
            }
        ]);

        // Aggregate game changers posts
        const gameChangersPosts: IPost[] = await GameChangersPost.aggregate([
            {
                $project: {
                    title: 1,
                    description: 1,
                    content: 1,
                    imageUrl: 1,
                    category: 1,
                    author: 1,
                    comments: 1,
                    createdAt: 1,
                    slug:1,
                    type: { $literal: "Game Changers" }
                }
            }
        ]);

        // Combine all posts into a single array
        const combinedPosts: IPost[] = [...articles, ...businessPosts, ...recommendationPosts, ...gameChangersPosts];

        // Find the post by ID in the combined array
        const post = combinedPosts.find(post => post.slug && post.slug.toString() === postSlug);
        if (!post) throw new Error('Post not found');
        return JSON.parse(JSON.stringify(post));
    } catch (error) {
        handleError(error);
    }
}