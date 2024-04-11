import { Document, Schema, model, models } from "mongoose";

export interface ISubscription extends Document{
    _id: string;
    name: string;
    email: string;
    image?: string;
    payed: boolean;
    free: boolean;
}
const SubscriptionSchema = new Schema({
    _id:{type:String},
    name:{type:String},
    email:{type:String, required:true},
    image:{type:String},
    payed:{type:Boolean},
    free:{type:Boolean},


})

const Subscription = models.Subscription || model('Subscription', SubscriptionSchema)

export default Subscription