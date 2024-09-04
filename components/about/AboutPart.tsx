'use client'

import { motion } from 'framer-motion';
import { TypingText } from './CustomText';
import { fadeIn, slideIn, staggerContainer, textVariant, textVariant2 } from './motion';
import Link from 'next/link';

const AboutPart = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8">
    <div className="w-full">
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.1 }}
            className="w-full sky-gradient-text text-center"
        >
            <motion.h1
                variants={textVariant(1.1)}
                className="py-16 sm:py-20 lg:py-32 text-blue-700 text-5xl sm:text-7xl lg:text-[100px] text-center font-black"
            >
                FUSTIAB
            </motion.h1>
        </motion.div>
    </div>

    <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="wrapper"
    >
        <motion.h2
            variants={textVariant2}
            initial="hidden"
            whileInView="show"
            className="text-blue-700 text-2xl sm:text-4xl lg:text-5xl font-bold gradient-blue-text text-center"
        >
            Explore the Magic of <span className="gold-gradient-text">Technology</span> and Dive Deep into the World of <span className="green-gradient-text">Entrepreneurship</span>
        </motion.h2>
    </motion.div>

    <div className="pt-10 sm:pt-16 lg:pt-20">
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
        >
            <TypingText title="| Our Mission" textStyles="font-bold text-2xl sm:text-3xl lg:text-[40px] py-5 sm:py-7 lg:py-10 text-center gold-gradient-text" />
            <motion.p
                variants={fadeIn('up', 'tween', 0.2, 1)}
                className="wrapper text-lg sm:text-2xl lg:text-4xl text-center"
            >
                We are on a mission of leading everyone into the future of technology and entrepreneurship. By providing incredible advice and support to those who are building or want to build game-changing technologies, we empower individuals and teams to succeed.
            </motion.p>
        </motion.div>
    </div>

    <div className="gradient-02 z-0">
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="py-10 sm:py-16 lg:py-20"
        >
            <TypingText title="| Who We Are?" textStyles="gradient-blue-text font-bold text-2xl sm:text-3xl lg:text-[40px] py-5 sm:py-7 lg:py-10 text-center" />
            <motion.p
                variants={fadeIn('up', 'tween', 0.2, 1)}
                className="wrapper text-lg sm:text-2xl lg:text-4xl text-center"
            >
                We are very optimistic about the bright future technology creating and enthusiastic about game-changing technology and entrepreneurship. With us, you can develop your entrepreneurship and technology skills. Moreover, every day with us, people grow richer.
            </motion.p>
        </motion.div>
    </div>

    <div className="py-10 sm:py-16 lg:py-20">
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
        >
            <TypingText title="| What We Do?" textStyles="py-5 sm:py-7 lg:py-10 green-gradient-text font-bold text-2xl sm:text-3xl lg:text-[40px] text-center" />
        </motion.div>
        <div className="flex flex-col lg:flex-row lg:space-x-10 wrapper space-y-8 lg:space-y-0">
            <motion.div
                variants={fadeIn('right', 'tween', 0.2, 1)}
                className="lg:w-1/3"
            >
                <h3 className="text-xl sm:text-2xl lg:text-3xl">We recommend services and product with advanced features.</h3>
                <Link href="/recommendation">
                    <p className="pt-2 sm:pt-4 text-base sm:text-lg lg:text-xl text-blue-400 hover:underline">Explore more about our recommendation.</p>
                </Link>
            </motion.div>
            <motion.div
                variants={fadeIn('up', 'tween', 0.2, 1)}
                className="lg:w-1/3"
            >
                <h3 className="text-xl sm:text-2xl lg:text-3xl">We guide people to the world of game-changers and business.</h3>
                <p className="pt-2 sm:pt-4 text-base sm:text-lg lg:text-xl">
                    Explore more about <Link href="/game-changers" className="text-blue-400 hover:underline">game changers</Link> and <Link href="/business" className="text-blue-400 hover:underline">business</Link>.
                </p>
            </motion.div>
            <motion.div
                variants={fadeIn('left', 'tween', 0.2, 1)}
                className="lg:w-1/3"
            >
                <h3 className="text-xl sm:text-2xl lg:text-3xl">We guide people toward the world and future of technology.</h3>
                <Link href="/technology">
                    <p className="pt-2 sm:pt-4 text-base sm:text-lg lg:text-xl text-blue-400 hover:underline">Explore further opportunities and innovations of technology.</p>
                </Link>
            </motion.div>
        </div>
    </div>

    <div className="py-10 sm:py-16 lg:py-20 text-center wrapper">
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="py-5 sm:py-7 lg:py-10"
        >
            <TypingText title="| Start every day with Inspiration from Game Changers" textStyles="text-blue-700 font-bold text-2xl sm:text-3xl lg:text-[40px] py-5 sm:py-7 lg:py-10 text-center" />
        </motion.div>

        <div className="">
            <h3 className="text-xl sm:text-2xl lg:text-3xl">Explore all our choice inspirational messages from game changers.</h3>
            <Link href="/quotes">
                <p className="pt-2 sm:pt-4 text-base sm:text-lg lg:text-xl text-orange-700 hover:underline">Inspirational Message</p>
            </Link>
        </div> 
     </div>
</section>

  )
}

export default AboutPart