
import AboutPart from '@/components/about/AboutPart'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Metadata } from 'next'
import Hero from '@/components/hero/Hero'

export const metadata: Metadata = {
  title:"About FUSTIAB",
  description:"",
};

const AboutUs = () => {
  return (
 <div className='about-body text-white'>
    <AboutPart/> 
</div>
   
  )
}

export default AboutUs