import mongoose, { Document, Schema, model, models } from "mongoose";


export interface IRecommendationPost extends Document {
        title: string;
        description: string;
        content?: string;
        imageUrl?: string;
        category: {_id:string, name:string, url:string}
        author: {_id:string, fullname:string};
        comments: {_id:string, body:string};
        slug:string;
        
    }

const RecommendationPostSchema = new Schema({
    title:{type:String, required:true},
    description:{type:String, required:true},
    content:{type:String},
    imageUrl:{type:String},
    category:{type:Schema.Types.ObjectId, ref:'Category'},
    comments:[{type:Schema.Types.ObjectId, ref:'Comment'}],
    author:{type:Schema.Types.ObjectId, ref:'User'},
    slug:{type:String, required:true, unique:true},

},{timestamps:true})

const RecommendationPost = models.RecommendationPost || model('RecommendationPost', RecommendationPostSchema);

export default RecommendationPost;
