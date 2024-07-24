'use client'

import { staggerContainer } from './motion'
import { TypingText } from './CustomText'
import {motion} from 'framer-motion'

const Recommendation = () => {
  return (
    <section>
         <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className="py-20"
                >
                 <TypingText title="Explore more about our recommendation." textStyles="text-green-700 font-bold text-[40px] py-10 text-center"/>
        <div className="">
            <p>We recommend to you advanced technologies, services, and education.   </p>
        </div>
        </motion.div>
        
    </section>
  )
}

export default Recommendation