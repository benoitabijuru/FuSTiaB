import { Document, Schema, model, models } from "mongoose";

export interface IAdmin extends Document {
    _id: string;
    name: string;
    email: string;
    key: number;
}

const AdminSchema = new Schema({
    _id:{type:String},
    name:{type:String},
    email:{type:String},
    key:{type:Number},

})

const Admin = models.Admin || model('Admin', AdminSchema) 

export default Admin
