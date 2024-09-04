import React from 'react'
import { getAllQuote } from '@/lib/actions/quote.actions'
import QuoteCollection from '@/components/qoute/QuoteCollection'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title:"Quotes",
  description:"Start each day with inspirational message.",
  // metadataBase:new URL('/technology'),
  keywords:["Daily Quotes","Inspirational message","Africa StartUp","AI","Computation","Africa Founders"],
 alternates: {
        canonical: '/',
        languages: {
          'en-US': '/en-US',
        },
},
openGraph: {
        type:"website",
        title:"Quotes",
        url:"/quote",
        description:"Start each day with inspirational message.",
        siteName:"FUSTIAB"
  
},
};

export default async function Quotes(){
  const quotes = await getAllQuote() 
  return (
    <div className='bg-black'>
      <h1 className="py-10 md:py-20 lg:py-32 text-4xl md:text-6xl lg:text-[100px] text-center green-gradient-text">Inspiration Quotes</h1>
      <QuoteCollection
      data = {quotes?.data || []}
      />
    </div>
  )
}

