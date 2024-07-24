"use client"

import Image from "next/image"
import EmailSubscribe from "../contact/EmailSubscribe"
import { motion } from 'framer-motion';
import { staggerContainer, textVariant2 } from "../about/motion"




const Hero = ({}) => {
  return (
    
          <section className=" bg-dotted-pattern bg-contain wrapper">
            <div className="mx-5">
              <div className="flex flex-col justify-center gap-8 px-10">
              <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className="py-20"
                >
                  
              <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className=" text-blue-700 h1-bold gradient-blue-text"
  >Explore the Magic of <span className="gold-gradient-text">Technology</span>   and Dive Deep into the World of <span className="green-gradient-text">Entrepreneurship</span> 
  </motion.h2>
  </motion.div>
                
                <p className="p-regular-16 md:p-regular-20">Technology has the power to work magic, transforming the way we see, do, and believe. At the forefront of this transformation are entrepreneurs, turning existential threats into business opportunities and fostering existential hope.</p>
                <p className="p-regular-12 italic md:p-regular-14">Join us on this groundbreaking journey. Subscribe to stay updated, be part of our vibrant community.</p>  
                <EmailSubscribe/>
              </div>  
            </div>
             
          </section>
           
  )
}

export default Hero