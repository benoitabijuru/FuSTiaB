
import Link from 'next/link'
import React from 'react'
import { navLinks } from '@/constants'

const Footer = () => {
  return (
    <>
    
    <footer className='bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 w-full'>
      <div className="w-full max-w-screen-l mx-auto p-4 md:py-8">
        <div className="flex flex-row flex-between">
            <div className="md:flex md:justify-between">
              <Link href="/" className='flex items-center'> <p>FuSTIAB</p></Link>
            </div>
            
        </div>
        
        <hr/>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
           <div className="">
              <Link href="/about-us">Who We Are</Link>
              <p>Contact Us</p>
              <p>Advertise your future</p>
              <Link href="/admin">Admin Dashboard</Link>
           </div>
           <div className="flex flex-col ">
              <Link href="/technology">Technology</Link>   
              <Link href="/science">Science</Link> 
              <Link href="/game-changers">Game Changers</Link> 
              <Link href="/business">Business</Link>          
           </div>
           <div className="flex flex-col ">
              <Link href="/technology">Technology</Link>   
              <Link href="/science">Science</Link> 
              <Link href="/game-changers">Game Changers</Link> 
              <Link href="/business">Business</Link>          
           </div>
           <div className="flex flex-col ">
              <Link href="/technology">Technology</Link>   
              <Link href="/science">Science</Link> 
              <Link href="/game-changers">Game Changers</Link> 
              <Link href="/business">Business</Link>          
           </div>
        
        
        
           
          
        </div>
        <div className="p-5 mx-40">
        
        </div>
       
      </div>
      
      <div className="d">
        
      </div>
    </footer>
    </>
  )
}

export default Footer