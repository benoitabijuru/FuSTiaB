import { Document, Schema, model, models } from "mongoose";

export interface IViewedQuotes extends Document {
    quoteId: string;
    viewDate: Date;
}

const ViewedQuotesSchema = new Schema({
    quoteId: { type: Schema.Types.ObjectId, ref: 'Quotes', required: true },
    viewDate: { type: Date, required: true }
});

const ViewedQuotes = models.ViewedQuotes || model('ViewedQuotes', ViewedQuotesSchema);

export default ViewedQuotes;
