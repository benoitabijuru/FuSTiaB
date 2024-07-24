

import { getDailyQuote } from "@/lib/actions/quote.actions";
import Link from "next/link";
import React from "react";


const Quote = async () => {
 
   const quote = await getDailyQuote();
   

  return (
    <fieldset className=" flex flex-col text-black rounded-xl text-center m-10 pt-6 pb-20 box-content h-32 w-100 border-8 border-double border-green-800/50 shadow-2xl shadow-inherit opacity-100">
        <legend className="px-2 text-3xl font-extrabold gold-gradient-text" >Inspiration of the Day</legend>
      <div className="">
      {quote !== null && quote !== undefined ? (
        <div>
          <p className='font-semibold text-2xl text-slate-700'><q>{quote.quote}</q></p>
          <div className="flex items-center justify-center">
            
              <p className='py-5 text-xl   font-semibold'>{quote.author}</p>
            
         
          </div>
          <p className='text-slate-600 pb-5 font-normal italic'>{quote.title}</p>
          <p className="text-blue-600 font-semibold">Share</p> 
        </div>
      ) : (
        <>
        <p className="text-2xl text-slate-600 pb-5">Wait for Daily Inspiration to appear.</p>
        <Link href="/quotes" className="text-sky-400 hover:underline hover:text-sky-600">Explore All FUSTIAB Inspiration Quotes</Link>
        </>
        
      )}
    
      </div>
      
    </fieldset>
  );
};

export default Quote;
