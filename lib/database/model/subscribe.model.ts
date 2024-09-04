
import {  Schema, model, models } from "mongoose";

const SubscribeSchema = new Schema({
    email:{type:String, required:true, unique:true},
}
);

const Subscriber = models.Subscriber || model('Subscriber', SubscribeSchema)

export default Subscriber