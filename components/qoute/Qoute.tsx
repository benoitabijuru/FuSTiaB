

import { getDailyQuote } from "@/lib/actions/quote.actions";
import Link from "next/link";
import React from "react";


const Quote = async () => {
 
   const quote = await getDailyQuote();
   

  return (
    <fieldset className="flex flex-col text-black rounded-xl text-center m-4 md:m-8 lg:m-10 pt-6 pb-12 md:pb-16 lg:pb-20 box-content h-auto border-4 md:border-6 lg:border-8 border-double border-green-800/50 shadow-lg md:shadow-xl lg:shadow-2xl shadow-inherit opacity-100">
    <legend className="px-2 text-xl md:text-2xl lg:text-3xl font-extrabold gold-gradient-text">Inspiration of the Day</legend>
    <div>
      {quote !== null && quote !== undefined ? (
        <div>
          <p className="font-semibold text-lg md:text-xl lg:text-2xl text-slate-700"><q>{quote.quote}</q></p>
          <div className="flex items-center justify-center">
            <p className="py-3 md:py-4 lg:py-5 text-lg md:text-xl lg:text-xl font-semibold">{quote.author}</p>
          </div>
          <p className="text-slate-600 pb-3 md:pb-4 lg:pb-5 font-normal italic">{quote.title}</p>
          <Link href="/quotes"><p className="text-blue-400 font-semibold underline">Get Inspiration from FUSTIAB Quotes</p> </Link>
        </div>
      ) : (
        <>
          <p className="text-lg md:text-xl lg:text-2xl text-slate-600 pb-3 md:pb-4 lg:pb-5">Wait for Daily Inspiration to appear.</p>
          <Link href="/quotes" className="text-sky-400 hover:underline hover:text-sky-600">Explore All FUSTIAB Inspiration Quotes</Link>
        </>
      )}
    </div>
  </fieldset>
  
  );
};

export default Quote;
