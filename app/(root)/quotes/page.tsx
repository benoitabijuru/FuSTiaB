import React from 'react'
import { getAllQuote } from '@/lib/actions/quote.actions'
import QuoteCollection from '@/components/qoute/QuoteCollection'

export default async function Quotes(){
  const quotes = await getAllQuote() 
  return (
    <div>
      <h1 className="py-32  text-[100px] text-center font-black">Inspiration Quotes</h1>
      <QuoteCollection
      data = {quotes?.data}
      />
    </div>
  )
}

