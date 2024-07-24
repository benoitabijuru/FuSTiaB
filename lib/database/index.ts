import mongoose from "mongoose";

const MONGODB_URI_CHANGERS = process.env.MONGODB_URI_CHANGERS;


let cached = (global as any).mongoose || {conn:null, promise:null}

export const connectToDatabase = async () =>{
    if(cached.conn) return cached.conn;

    if(!MONGODB_URI_CHANGERS) throw new  Error('MONGODB_URI is missing');

    cached.promise = cached.promise || mongoose.connect(MONGODB_URI_CHANGERS,{
        dbName: 'fustiab',
        bufferCommands: false,
    })

    cached.conn = await cached.promise;

    return cached.conn;
}
