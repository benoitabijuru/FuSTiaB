'use client'

import { motion } from 'framer-motion';
import { TypingText } from './CustomText';
import { fadeIn, slideIn, staggerContainer, textVariant } from './motion';
import Link from 'next/link';
import Hero from '../hero/Hero';
const AboutPart = () => {
  return (
    <section className=" ">
        <div className="w-full">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="w-full sky-gradient-text text-center"
             >
                <motion.h1 variants={textVariant(1.1)} className="py-32 text-blue-700 text-[100px] text-center font-black">
                    FUSTIAB
                </motion.h1>
            </motion.div>
            
        </div>
        <Hero/>
       <div className="">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    >
                         <TypingText title="| Our Mission" textStyles=" font-bold text-[40px] py-10 text-center gold-gradient-text "/>
                         <motion.p
                    variants={fadeIn('up', 'tween', 0.2, 1)}
                    className="wrapper text-4xl">We are on a mission of leading everyone into the future of technology and entrepreneurship. By providing incredible advice and support to those who are building or want to build game-changing technologies, we empower individuals and teams to succeed.</motion.p>
                </motion.div>
            
        </div>
        <div className="gradient-02 z-0">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="py-20"
                >
                 <TypingText title="| Who We Are?" textStyles="gradient-blue-text font-bold text-[40px] py-10 text-center "/>
                 <motion.p
                    variants={fadeIn('up', 'tween', 0.2, 1)}
                    className="wrapper text-4xl"
                    >
                    We are very optimistic about the bright future technology creating and enthusiastic about game-changing technology and entrepreneurship. With us, you can develop your entrepreneurship and technology skills. Moreover, every day with us, people grow richer.
                 </motion.p>
            </motion.div>
            
            
            
        </div>
        <div className="py-20">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className="py-20"
                >
                    <TypingText title="| What We Do?" textStyles=" py-10 green-gradient-text font-bold text-[40px] text-center  "/>
                </motion.div>
            <div className="flex flex-row space-x-10 wrapper ">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="flex flex-row space-x-10 wrapper "
                >
                <motion.div
                    variants={fadeIn('right', 'tween', 0.2, 1)}
                    className=""
                >
                    <h3 className="text-3xl">We recommend services and product with advanced features.</h3>
                    <Link href="/recommendation"><p className="pt-4 text-xl text-blue-400 hover:underline">Explore more about our recommendation.</p></Link>
                </motion.div>
                <motion.div
                    variants={fadeIn('up', 'tween', 0.2, 1)}
                    className=""
                >
                    <h3 className='text-3xl'>We guide people to the world of game-changers and business.</h3>
                    <p className="pt-4 text-xl">Explore more about <Link href="/game-changers" className="text-blue-400 hover:underline">game changers</Link> and <Link href="/business" className="text-blue-400 hover:underline">business</Link>.</p>
                </motion.div>
                <motion.div
                    variants={fadeIn('left', 'tween', 0.2, 1)}
                    className=""
                >
                    <h3 className="text-3xl">We guide people toward the world and future of technology.</h3>
                    <Link href="/technology"><p className="pt-4 text-xl text-blue-400 hover:underline">Explore further opportunities and innovations of technology.</p></Link>
                </motion.div>
                </motion.div> 
        </div>
        </div>
       
        <div className="py-20 text-center wrapper">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className="py-10"
                >
                    <TypingText title="| Contact FuSTIAB" textStyles="text-blue-700 font-bold text-[40px] py-5 text-center"/>
                </motion.div>
             
            <div className="">
                <h3 className="text-3xl">Get in touch, we're here to help.</h3>
                <Link href="/contact"><p className="pt-4 text-xl text-orange-700 hover:underline">Receive comprehensive support from us.</p></Link>
                
            </div>
        </div>


   
    </section>
  )
}

export default AboutPart