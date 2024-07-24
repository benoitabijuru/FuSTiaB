import { Document, Schema, model, models } from "mongoose";

export interface IQuotes extends Document {
    _id: string;
    quote: string;
    author: string;
    title: string;
    viewed: boolean;
    
}

const QuotesSchema = new Schema({
    quote: { type: String, required: true },
    author: { type: String, required: true },
    title: { type: String, required: true },
    viewed: { type: Boolean, default: false },
});

const Quotes = models.Quotes || model('Quotes', QuotesSchema);

export default Quotes;
