"use server";
import { DailyQuoteProps } from "@/types";
import Quotes from "../database/model/quotes.model";
import { connectToDatabase } from "../database";
import { handleError } from "../utils";
import ViewedQuotes from "../database/model/viewedQuotes.model";
var cron = require('node-cron');


// Function to get the daily quote
export async function getDailyQuote() {
  try {
    await connectToDatabase();
    const today = new Date().toISOString().split('T')[0];
    let quote = await Quotes.findOne();
    if (quote) {
      quote.viewed = true;
      quote.viewDate = today;
      await quote.save();
      const viewedQuotes = new ViewedQuotes({
        quoteId: quote._id,
        viewDate: today,
      });
      await viewedQuotes.save();
      
    }
    

    return JSON.parse(JSON.stringify(quote));
  } catch (error) {
    console.error(error);
    handleError(error); // Use a utility function to handle errors
  }
}

export async function CreateQuote({quote,title,author,viewed}:DailyQuoteProps){
  try {
    await connectToDatabase()

    const newQuote = await Quotes.create({quote, title,author,viewed})
    
    return JSON.parse(JSON.stringify(newQuote))

  } catch (error) {
    handleError(error)
  }
}
export async function getAllQuote(){
  try {
    await connectToDatabase();
    const quotes = await Quotes.find();

    return {data: quotes.map(quote => quote.toJSON())}

  } catch (error) {
    console.error(error)
  }
}


const setupCronJobs = () => {
  // Connect to the database
  connectToDatabase();

  // Schedule the daily quote selection at midnight
  cron.schedule('0 0 * * *', async () => {
    try {
      await getDailyQuote();
      console.log('Daily quote selected');
    } catch (error) {
      console.error('Error selecting daily quote:', error);
    }
  });
};
setupCronJobs();

