'use server'

import { revalidatePath } from "next/cache"
import { connectToDatabase } from "../database"
import User from "../database/model/user.model"
import Article from "../database/model/TechnologyPost.model"
import { handleError } from "../utils"

import { CreateUserParams, UpdateUserParams } from "@/types"

export async function createUser(user:CreateUserParams){
    try{
        await connectToDatabase();

        const newUser = await User.create(user);
        return JSON.parse(JSON.stringify(newUser));
    } catch(error){
        handleError(error)
    }
}

export async function getUserById(userId:string){
    try{
        await connectToDatabase()

        const user = await User.findById(userId)

        if(!user) throw new Error('User not found')
        return JSON.parse(JSON.stringify(user))
    } catch(error){
        handleError(error)
    }
}

export async function updateUser(clerkId:string, user: UpdateUserParams){
    try {
        await connectToDatabase()

        const updatedUser = await User.findOneAndUpdate({ clerkId }, user ,{new:true} )

        if(!updatedUser) throw new Error('User updated failed')
        return JSON.parse(JSON.stringify(updatedUser))
    } catch (error){
        handleError(error)
    }
}

export async function deleteUser(clerkId:string){
    try{
        await connectToDatabase()

        // find user to delete
        const userToDelete = await User.findOne({clerkId})

        if(!userToDelete){
            throw new Error('User not found')
        }

        // Unlink relationships
        await Promise.all([
            // Update the article collection to remove reference to the uer
        Article.updateMany(
            {userId: {$in: userToDelete.articles}},
            {$pull: {author: userToDelete.userId}}
        ),

         // Updte the 'subscription collection to remove reference to the user'   
        ])

        // delete user

        const deleteUser = await User.findByIdAndDelete(userToDelete._id)
        revalidatePath('/')

        return deleteUser ? JSON.parse(JSON.stringify(deleteUser)): null
    } catch(error){
        handleError(error)
    }
}