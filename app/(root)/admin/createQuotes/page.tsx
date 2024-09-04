
import  DailyQuoteFormCreater  from '@/components/qoute/QuoteForm'
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react'

const createQuotes = () => {
  
  return (
    <>
    <section className=" bg-dotted-pattern bg-cover bg-center py-5"> 
      <h3 className='wrapper h3-bold text-center'>Create Daily Quotes</h3>
    </section>
    <div className="wrapper my-8">
      <DailyQuoteFormCreater/>
    </div>
  </>
  )
}

export default createQuotes