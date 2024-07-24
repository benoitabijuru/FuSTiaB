import NewsletterSubscribe from '@/components/contact/NewsletterSub'
import SubscribeNewletter from '@/components/shared/SubscribeNewletter'
import React from 'react'

const page = () => {
  return (
    <div className="py-20 mx-20">
      <h2 className="text-center text-blue-800 text-[50px]">Newsletter</h2>
      <p className='text-center py-20 text-2xl'>FUSTIAB sent tips, inspiration and informative message from expert in technology and Entrepreneurship straight to your inbox.</p>
      <div className="">
        <div className="">
          <p>Subscribe for all FUSTIAB Activities, stay in touch with game changing technology and get best tips, information and trends in world of entrepreneurship.</p>
         <NewsletterSubscribe/>
        </div>
        <div className="">
          <p>Stay in touch with technology information and tips, indeed learn from expert in technology.</p>
         <NewsletterSubscribe/>
        </div>
        <div className="">
          <p>Get business tips, and stay in touch with business news and information.</p>
         <NewsletterSubscribe/>
        </div>
        <div className="">
          <p>Learn from game changers, get tips from great founders, inventors, innovators, engineers and investors. </p>
         <NewsletterSubscribe/>
        </div>
        <div className="">
          <p>Get all our recommendation in your box.</p>
         <NewsletterSubscribe/>
        </div>
        <div className="">
          <p>Get weekly inspiration from quotes.</p>
         <NewsletterSubscribe/>
        </div>
        <div className="">
          <p>Get value from our prediction about the future</p>
         <NewsletterSubscribe/>
        </div>
      </div>
     
    </div>
  )
}

export default page