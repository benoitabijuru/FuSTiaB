"use server"

import { SubscribeParams } from "@/types";
import { connectToDatabase } from "../database";
import Subscriber from "../database/model/subscribe.model";
import { handleError } from "../utils";

export async function Subscribe(subscriber:SubscribeParams){
    try{
        await connectToDatabase();

        const newSubscriber = await Subscriber.create(subscriber);
        return JSON.parse(JSON.stringify(newSubscriber));
    } catch(error){
        handleError(error)
    }
}