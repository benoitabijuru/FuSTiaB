import React from 'react'
import QuoteCard from './QuoteCard'
import { IQuotes } from '@/lib/database/model/quotes.model'

type QuoteCollectionProps  = {
    data: IQuotes[],
    emptyQuote: string,
}
const QuoteCollection = ({data,emptyQuote}:QuoteCollectionProps) => {
    
  return (
    <div>

        <div className="flex flex-col bg-slate-500">
            <ul className="flex flex-col space-y-10 py-10">
                {data.map((quote) => {
                    return(
                        <li key={quote._id} className="flex justify-center">
                             <QuoteCard quote={quote} />
                        </li>
                    )
                })}
            </ul>
        </div>
    </div>
  )
}

export default QuoteCollection