import mongoose, { Document, Schema, model, models } from "mongoose";


export interface IArticle extends Document {
        userId:string;
        slug:string;
        title: string;
        description: string;
        content?: string;
        thumbnail:string,
        imageUrl?: string;
        category: {_id:string, name:string, url:string}
        author: {_id:string, fullname:string};
        createdAt: Date;
        updatedAt: Date;
        likes: number;
        comments: {_id:string, body:string};
        shared?: string;
        citation?: string;
        pagination?: string;
        locatepost: string;
    }

const ArticleSchema = new Schema({
    userId:{type:String, required:true},
    slug:{type:String, required:true, lowercase:true, unique:true},
    title:{type:String, required:true},
    description:{type:String, required:true},
    content:{type:String},
    imageUrl:{type:String},
    category:{type:Schema.Types.ObjectId, ref:'Category'},
    comments:[{type:Schema.Types.ObjectId, ref:'Comment'}],
    shared:{type:String},

},{timestamps:true})

const Article = models.Article || model('Article', ArticleSchema);

export default Article;
