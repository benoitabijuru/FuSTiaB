import { IQuotes } from '@/lib/database/model/quotes.model'
import React from 'react'

type QuoteCardProps = {
    quote: IQuotes,  
  }

const QuoteCard = ({quote}:QuoteCardProps) => {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-10">
    <div className="group relative flex min-h-[280px] sm:min-h-[320px] md:min-h-[380px] w-full max-w-full sm:max-w-[600px] md:max-w-[800px] flex-col overflow-hidden rounded bg-gr-gradient text-white shadow-md transition-all hover:shadow-2xl">
        <h1 className="text-center text-lg sm:text-xl md:text-2xl py-10 sm:py-16 md:py-20">{quote.author}</h1>
        <p className="text-center text-xl sm:text-2xl md:text-3xl px-4 sm:px-6 md:px-8">{quote.quote}</p>
    </div>
</div>

  )
}

export default QuoteCard