import mongoose, { Document, Schema, model, models } from "mongoose";


export interface IAfricaPost extends Document {
        title: string;
        description: string;
        content?: string;
        imageUrl?: string;
        category: {_id:string, name:string, url:string}
        author: {_id:string, fullname:string};
        comments: {_id:string, body:string};
        slug:string;
        
    }

const AfricaPostSchema = new Schema({
    title:{type:String, required:true},
    description:{type:String, required:true},
    slug:{type:String, required:true, unique:true},
    content:{type:String},
    imageUrl:{type:String},
    category:{type:Schema.Types.ObjectId, ref:'Category'},
    comments:[{type:Schema.Types.ObjectId, ref:'Comment'}],
    author:{type:Schema.Types.ObjectId, ref:'User'},

},{timestamps:true})

const AfricaPost = models.AfricaPost || model('AfricaPost', AfricaPostSchema);

export default AfricaPost;
