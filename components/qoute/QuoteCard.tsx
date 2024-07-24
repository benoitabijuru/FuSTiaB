import { IQuotes } from '@/lib/database/model/quotes.model'
import React from 'react'

type QuoteCardProps = {
    quote: IQuotes,  
  }

const QuoteCard = ({quote}:QuoteCardProps) => {
  return (
    <div>
         <div className="group relative flex min-h-[380px] w-full max-w-[800px] flex-col overflow-hidden rounded- bg-black text-white shadow-md transition-all hover:shadow-2xl md:min-h-[380px] ">
         <h1 className="text-center text-xl  py-20">{quote.author}</h1>
         <p className="text-center text-3xl">{quote.quote}</p>
  </div>
        
    </div>
  )
}

export default QuoteCard