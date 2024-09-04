'use client'

import { motion } from 'framer-motion';
import { TypingText } from './CustomText';
import { fadeIn, slideIn, staggerContainer, textVariant } from './motion';

const ContactPart = () => {
  return (
    <section>
        <motion.div
                    variants={staggerContainer(0.1, 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className="py-20"
                >
                    <TypingText title="Contact FuSTIAB" textStyles="text-black font-bold text-[40px] py-10 text-center"/>
        </motion.div>
        <div className="grid grid-cols-2 h-screen gap-5 px-20">
            <div className="p-10">
                <motion.div
                    variants={staggerContainer(0.1, 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className="py-20"
                     >
                    <TypingText title="Advertising and Sponsorship" textStyles="text-black font-bold text-3xl"/>
                    <p className="pt-5">For all Advertising or Sponsorship with FuSTIAB click here for more information and support</p>
                </motion.div>
                <motion.div
                    variants={staggerContainer(0.1, 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className="py-20"
                     >
                    <TypingText title="Subscribe" textStyles="text-orange-700 font-bold text-3xl"/>
                    <p>Subscribe to FuSTIAB, for exclusive newsletters, advice, support and update to our Articles.</p>
                </motion.div>
                <motion.div
                    variants={staggerContainer(0.1, 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className="py-20"
                     >
                    <TypingText title="Join our Community" textStyles="text-green-700 font-bold text-3xl"/>
                    <p>Subscribe to FuSTIAB, for exclusive newsletters, advice, support and update to our Articles.</p>
                </motion.div>
            </div>
            <div className="p-10">
                 <motion.div
                    variants={staggerContainer(0.1, 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className="py-20"
                     >
                    <TypingText title="Give us tips" textStyles="text-black font-bold text-3xl"/>
                    <p>Do you have tips of new technology which will have great impact on future. Share with us gamechanging business and technologies.</p>
                </motion.div>
                <motion.div
                    variants={staggerContainer(0.1, 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className="py-20"
                     >
                    <TypingText title="Pitch to FuSTIAB" textStyles="text-black font-bold text-3xl"/>
                    <p>Have you doing increadible technology, which will push humanity forward or game changing business idea. Share with to our community through here.</p>
                </motion.div> 
            </div>
        </div>
        <motion.div
                    variants={staggerContainer(0.1, 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className="py-5"
                >
                   <motion.h1 variants={textVariant(1.1)} className="text-black text-3xl text-center font-bold pt-20">
                    For other enquires fill it here.
                </motion.h1>
        </motion.div>
    </section>
  )
}

export default ContactPart