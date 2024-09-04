import React from 'react'
import QuoteCard from './QuoteCard'
import { IQuotes } from '@/lib/database/model/quotes.model'

type QuoteCollectionProps  = {
    data: IQuotes[],
 
}
const QuoteCollection = ({data}:QuoteCollectionProps) => {
    
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex flex-col">
            <ul className="flex flex-col space-y-6 sm:space-y-8 md:space-y-10 py-6 sm:py-8 md:py-10">
                {data.map((quote) => {
                    return (
                        <li key={quote._id} className="flex justify-center">
                            <QuoteCard quote={quote} />
                        </li>
                    );
                })}
            </ul>
        </div>
    </div>

  )
}

export default QuoteCollection