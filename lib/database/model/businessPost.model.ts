import mongoose, { Document, Schema, model, models } from "mongoose";

interface ISEO {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  }

export interface IBusinessPost extends Document {
    title: string;
    description: string;
    content?: string;
    imageUrl?: string;
    imageCaption:string;
    category: {_id:string, name:string, url:string}
    author: {_id:string, fullname:string};
    comments: {_id:string, body:string};
    slug:string;
    isFeatured: boolean;
    isRelatedToAfrica: boolean;
    isNewsTrending:boolean;
    seo?: ISEO;
    }

const BusinessPostSchema = new Schema({
    title:{type:String, required:true},
    description:{type:String, required:true},
    slug:{type:String, required:true, unique:true},
    content:{type:String},
    imageUrl:{type:String},
    imageCaption:{type:String},
    category:{type:Schema.Types.ObjectId, ref:'Category'},
    comments:[{type:Schema.Types.ObjectId, ref:'Comment'}],
    author:{type:Schema.Types.ObjectId, ref:'User'},
    isFeatured: {  type: Boolean,  default: false },
    isRelatedToAfrica: { type: Boolean, default: false},
    isNewsTrending: { type: Boolean, default: false},
    seo: {
        metaTitle: { 
          type: String, 
          trim: true, 
          maxlength: 100 
        },
        metaDescription: { 
          type: String, 
          trim: true, 
          maxlength: 300 
        },
        keywords: [{ 
          type: String, 
          trim: true 
        }]
      }

},{timestamps:true})

const BusinessPost = models.BusinessPost || model('BusinessPost', BusinessPostSchema);

export default BusinessPost;
